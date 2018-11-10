import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import routes from './router/routes'
import stores from './store/store'
import './element-mode/element'
import axios from 'axios';
 
axios.defaults.baseURL = '/proxy';
axios.defaults.timeout = 1000 * 15;
axios.defaults.headers['Content-Type'] = 'application/json';

Vue.use(VueRouter);      //引入路由
Vue.use(Vuex);           //引入vuex共享

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes
})
const store = new Vuex.Store(stores);

window.axios = axios;
window.router = router;
window.store = store;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
