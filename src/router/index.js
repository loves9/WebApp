import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import List from '@/components/List';
import Detail from '@/components/Detail';
import Query from '@/components/Query';
import store from '@/store';
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'entry',
      children: [
        
      ]
    }, 
    {
      path: '/one', component: require('../module/example/views/one/OnePage.vue'), name: 'one'
    }
  ]
});

export default router

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
