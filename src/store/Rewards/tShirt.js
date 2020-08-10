export default {
  strict: true,
  namespaced: true,
  state: {
    tShirt: 'whichever',
  },
  mutations: {
    setTShirt(state, value) {
      state.tShirt = value
    },
  },
}
