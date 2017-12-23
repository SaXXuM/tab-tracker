const AthenticationController = require('./controllers/AuthenticationController')
const AthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
  app.post('/register',
    AthenticationControllerPolicy.register,
    AthenticationController.register)

  app.post('/login',
    AthenticationController.login)

  app.get('/songs',
    SongsController.index)

  app.get('/songs/:songId',
    SongsController.show)

  app.post('/songs',
    SongsController.post)

  app.put('/songs/:songId',
    SongsController.put)

}
