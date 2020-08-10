export default {
  strict: true,
  namespaced: true,
  state: {
    visitTheTeam: 'false',
  },
  mutations: {
    setVisitTheTeam(state, value) {
      state.visitTheTeam = value
    },
  },
}
