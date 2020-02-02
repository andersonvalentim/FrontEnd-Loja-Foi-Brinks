import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource';
import vmodal from 'vue-js-modal'
import VueMask from 'v-mask'
Vue.use(VueMask);
Vue.use(vmodal)

Vue.use(VueResource)
Vue.use(BootstrapVue)

import  './assets/vendor/bootstrap/css/bootstrap-grid.min.css'
import  './assets/vendor/bootstrap/css/bootstrap-reboot.min.css'
import  './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/shop-homepage.css'

Vue.config.productionTip = false

Vue.component('modal', {
  template: '#modal-template'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
