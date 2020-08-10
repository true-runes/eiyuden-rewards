export default {
  strict: true,
  namespaced: true,
  state: {
    characterFigure: '',
  },
  mutations: {
    setCharacterFigure(state, value) {
      state.characterFigure = value
    },
  },
}
