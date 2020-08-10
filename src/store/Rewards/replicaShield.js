export default {
  strict: true,
  namespaced: true,
  state: {
    replicaShield: 'false',
  },
  mutations: {
    setReplicaShield(state, value) {
      state.replicaShield = value
    },
  },
}
