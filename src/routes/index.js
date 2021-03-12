import Vue from 'vue'
import VueRouter from 'vue-router'

<<<<<<< HEAD
import { auth } from '../config/firebase'
import Home from '../views/Home'
import Login from '../views/auth/Login'
import SignUp from '../views/auth/SignUp'
import Forgot from '../views/auth/Forgot'
import Terms from '../views/Terms'
import Politics from '../views/Politics'
import Private from '../views/auth/Private'
import Edit from '../views/private/profile/Edit'
=======
import { auth } from '../config/firebase';
import Home from '../views/Home';
import Login from '../views/auth/Login';
import SignUp from '../views/auth/SignUp';
import Forgot from '../views/auth/Forgot';
import Terms from '../views/Terms';
import Politics from '../views/Politics';
import Private from '../views/auth/Private';
import Edit from '../views/private/profile/Edit';
>>>>>>> e7e74448aaaabab0638420714b88f791ae380229

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
    component: Edit,
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
<<<<<<< HEAD
  const currentUser = auth.currentUser
  const requirestAuth = to.matched.some((record) => record.meta.requiresAuth)
=======
  const currentUser = auth.currentUser;
  const requirestAuth = to.matched.some((record) => record.meta.requiresAuth);
>>>>>>> e7e74448aaaabab0638420714b88f791ae380229

  if (requirestAuth && !currentUser) {
    next('login')
  } else if (!requirestAuth && currentUser) {
    next('dashboard')
  } else {
    next()
  }
})

export default router
