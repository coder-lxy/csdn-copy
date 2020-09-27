<template>
  <i class="iconfont" :class="[iconClass,extraClass]"></i>
</template>

<script>
var map = {
  like:'icon-dianzan',
  hit:'icon-hit',
  comment:'icon-pinglun'
}
export default {
  props:{
    type:{
      type: String,
      required:true
    },
    extraClass:{
      type: String,
      default:""
    }
  },
  computed:{
    iconClass() {
      return map[this.type]
    }
  }
}
</script>

<style>
</style>