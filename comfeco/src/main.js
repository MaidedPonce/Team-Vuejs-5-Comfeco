import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import firebase from 'firebase/app'
import 'firebase/database'
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyDYULGfjGoXbVsai4kCMpAq-KfA41uIhaU',
  authDomain: 'team-vuejs5-comfeco.firebaseapp.com',
  projectId: 'team-vuejs5-comfeco',
  storageBucket: 'team-vuejs5-comfeco.appspot.com',
  messagingSenderId: '385421612063',
  appId: '1:385421612063:web:4637e1de223d911832b12a',
  measurementId: 'G-X3DPNPGT1X'
}
firebase.initializeApp(firebaseConfig)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
