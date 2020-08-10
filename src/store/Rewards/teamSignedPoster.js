export default {
  strict: true,
  namespaced: true,
  state: {
    teamSignedPoster: '',
  },
  mutations: {
    setTeamSignedPoster(state, value) {
      state.teamSignedPoster = value
    },
  },
}
