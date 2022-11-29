/*
 * @Author: lafite.rao 827943653@qq.com
 * @Date: 2022-11-28 23:09:14
 * @LastEditors: lafite.rao 827943653@qq.com
 * @LastEditTime: 2022-11-30 00:45:36
 * @FilePath: \lr-ruler\packages\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import lrRuler from "./lr-ruler";
const components = [lrRuler]
const install = function (Vue) {
    // 遍历注册所有的组件
    components.map(com=>{
      Vue.component(com.name,com)
    })
  }
// 注意这里的判断，很重要
if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export default {
    install,
    // 组件列表
    ...components
}