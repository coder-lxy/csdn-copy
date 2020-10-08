<template>
  <div class="mask"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 63%, 0.5);
  z-index: 99999;
  /* overflow: auto; */
}
</style>