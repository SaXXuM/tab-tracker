const {Bookmark} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {songId, userId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      if (bookmark) {
        res.send(bookmark)
      } else {
        res.status(404).send()
      }
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'An error has occured trying to fetch the bookmark.'
      })
    }
  },
  async post (req, res) {
    try {
      const {songId, userId} = req.body
      let bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      if (bookmark) {
        return res.status(400).send({
          error: `Already have this set as a bookmark`
        })
      }

      bookmark = await Bookmark.create(req.body)
      res.status(201)
      res.send(bookmark)
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'An error has occured trying to add the bookmark.'
      })
    }
  },
  async delete (req, res) {
    try {
      await Bookmark.destroy({
        where: {
          id: req.params.bookmarkId
        }
      })
      res.sendStatus(204)
    } catch(err) {
    console.log(err)
    res.status(400).send({
      error: 'An error has occured trying to remove the bookmark.'
    })
  }
}
}