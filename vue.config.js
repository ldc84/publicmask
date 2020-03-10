const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('@', resolve('src'))
      .set('*@',resolve('src/assets'))
      .set('~@',resolve('src/components'))
      .set('^@',resolve('src/common'))
      .set('&@',resolve('src/views'))

    config.module
      .rule('images')
        .use('url-loader')
          .loader('url-loader')
          .tap(options => Object.assign(options, { limit: 1024000 }))
  },
  devServer: {
    proxy: 'https://8oi9s0nnth.apigw.ntruss.com'
  }
}