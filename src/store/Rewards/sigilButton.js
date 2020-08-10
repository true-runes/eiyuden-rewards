export default {
  strict: true,
  namespaced: true,
  state: {
    sigilButton: 'whichever',
  },
  mutations: {
    setSigilButton(state, value) {
      state.sigilButton = value
    },
  },
}
