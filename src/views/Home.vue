<template>
  <div>
    <Header />
    <Title />
    <AccessCounter />
    <TitleNotification />

    <RewardsCategory category-name="全プレ" />
    <YourNameInTheStaffRoll />
    <DiscordRole />
    <BetaAccess />

    <RewardsCategory category-name="ゲーム本体" />
    <PhysicalGame />
    <DigitalGame />

    <RewardsCategory category-name="グッズ" />
    <SigilButton />
    <TShirt />
    <JobRewardSet />
    <CharacterFigure />
    <ReplicaShield />
    <TeamSignedPoster />

    <RewardsCategory category-name="サウンド" />
    <OstCd />
    <DigitalCd />
    <VinylRecord />

    <RewardsCategory category-name="画集" />
    <SoftcoverArtbook />
    <DigitalArtbook />

    <RewardsCategory category-name="名前" />
    <NameInArtbook />
    <YourNameAsASoldier />
    <NameAnInGameFood />

    <RewardsCategory category-name="その他" />
    <CreateATownObject />
    <NameARivalBeigomaTrainer />
    <VisitTheTeam />

    <RewardsCategory category-name="規定数終了" />
    <CatInTheGame />
    <PetInTheGame />
    <BecomeAHumanFacedFish />
    <BecomeAStatue />
    <NameALocation />
    <CreateAnEnemy />
    <BecomeAnNpc />

    <Bottom />

    <NavBar />
  </div>
</template>

<script>
import Header from '@/components/Header'
import TitleNotification from '@/components/TitleNotification'
import Title from '@/components/Title'
import AccessCounter from '@/components/AccessCounter'
import Bottom from '@/components/Bottom'
import NavBar from '@/components/NavBar'

import RewardsCategory from '@/components/Rewards/Category'

import YourNameInTheStaffRoll from '@/components/Rewards/YourNameInTheStaffRoll'
import DiscordRole from '@/components/Rewards/DiscordRole'
import DigitalGame from '@/components/Rewards/DigitalGame'
import BetaAccess from '@/components/Rewards/BetaAccess'
import PhysicalGame from '@/components/Rewards/PhysicalGame'
import SigilButton from '@/components/Rewards/SigilButton'
import OstCd from '@/components/Rewards/OstCd'
import TShirt from '@/components/Rewards/TShirt'
import VinylRecord from '@/components/Rewards/VinylRecord'
import SoftcoverArtbook from '@/components/Rewards/SoftcoverArtbook'
import JobRewardSet from '@/components/Rewards/JobRewardSet'
import NameInArtbook from '@/components/Rewards/NameInArtbook'
import TeamSignedPoster from '@/components/Rewards/TeamSignedPoster'
import YourNameAsASoldier from '@/components/Rewards/YourNameAsASoldier'
import CatInTheGame from '@/components/Rewards/CatInTheGame'
import PetInTheGame from '@/components/Rewards/PetInTheGame'
import NameALocation from '@/components/Rewards/NameALocation'
import CreateAnEnemy from '@/components/Rewards/CreateAnEnemy'
import BecomeAnNpc from '@/components/Rewards/BecomeAnNpc'
import ReplicaShield from '@/components/Rewards/ReplicaShield'
import VisitTheTeam from '@/components/Rewards/VisitTheTeam'
import CharacterFigure from '@/components/Rewards/CharacterFigure'
import DigitalCd from '@/components/Rewards/DigitalCd'
import DigitalArtbook from '@/components/Rewards/DigitalArtbook'
import BecomeAHumanFacedFish from '@/components/Rewards/BecomeAHumanFacedFish'
import BecomeAStatue from '@/components/Rewards/BecomeAStatue'
import CreateATownObject from '@/components/Rewards/CreateATownObject'
import NameAnInGameFood from '@/components/Rewards/NameAnInGameFood'
import NameARivalBeigomaTrainer from '@/components/Rewards/NameARivalBeigomaTrainer'

export default {
  name: 'Home',
  components: {
    Header,
    TitleNotification,
    Title,
    AccessCounter,
    RewardsCategory,
    YourNameInTheStaffRoll,
    DiscordRole,
    DigitalGame,
    BetaAccess,
    PhysicalGame,
    SigilButton,
    OstCd,
    TShirt,
    VinylRecord,
    SoftcoverArtbook,
    JobRewardSet,
    NameInArtbook,
    TeamSignedPoster,
    YourNameAsASoldier,
    CatInTheGame,
    PetInTheGame,
    NameALocation,
    CreateAnEnemy,
    BecomeAnNpc,
    ReplicaShield,
    VisitTheTeam,
    CharacterFigure,
    DigitalCd,
    DigitalArtbook,
    Bottom,
    NavBar,
    BecomeAHumanFacedFish,
    BecomeAStatue,
    CreateATownObject,
    NameAnInGameFood,
    NameARivalBeigomaTrainer,
  },
  created: function () {
    // Initialize
    this.$store.commit('rewards/setAllRewardsState')
  },
}
</script>

<style>
body {
  background-color: #79cafd;
  overflow-x: hidden;
}

section.section {
  padding: 15px;
}

.b-radio.radio {
  border-radius: 100px;
}

.page-wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.content-wrapper {
  flex: 1;
}

.kochira-he-dozo {
  cursor: pointer;
  cursor: hand;
}
</style>
