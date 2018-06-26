// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import FastClick from 'fastclick';
import {sync} from 'vuex-router-sync'
import { routerMode } from './config/env'

import routes from './rootRouter/router';
import store from './store';
import mixins from '@/common/mixins'
import core from "@/core";

import Application from '@/application'

// 引入vux组件库
import { ToastPlugin, LoadingPlugin } from 'vux'
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

Vue.use(VueRouter)

// sync(store, router)

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
}

const router = new VueRouter({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior(to, from, savedPosition) {
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

Application.onCreate();

// 注册全局方法
Vue.mixin(mixins)

new Vue({
  core,
  router,
  store,
}).$mount('#app-box')