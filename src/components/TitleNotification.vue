<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <div class="content">
            <ul>
              <li>
                <p class="has-text-weight-bold has-text-left">
                  「百英雄伝」の希望の「リワード（返礼品）」が含まれた「プレッジ（出資項目）」が分かります
                </p>
              </li>
              <li>
                <p class="has-text-weight-bold has-text-left">
                  できるだけ最新の情報を反映するようにしていますが、情報が正確でない場合があります
                </p>
              </li>
              <li>
                <p class="has-text-weight-bold has-text-left">
                  ところで機種依存文字とは、PCの種類によって文字化けして読めない文字のこと。丸数字とローマ数字が代表選手です。なので「IV」ではなく、「4」のように数字を用いるのがおすすめです
                  (^o^)/
                </p>
              </li>
              <li>
                <p class="has-text-weight-bold has-text-left">
                  その他、細かいヘルプは<a href="#" @click="showModal">こちら</a
                  >へどうぞ (^_^)
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" :class="{ 'is-active': modalIsShown }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">ヘルプ</p>
        </header>
        <section class="modal-card-body has-text-left">
          <div class="block">
            <ul>
              <li>
                ・支援を行うための Kickstarter のページは<a
                  href="https://www.kickstarter.com/projects/rabbitandbearstudios/eiyuden-chronicle-hundred-heroes"
                  target="_blank"
                  >こちら</a
                >です
              </li>
              <li>
                ・「百英雄伝」の情報をまとめている Scrapbox は<a
                  href="https://scrapbox.io/100heroesstrong/"
                  target="_blank"
                  >こちら</a
                >です
              </li>
              <li>
                ・選択項目を初期化したい場合は
                <a href="#" @click="initializeState">
                  こちら
                </a>
                をクリック・タップしてください
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
    initializeState: function () {
      const initialState = {
        rewards: {},
        pledges: {},
      }

      localStorage.setItem('vuex', JSON.stringify(initialState))
      this.reloadCurrentPage()
    },
    reloadCurrentPage: function () {
      this.$router.go({ path: this.$router.currentRoute.path, force: true })
    },

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

<style scoped>
.columns {
  margin: 1px;
}

.column {
  padding: 1px;
}
</style>
