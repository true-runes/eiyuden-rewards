export default {
  strict: true,
  namespaced: true,
  state: {
    visitTheTeam: '',
  },
  mutations: {
    setVisitTheTeam(state, value) {
      state.visitTheTeam = value
    },
  },
}
