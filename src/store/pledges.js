function isTrueOrFalseByViaRadioButton(value) {
  // Because the retrun value is via selectbox, value type isn't boolean
  if (value === 'true') return true

  return false
}

function isValidByViaRadioButton(value, isContained) {
  if (isContained === true) {
    return value === 'whichever' || isTrueOrFalseByViaRadioButton(value)
  } else if (isContained === false) {
    return value === 'whichever' || !isTrueOrFalseByViaRadioButton(value)
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
        isValidByViaRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByViaRadioButton(rewards.discordRole, true) &&
        isValidByViaRadioButton(rewards.digitalGame, true) &&
        isValidByViaRadioButton(rewards.betaAccess, true) &&
        isValidByViaRadioButton(rewards.physicalGame, false) &&
        isValidByViaRadioButton(rewards.sigilButton, false) &&
        isValidByViaRadioButton(rewards.ostCd, false) &&
        isValidByViaRadioButton(rewards.tShirt, false) &&
        isValidByViaRadioButton(rewards.vinylRecord, false) &&
        isValidByViaRadioButton(rewards.softcoverArtbook, false) &&
        isValidByViaRadioButton(rewards.jobRewardSet, false) &&
        isValidByViaRadioButton(rewards.nameInArtbook, false) &&
        isValidByViaRadioButton(rewards.teamSignedPoster, false) &&
        isValidByViaRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByViaRadioButton(rewards.catInTheGame, false) &&
        isValidByViaRadioButton(rewards.petInTheGame, false) &&
        isValidByViaRadioButton(rewards.nameALocation, false) &&
        isValidByViaRadioButton(rewards.createAnEnemy, false) &&
        isValidByViaRadioButton(rewards.becomeAnNpc, false) &&
        isValidByViaRadioButton(rewards.replicaShield, false) &&
        isValidByViaRadioButton(rewards.visitTheTeam, false) &&
        isValidByViaRadioButton(rewards.characterFigure, false) &&
        isValidByViaRadioButton(rewards.digitalCd, false) &&
        isValidByViaRadioButton(rewards.digitalArtbook, false)

        // isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        // isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        // isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        // isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        // !isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        // !isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        // !isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        // !isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        // !isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        // !isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        // !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        // !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        // !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        // !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        // !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        // !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        // !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        // !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        // !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        // !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        // !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        // !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        // !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        // !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isPhysicalVersion(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByViaRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByViaRadioButton(rewards.discordRole, true) &&
        isValidByViaRadioButton(rewards.digitalGame, false) &&
        isValidByViaRadioButton(rewards.betaAccess, true) &&
        isValidByViaRadioButton(rewards.physicalGame, true) &&
        isValidByViaRadioButton(rewards.sigilButton, false) &&
        isValidByViaRadioButton(rewards.ostCd, false) &&
        isValidByViaRadioButton(rewards.tShirt, false) &&
        isValidByViaRadioButton(rewards.vinylRecord, false) &&
        isValidByViaRadioButton(rewards.softcoverArtbook, false) &&
        isValidByViaRadioButton(rewards.jobRewardSet, false) &&
        isValidByViaRadioButton(rewards.nameInArtbook, false) &&
        isValidByViaRadioButton(rewards.teamSignedPoster, false) &&
        isValidByViaRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByViaRadioButton(rewards.catInTheGame, false) &&
        isValidByViaRadioButton(rewards.petInTheGame, false) &&
        isValidByViaRadioButton(rewards.nameALocation, false) &&
        isValidByViaRadioButton(rewards.createAnEnemy, false) &&
        isValidByViaRadioButton(rewards.becomeAnNpc, false) &&
        isValidByViaRadioButton(rewards.replicaShield, false) &&
        isValidByViaRadioButton(rewards.visitTheTeam, false) &&
        isValidByViaRadioButton(rewards.characterFigure, false) &&
        isValidByViaRadioButton(rewards.digitalCd, false) &&
        isValidByViaRadioButton(rewards.digitalArtbook, false)

        // isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        // isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        // !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        // isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        // isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        // !isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        // !isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        // !isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        // !isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        // !isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        // !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        // !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        // !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        // !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        // !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        // !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        // !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        // !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        // !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        // !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        // !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        // !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        // !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        // !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    // digitalGame is 2-set
    isDoubleDigitalPack(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByViaRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByViaRadioButton(rewards.discordRole, true) &&
        isValidByViaRadioButton(rewards.digitalGame, true) &&
        isValidByViaRadioButton(rewards.betaAccess, true) &&
        isValidByViaRadioButton(rewards.physicalGame, false) &&
        isValidByViaRadioButton(rewards.sigilButton, false) &&
        isValidByViaRadioButton(rewards.ostCd, false) &&
        isValidByViaRadioButton(rewards.tShirt, false) &&
        isValidByViaRadioButton(rewards.vinylRecord, false) &&
        isValidByViaRadioButton(rewards.softcoverArtbook, false) &&
        isValidByViaRadioButton(rewards.jobRewardSet, false) &&
        isValidByViaRadioButton(rewards.nameInArtbook, false) &&
        isValidByViaRadioButton(rewards.teamSignedPoster, false) &&
        isValidByViaRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByViaRadioButton(rewards.catInTheGame, false) &&
        isValidByViaRadioButton(rewards.petInTheGame, false) &&
        isValidByViaRadioButton(rewards.nameALocation, false) &&
        isValidByViaRadioButton(rewards.createAnEnemy, false) &&
        isValidByViaRadioButton(rewards.becomeAnNpc, false) &&
        isValidByViaRadioButton(rewards.replicaShield, false) &&
        isValidByViaRadioButton(rewards.visitTheTeam, false) &&
        isValidByViaRadioButton(rewards.characterFigure, false) &&
        isValidByViaRadioButton(rewards.digitalCd, false) &&
        isValidByViaRadioButton(rewards.digitalArtbook, false)

        // isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        // isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        // isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        // isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        // !isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        // !isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        // !isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        // !isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        // !isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        // !isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        // !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        // !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        // !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        // !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        // !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        // !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        // !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        // !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        // !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        // !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        // !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        // !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        // !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        // !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    // physicalGame is 2-set
    isDoublePhysicalPack(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        !isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        !isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        !isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isDigitalAndPhysical(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        !isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        !isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        !isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isBadgeOfHonor(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        !isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        !isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        !isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isMarkOfTheBard(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        !isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        !isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isOrderOfTheVermillion(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        !isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        !isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isOrderOfTheHarmonious(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        !isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isOrderOfTheArchivists(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        !isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isTrinityOfOrders(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    // Squire Category
    isVermillionSquire(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        !isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        !isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isHarmoniousSquire(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        !isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isArchivistSquire(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        !isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isTrinitySquire(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
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
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        !isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        !isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    // jobRewardSet is 2-set
    isHarmoniousKnight(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        !isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    // jobRewardSet is 2-set
    isArchivistKnight(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        !isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    // jobRewardSet is 2-set
    isTrinityKnight(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
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
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        !isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        !isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    // jobRewardSet is 3-set
    isHarmoniousNoble(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        !isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    // jobRewardSet is 3-set
    isArchivistNoble(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        !isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    // jobRewardSet is 3-set
    isTrinityNoble(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isNameOfTheSteadfast(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isIndelibleHand(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isEnduringRequiem(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isCatTribution(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isPixelPet(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isFellowWorldbuilder(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isEvilsAnvil(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isAlterEgo(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    // jobRewardSet is all-set
    isGuildmaster(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    // jobRewardSet is all-set
    isReveredGuildmaster(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isAllaraansPantheron(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isMonument(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        !isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        !isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        !isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    // characterFigure is 2-set
    isSilverMonument(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        !isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        !isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        !isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    // characterFigure is 3-set
    isGoldenMonument(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        !isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        !isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        !isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isPieceOfHistory(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        !isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        !isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        !isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    // characterFigure is 2-set
    isSilverPieceOfHistory(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        !isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        !isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        !isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    // characterFigure is 3-set
    isGoldenPieceOfHistory(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        !isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        !isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        !isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isDigitalCopyAndDigitalCd(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        !isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        !isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        !isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        !isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isDigitalCopyAndDigitalArtbook(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        !isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        !isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        !isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        !isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        !isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
    isDigitalDeluxe(state, gettesr, rootState) {
      const rewards = rootState.rewards

      if (
        isTrueOrFalseByViaRadioButton(rewards.yourNameInTheStaffRoll) &&
        isTrueOrFalseByViaRadioButton(rewards.discordRole) &&
        isTrueOrFalseByViaRadioButton(rewards.digitalGame) &&
        isTrueOrFalseByViaRadioButton(rewards.betaAccess) &&
        !isTrueOrFalseByViaRadioButton(rewards.physicalGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.sigilButton) &&
        !isTrueOrFalseByViaRadioButton(rewards.ostCd) &&
        !isTrueOrFalseByViaRadioButton(rewards.tShirt) &&
        !isTrueOrFalseByViaRadioButton(rewards.vinylRecord) &&
        !isTrueOrFalseByViaRadioButton(rewards.softcoverArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.jobRewardSet) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameInArtbook) &&
        !isTrueOrFalseByViaRadioButton(rewards.teamSignedPoster) &&
        !isTrueOrFalseByViaRadioButton(rewards.yourNameAsASoldier) &&
        !isTrueOrFalseByViaRadioButton(rewards.catInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.petInTheGame) &&
        !isTrueOrFalseByViaRadioButton(rewards.nameALocation) &&
        !isTrueOrFalseByViaRadioButton(rewards.createAnEnemy) &&
        !isTrueOrFalseByViaRadioButton(rewards.becomeAnNpc) &&
        !isTrueOrFalseByViaRadioButton(rewards.replicaShield) &&
        !isTrueOrFalseByViaRadioButton(rewards.visitTheTeam) &&
        !isTrueOrFalseByViaRadioButton(rewards.characterFigure) &&
        isTrueOrFalseByViaRadioButton(rewards.digitalCd) &&
        isTrueOrFalseByViaRadioButton(rewards.digitalArtbook)
      ) {
        return true
      }
      return false
    },
  },
  mutations: {},
}
