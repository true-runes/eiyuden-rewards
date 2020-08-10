export default {
  strict: true,
  namespaced: true,
  state: {
    yourNameAsASoldier: '',
  },
  mutations: {
    setYourNameAsASoldier(state, value) {
      state.yourNameAsASoldier = value
    },
  },
}
