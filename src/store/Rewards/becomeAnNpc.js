export default {
  strict: true,
  namespaced: true,
  state: {
    becomeAnNpc: 'no',
  },
  mutations: {
    setBecomeAnNpc(state, value) {
      state.becomeAnNpc = value
    },
  },
}
