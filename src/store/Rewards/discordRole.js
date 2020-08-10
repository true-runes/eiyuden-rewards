export default {
  strict: true,
  namespaced: true,
  state: {
    discordRole: 'no',
  },
  mutations: {
    setdiscordRole(state, value) {
      state.discordRole = value
    },
  },
}
