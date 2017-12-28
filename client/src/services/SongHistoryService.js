import Api from '@/services/Api'

export default {
  index () {
    return Api().get(`history`)
  },
  post (bookmark) {
    return Api().post('history', bookmark)
  }
}
