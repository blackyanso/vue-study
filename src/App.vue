<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/text-operation">
        テキスト操作
      </router-link> |
      <router-link to="/api-get">
        外部API操作
      </router-link> |
      <router-link to="/vuex-store">
        Vuex.Store操作
      </router-link> |
      <router-link to="/user-info">
        ユーザー情報（ログイン必須）
      </router-link>
    </div>
    <router-view />
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
