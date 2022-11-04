const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

//vant配置
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
module.exports = {
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
};

// //代理服务器
// module.exports = {
//   devServer: {
//     proxy: {
//       '/api': {
//         target: '<url>',//代理转发路径
//         pathRewrites:{"^/api":""},//匹配字符串
//         ws: true,//支持websocket
//         changeOrigin: true,//host源
//       },
//       '/foo': {
//         target: '<other_url>'
//       }
//     }
//   }
// }
