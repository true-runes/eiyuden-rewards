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
              <dev v-if="false">
                <li>
                  <p
                    class="has-text-weight-bold has-text-left"
                    @click="initializer"
                  >
                    vuex-persistedstate 初期化
                  </p>
                </li>
              </dev>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    initializer: function () {
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
