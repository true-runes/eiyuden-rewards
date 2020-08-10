export default {
  strict: true,
  namespaced: true,
  state: {
    visitTheTeam: 'whichever',
  },
  mutations: {
    setVisitTheTeam(state, value) {
      state.visitTheTeam = value
    },
  },
}
