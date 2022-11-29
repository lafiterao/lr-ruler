/*
 * @Author: lafite.rao 827943653@qq.com
 * @Date: 2022-11-28 23:09:14
 * @LastEditors: lafite.rao 827943653@qq.com
 * @LastEditTime: 2022-11-28 23:23:58
 * @FilePath: \lr-ruler\packages\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const allJs = require.context('./', true, /\.js$/)

const allInstalls = (Vue)=>{
    allJs.keys().forEach(item=>{
        console.log(allJs(item), 'allJs(item)>>>');
        if(allJs(item).default && allJs(item).default.name && allJs(item).default.name !== 'allInstalls') {
            Vue.use(allJs(item).default)
        }
    })
}

console.log(allInstalls, 'allInstalls>>>>');
export default allInstalls