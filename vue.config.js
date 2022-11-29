/*
 * @Author: lafite.rao 827943653@qq.com
 * @Date: 2022-11-27 22:56:06
 * @LastEditors: lafite.rao 827943653@qq.com
 * @LastEditTime: 2022-11-30 01:40:04
 * @FilePath: \lr-ruler\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  productionSourceMap: false,
  transpileDependencies: true,
  lintOnSave: false, //设置是否在开发环境下每次保存代码时都启用 eslint验证
  css: { // css相关配置
    extract:  false,
    // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
    sourceMap: false,
    loaderOptions: {
      less: {
        
      }
    }
  },

});
