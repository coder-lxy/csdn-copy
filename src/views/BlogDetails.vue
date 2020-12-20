<template>
  <div class="container">
    <AsideProfile :userInfo="userInfo" class="aside" />
    <div class="main">
      <Blog :blog="blog" />
      <Comment :blogId="blog.blogId" :comments="comments"></Comment>
    </div>
  </div>
</template>

<script>
import Blog from "../components/Blog";
import { getBlog, getComment } from "../services/blogService";
import { getUserInfo } from "../services/blogService";
import AsideProfile from "../components/AsideProfile";
import Comment from "../components/Comment";
export default {
  data() {
    return {
      blog: {},
      // userId: "",
      userInfo: {},
      comments:{}
    };
  },
  components: {
    Blog,
    AsideProfile,
    Comment,
  },
  created() {
    console.log(this.$route.query.id);
    getBlog(this.$route.query.id).then((v) => {
      // console.log(v.data);
      this.blog = v.data;
      // console.log(this.blog.userId);
      getUserInfo(this.blog.userId).then((v) => {
        console.log(v);
        this.userInfo = v.data;
      });
    });
    getComment(this.$route.query.id).then((v) => {
      // console.log(v.data);
      this.comments=v.data
      // console.log(this.comments);
    });
  },
};
</script>

<style scoped>
/* .container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
} */
.aside {
  float: right;
  width: 300px;
  margin-top: 6px;
  margin-right: 46px;
}
.main {
  float: right;
  width: 1010px;
  margin-bottom: 40px;
  margin-right: 20px;
}
</style>