export default {
  strict: true,
  namespaced: true,
  state: {
    sigilButton: 'false',
  },
  mutations: {
    setSigilButton(state, value) {
      state.sigilButton = value
    },
  },
}
