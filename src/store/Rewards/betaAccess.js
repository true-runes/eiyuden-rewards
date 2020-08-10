export default {
  strict: true,
  namespaced: true,
  state: {
    betaAccess: '',
  },
  mutations: {
    setBetaAccess(state, value) {
      state.betaAccess = value
    },
  },
}
