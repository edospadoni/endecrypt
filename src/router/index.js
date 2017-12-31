import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Encrypt from '@/components/Encrypt'
import Decrypt from '@/components/Decrypt'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/encrypt',
      name: 'Encrypt',
      component: Encrypt
    },
    {
      path: '/decrypt',
      name: 'Decrypt',
      component: Decrypt
    },
    {
      path: '/decrypt/:hash',
      name: 'Decrypt',
      component: Decrypt
    }
  ]
})
