export default {
  strict: true,
  namespaced: true,
  state: {
    // TODO: Boolean にすることを検討する
    yourNameInTheStaffRoll: '（初期値！！！！）yourNameInTheStaffRoll',
  },
  getters: {
    getDebug(state) {
      return state.yourNameInTheStaffRoll
    },
  },
  mutations: {
    setYourNameInTheStaffRoll(state, value) {
      state.yourNameInTheStaffRoll = value
    },
  },
}
