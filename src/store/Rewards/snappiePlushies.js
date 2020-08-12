export default {
  strict: true,
  namespaced: true,
  state: {
    snappiePlushies: 'whichever',
  },
  mutations: {
    setSnappiePlushies(state, value) {
      state.snappiePlushies = value
    },
  },
}
