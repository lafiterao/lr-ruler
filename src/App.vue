<template>
  <div id="app">
      <lr-ruler
        @post-NumValue="handleWeight" 
        :NowNum="60" 
        :maxNum="80" 
        :minNum="20" 
        :numSize="40"
        :pointerColor="'#52D2CA'" 
        class="rules-msg"
      ></lr-ruler>
  </div>
</template>

<script>
import LrRuler from 'lr-ruler';
export default {
  name: 'App',
  components: { LrRuler },
  methods: {
    handleWeight(msg) {
      console.log(msg)//该值打印的就是你改变刻度尺的值
    }
  }
}
</script>

<style>

</style>
