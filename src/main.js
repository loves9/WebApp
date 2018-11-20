// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import FastClick from 'fastclick';
import { sync } from 'vuex-router-sync'
import { routerMode } from './config/env'

import routes from './rootRouter/router';
import store from './store';
import mixins from '@/common/mixins'
import core from "@/core";

import Application from '@/application'

import Native from '@/core/native_plugin.js'
window.NativeApi = Native

// 引入vux组件库
import { ToastPlugin, LoadingPlugin } from 'vux'
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

Vue.use(VueRouter)

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

sync(store, router)

// push pop history
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
let isPush = false
let endTime = Date.now()
let methods = ['push', 'go', 'replace', 'forward', 'back']

document.addEventListener('touchend', () => {
  endTime = Date.now()
})
methods.forEach(key => {
  let method = router[key].bind(router)
  router[key] = function (...args) {
    isPush = true
    method.apply(null, args)
  }
})

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', { isLoading: true })

  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', { direction: 'turn-on' })
    } else {

      // 判断左滑返回
      if (!isPush && (Date.now() - endTime) < 377) {
        store.commit('updateDirection', { direction: '' })
      } else {
        store.commit('updateDirection', { direction: 'turn-off' })
      }
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', { direction: 'turn-on' })
  }

  next()
})

router.afterEach(function (to) {
  isPush = false
  store.commit('updateLoadingStatus', { isLoading: false })

  if (process.env.NODE_ENV === 'production') {
    // ga && ga('set', 'page', to.fullPath)
    // ga && ga('send', 'pageview')
  }

})

Application.onCreate(core);

// 注册全局方法
Vue.mixin(mixins)
Vue.prototype.$core = core
let globalVueObject = new Vue({
  router,
  store,
}).$mount('#app-box')

window.GlobalVueObject = globalVueObject

