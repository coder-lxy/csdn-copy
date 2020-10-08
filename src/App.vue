<template>
  <div id="app">
    <Nav
      :isLogin="this.$store.state.isLogin"
      :userInfo="this.$store.state.userInfo"
      @setSearchKey="goSearch"
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
  created() {
    this.$store.state.userInfo=JSON.parse(localStorage.getItem('userInfo'))
    
  },
  methods:{
    goSearch(msg){
      this.$store.dispatch('setSearchKey', msg)
      console.log(this.$store.state.searchKey);
    }
  }
};
</script>

<style scoped>
/* .nav {
  position: fixed;
  top: 0;
  z-index: 9999;
} */
</style>
