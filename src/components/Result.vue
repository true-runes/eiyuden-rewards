<template>
  <div>
    <h1 class="kadlu-sticky">
      <p>あてはまるプレッジすう</p>
      <p>れこめんどぷれっじすす</p>
      <p>あてはまるプレッジすう</p>
      <p>れこめんどぷれっじすす</p>
      <p>あてはまるプレッジすう</p>
      <p>れこめんどぷれっじすす</p>
      <p>あてはまるプレッジすう</p>
      <p>れこめんどぷれっじすす</p>
    </h1>
    Result
    <h1>dlversion: {{ getMirai }}</h1>
    <h1>packageversion: {{ getFuture }}</h1>

    <div class="buttons">
      <button class="button is-medium" @click="toast">
        Launch toast (default)
      </button>
    </div>

    <h1>ダミー</h1>
    <h1>ダミー</h1>
    <h1>ダミー</h1>
    <h1>ダミー</h1>
    <h1>ダミー</h1>
    <h1>ダミー</h1>
    <h1>ダミー</h1>
    <h1>ダミー</h1>
    <h1>ダミー</h1>
    <h1>ダミー</h1>
    <h1>ダミー</h1>
    <h1>ダミー</h1>
    <h1>ダミー</h1>
    <h1>ダミー</h1>
    <h1>ダミー</h1>
    <h1>ダミー</h1>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by
          <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
          licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
          website content is licensed
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >CC BY NC SA 4.0</a
          >.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getMirai', 'getFuture']),
  },
  methods: {
    toast() {
      this.$buefy.toast.open('Something happened')
    },
    success() {
      this.$buefy.toast.open({
        message: 'Something happened correctly!',
        type: 'is-success',
      })
    },
    danger() {
      this.$buefy.toast.open({
        duration: 5000,
        message: `Something's not good, also I'm on bottom`,
        position: 'is-bottom',
        type: 'is-danger',
      })
    },
  },
}
</script>

<style scoped>
.kadlu-sticky {
  position: sticky;
  top: 1.4rem;
}
</style>
