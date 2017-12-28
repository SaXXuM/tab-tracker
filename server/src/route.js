const AthenticationController = require('./controllers/AuthenticationController')
const AthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const HistoryController = require('./controllers/HistoryController')

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
    BookmarksController.index)

  app.post('/bookmarks',
    BookmarksController.post)

  app.delete('/bookmarks/:bookmarkId',
    BookmarksController.delete)

  app.get('/history',
    HistoryController.index)

  app.post('/history',
    HistoryController.post)
}
