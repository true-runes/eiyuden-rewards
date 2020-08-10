<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <p class="is-size-5 has-text-weight-bold">
            スタッフロールに名前が載る
            <span @click="showModal">
              <b-icon icon="help-circle-outline" size="is-small"> </b-icon
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
            <div v-show="false">
              <b-radio-button
                v-model="yourNameInTheStaffRoll"
                native-value="false"
                type="is-danger"
                class="column"
                disabled
              >
                <b-icon icon="close"></b-icon>
                <span>ほしくない</span>
              </b-radio-button>
            </div>
          </b-field>
        </div>
      </div>
    </div>

    <div class="modal" :class="{ 'is-active': showModalFlag }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">スタッフロールに名前が載る権利</p>
          <button
            class="delete"
            aria-label="close"
            @click="cancelModal"
          ></button>
        </header>
        <section class="modal-card-body">
          <p>{{ message }}</p>
        </section>
        <footer class="modal-card-foot move-button-to-right">
          <button class="button is-success" @click="okModal">
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
      showModalFlag: false,
      okPressed: false,
      message: 'あなたの名前がスタッフロールに掲載されます。',
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
      this.okPressed = false
      this.showModalFlag = true
    },
    okModal() {
      this.okPressed = true
      this.showModalFlag = false
    },
    cancelModal() {
      this.okPressed = false
      this.showModalFlag = false
    },
  },
}
</script>

<style>
.move-button-to-right {
  justify-content: flex-end;
}
</style>
