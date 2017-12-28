const {Bookmark, Song} = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const {songId} = req.query
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
      const userId = req.user.id
      const {songId} = req.body
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
      const userId = req.user.id

      const bookmark = await Bookmark.findOne({
        where: {
          id: req.params.bookmarkId,
          UserId: userId
        }
      })
      if (!bookmark) {
        res.status(403).send({
          error: "You do not have access to this bookmark"
        })
      }
      await bookmark.destroy()
      res.sendStatus(204)
    } catch(err) {
    console.log(err)
    res.status(400).send({
      error: 'An error has occured trying to remove the bookmark.'
    })
  }
}
}