export default {
  strict: true,
  namespaced: true,
  state: {
    // TODO: Boolean?
    yourNameInTheStaffRoll: '',
  },
  mutations: {
    setYourNameInTheStaffRoll(state, value) {
      state.yourNameInTheStaffRoll = value
    },
  },
}
