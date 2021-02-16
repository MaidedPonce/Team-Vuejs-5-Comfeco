import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import SignUp from '../views/SignUp'
import Private from '../views/Private'
// import Dashboard from '../views/Dashboard'
import Vuelidate from 'vuelidate'
import firebase from 'firebase/app'
import 'firebase/auth'
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
    path: '/signUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/dashboard',
    name: 'Private',
    component: Private,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
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
