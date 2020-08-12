function isTrueOrFalseByRadioButton(value) {
  // Because the retrun value is via selectbox, value type isn't boolean
  if (value === 'true') return true

  return false
}

function isValidByRadioButton(value, targetRewardisContainedInThePledge) {
  if (targetRewardisContainedInThePledge === true) {
    return value === 'whichever' || isTrueOrFalseByRadioButton(value)
  } else if (targetRewardisContainedInThePledge === false) {
    return value === 'whichever' || !isTrueOrFalseByRadioButton(value)
  }

  return false
}

export default {
  strict: true,
  namespaced: true,
  state: {
    matchedPledges: {},
  },
  getters: {
    isDigitalVersion(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, true) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, false) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isPhysicalVersion(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    // digitalGame is 2-set
    isDoubleDigitalPack(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, true) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, false) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    // physicalGame is 2-set
    isDoublePhysicalPack(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isDigitalAndPhysical(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, true) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isBadgeOfHonor(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isMarkOfTheBard(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isOrderOfTheVermillion(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isOrderOfTheHarmonious(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isOrderOfTheArchivists(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isTrinityOfOrders(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    // Squire Category
    isVermillionSquire(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isHarmoniousSquire(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isArchivistSquire(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isTrinitySquire(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    // Kinght Category
    // jobRewardSet is 2-set
    isVermillionKnight(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    // jobRewardSet is 2-set
    isHarmoniousKnight(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    // jobRewardSet is 2-set
    isArchivistKnight(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    // jobRewardSet is 2-set
    isTrinityKnight(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    // Noble Category
    // jobRewardSet is 3-set
    isVermillionNoble(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    // jobRewardSet is 3-set
    isHarmoniousNoble(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    // jobRewardSet is 3-set
    isArchivistNoble(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    // jobRewardSet is 3-set
    isTrinityNoble(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isNameOfTheSteadfast(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, true) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isIndelibleHand(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, true) &&
        isValidByRadioButton(rewards.teamSignedPoster, true) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isEnduringRequiem(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, true) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isCatTribution(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, true) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isPixelPet(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, true) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isFellowWorldbuilder(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, true) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isEvilsAnvil(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, true) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isAlterEgo(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, true) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    // jobRewardSet is all-set
    isGuildmaster(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    // jobRewardSet is all-set
    isReveredGuildmaster(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, true) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isAllraansPantheron(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, true) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isMonument(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, true) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    // characterFigure is 2-set
    isSilverMonument(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, true) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    // characterFigure is 3-set
    isGoldenMonument(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, true) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isPieceOfHistory(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, true) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    // characterFigure is 2-set
    isSilverPieceOfHistory(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, true) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    // characterFigure is 3-set
    isGoldenPieceOfHistory(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, true) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isDigitalCopyAndDigitalCd(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, true) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, false) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, true) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isDigitalCopyAndDigitalArtbook(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, true) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, false) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, true) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isDigitalDeluxe(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, true) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, false) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, true) &&
        isValidByRadioButton(rewards.digitalArtbook, true) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isFoodForThought(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, true) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
    isTopTrainer(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, true)
      ) {
        return true
      }
      return false
    },
    isEsteemedDecorator(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, true) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false)
      ) {
        return true
      }
      return false
    },
  },
  mutations: {},
}
