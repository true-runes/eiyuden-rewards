<template>
  <section class="section">
    <nav class="navbar is-fixed-bottom level">
      <p class="level-item is-size-4 has-text-centered navbar-">
        該当するプレッジは {{ allRewardsState }}個 です
      </p>
    </nav>
  </section>
</template>

<script>
export default {
  computed: {
    allRewardsState() {
      return Object.keys(this.$store.getters['rewards/getAllRewardsState'])
        .length
    },
  },
}
</script>

<style>
.level-item {
  margin: 10px;
}
</style>
