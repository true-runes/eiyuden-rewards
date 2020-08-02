<template>
  <div>
    Result
    <h1>dlversion: {{ getMirai }}</h1>
    <h1>packageversion: {{ getFuture }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getMirai', 'getFuture']),
  },
}
</script>
