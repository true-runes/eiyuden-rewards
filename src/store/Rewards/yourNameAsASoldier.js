export default {
  strict: true,
  namespaced: true,
  state: {
    yourNameAsASoldier: 'no',
  },
  mutations: {
    setYourNameAsASoldier(state, value) {
      state.yourNameAsASoldier = value
    },
  },
}
