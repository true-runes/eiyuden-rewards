export default {
  strict: true,
  namespaced: true,
  state: {
    discordRole: 'true',
  },
  mutations: {
    setdiscordRole(state, value) {
      state.discordRole = value
    },
  },
}
