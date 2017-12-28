import Api from '@/services/Api'

export default {
  index (bookmark) {
    let queryString = `bookmarks?userId=${bookmark.userId}`
    if (bookmark.songId) {
      queryString += `&songId=${bookmark.songId}`
    }
    return Api().get(queryString)
  },
  post (bookmark) {
    return Api().post('bookmarks', bookmark)
  },
  delete (bookmarkId) {
    return Api().delete(`bookmarks/${bookmarkId}`)
  }
}
