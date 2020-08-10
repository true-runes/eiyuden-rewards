<template>
  <div>
    <Header />

    <Title />
    <TitleNotification />

    <YourNameInTheStaffRoll />
    <DiscordRole />
    <DigitalGame />
    <BetaAccess />
    <PhysicalGame />
    <SigilButton />
    <OstCd />
    <TShirt />
    <VinylRecord />
    <SoftcoverArtbook />
    <JobRewardSet />
    <NameInArtbook />
    <TeamSignedPoster />
    <YourNameAsASoldier />
    <CatInTheGame />
    <PetInTheGame />
    <NameALocation />
    <CreateAnEnemy />
    <BecomeAnNpc />
    <ReplicaShield />
    <VisitTheTeam />
    <CharacterFigure />
    <DigitalCd />
    <DigitalArtbook />

    <Result />

    <Bottom />
  </div>
</template>

<script>
import Header from '@/components/Header'
import TitleNotification from '@/components/TitleNotification'
import Title from '@/components/Title'
import Result from '@/components/Result'
import Bottom from '@/components/Bottom'

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

export default {
  name: 'Home',
  components: {
    Header,
    TitleNotification,
    Title,
    Result,
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
  padding: 10px;
}
</style>
