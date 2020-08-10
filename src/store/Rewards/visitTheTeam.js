export default {
  strict: true,
  namespaced: true,
  state: {
    visitTheTeam: 'no',
  },
  mutations: {
    setVisitTheTeam(state, value) {
      state.visitTheTeam = value
    },
  },
}
