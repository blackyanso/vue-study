<template>
  <div>
    <div
      v-for="(text,index) in inputTexts"
      :key="index"
    >
      <IndexInputListText
        :input-text="inputTexts[index]"
        @input="$emit('input', updateText($event, index))"
        @deleteText="$emit('deleteText', index)"
      />
    </div>
  </div>
</template>
<script>
export default {
  components: {
    IndexInputListText: () => import('./IndexInputListText.vue')
  },
  props: {
    inputTexts: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    updateText(payload, index) {
      const cloneInputTexts = [...this.inputTexts]
      cloneInputTexts.splice(index, 1, payload)
      return cloneInputTexts
    }
  }
}
</script>
<style scoped>
</style>
