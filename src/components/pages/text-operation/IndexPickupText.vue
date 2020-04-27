<template>
  <section class="pickupText">
    <div v-if="inputTextsSize">
      <select
        :value="selectIndex"
        class="select-sample-input"
        name="serchIndex"
        @change="$emit('change', Number($event.target.value))"
      >
        <option
          v-for="n in inputTexts.length"
          :key="n"
          :value="n - 1"
        >
          {{ n }}
        </option>
      </select>番目に入力されている文字列は：
      <span>{{ inputTexts[selectIndex].text }}</span> です。
      <br>
    </div>
    <div v-else>
      <span>入力されているテキストはありません</span>
      <br>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    selectIndex: {
      type: Number,
      default: 0
    },
    inputTexts: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    inputTextsSize() {
      return this.inputTexts.length
    }
  }
}
</script>

<style lang="scss" scoped>
.pickupText {
  select {
    font-size: 16px;
    margin-right: 5px;
  }
}
</style>
