<template>
  <div class="container clearfix">
    <div class="aside clearfix">
      <AsideProfile :userInfo="userInfo"/>
    </div>
    <div class="main clearfix">
      <Blog :blog="blog" />
    </div>
  </div>
</template>

<script>
import Blog from "../components/Blog";
import { getBlog } from "../services/blogService";
import {getUserInfo} from "../services/blogService"
import AsideProfile from "../components/AsideProfile";
export default {
  data() {
    return {
      blog: {},
      // userId: "",
      userInfo:{}
    };
  },
  components: {
    Blog,
    AsideProfile,
  },
  created() {
    // console.log(this.$route.query.id);
    getBlog(this.$route.query.id).then((v) => {
      console.log(v);
      this.blog = v;
      getUserInfo(this.blog.user.userId).then((v)=>{
        console.log(v);
        this.userInfo=v
      })
      // this.userId=this.blog.user.userId;
      // console.log(this.userId);
    });
    getUserInfo(this.userId).then((v)=>{
      console.log(v);
      this.userInfo=v
    })
  },
};
</script>

<style scoped>
.container {
  width: 1070px;
  margin: 0 auto;
}
.aside {
  width: 260px;
  float: left;
}
.main {
  margin-bottom: 40px;
  float: right;
}
/* .clearfix:after {
	content: "";
	display:block;
	clear:both;
	height:0;
	visibility:hidden;
} */
/* .clearfix {
	*zoom:1;
} */
</style>