/*
 * @Author: lafite.rao 827943653@qq.com
 * @Date: 2022-11-28 22:57:29
 * @LastEditors: lafite.rao 827943653@qq.com
 * @LastEditTime: 2022-12-04 23:33:35
 * @FilePath: \lr-ruler\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import lrRuler from 'lr-ruler'
Vue.use(lrRuler)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
