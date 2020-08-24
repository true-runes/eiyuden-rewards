export default {
  strict: true,
  namespaced: true,
  state: {
    aBrushWithInfamy: 'whichever',
  },
  mutations: {
    setABrushWithInfamy(state, value) {
      state.aBrushWithInfamy = value
    },
  },
}
