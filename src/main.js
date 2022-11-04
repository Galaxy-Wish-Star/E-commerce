import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

//使用vuex插件
Vue.use(Vuex)

new Vue({
  render: h => h(App),
}).$mount('#app')
