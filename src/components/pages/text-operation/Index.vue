<template>
  <section class="textOperation">
    <h3>テキスト出力エリア</h3>
    <IndexPickupText
      :select-index="selectIndex"
      :input-texts="inputTexts"
      @change="updateSelectIndex"
    />
    <h3>テキスト入力エリア</h3>
    <IndexInputTextList
      :input-texts="inputTexts"
      @input="updateInputTexts($event)"
      @deleteText="deleteText($event)"
    />
    <!-- 親側での指定方法 -->
    <input
      type="button"
      class="button"
      value="追加"
      @click="addText"
    >
  </section>
</template>

<script>
export default {
  components: {
    IndexPickupText: () => import('./IndexPickupText.vue'),
    IndexInputTextList: () => import('./IndexInputList.vue')
  },
  data() {
    return {
      selectIndex: 0,
      inputTexts: []
    }
  },
  methods: {
    // 子コンポーネントに渡しているObject操作は親で実装
    addText() {
      this.inputTexts.push({ text: '' })
    },
    updateInputTexts(payload) {
      this.inputTexts = payload
    },
    deleteText(index) {
      this.inputTexts.splice(index, 1)
      this.displayInputText()
    },
    displayInputText() {
      const { selectIndex, inputTexts } = this
      const index = inputTexts.length - 1
      if (!inputTexts.length) {
        this.selectIndex = 0
      } else if (!inputTexts[selectIndex]) {
        this.selectIndex = index
      }
    },
    updateSelectIndex(payload) {
      this.selectIndex = payload
    }
  }
}
</script>

<style lang="scss" scoped>
.textOperation {
  .button {
    display: inline-block;
    padding: 0.3em 1em;
    text-decoration: none;
    font-size: 16px;
    color: #67c5ff;
    border: solid 2px #67c5ff;
    border-radius: 3px;
    transition: .4s;
    margin-top: 15px;
  }
  .button:hover {
    background: #67c5ff;
    color: white;
  }
}
</style>
