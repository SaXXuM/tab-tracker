const {History, Song} = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const {userId} = req.query
      const history = await History.findAll({
        where: {
          UserId: userId
        },
        include: [
          {
            model: Song
          }
        ]})
        .map(item => item.toJSON())
        .map(item => _.extend(
          {},
          item.Song,
          item))
      if (history) {
        res.send(_.uniqBy(history, song => song.SongId))
      } else {
        res.status(404).send()
      }
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'An error has occured trying to fetch the history.'
      })
    }
  },
  async post (req, res) {
    try {
      const {songId, userId} = req.body
      const history = await History.create({
        SongId: songId,
        UserId: userId
      })
      res.status(201)
      res.send(history)
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'An error has occured trying to add the history.'
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