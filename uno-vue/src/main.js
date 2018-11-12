import Vue from 'vue'
import App from './App.vue'

export const eventEmitter = new Vue()


Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
})

