import Vue from 'vue'
import App from './App.vue'
import "./assets/css/tailwind.css"
import VueRouter from 'vue-router'
import {routes} from './route'
import store from './store/store.js'
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')
