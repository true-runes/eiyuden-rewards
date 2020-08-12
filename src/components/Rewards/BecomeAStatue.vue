<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <p class="is-size-5 has-text-weight-bold">
            銅像として登場できる
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
          <p class="modal-card-title">スタッフロールに名前が載る権利</p>
        </header>
        <section class="modal-card-body has-text-left">
          <p>あなたの名前がスタッフロールに掲載されます。</p>
          <p>
            All backers will have their name included in the game's staff roll,
            readable in all its glory! Don't worry, we have plans to make sure
            that even with everyone included, the staff roll will still not bog
            down your Eiyuden experience.
          </p>
          <img src="/images/digital_copy_item.jpg" />
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
