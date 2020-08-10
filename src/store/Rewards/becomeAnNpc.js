export default {
  strict: true,
  namespaced: true,
  state: {
    becomeAnNpc: 'false',
  },
  mutations: {
    setBecomeAnNpc(state, value) {
      state.becomeAnNpc = value
    },
  },
}
