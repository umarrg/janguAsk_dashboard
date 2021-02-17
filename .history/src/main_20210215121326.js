import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueGoogleCharts from 'vue-google-charts'
import VueCountryCode from "vue-country-code";
 
Vue.use(VueGoogleCharts)
Vue.use(VueCountryCode);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
