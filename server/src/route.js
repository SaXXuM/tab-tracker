const AthenticationController = require('./controllers/AuthenticationController')
const AthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AthenticationControllerPolicy.register,
    AthenticationController.register)

  app.post('/login',
    AthenticationController.login)
}
