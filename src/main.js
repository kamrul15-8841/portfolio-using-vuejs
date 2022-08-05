import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import './assets/css/styles.css'
import './assets/css/bootstrap.css'

createApp(App).mount('#app')
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

