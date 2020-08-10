export default {
  strict: true,
  namespaced: true,
  state: {
    yourNameAsASoldier: 'whichever',
  },
  mutations: {
    setYourNameAsASoldier(state, value) {
      state.yourNameAsASoldier = value
    },
  },
}
