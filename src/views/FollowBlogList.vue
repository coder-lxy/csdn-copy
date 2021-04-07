<template>
  <div class="container clearfix">
    <div class="mainContent clearfix" ref="list" @scroll="handleScroll">
      <div class="main">
        <BlogList :blogList="blogList" />
        <Loading v-show="isLoading"></Loading>
      </div>
      <div v-show="RecList.length != 0" class="right-box">
        <TodayRec :todayRec="RecList" />
      </div>
    </div>
  </div>
</template>

<script>
import BlogList from "../components/BlogList";
import TodayRec from "../components/TodayRec";
import Loading from "../components/Loading";
import { getFollow, getTodayRec } from "../services/blogService";
export default {
  components: {
    BlogList,
    TodayRec,
    Loading,
  },
  data() {
    return {
      blogList: [],
      RecList: [],
      requestData: {
        page: 1,
        limit: 10,
      },
      isLoading: false,
    };
  },
  created() {
    this.getList()
    getTodayRec().then((v) => {
      this.RecList = v.data;
    });
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    getList() {
      this.isLoading = true;
      getFollow(this.requestData).then((v) => {
        if(v.data.length===0) {
          this.$message('已经到底啦！')
        } else {
          this.blogList = this.blogList.concat(v.data);
          this.requestData.page++;
        }
        this.isLoading = false;
      });
    },
    handleScroll(e) {
      let scrollTop = e.target.documentElement.scrollTop;
      let clientHeight = e.target.documentElement.clientHeight;
      let scrollHeight = e.target.documentElement.scrollHeight;
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        this.getList()
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 1160px;
  padding: 12px 0 0;
  margin: 0 auto;
  overflow: hidden;

  /* margin-top: 46px; */
}
.container .nav {
  float: left;
  width: 96px;
  background-color: #fff;
  margin-right: 12px;
  text-align: center;
  line-height: 32px;
  /* position: fixed;
  top: 46px; */
}
.container .mainContent {
  width: 1180px;
  margin: 0 auto;
  /* overflow-y: scroll; */
  /* height: 40em; */
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
  height: 0; /*兼容旧浏览器*/
  visibility: hidden; /*兼容旧浏览器*/
}
.clearfix {
  *zoom: 1; /*兼容IE6~7浏览器*/
}
.container .mainContent .main {
  float: left;
  width: 660px;
  margin: 0 auto;
  min-height: 500px;
  /* margin-right: 12px; */
}
.container .mainContent .right-box {
  float: right;
}
</style>