<template>
  <div class="home">
    <Title />
    <RewardsDlVersion />
    <RewardsPackageVersion />
    <Result />
  </div>
</template>

<script>
import Title from '@/components/Title'
import RewardsDlVersion from '@/components/Rewards/DlVersion'
import RewardsPackageVersion from '@/components/Rewards/PackageVersion'
import Result from '@/components/Result'

export default {
  name: 'Home',
  components: {
    Title,
    RewardsDlVersion,
    RewardsPackageVersion,
    Result,
  },
}
</script>
