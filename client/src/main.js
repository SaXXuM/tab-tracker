// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from 'vuetify'
import {sync} from 'vuex-router-sync'
import VueYouTubeVideo from 'vue-youtube-embed'
import Panel from '@/components/globals/Panel'
import store from '@/store/store'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(VueYouTubeVideo, { global: true })
Vue.use(vuetify)

Vue.component('panel', Panel)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
