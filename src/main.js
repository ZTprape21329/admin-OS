import Vue from 'vue';
import App from './App.vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import router from './router/router';
import store from './store/store';
import axios from 'axios';
import JsEncrypt from 'jsencrypt';
Vue.config.productionTip = false;
Vue.use(iView);

Vue.prototype.axios = axios;
Vue.prototype.$jsEncrypt = JsEncrypt;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
