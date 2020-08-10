export default {
  strict: true,
  namespaced: true,
  state: {
    sigilButton: '',
  },
  mutations: {
    setSigilButton(state, value) {
      state.sigilButton = value
    },
  },
}
