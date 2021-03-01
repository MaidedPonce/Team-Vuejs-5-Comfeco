import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'

import { auth } from '../config/firebase'
import Home from '../components/Home'
import Login from '../views/auth/Login'
import SignUp from '../views/auth/SignUp'
import Forgot from '../views/auth/Forgot'
import Private from '../views/auth/Private'
import Edit from '../components/Edit'
// import Dashboard from '../views/Dashboard'
Vue.use(Vuelidate)
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
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: Forgot
  },
  {
    path: '/dashboard',
    name: 'Private',
    component: Private,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit
  },
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
    next('dashboard')
  } else {
    next()
  }
})

export default router
