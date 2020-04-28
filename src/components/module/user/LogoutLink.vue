<template>
  <a
    href="#"
    @click="logout"
  >{{ displayMessage }}</a>
</template>

<script>
export default {
  props: {
    displayMessage: {
      type: String,
      default: () => ('こちら')
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('userLogout')
      // ログイアウトのため画面は再描画
      this.$router.go({ path: this.$router.currentRoute.path, force: true })
    }
  }
}
</script>
