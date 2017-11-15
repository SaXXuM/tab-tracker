import Api from '@/services/Api'

export default {
  register (credential) {
    return Api().post('register', credential)
  },
  login (credential) {
    return Api().post('login', credential)
  }
}
