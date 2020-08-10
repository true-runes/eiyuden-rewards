export default {
  strict: true,
  namespaced: true,
  state: {
    replicaShield: 'no',
  },
  mutations: {
    setReplicaShield(state, value) {
      state.replicaShield = value
    },
  },
}
