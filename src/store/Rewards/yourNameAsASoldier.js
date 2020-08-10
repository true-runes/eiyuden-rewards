export default {
  strict: true,
  namespaced: true,
  state: {
    yourNameAsASoldier: 'false',
  },
  mutations: {
    setYourNameAsASoldier(state, value) {
      state.yourNameAsASoldier = value
    },
  },
}
