export default {
  strict: true,
  namespaced: true,
  state: {
    tShirt: 'false',
  },
  mutations: {
    setTShirt(state, value) {
      state.tShirt = value
    },
  },
}
