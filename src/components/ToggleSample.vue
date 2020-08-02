<template>
  <div class="hoge">
    @ {{ count }}
    <ul div="rewards">
      <li>
        <span>OST CD</span>:<input
          type="checkbox"
          v-on:click="toggleShow1Boolean"
        />
      </li>
      <li>
        <span>缶バッジ</span>:<input
          type="checkbox"
          v-on:click="toggleShow2Boolean"
        />
      </li>
    </ul>

    <div v-for="product in getFilteredList" :key="product">
      <p>debug</p>
      <p>{{ product }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['count', 'show1', 'show2', 'selectedValue']),
    ...mapGetters(['getAllProducts', 'getFilteredList']),
  },
  methods: {
    ...mapMutations(['toggleShow1Boolean', 'toggleShow2Boolean']),
  },
  //   filteredList: function () {
  //     var newList = []
  //     for (var i = 0; i < this.products.length; i++) {
  //       var isShow = false
  //       // this.selectedValueが初期値でなければ（いずれかのoptionが選ばれていれば）
  //       if (this.selectedValue !== '') {
  //         // walkと比較して、表示・非表示を決める
  //         if (this.selectedValue == this.products[i].walk) {
  //           isShow = true
  //         } else {
  //           // walkと一致しなければ次へ
  //           continue
  //         }
  //       }

  //       // エリアが一致するか
  //       // 1. show1がチェックされていて、prefが東京
  //       // 2. show2がチェックされていて、prefが大阪
  //       // 上記のどちらかを満たせば表示、そうでなければ非表示
  //       if (
  //         (this.show1 && this.products[i].pref == 'tokyo') ||
  //         (this.show2 && this.products[i].pref == 'osaka')
  //       ) {
  //         isShow = true
  //       } else {
  //         isShow = false
  //       }

  //       if (isShow) {
  //         newList.push(this.products[i])
  //       }
  //     }

  //     return newList
  //   },
  // },
  // props: {
  //   yourTweetRecords: {
  //     type: Object,
  //     default: () => {},
  //     required: true,
  //   },
  //   screenName: {
  //     type: String,
  //     default: '',
  //     required: true,
  //   },
  // },
}
</script>

<style scoped></style>
