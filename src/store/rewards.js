import yourNameInTheStaffRoll from '@/store/Rewards/yourNameInTheStaffRoll'

export default {
  strict: true,
  namespaced: true,
  state: {
    ...yourNameInTheStaffRoll.state,
  },
  getters: {
    ...yourNameInTheStaffRoll.getters,
  },
  mutations: {
    ...yourNameInTheStaffRoll.mutations,
  },
}
