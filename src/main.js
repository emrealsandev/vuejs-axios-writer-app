import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import router from './router'


axios.defaults.baseURL = "https://vuejs-axios-blog-13b84-default-rtdb.europe-west1.firebasedatabase.app"
axios.defaults.headers.common["Authorization"] = "emrealsan_auth_key"
axios.defaults.headers.get["Accepts"] = "application/json"


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
