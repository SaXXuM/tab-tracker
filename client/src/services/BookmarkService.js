import Api from '@/services/Api'

export default {
  index (bookmark) {
    if (bookmark) {
      return Api().get(`bookmarks?songId=${bookmark.songId}`)
    } else {
      return Api().get('bookmarks')
    }
  },
  post (bookmark) {
    return Api().post('bookmarks', bookmark)
  },
  delete (bookmarkId) {
    return Api().delete(`bookmarks/${bookmarkId}`)
  }
}
