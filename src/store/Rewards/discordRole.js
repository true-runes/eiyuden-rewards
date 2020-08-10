export default {
  strict: true,
  namespaced: true,
  state: {
    discordRole: '',
  },
  mutations: {
    setdiscordRole(state, value) {
      state.discordRole = value
    },
  },
}
