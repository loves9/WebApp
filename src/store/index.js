import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import state from './rootState'

import homeStore from '@/module/home/store'

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});

// 注册 module
store.registerModule('home', homeStore);



export default store;