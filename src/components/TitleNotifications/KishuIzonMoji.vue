<template>
  <div>
    <div class="has-text-weight-bold has-text-left">
      <a href="#" @click="showModal">機種依存文字</a> にはご注意ください！
    </div>

    <div class="modal" :class="{ 'is-active': modalIsShown }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">機種依存文字とは？</p>
        </header>
        <section class="modal-card-body has-text-left">
          <div class="content">
            <ul>
              <li class="more-margin">
                機種依存文字とは、PCの種類によって文字化けして読めない文字のこと。丸数字とローマ数字が代表選手です。なので「IV」ではなく、「4」のように数字を用いるのがおすすめです
                (^o^)/
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

<style scoped></style>
