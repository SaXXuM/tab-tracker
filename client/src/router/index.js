import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Hello from '@/components/Hello.vue'
import Songs from '@/components/Songs/Index.vue'
import CreateSong from '@/components/CreateSong.vue'
import ViewSong from '@/components/ViewSong/Index.vue'
import EditSong from '@/components/EditSong.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Hello
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    },
    {
      path: '/song/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      path: '/song/:songId/edit',
      name: 'song-edit',
      component: EditSong
    }
  ]
})
