import Vue from 'vue'
import Vuelidate from 'vuelidate'

import router from './routes'
import App from './App.vue'

import './main.css'

Vue.config.productionTip = false
Vue.use(Vuelidate)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
