<template>
  <div>
    <UserHeaderBar />
    <div class="container clearfix">
      <div class="left-box">
        <ul class="aside">
          <li v-for="(item,index) in myList" :key="index">
            <a href="javascript:;" @click="changeIndex(index)" :class="{active:currentIndex===index}">{{item}}</a>
          </li>
        </ul>
      <!-- <UserAside :currentIndex=currentIndex></UserAside> -->
      </div>
      <div class="right-box">
        <MyCollect v-show="currentIndex===0" :userId=userId></MyCollect>
        <MyFollow v-show="currentIndex===1" ></MyFollow>
        <MyFans v-show="currentIndex===2" ></MyFans>
        <MyBlog v-show="currentIndex===3" :userId=userId></MyBlog>
        <MyLike v-show="currentIndex===4"></MyLike>
        <MyComment v-show="currentIndex===5"></MyComment>
        <MyNotice v-show="currentIndex===6"></MyNotice>
        <!-- <ViewContainer></ViewContainer> -->
      </div>
    </div>
  </div>
</template>

<script>
import UserHeaderBar from "@/components/UserHeaderBar"
import UserAside from "@/components/UserAside"
import MyFans from "./components/MyFans"
import MyFollow from "./components/MyFollow"
import MyCollect from "./components/MyCollect"
import MyBlog from "./components/MyBlog"
import MyLike from "./components/MyLike"
import MyComment from "./components/MyComment"
import MyNotice from "./components/MyNotice"
import { getUserBlogs, getUserInfo } from '@/services/blogService';
export default {
  components:{
    UserHeaderBar,
    UserAside,
    MyCollect,
    MyFollow,
    MyFans,
    MyBlog,
    MyLike,
    MyComment,
    MyNotice
  },
  data(){
    return {
      currentIndex: 0,
      userId: '',
      myList:['我的收藏','我的关注','我的粉丝','我的博客','我的点赞','我的评论','公告'],
    }
  },
  created() {
    this.currentIndex = this.$route.query.id
    this.userId= this.$store.state.userInfo.userId
  },
  methods:{
    changeIndex(index) {
      this.currentIndex = index
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
.aside {
  width: 146px;
  padding-top: 16px;
  background: #fff;
}
.aside li {
  width: 100%;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
  color: #555666;
  margin-bottom: 16px;
}
.aside li a {
  display: block;
  width: 80%;
  height: 100%;
  font-size: 14px;
  color: #555666;
  text-align: center;
  margin: 0 auto;
  border-radius: 4px;
}
/* .aside li a:hover {
  background: #f7f7fc;
  color: #555666;
} */
.aside li .active {
  background: #e33e33;
  color: #fff;
}
.right-box {
  width: 890px;
  float: left;
}
</style>