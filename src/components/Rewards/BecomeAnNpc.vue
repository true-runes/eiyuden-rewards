<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <p class="is-size-5 has-text-weight-bold">
            ゲーム中のキャラになれる
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
              v-model="becomeAnNpc"
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
          <p class="modal-card-title">ゲーム中のキャラになれる</p>
        </header>
        <section class="modal-card-body has-text-left">
          <img src="/images/become_an_npc.png" />
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
    becomeAnNpc: {
      get() {
        return this.$store.state.rewards.becomeAnNpc
      },
      set(value) {
        this.$store.commit('rewards/setBecomeAnNpc', value)
      },
    },
  },
  watch: {
    becomeAnNpc: function () {
      this.$store.commit('rewards/setAllRewardsState')
    },
  },
}
</script>
