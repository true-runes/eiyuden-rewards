export default {
  strict: true,
  namespaced: true,
  state: {
    becomeAStatue: 'false',
  },
  mutations: {
    setBecomeAStatue(state, value) {
      state.becomeAStatue = value
    },
  },
}
