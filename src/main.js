// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

import 'jquery'
import './assets/js/jquery-1.11.1.min.js'
import './assets/js/bootstrap.min'
// import './assets/js/html5shiv.min.js'
// import './assets/js/jquery.ias.js'
// import './assets/js/jquery.lazyload.min.js'

// import './assets/js/jquery-2.1.4.min.js'
// import './assets/js/nprogress.js'
// import './assets/js/respond.min.js'
// import './assets/js/scripts.js'
// import './assets/js/selectivizr-min.js'

import './assets/css/bootstrap.min.css'
//import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/normalize.css'
import './assets/css/nprogress.css'
import './assets/css/style.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
