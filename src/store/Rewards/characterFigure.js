export default {
  strict: true,
  namespaced: true,
  state: {
    characterFigure: 'whichever',
  },
  mutations: {
    setCharacterFigure(state, value) {
      state.characterFigure = value
    },
  },
}
