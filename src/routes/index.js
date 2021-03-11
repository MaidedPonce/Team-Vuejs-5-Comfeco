import Vue from 'vue'
import VueRouter from 'vue-router'

import { auth } from '../config/firebase'
import Home from '../views/Home'
import IniciarSesion from '../views/auth/Login'
import Registrarse from '../views/auth/Registrarse'
import Forgot from '../views/auth/Forgot'
import Terms from '../views/Terms'
import Politics from '../views/Politics'
import Tablero from '../views/auth/Tablero'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/iniciarsesion',
    name: 'IniciarSesion',
    component: IniciarSesion
  },
  {
    path: '/registrarse',
    name: 'Registrarse',
    component: Registrarse
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: Forgot
  },
  {
    path: '/terminos-y-condiciones',
    name: 'Terms',
    component: Terms
  },
  {
    path: '/politicas-de-privacidad',
    name: 'Politics',
    component: Politics
  },
  {
    path: '/tablero',
    name: 'Tablero',
    component: Tablero,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser
  const requirestAuth = to.matched.some((record) => record.meta.requiresAuth)

  if (requirestAuth && !currentUser) {
    next('login')
  } else if (!requirestAuth && currentUser) {
    next('tablero')
  } else {
    next()
  }
})

export default router
