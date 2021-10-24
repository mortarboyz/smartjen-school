import Vue from 'vue'
import Vuex from 'vuex'

import Login from './Login';
import Users from './Users';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
      auth: {
          namespaced: true,
          modules: {
              login: Login,
          }
      },
      users: Users
  },
})
store.commit('auth/login/init');
export default store;
