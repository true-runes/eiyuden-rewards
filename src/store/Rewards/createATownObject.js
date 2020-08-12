export default {
  strict: true,
  namespaced: true,
  state: {
    createATownObject: 'whichever',
  },
  mutations: {
    setCreateATownObject(state, value) {
      state.createATownObject = value
    },
  },
}
