import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

Vue.use(Router)

const router = new Router()

router.map({
  '/': {
    component: Home,
    name: 'home'
  },
  'about': {
    component: About,
    name: 'about'
  }
})

router.start(App, document.body)
