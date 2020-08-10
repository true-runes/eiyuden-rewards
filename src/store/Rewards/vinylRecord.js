export default {
  strict: true,
  namespaced: true,
  state: {
    vinylRecord: 'whichever',
  },
  mutations: {
    setVinylRecord(state, value) {
      state.vinylRecord = value
    },
  },
}
