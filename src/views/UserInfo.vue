<template>
  <div>
    <UserHeaderBar />
    <div class="container clearfix">
      <div class="left-box">
      <UserAside :currentIndex="this.$store.state.userListIndex"/>
      </div>
      <div class="right-box">
        <MsgContent v-show="this.$store.state.userListIndex===0" :list=this.$store.state.likeList></MsgContent>
        <MsgContent v-show="this.$store.state.userListIndex===1" :list=this.$store.state.commentList></MsgContent>
        <MsgContent v-show="this.$store.state.userListIndex===2" :list=this.$store.state.commentList></MsgContent>
        <MsgContent v-show="this.$store.state.userListIndex===3" :list=this.$store.state.commentList></MsgContent>
        <MsgContent v-show="this.$store.state.userListIndex===4" :list=this.$store.state.likeList></MsgContent>
        <MsgContent v-show="this.$store.state.userListIndex===5" :list=this.$store.state.commentList></MsgContent>
        <MsgContent v-show="this.$store.state.userListIndex===6" :list=this.$store.state.noticeList></MsgContent>
        <!-- <MyBlogs></MyBlogs> -->
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
import MsgContent from "../components/MsgContent"
import { getUserBlogs } from '../services/blogService';
export default {
  components:{
    UserHeaderBar,
    UserAside,
    MyBlogs,
    MsgContent
  },
  data(){
    return {
      index:this.$store.state.userListIndex,
      blogList:[]
    }
  },
  created(){
    console.log(this.$store.state.noticeList);
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