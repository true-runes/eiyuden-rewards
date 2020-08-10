export default {
  strict: true,
  namespaced: true,
  state: {
    replicaShield: 'whichever',
  },
  mutations: {
    setReplicaShield(state, value) {
      state.replicaShield = value
    },
  },
}
