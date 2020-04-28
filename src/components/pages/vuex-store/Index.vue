<template>
  <section class="vuexSample">
    <h2>カート操作テスト</h2>
    <div>
      Vuexを利用して、Storeに格納された情報の操作を行います。<br>
      この画面にて登録したデータは他画面に遷移したのちも保持されています。<br>
      尚、リロード（F5等）を行うとVueインスタンスが再生成されるため、情報は失われます。
    </div>
    <h3>
      商品簡易登録
    </h3>
    <IndexItemAddForm
      :item-id="itemId"
      :item-name="itemName"
      @addItemToCart="addItemToCart"
      @updateItemId="updateItemId"
      @updateItemName="updateItemName"
    />
    <h3>
      現在のカートの状態（登録件数: {{ cartItems.length }} 件）
    </h3>
    <IndexCart
      :cart-items="cartItems"
      @deleteItem="deleteItem"
    />
  </section>
</template>
<script>
export default {
  components: {
    IndexItemAddForm: () => import('./IndexItemAddForm.vue'),
    IndexCart: () => import('./IndexCart.vue')
  },
  data() {
    return {
      itemId: null,
      itemName: null
    }
  },
  computed: {
    cartItems() {
      return this.$store.state.cart.items
    }
  },
  methods: {
    updateItemId(payload) {
      this.itemId = payload.id
    },
    updateItemName(payload) {
      this.itemName = payload.name
    },
    addItemToCart() {
      this.$store.dispatch('addItem', {
        itemId: this.itemId,
        itemName: this.itemName
      })
    },
    deleteItem(index) {
      this.$store.dispatch('deleteItem', index)
    }
  }
}
</script>

<style lang="scss" scoped>
  .vuexSample{
    h3 {
      margin-top: 50px;
    }
  }
</style>
