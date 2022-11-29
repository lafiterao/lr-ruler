/*
 * @Author: lafite.rao 827943653@qq.com
 * @Date: 2022-11-28 23:03:30
 * @LastEditors: lafite.rao 827943653@qq.com
 * @LastEditTime: 2022-11-28 23:21:09
 * @FilePath: \lr-ruler\packages\lr-ruler\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import lrRuler from './index.vue'

console.log(lrRuler, 'lrRuler>>>>');
lrRuler.install = (Vue)=> {
    Vue.component(lrRuler.name, lrRuler)
}

export default lrRuler