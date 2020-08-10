import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import rewards from '@/store/rewards'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    rewards: rewards,
  },
  strict: true,
  state: {},
  getters: {},
  actions: {},
})
