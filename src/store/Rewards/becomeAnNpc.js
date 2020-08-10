export default {
  strict: true,
  namespaced: true,
  state: {
    becomeAnNpc: '',
  },
  mutations: {
    setBecomeAnNpc(state, value) {
      state.becomeAnNpc = value
    },
  },
}
