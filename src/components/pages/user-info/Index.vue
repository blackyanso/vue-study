<template>
  <section class="userInfo">
    <h2>ユーザー情報表示画面</h2>
    ここにログイン画面で入力したユーザー情報が表示されます。<br>
    都道府県は「郵便番号から取得できた都道府県データ」、ニックネームは入力値そのままが表示されます。<br>
    ログアウトしたい方は <LogoutLink :display-message="こちら" />
    <h3>ログイン情報</h3>
    <table>
      <tr>
        <th class="title">
          ユーザー都道府県
        </th>
        <td class="contents">
          {{ this.$store.state.userInfo.prefName }}
        </td>
      </tr>
      <tr>
        <th class="title">
          ニックネーム
        </th>
        <td class="contents">
          {{ this.$store.state.userInfo.nickname }}
        </td>
      </tr>
    </table>
  </section>
</template>
<script>
export default {
  components: {
    LogoutLink: () => import('@/components/module/user/LogoutLink.vue')
  }
}
</script>
<style lang="scss" scoped>
  .userInfo {
    h3 {
      margin-top: 50px;
    }
    table {
      align-content: center;
      margin: 0 auto;
      border-radius: 5px;
    }
    th {
      background-color: #c9d4f0;
    }
    td {
      background-color: #e7ebf1;
    }
    .title {
      width: 150px;
      padding: 10px;
      border: solid 1px #051209;
      border-radius: 5px;
    }
    .contents {
      width: 200px;
      padding: 10px;
      border: solid 1px #051209;
      border-radius: 5px;
    }
  }
</style>
