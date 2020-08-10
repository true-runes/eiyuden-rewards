export default {
  strict: true,
  namespaced: true,
  state: {
    tShirt: 'no',
  },
  mutations: {
    setTShirt(state, value) {
      state.yourNametShirtInTheStaffRoll = value
    },
  },
}
