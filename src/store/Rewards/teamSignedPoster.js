export default {
  strict: true,
  namespaced: true,
  state: {
    teamSignedPoster: 'no',
  },
  mutations: {
    setTeamSignedPoster(state, value) {
      state.teamSignedPoster = value
    },
  },
}
