import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import { Lazyload } from 'vant';
import axios from 'axios';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.use(Lazyload);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
