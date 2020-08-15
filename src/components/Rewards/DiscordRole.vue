<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-multiline is-mobile is-tablet is-desktop">
          <div class="column is-12-mobile is-12-tablet is-12-desktop">
            <p class="is-size-5 has-text-weight-bold">
              Discordでの「肩書き」
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
                v-model="discordRole"
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
    </section>

    <div class="modal" :class="{ 'is-active': modalIsShown }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Discordでの「肩書き」</p>
        </header>
        <section class="modal-card-body has-text-left">
          <div class="content">
            <p>
              支援金額に応じて、以下の2つのどちらかの「肩書き」が得られます。
            </p>
            <ul>
              <li>
                "Knight", "Ranger", "Wizard" のいずれか1つ（$1,000 ≒ 10万円
                未満）
              </li>
              <li>
                VIP を示す「肩書き」である "Noble"（$1,000 ≒ 10万円 以上）
              </li>
            </ul>
          </div>
        </section>
        <footer class="modal-card-foot move-button-to-right">
          <button class="button is-success" @click="pushCloseButton">
            閉じる
          </button>
        </footer>
      </div>
    </div>
  </div>
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
    discordRole: {
      get() {
        return this.$store.state.rewards.discordRole
      },
      set(value) {
        this.$store.commit('rewards/setdiscordRole', value)
      },
    },
  },
  watch: {
    discordRole: function () {
      this.$store.commit('rewards/setAllRewardsState')
    },
  },
}
</script>
