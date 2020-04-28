<template>
  <tr>
    <td class="id">
      {{ itemId }}
    </td>
    <td class="name">
      {{ itemName }}
    </td>
    <td class="op">
      <a
        class="a-delete"
        @click="$emit('deleteItem')"
      >削除する</a>
    </td>
  </tr>
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
  }
}
</script>
<style lang="scss" scoped>
  .id {
    width: 200px;
    padding: 10px;
    border: solid 1px #051209;
    border-radius: 5px;
  }
  .name {
    width: 450px;
    padding: 10px;
    border: solid 1px #051209;
    border-radius: 5px;
  }
  .op {
    width: 70px;
    padding: 10px;
    border: solid 1px #051209;
    border-radius: 5px;
  }
</style>
