<template>
  <div>
    <div class="has-text-weight-bold has-text-left">
      その他、細かいヘルプは
      <span class="modal-link-text" @click="showModal">こちら</span> へどうぞ
      (^_^)
    </div>

    <div class="modal" :class="{ 'is-active': modalIsShown }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <div class="modal-card-title">ヘルプ</div>
        </header>
        <section class="modal-card-body has-text-left">
          <div class="content">
            <ul>
              <li class="more-margin">
                Kickstarterは「物を購入する場」ではなく「<span
                  class="has-text-weight-bold"
                  >プロジェクトを支援する場</span
                >」です
              </li>
              <li class="more-margin">
                リワードの内容は常に更新されていくため、<a
                  href="https://twitter.com/eiyudenchronicl"
                  target="_blank"
                  >公式 Twitter</a
                >
                などを通じて最新の情報を確認してください
              </li>
              <li class="more-margin">
                同じリワードが複数個含まれるプレッジもあります（例:
                フィギュア2個）
              </li>
              <li class="more-margin">
                すべての画像は仮イメージで、実際のものとは異なる可能性があります
              </li>
              <li class="more-margin">
                「百英雄伝」の情報をまとめている Scrapbox は<a
                  href="https://scrapbox.io/100heroesstrong/"
                  target="_blank"
                  >こちら</a
                >です
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
}
</script>

<style scoped>
.modal-link-text {
  color: #7957d5;
  cursor: pointer;
  text-decoration: none;
}
</style>
