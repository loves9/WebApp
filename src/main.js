// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import FastClick from 'fastclick';

import App from './App';
import routes from './router/router';
import http from './http';
import store from './store';
import  { ToastPlugin, LoadingPlugin } from 'vux'

import {routerMode} from './config/env'
import './config/rem'


// Vue.use(ToastPlugin)
// Vue.use(LoadingPlugin)

// FastClick.attach(document.body);

// Vue.config.productionTip = false;
// /* eslint-disable no-new */
// new Vue({
//   router,
//   store,
//   render: h => h(App),
// }).$mount('#app-box');

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}

Vue.use(VueRouter)
const router = new VueRouter({
routes,
mode: routerMode,
strict: process.env.NODE_ENV !== 'production',
scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
  } else {
    if (from.meta.keepAlive) {
      from.meta.savedPosition = document.body.scrollTop;
    }
      return { x: 0, y: to.meta.savedPosition || 0 }
  }
}
})

new Vue({
	router,
	store,
}).$mount('#app-box')