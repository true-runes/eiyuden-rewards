<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <p class="is-size-5 has-text-weight-bold">
            スタッフロールに名前が載る
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
              v-model="yourNameInTheStaffRoll"
              native-value="true"
              type="is-success"
              class="column"
            >
              <b-icon icon="check" size="is-small"></b-icon>
              <span>全プレッジに含まれます</span>
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
          <p>
            すべての支援者のみなさんのお名前がスタッフロールに掲載されます。
          </p>
          <br />
          <p>
            全員のお名前が読めるように、また、ゲームの体験を損なわないように配慮した上で掲載させて頂きます。
          </p>
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
  computed: {
    yourNameInTheStaffRoll: {
      get() {
        return this.$store.state.rewards.yourNameInTheStaffRoll
      },
      set(value) {
        this.$store.commit('rewards/setYourNameInTheStaffRoll', value)
      },
    },
  },
  watch: {
    yourNameInTheStaffRoll: function () {
      this.$store.commit('rewards/setAllRewardsState')
    },
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
}
</script>

<style>
.move-button-to-right {
  justify-content: flex-end;
}
</style>
