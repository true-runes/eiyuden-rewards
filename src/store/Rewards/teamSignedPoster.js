export default {
  strict: true,
  namespaced: true,
  state: {
    teamSignedPoster: 'whichever',
  },
  mutations: {
    setTeamSignedPoster(state, value) {
      state.teamSignedPoster = value
    },
  },
}
