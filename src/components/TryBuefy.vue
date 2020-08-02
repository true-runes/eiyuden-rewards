<template>
  <section class="hero">
    <div class="hero-body">
      <h1 class="title">
        「百英雄伝」逆引きプレッジ
      </h1>
    </div>
    <div class="columns">
      <p>ダウンロード版</p>
      <b-field>
        <div class="column">
          <b-radio-button
            v-model="radioButton"
            native-value="Nope"
            type="is-success"
          >
            <b-icon icon="check" size="is-small"> </b-icon> <span>ほしい</span>
          </b-radio-button>
        </div>
        <div class="column">
          <b-radio-button
            v-model="radioButton"
            native-value="Yep"
            type="is-danger"
          >
            <b-icon icon="close"></b-icon>
            <span>いらない</span>
          </b-radio-button>
        </div>
      </b-field>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      radioButton: '',
    }
  },
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
  },
}
</script>
