<template>
  <section class="apiGet">
    <h2>API操作テスト</h2>
    <div>
      外部APIを呼び出して結果を画面に出力します。<br>
      今回は郵便番号を入力して、結果取得ボタンを押して結果を取得することができます。
    </div>
    <h3>
      郵便番号検索
    </h3>
    <IndexZipSearch
      v-model="zipCodeInfo"
      :is-valid-input="isValidInput"
      @submit="getZipInfo"
    />
    <h3>
      検索結果
    </h3>
    <IndexSearchResult :response="response" />
  </section>
</template>

<script>
import axios from '@/axios'

export default {
  components: {
    IndexZipSearch: () => import('./IndexSearchInput.vue'),
    IndexSearchResult: () => import('./IndexSearchResult.vue')
  },
  data() {
    return {
      zipCodeInfo: {
        parent: null,
        child: null
      },
      response: {
        results: null
      },
      isValidInput: false
    }
  },
  computed: {
    zipCode() {
      return Object.values(this.zipCodeInfo).join('-')
    }
  },
  watch: {
    zipCode() {
      this.isValidInput = document.getElementById('form').checkValidity()
    }
  },
  methods: {
    getZipInfo() {
      axios.get('http://localhost:8080/api/search', {
        params: {
          // ここにクエリパラメータを指定する
          zipcode: this.zipCode,
          limit: 100
        }
      }).then((response) => {
        if (response.data) {
          this.response = response.data
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .apiGet{
    h3 {
      margin-top: 50px;
    }
    /* NGなら赤くする */
    form {
      input:invalid {
        border : tomato 2px solid;
      }
    }
  }
</style>
