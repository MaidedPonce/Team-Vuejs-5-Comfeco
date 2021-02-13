import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/auth/Login'
import SignUp from '../views/auth/SignUp'
import Forgot from '../views/auth/Forgot'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
