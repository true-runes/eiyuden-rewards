export default {
  strict: true,
  namespaced: true,
  state: {
    becomeAStatue: 'whichever',
  },
  mutations: {
    setBecomeAStatue(state, value) {
      state.becomeAStatue = value
    },
  },
}
