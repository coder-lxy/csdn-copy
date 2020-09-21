<template>
  <div id="app">
    <Nav></Nav>

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

<style scoped>
/* .csdn-nav-bar {
  width: 100%;
  height: 44px;
  padding: 0 24px;
  font-size: 0.75em;
} */
.csdn-toolbar {
  min-width: 1200px;
  padding: 0 24px;
  line-height: 1.5em;
  color: #333;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;
}
</style>
