<template>
  <section class="section">
    <div v-if="false" class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <p>デバッグ領域 開始</p>
        </div>
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <p>{{ allRewardsState }}</p>
          <button class="button" @click="showModal">モーダルを表示する</button>
        </div>
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <p>デバッグ領域 終了</p>
        </div>
      </div>
    </div>

    <div v-if="false">
      <!-- FIXME: Use props -->
    </div>
    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <p class="is-size-5 has-text-weight-bold">
            スタッフロールに名前が載る
          </p>
        </div>
      </div>
    </div>

    <div v-if="false">
      <!-- FIXME: Use container -->
    </div>
    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <b-field class="columns">
            <b-radio-button
              v-model="yourNameInTheStaffRoll"
              native-value="yes"
              type="is-success"
              class="column"
            >
              <b-icon icon="check" size="is-small"></b-icon>
              <span>ほしい</span>
            </b-radio-button>
            <b-radio-button
              v-model="yourNameInTheStaffRoll"
              native-value="no"
              type="is-danger"
              class="column"
            >
              <b-icon icon="close"></b-icon>
              <span>ほしくない</span>
            </b-radio-button>
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
        <footer class="modal-card-foot">
          <button class="button is-success" @click="okModal">Ok</button>
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
    // FIXME: For print debug so delete if it is unnecessary
    allRewardsState() {
      return this.$store.getters['rewards/getAllRewardsState']
    },
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
