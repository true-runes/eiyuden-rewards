<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <p class="is-size-5 has-text-weight-bold">
            彫像として登場できる
            <span @click="showModal" class="kochira-he-dozo"
              ><b-icon icon="help-circle-outline" size="is-middle"></b-icon
            ></span>
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <b-field class="columns">
            <b-radio-button
              v-model="becomeAStatue"
              native-value="false"
              type="is-danger"
              class="column"
            >
              <b-icon icon="close" size="is-small"></b-icon>
              <span>規定数に達しました</span>
            </b-radio-button>
          </b-field>
        </div>
      </div>
    </div>

    <div class="modal" :class="{ 'is-active': modalIsShown }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">彫像として登場できる</p>
        </header>
        <section class="modal-card-body has-text-left">
          <img
            src="/images/become_a_statue.png"
            alt="彫像として登場"
            title="彫像として登場"
          />
        </section>
        <footer class="modal-card-foot move-button-to-right">
          <button class="button is-success" @click="pushCloseButton">
            閉じる
          </button>
        </footer>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      modalIsShown: false,
      closeButtonIsPressed: false,
    }
  },
  methods: {
    showModal() {
      this.closeButtonIsPressed = false
      this.modalIsShown = true
    },
    pushCloseButton() {
      this.closeButtonIsPressed = true
      this.modalIsShown = false
    },
  },
  computed: {
    becomeAStatue: {
      get() {
        return this.$store.state.rewards.becomeAStatue
      },
      set(value) {
        this.$store.commit('rewards/setBecomeAStatue', value)
      },
    },
  },
  watch: {
    becomeAStatue: function () {
      this.$store.commit('rewards/setAllRewardsState')
    },
  },
}
</script>
