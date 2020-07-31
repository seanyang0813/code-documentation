import Vue from 'vue'
import App from './App.vue'
import "./assets/css/tailwind.css"
import VueRouter from 'vue-router'
import {routes} from './route'
import store from './store/store.js'
import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import * as firebase from "firebase";

Vue.use(VueCodemirror);
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes
})

Vue.config.productionTip = false


export const eventBus = new Vue();

const configOptions = {
  apiKey: "AIzaSyAWXg3_o70PuqEUy0hT5g45YD8rYJ_ZUs0",
  authDomain: "code-documentation.firebaseapp.com",
  databaseURL: "https://code-documentation.firebaseio.com",
  projectId: "code-documentation",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(configOptions);

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')
