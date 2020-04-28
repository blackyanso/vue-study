<template>
  <form @submit.prevent="$emit('addItemToCart')">
    <span class="itemLabel"> 商品ID（3桁数字）： </span>
    <input
      :value="itemId"
      type="text"
      pattern="\d{3}"
      class="itemId"
      required
      @input="$emit('updateItemId',{ id:$event.target.value })"
    >
    <span class="itemLabel"> 商品名（20文字以内）： </span>
    <input
      :value="itemName"
      type="text"
      maxlength="20"
      class="itemName"
      required
      @input="$emit('updateItemName',{ name:$event.target.value })"
    >
    <input
      type="submit"
      class="button"
      value="商品登録"
    >
  </form>
</template>
<script>
export default {
  props: {
    itemId: {
      type: String,
      default: ''
    },
    itemName: {
      type: String,
      default: ''
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
  /* NGなら赤くする */
  form {
    input:invalid {
      border : tomato 2px solid;
    }
    .itemId{
      margin-left: 5px;
      font-size: 16px;
      width: 50px;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid black;
    }
    .itemName{
      margin-left: 5px;
      font-size: 16px;
      width: 300px;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid black;
    }
    .itemLabel{
      margin-left: 15px;
      font-size: 16px;
    }
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
      margin-left: 20px;
    }
    .button:hover {
      background: #67c5ff;
      color: white;
    }
  }
</style>
