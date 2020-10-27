<template>
  <div>
    <UserHeaderBar />
    <div class="container clearfix">
      <div class="left-box">
      <UserAside :currentIndex="index"/>
      </div>
      <div class="right-box">
        <MyBlogs></MyBlogs>
        <!-- <ViewContainer></ViewContainer> -->
      </div>
    </div>
  </div>
</template>

<script>
import UserHeaderBar from "../components/UserHeaderBar"
import UserAside from "../components/UserAside"
import ViewContainer from "../components/ViewContainer"
import MyBlogs from "../components/MyBlogs"
import { getUserBlogs } from '../services/blogService';
export default {
  components:{
    UserHeaderBar,
    UserAside,
    MyBlogs
  },
  data(){
    return {
      index:this.$route.query.id,
      blogList:[]
    }
  },
  methods:{
    myBlogs() {
      getUserBlogs(this.index).then(v=>{
        console.log(v);
      })
    }
  }
};
</script>

<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
}
.left-box {
  width: 146px;
  float: left;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
}
.right-box {
  float: right;
}
</style>