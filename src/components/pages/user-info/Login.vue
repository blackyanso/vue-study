<template>
  <section class="userLogin">
    <h2>擬似ログイン画面</h2>
    こちらの機能はログイン必要画面の作り方を学ぶための簡易画面です。<br>
    正しい住所が存在する郵便番号とニックネームを入力してボタンを押下してください。<br>
    郵便番号が所属する「都道府県」とニックネームを認証情報として保持します。<br>
    <div v-if="this.$store.state.userInfo.isLogin">
      <h3>ログイン状態</h3>
      ログイン済みです。ログアウトは
      <LogoutLink :display-message="こちら" /> 。
    </div>
    <div
      v-else
      class="login"
    >
      <h3>ログイン項目</h3>
      <div class="label">
        <span>ログイン郵便番号：</span>
        <input
          v-model="zipCode"
          type="text"
          class="text"
          placeholder="例：162-0041"
        >
      </div>
      <span class="err zipCode">郵便番号は [ 数値3桁-4桁 ] で入力してください</span>
      <div class="label">
        <span>ニックネーム：</span>
        <input
          v-model="nickname"
          type="text"
          class="text"
          placeholder="例：test-user"
        >
      </div>
      <input
        type="button"
        class="button"
        value="ログイン"
        @click="login"
      >
    </div>
  </section>
</template>
<script>
export default {
  components: {
    LogoutLink: () => import('@/components/module/user/LogoutLink.vue')
  },
  data() {
    return {
      zipCode: '',
      nickname: ''
    }
  },
  methods: {
    login() {
      this.$store.dispatch('userLogin', this)
    }
  }
}
</script>

<style lang="scss" scoped>
  .userLogin{
    h3 {
      margin-top: 50px;
    }
    .login{
      .label{
        text-align: right;
        margin-right: 40vw;
        margin-bottom: 15px;
      }
      .err{
        font-size: 14px;
        color: crimson;
        background-color: #f5e7ea;
        padding: 5px;
      }
    }
    input.text {
      width: 250px;
      margin-top: 15px;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid black;
      font-size: 16px;
      color: #171818;
    }
    input.button {
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
    input.button:hover {
      background: #67c5ff;
      color: white;
    }
  }
</style>
