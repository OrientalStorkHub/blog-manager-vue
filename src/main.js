import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/index.scss'
import baseMethods from './api/base.js';
import { get, post, put, del } from './axios/http.js'


Vue.config.productionTip = false
Vue.config.errorHandler = null;

Object.keys(baseMethods).forEach(methodName => {
  Vue.prototype[methodName] = baseMethods[methodName];
});

Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$put = put
Vue.prototype.$del = del

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
