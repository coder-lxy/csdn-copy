<template>
  <div>
    <UserHeaderBar />
    <div class="container">
      <div class="left-box">
      <UserAside />
      </div>
    </div>
  </div>
</template>

<script>
import UserHeaderBar from "../components/UserHeaderBar"
import UserAside from "../components/UserAside"
export default {
  components:{
    UserHeaderBar,
    UserAside
  }
};
</script>

<style scoped>
.container {
  width: 960px;
  margin: 0 auto;
}
.left-box {
  width: 146px;
  /* float: left; */
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
}
</style>