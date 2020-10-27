<template>
  <div id="app">
    <Nav
      :isLogin="this.$store.state.isLogin"
      :userInfo="this.$store.state.userInfo"
      :currentIndex="this.$store.state.blogListIndex"
    ></Nav>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav";
export default {
  components: {
    Nav,
  },
};
</script>

<style >
</style>
