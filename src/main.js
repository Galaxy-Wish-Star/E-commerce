import Vue from 'vue'
import App from './App.vue'
// import store from './store'

//引入vue router
// import VueRouter from 'vue-router'

//使用路由插件
// Vue.use(VueRouter)

//使用element ui插件
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  // store,
}).$mount('#app')
