import yourNameInTheStaffRoll from '@/store/Rewards/yourNameInTheStaffRoll'
import discordRole from '@/store/Rewards/discordRole'
import digitalGame from '@/store/Rewards/digitalGame'
import betaAccess from '@/store/Rewards/betaAccess'
import physicalGame from '@/store/Rewards/physicalGame'
import sigilButton from '@/store/Rewards/sigilButton'
import ostCd from '@/store/Rewards/ostCd'
import tShirt from '@/store/Rewards/tShirt'
import vinylRecord from '@/store/Rewards/vinylRecord'
import softcoverArtbook from '@/store/Rewards/softcoverArtbook'
import jobRewardSet from '@/store/Rewards/jobRewardSet'
import nameInArtbook from '@/store/Rewards/nameInArtbook'
import teamSignedPoster from '@/store/Rewards/teamSignedPoster'
import yourNameAsASoldier from '@/store/Rewards/yourNameAsASoldier'
import catInTheGame from '@/store/Rewards/catInTheGame'
import petInTheGame from '@/store/Rewards/petInTheGame'
import nameALocation from '@/store/Rewards/nameALocation'
import createAnEnemy from '@/store/Rewards/createAnEnemy'
import becomeAnNpc from '@/store/Rewards/becomeAnNpc'
import replicaShield from '@/store/Rewards/replicaShield'
import visitTheTeam from '@/store/Rewards/visitTheTeam'
import characterFigure from '@/store/Rewards/characterFigure'
import digitalCd from '@/store/Rewards/digitalCd'
import digitalArtbook from '@/store/Rewards/digitalArtbook'
import becomeAHumanFacedFish from '@/store/Rewards/becomeAHumanFacedFish'
import becomeAStatue from '@/store/Rewards/becomeAStatue'
import chibiCharaFigures from '@/store/Rewards/chibiCharaFigures'
import createATownObject from '@/store/Rewards/createATownObject'
import nameAnInGameFood from '@/store/Rewards/nameAnInGameFood'
import nameARivalBeigomaTrainer from '@/store/Rewards/nameARivalBeigomaTrainer'
import snappiePlushies from '@/store/Rewards/snappiePlushies'
import steelbookCase from '@/store/Rewards/steelbookCase'

// TODO: Import by 'map'
export default {
  strict: true,
  namespaced: true,
  state: {
    ...yourNameInTheStaffRoll.state,
    ...discordRole.state,
    ...digitalGame.state,
    ...betaAccess.state,
    ...physicalGame.state,
    ...sigilButton.state,
    ...ostCd.state,
    ...tShirt.state,
    ...vinylRecord.state,
    ...softcoverArtbook.state,
    ...jobRewardSet.state,
    ...nameInArtbook.state,
    ...teamSignedPoster.state,
    ...yourNameAsASoldier.state,
    ...catInTheGame.state,
    ...petInTheGame.state,
    ...nameALocation.state,
    ...createAnEnemy.state,
    ...becomeAnNpc.state,
    ...replicaShield.state,
    ...visitTheTeam.state,
    ...characterFigure.state,
    ...digitalCd.state,
    ...digitalArtbook.state,
    ...becomeAHumanFacedFish.state,
    ...becomeAStatue.state,
    ...chibiCharaFigures.state,
    ...createATownObject.state,
    ...nameAnInGameFood.state,
    ...nameARivalBeigomaTrainer.state,
    ...snappiePlushies.state,
    ...steelbookCase.state,
    allRewardsState: {},
  },
  getters: {
    ...yourNameInTheStaffRoll.getters,
    ...discordRole.getters,
    ...yourNameInTheStaffRoll.getters,
    ...discordRole.getters,
    ...digitalGame.getters,
    ...betaAccess.getters,
    ...physicalGame.getters,
    ...sigilButton.getters,
    ...ostCd.getters,
    ...tShirt.getters,
    ...vinylRecord.getters,
    ...softcoverArtbook.getters,
    ...jobRewardSet.getters,
    ...nameInArtbook.getters,
    ...teamSignedPoster.getters,
    ...yourNameAsASoldier.getters,
    ...catInTheGame.getters,
    ...petInTheGame.getters,
    ...nameALocation.getters,
    ...createAnEnemy.getters,
    ...becomeAnNpc.getters,
    ...replicaShield.getters,
    ...visitTheTeam.getters,
    ...characterFigure.getters,
    ...digitalCd.getters,
    ...digitalArtbook.getters,
    ...becomeAHumanFacedFish.getters,
    ...becomeAStatue.getters,
    ...chibiCharaFigures.getters,
    ...createATownObject.getters,
    ...nameAnInGameFood.getters,
    ...nameARivalBeigomaTrainer.getters,
    ...snappiePlushies.getters,
    ...steelbookCase.getters,

    getAllRewardsState(state) {
      return state.allRewardsState
    },
  },
  mutations: {
    ...yourNameInTheStaffRoll.mutations,
    ...discordRole.mutations,
    ...yourNameInTheStaffRoll.mutations,
    ...discordRole.mutations,
    ...digitalGame.mutations,
    ...betaAccess.mutations,
    ...physicalGame.mutations,
    ...sigilButton.mutations,
    ...ostCd.mutations,
    ...tShirt.mutations,
    ...vinylRecord.mutations,
    ...softcoverArtbook.mutations,
    ...jobRewardSet.mutations,
    ...nameInArtbook.mutations,
    ...teamSignedPoster.mutations,
    ...yourNameAsASoldier.mutations,
    ...catInTheGame.mutations,
    ...petInTheGame.mutations,
    ...nameALocation.mutations,
    ...createAnEnemy.mutations,
    ...becomeAnNpc.mutations,
    ...replicaShield.mutations,
    ...visitTheTeam.mutations,
    ...characterFigure.mutations,
    ...digitalCd.mutations,
    ...digitalArtbook.mutations,
    ...becomeAHumanFacedFish.mutations,
    ...becomeAStatue.mutations,
    ...chibiCharaFigures.mutations,
    ...createATownObject.mutations,
    ...nameAnInGameFood.mutations,
    ...nameARivalBeigomaTrainer.mutations,
    ...snappiePlushies.mutations,
    ...steelbookCase.mutations,

    // TODO: Overwrite by payload
    setAllRewardsState(state) {
      state.allRewardsState = {
        yourNameInTheStaffRoll: state.yourNameInTheStaffRoll,
        discordRole: state.discordRole,
        digitalGame: state.digitalGame,
        betaAccess: state.betaAccess,
        physicalGame: state.physicalGame,
        sigilButton: state.sigilButton,
        ostCd: state.ostCd,
        tShirt: state.tShirt,
        vinylRecord: state.vinylRecord,
        softcoverArtbook: state.softcoverArtbook,
        jobRewardSet: state.jobRewardSet,
        nameInArtbook: state.nameInArtbook,
        teamSignedPoster: state.teamSignedPoster,
        yourNameAsASoldier: state.yourNameAsASoldier,
        catInTheGame: state.catInTheGame,
        petInTheGame: state.petInTheGame,
        nameALocation: state.nameALocation,
        createAnEnemy: state.createAnEnemy,
        becomeAnNpc: state.becomeAnNpc,
        replicaShield: state.replicaShield,
        visitTheTeam: state.visitTheTeam,
        characterFigure: state.characterFigure,
        digitalCd: state.digitalCd,
        digitalArtbook: state.digitalArtbook,
        becomeAHumanFacedFish: state.becomeAHumanFacedFish,
        becomeAStatue: state.becomeAStatue,
        chibiCharaFigures: state.chibiCharaFigures,
        createATownObject: state.createATownObject,
        nameAnInGameFood: state.nameAnInGameFood,
        nameARivalBeigomaTrainer: state.nameARivalBeigomaTrainer,
        snappiePlushies: state.snappiePlushies,
        steelbookCase: state.steelbookCase,
      }
    },
  },
}
