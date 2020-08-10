export default {
  strict: true,
  namespaced: true,
  state: {
    yourNameInTheStaffRoll: 'true',
  },
  mutations: {
    setYourNameInTheStaffRoll(state, value) {
      state.yourNameInTheStaffRoll = value
    },
  },
}
