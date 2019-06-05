import Vue from 'vue'

import { store } from "./_store";
import { router } from './_helpers'

import App from './app/App.vue'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
