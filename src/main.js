// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import FastClick from 'fastclick';
import { sync } from 'vuex-router-sync'
import { routerMode } from './config/env'
import App from '@/App'

// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js';
// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';
// Import F7 Styles
import 'framework7/css/framework7.bundle.css';
// Import Icons and App Custom Styles
import IconsStyles from './style/css/icons.css';
import AppStyles from './style/css/app.css';
// Init F7 Vue Plugin
Framework7.use(Framework7Vue)


import routes from './rootRouter/router';
import store from './store';
import mixins from '@/common/mixins'
import core from "@/core";

import Application from '@/application'

import Native from '@/core/native_plugin.js'
window.NativeApi = Native

// 引入vux组件库
import { ToastPlugin, LoadingPlugin, TransferDom } from 'vux'
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.directive('transfer-dom', TransferDom)

Vue.use(VueRouter)

// if ('addEventListener' in document) {
//   document.addEventListener('DOMContentLoaded', function () {
//     FastClick.attach(document.body);
//   }, false);
// }

Application.onCreate(core);

// 注册全局方法
Vue.mixin(mixins)

Vue.prototype.$core = core


// Init App
let globalVueObject = new Vue({
  el: '#app',
  template: '<app/>',

  // Register App Component
  components: {
    app: App
  }
});

// let globalVueObject = new Vue({
//   router,
//   store,
// }).$mount('#app-box')

window.GlobalVueObject = globalVueObject

