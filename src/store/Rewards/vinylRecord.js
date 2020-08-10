export default {
  strict: true,
  namespaced: true,
  state: {
    vinylRecord: '',
  },
  mutations: {
    setVinylRecord(state, value) {
      state.vinylRecord = value
    },
  },
}
