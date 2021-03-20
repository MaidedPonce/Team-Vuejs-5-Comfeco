import Vue from 'vue';
import VueRouter from 'vue-router';

import { auth } from '../config/firebase';
import Home from '../views/Home';
import Login from '../views/auth/Login';
import SignUp from '../views/auth/SignUp';
import Forgot from '../views/auth/Forgot';
import Terms from '../views/Terms';
import Politics from '../views/Politics';
import Dashboard from '../views/private/Dashboard';
import Edit from '../views/private/profile/Edit';
import Badges from '../views/private/profile/Badges';
import Groups from '../views/private/profile/Groups';
import Events from '../views/private/profile/Events';
import MyProfile from '../views/private/profile/MyProfile';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: SignUp,
  },
  {
    path: '/forgot-password',
    name: 'forgot',
    component: Forgot,
  },
  {
    path: '/terminos-y-condiciones',
    name: 'terms',
    component: Terms,
  },
  {
    path: '/politicas-de-privacidad',
    name: 'politics',
    component: Politics,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        name: 'my-profile',
        component: MyProfile,
      },
      {
        path: 'insignias',
        name: 'badges',
        component: Badges,
      },
      {
        path: 'grupos',
        name: 'groups',
        component: Groups,
      },
      {
        path: 'eventos',
        name: 'events',
        component: Events,
      },
    ],
  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser;
  const requirestAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requirestAuth && !currentUser) {
    next('login');
  } else if (!requirestAuth && currentUser) {
    next('dashboard');
  } else {
    next();
  }
});

export default router;
