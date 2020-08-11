<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <p class="is-size-3 has-text-weight-bold">
            {{ categoryName }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    categoryName: {
      type: String,
      default: '',
      required: true,
    },
  },
}
</script>

<style>
.is-size-3.has-text-weight-bold {
  padding: 25px 1px 1px 1px;
}
</style>
