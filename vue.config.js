const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
});

//vant配置
const { VantResolver } = require("unplugin-vue-components/resolvers");
const ComponentsPlugin = require("unplugin-vue-components/webpack");
module.exports = {
    configureWebpack: {
        plugins: [
            ComponentsPlugin({
                resolvers: [VantResolver()],
            }),
        ],
    },
};
module.exports = {
    lintOnSave: false, // 当保存时不进行eslint的检查
    devServer: {
        open: true, //自动打开默认浏览器
    },
};

// //代理服务器
module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://gmall-h5-api.atguigu.cn", //代理转发路径
                pathRewrites: { "^/api": "" }, //匹配字符串
                ws: true, //支持websocket
                changeOrigin: true, //host源
            },
            // '/foo': {
            //   target: '<other_url>'
            // }
        },
    },
};
