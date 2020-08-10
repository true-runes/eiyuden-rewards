export default {
  strict: true,
  namespaced: true,
  state: {
    sigilButton: 'no',
  },
  mutations: {
    setSigilButton(state, value) {
      state.sigilButton = value
    },
  },
}
