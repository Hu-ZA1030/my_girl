/*
 * @Author: Hu-ZA1030 2250552567@qq.com
 * @Date: 2022-09-26 23:32:56
 * @LastEditors: Hu-ZA1030 2250552567@qq.com
 * @LastEditTime: 2022-10-02 18:09:48
 * @FilePath: \my_girl\vue.config.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Hu-ZA1030 2250552567@qq.com, All Rights Reserved. 
 */
const webpack = require('webpack')

const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  //使用./后就不用修改那个index里面的内容了,也可以改成CDN地址
  publicPath: (() => {
    switch (process.env.NODE_ENV) {
      case 'production':
        return '/'
      default:
        return './' // 相对路径
    }
  })(),
  outputDir: 'dist',//build输出地址
  assetsDir: './assets/',
  filenameHashing: false,// 文件名哈希
  lintOnSave: false,//启用eslint检查,这个鬼东西检查太严格了,关掉
  runtimeCompiler: false,//运行时编译,有性能损耗,去掉
  transpileDependencies: [],//babel-loader 默认会跳过 node_modules 依赖
  productionSourceMap: false,//生产环境是否构建生成source map
  css: {
    // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
    // extract: true,

    // 是否开启 CSS source map？
    sourceMap: false,

    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
          }),
          pxtorem({
            rootValue: 37.5,
            propList: ['*'],
          })
        ]
      }
    },

    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    modules: false

  },
  chainWebpack: config => {
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      'window.Quill': 'quill', 'Quill': 'quill/dist/quill.js'
    }])
  },
  devServer: { // 开发配置
    port: 8082, // 端口号
    disableHostCheck: true, // 禁用域名检查
    noInfo: true, // 启用 noInfo 后，诸如「启动时和每次保存之后，那些显示的 webpack 包(bundle)信息」的消息将被隐藏。错误和警告仍然会显示。
    hot: true, // 热更新
    compress: true, // 一切服务都启用 gzip 压缩
    inline: true,
    // 代理api服务
    proxy: {
      '/api/*': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          // '^/api': '' // 重写路径：“/api” > "/"
        },
      }
    }
  },
};
