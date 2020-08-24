export default {
  strict: true,
  namespaced: true,
  state: {
    nameALocation: 'whichever',
  },
  mutations: {
    setABrushWithInfamy(state, value) {
      state.aBrushWithInfamy = value
    },
  },
}
