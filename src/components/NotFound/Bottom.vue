<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <p>
            <a
              href="https://support.microsoft.com/ja-jp/help/17621/internet-explorer-downloads"
              target="_blank"
              ><img
                src="/images/msie_now.png"
                alt="IE Now!"
                title="Internet Explorer Now!"
                width="140"
            /></a>
            &nbsp;
            <a href="https://www.mozilla.org/ja/firefox/new/" target="_blank"
              ><img
                src="/images/netscape_now.gif"
                width="140"
                alt="Netscape Now!"
                title="Netscape Now!"
            /></a>
          </p>

          <br />

          <button class="button is-rounded">
            <router-link to="/" class="has-text-weight-bold is-size-5"
              >トップページへ戻る</router-link
            >
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.columns {
  margin: 1px 1px 30px 1px;
}
</style>
