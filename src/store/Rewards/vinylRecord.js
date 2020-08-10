export default {
  strict: true,
  namespaced: true,
  state: {
    vinylRecord: 'false',
  },
  mutations: {
    setVinylRecord(state, value) {
      state.vinylRecord = value
    },
  },
}
