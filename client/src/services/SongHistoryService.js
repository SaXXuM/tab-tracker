import Api from '@/services/Api'

export default {
  index (params) {
    let queryString = `history?userId=${params.userId}`
    return Api().get(queryString)
  },
  post (bookmark) {
    return Api().post('history', bookmark)
  }
}
