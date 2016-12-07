import Vue from 'vue'
import store from './src'
import Counter from './Counter.vue'

new Vue({
  el:'#app',
  store,
  render: h => h(Counter)
})
