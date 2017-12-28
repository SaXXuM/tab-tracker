const AthenticationController = require('./controllers/AuthenticationController')
const AthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const HistoryController = require('./controllers/HistoryController')
const isAuthenticated = require('./policies/isAuthenticated')

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

  app.get('/bookmarks',
    isAuthenticated,
    BookmarksController.index)

  app.post('/bookmarks',
    isAuthenticated,
    BookmarksController.post)

  app.delete('/bookmarks/:bookmarkId',
    isAuthenticated,
    BookmarksController.delete)

  app.get('/history',
    isAuthenticated,
    HistoryController.index)

  app.post('/history',
    isAuthenticated,
    HistoryController.post)
}
