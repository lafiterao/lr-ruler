<!--
 * @Author: lafite.rao 827943653@qq.com
 * @Date: 2022-11-28 22:57:29
 * @LastEditors: lafite.rao 827943653@qq.com
 * @LastEditTime: 2022-12-04 23:32:41
 * @FilePath: \lr-ruler\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
      <lr-ruler
        @post-NumValue="handleWeight" 
        :NowNum="60" 
        :maxNum="80" 
        :minNum="20" 
        :ruleWidth="30"
        :pointerColor="'#52D2CA'" 
        class="rules-msg"
      ></lr-ruler>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleWeight() {
      // console.log(msg)//该值打印的就是你改变刻度尺的值
    }
  }
}
</script>

<style>

</style>
