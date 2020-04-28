<template>
  <table
    v-if="response.results"
    class="table"
  >
    <tr>
      <th class="zip">
        郵便番号
      </th>
      <th class="name">
        住所（全角漢字）
      </th>
      <th class="kana">
        住所（ｶﾀｶﾅ）
      </th>
    </tr>
    <tbody
      v-for="(result,index) in response.results"
      :key="index"
    >
      <tr>
        <td class="zip">
          {{ result.zipcode }}
        </td>
        <td class="name">
          {{ getFullAddressByIndex(index) }}
        </td>
        <td class="kana">
          {{ getFullAddressKanaByIndex(index) }}
        </td>
      </tr>
    </tbody>
  </table>
  <div v-else>
    検索結果はありません
  </div>
</template>

<script>
export default {
  props: {
    response: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    getFullAddressByIndex(index) {
      if (this.response) {
        const { address1, address2, address3 } = this.response.results[index]
        return address1 + address2 + address3
      }
      return ''
    },
    getFullAddressKanaByIndex(index) {
      if (this.response) {
        const { kana1, kana2, kana3 } = this.response.results[index]
        return kana1 + kana2 + kana3
      }
      return ''
    }
  }
}
</script>
<style lang="scss" scoped>
  table{
    align-content: center;
    margin: 0 auto;
    border-radius: 5px;
  }
  th {
    background-color: #c9d4f0;
  }
  .zip {
    width: 100px;
    padding: 10px;
    border: solid 1px #051209;
    border-radius: 5px;
  }
  .name {
    width: 350px;
    padding: 10px;
    border: solid 1px #051209;
    border-radius: 5px;
  }
  .kana {
    width: 400px;
    padding: 10px;
    border: solid 1px #051209;
    border-radius: 5px;
  }
</style>
