<template>
  <div class="home">
    <TryBuefy :title="'デジタル版'" :value="'hoge'" />
  </div>
</template>

<script>
import TryBuefy from '@/components/TryBuefy'

export default {
  name: 'Home',
  components: {
    TryBuefy,
  },
}
</script>
