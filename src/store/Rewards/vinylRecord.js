export default {
  strict: true,
  namespaced: true,
  state: {
    vinylRecord: 'no',
  },
  mutations: {
    setVinylRecord(state, value) {
      state.vinylRecord = value
    },
  },
}
