export default {
  strict: true,
  namespaced: true,
  state: {
    characterFigure: 'false',
  },
  mutations: {
    setCharacterFigure(state, value) {
      state.characterFigure = value
    },
  },
}
