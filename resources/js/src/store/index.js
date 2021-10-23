import Vue from 'vue'
import Vuex from 'vuex'

import Login from './Login';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
      auth: {
          namespaced: true,
          modules: {
              login: Login,
          }
      }
  },
})

export default store;
