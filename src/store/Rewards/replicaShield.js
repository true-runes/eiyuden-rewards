export default {
  strict: true,
  namespaced: true,
  state: {
    replicaShield: '',
  },
  mutations: {
    setReplicaShield(state, value) {
      state.replicaShield = value
    },
  },
}
