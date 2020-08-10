export default {
  strict: true,
  namespaced: true,
  state: {
    // TODO: Boolean?
    yourNameInTheStaffRoll: 'no',
  },
  mutations: {
    setYourNameInTheStaffRoll(state, value) {
      state.yourNameInTheStaffRoll = value
    },
  },
}
