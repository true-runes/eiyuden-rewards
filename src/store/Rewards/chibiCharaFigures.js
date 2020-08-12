export default {
  strict: true,
  namespaced: true,
  state: {
    chibiCharaFigures: 'whichever',
  },
  mutations: {
    setChibiCharaFigures(state, value) {
      state.chibiCharaFigures = value
    },
  },
}
