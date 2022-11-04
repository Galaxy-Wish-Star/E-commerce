import Vue from 'vue'
import App from './App.vue'
// import store from './store'

//引入vue router
import VueRouter from 'vue-router'

//使用插件
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  // store,
}).$mount('#app')
