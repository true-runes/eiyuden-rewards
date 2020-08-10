export default {
  strict: true,
  namespaced: true,
  state: {
    becomeAnNpc: 'whichever',
  },
  mutations: {
    setBecomeAnNpc(state, value) {
      state.becomeAnNpc = value
    },
  },
}
