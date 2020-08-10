import yourNameInTheStaffRoll from '@/store/Rewards/yourNameInTheStaffRoll'

export default {
  strict: true,
  namespaced: true,
  state: {
    ...yourNameInTheStaffRoll.state,
    allRewardsState: {},
  },
  getters: {
    ...yourNameInTheStaffRoll.getters,
    getAllRewardsState(state) {
      return state.allRewardsState
    },
  },
  mutations: {
    ...yourNameInTheStaffRoll.mutations,
    // TODO: Overwrite by payload
    setAllRewardsState(state) {
      state.allRewardsState = {
        yourNameInTheStaffRoll: state.yourNameInTheStaffRoll,
        discordRole: state.yourNameInTheStaffRoll,
        digitalGame: state.yourNameInTheStaffRoll,
        betaAccess: state.yourNameInTheStaffRoll,
        physicalGame: state.yourNameInTheStaffRoll,
        sigilButton: state.yourNameInTheStaffRoll,
        ostCd: state.yourNameInTheStaffRoll,
        tShirt: state.yourNameInTheStaffRoll,
        vinylRecord: state.yourNameInTheStaffRoll,
        softcoverArtbook: state.yourNameInTheStaffRoll,
        jobRewardSet: state.yourNameInTheStaffRoll,
        nameInArtbook: state.yourNameInTheStaffRoll,
        teamSignedPoster: state.yourNameInTheStaffRoll,
        yourNameAsASoldier: state.yourNameInTheStaffRoll,
        catInTheGame: state.yourNameInTheStaffRoll,
        petInTheGame: state.yourNameInTheStaffRoll,
        nameALocation: state.yourNameInTheStaffRoll,
        createAnEnemy: state.yourNameInTheStaffRoll,
        becomeAnNpc: state.yourNameInTheStaffRoll,
        replicaShield: state.yourNameInTheStaffRoll,
        visitTheTeam: state.yourNameInTheStaffRoll,
        characterFigure: state.yourNameInTheStaffRoll,
        digitalCd: state.yourNameInTheStaffRoll,
        digitalArtbook: state.yourNameInTheStaffRoll,
      }
    },
  },
}
