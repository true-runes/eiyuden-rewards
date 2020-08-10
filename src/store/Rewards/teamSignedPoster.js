export default {
  strict: true,
  namespaced: true,
  state: {
    teamSignedPoster: 'false',
  },
  mutations: {
    setTeamSignedPoster(state, value) {
      state.teamSignedPoster = value
    },
  },
}
