<template>
  <section class="textList">
    <input
      :value="inputText.text"
      type="text"
      class="text"
      @input="$emit('input', sendInpuText($event))"
    >
    <a
      href="#"
      @click="$emit('deleteText')"
    >削除する</a>
  </section>
</template>

<!--

v-modelをmodel.propで繋ぐ場合も結局逆流阻止のロジックを書かなくてはいけない。
https://qiita.com/simezi9/items/c27d69f17d2d08722b3a

-->

<script>
export default {
  props: {
    inputText: {
      type: Object,
      default: () => ({
        text: ''
      })
    }
  },
  methods: {
    sendInpuText(event) {
      const text = event.target.value
      return {
        text
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .textList {
    input.text {
      width: 500px;
      margin-top: 15px;
      padding: 15px;
      border-radius: 5px;
      border: 1px solid black;
      font-size: 16px;
      color: #a0a9a9;
    }
    a {
      font-size: 16px;
      margin-left: 10px;
    }
  }
</style>
