<template>
  <form
    id="form"
    @submit.prevent="$emit('submit')"
  >
    <input
      v-model="zipCodeInfo.parent"
      type="text"
      pattern="\d{3}"
      class="zipCode"
      required
    >
    <span class="span-zip-code"> - </span>
    <input
      v-model="zipCodeInfo.child"
      type="text"
      pattern="\d{4}"
      class="zipCode"
      required
    >
    <input
      type="submit"
      class="button"
      value="結果取得"
      :disabled="!isValidInput"
    >
  </form>
</template>

<script>
export default {
  model: {
    prop: 'zipCodeInfo'
  },
  props: {
    zipCodeInfo: {
      type: Object,
      default: () => ({})
    },
    isValidInput: {
      type: Boolean,
      default: false
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
    .zipCode{
      margin-left: 5px;
      font-size: 16px;
      width: 50px;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid black;
    }
    span{
      .zipCode{
        margin-left: 5px;
        font-size: 16px;
      }
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
