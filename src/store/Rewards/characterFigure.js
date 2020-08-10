export default {
  strict: true,
  namespaced: true,
  state: {
    characterFigure: 'no',
  },
  mutations: {
    setCharacterFigure(state, value) {
      state.characterFigure = value
    },
  },
}
