const {Bookmark, Song} = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const {songId, userId} = req.query
      const where = {
        UserId: userId
      }
      if (songId) {
        where.songId = songId
      }
      const bookmarks = await Bookmark.findAll({
        where,
        include: [
          {
            model: Song
          }
        ]})
        .map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend({},
          bookmark.Song,
          bookmark))
      if (bookmarks) {
        res.send(bookmarks)
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
      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId
      })
      res.status(201)
      res.send(newBookmark)
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