<template>
  <div id="page-top">
    <Header />
    <Title />

    <Bottom />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Bottom from '@/components/NotFound/Bottom'
import Title from '@/components/NotFound/Title'

export default {
  name: 'WhatIsAddOn',
  components: {
    Header,
    Title,
    Bottom,
  },
}
</script>

<style scoped></style>
