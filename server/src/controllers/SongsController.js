const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const song = await Song.findAll({
        limit: 10
      })
      res.send(song)
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'An error has occured trying to fetch the songs.'
      })
    }
  },
  async show (req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'An error has occured trying to fetch the songs.'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'An error has occured trying to create the song.'
      })
    }
  }

}