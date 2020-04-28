<template>
  <div>
    <table
      v-if="cartItems.length > 0"
      class="table"
    >
      <tr>
        <th class="id th">
          商品ID（数値3桁）
        </th>
        <th class="name th">
          商品名（20桁）
        </th>
        <th class="op th">
          操作
        </th>
      </tr>
      <tbody
        v-for="(item,index) in cartItems"
        :key="index"
      >
        <IndexCartItem
          :item-id="item.itemId"
          :item-name="item.itemName"
          @deleteItem="$emit('deleteItem',index)"
        />
      </tbody>
    </table>
    <div v-else>
      現在カートには商品はありません。
    </div>
  </div>
</template>
<script>
export default {
  components: {
    IndexCartItem: () => import('./IndexCartItem')
  },
  props: {
    cartItems: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss" scoped>
  table {
    align-content: center;
    margin: 0 auto;
    border: solid 2px #42b983;
    border-radius: 5px;

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
    .th {
      background-color: #ddf0e8;
    }
  }
</style>
