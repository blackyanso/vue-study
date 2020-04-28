const path = require('path')

module.exports = {
  publicPath: './',
  outputDir: path.resolve(__dirname, 'docs'),
  devServer: {
    proxy: {
      '^/api': {
        // 学習時は以下のAPIに簡易接続して検証する.
        target: 'http://zip-cloud.appspot.com'
      }
    }
  }
}
