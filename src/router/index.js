import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/Home"
import Artists from "../pages/Artists"
import Mine from "../pages/Mine"
import Search from "../pages/Search"
import SongList from "../pages/SongList"
import Top from "../pages/Top"
import Player from "../pages/Player"

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      component:Home
    },
    {
      path: '/artists',
      component:Artists
    },
    {
      path: '/mine',
      component:Mine
    },
    {
      path: '/search',
      component:Search
    },
    {
      path: '/songList',
      component:SongList
    },
    {
      path: '/top',
      component:Top
    },
    {
      path: '/player/:id',
      name:"Player",
      component:Player
    }
  ]
})
