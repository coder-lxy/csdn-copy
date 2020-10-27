<template>
  <div class="container clearfix">
    <div class="mainContent clearfix" ref="list" @scroll="handleScroll">
      <div class="main">
        <BlogList v-show="currentIndex === 0" :blogList="hotBlogs" />
        <BlogList v-show="currentIndex === 1" :blogList="recBlogs" />
        <BlogList v-show="currentIndex === 2" :blogList="newestBlogs" />
        <BlogList v-show="currentIndex === 3" :blogList="followBlogs" />
        <Loading v-show="isLoading"></Loading>
        <!-- <div v-show="blogs.length === 0">{{ remindMsg }}</div> -->
      </div>
      <div v-show="RecList.length != 0" class="right-box">
        <TodayRec :todayRec="RecList" />
      </div>
    </div>
  </div>
</template>

<script>
import NavSecond from "../components/NavSecond";
import BlogList from "../components/BlogList";
import TodayRec from "../components/TodayRec";
import Loading from "../components/Loading";
import {
  getHotBlogs,
  getRec,
  getNewest,
  getTodayRec,
  getFollow,
} from "../services/blogService";
import { search } from "../services/blogService";
export default {
  data() {
    return {
      currentIndex: 0,
      hotBlogs: [],
      recBlogs: [],
      newestBlogs: [],
      followBlogs: [],
      hotPage:2,
      recPage:2,
      newPage:2,
      followPage:2,
      RecList: [],
      isLoading: false,
      remindMsg: "这里什么都没有！",
    };
  },
  components: {
    BlogList,
    TodayRec,
    Loading,
  },
  created() {
    this.initBlogs();
    getTodayRec().then((v) => {
      console.log(v.data);
      this.RecList = v.data;
    });
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    initBlogs() {
      let page = 1;
      getHotBlogs(page).then((v) => {
        this.hotBlogs = v.data;
        // this.total = this.blogs.length
      });
      getRec(page).then((v) => {
        this.recBlogs = v.data;
      });
      getNewest(page).then((v) => {
        this.newestBlogs = v.data;
      });
      getFollow(page).then((v) => {
        this.followBlogs = v.data;
      });
    },
    getHotBlogList() {
      this.isLoading = true;
      getHotBlogs(this.hotPage).then((v) => {
        this.hotBlogs = this.hotBlogs.concat(v.data);
       this.hotPage++;
        this.isLoading = false;
      });
    },
    getRecBlogList() {
      this.isLoading = true;
      getRec(this.recPage).then((v) => {
        this.recBlogs = this.recBlogs.concat(v.data);
        this.recPage++;
        this.isLoading = false;
      });
    },
    getNewBlogList() {
      this.isLoading = true;
      getNewest(this.newPage).then((v) => {
        this.newestBlogs = this.newestBlogs.concat(v.data);
        this.newPage++;
        this.isLoading = false;
      });
    },
    getFollowBlogList() {
      this.isLoading = true;
      getFollow(this.followPage).then((v) => {
        this.followBlogs = this.followBlogs.concat(v.data);
        this.followPage++;
        this.isLoading = false;
      });
    },
    handleScroll(e) {
      let scrollTop = e.target.documentElement.scrollTop;
      let clientHeight = e.target.documentElement.clientHeight;
      let scrollHeight = e.target.documentElement.scrollHeight;
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        if (this.currentIndex === 0) {
          this.getHotBlogList();
          console.log(this.hotBlogs);
        }
        if (this.currentIndex === 1) {
          this.getRecBlogList();
        }
        if (this.currentIndex === 2) {
          this.getNewBlogList();
        }
        if (this.currentIndex === 3) {
          this.getFollowBlogList();
        }
      }
    },
  },
  computed: {
    getSearchKey() {
      return this.$store.state.searchKey;
    },
    getBlogListIndex() {
      return this.$store.state.blogListIndex;
    },
  },
  watch: {
    getSearchKey: {
      deep: true,
      handler(val) {
        // console.log(val);
        search(val).then((v) => {
          if (v.data.length != 0) {
            this.blogs = v.data;
          } else {
            this.remindMsg = "暂时没有您要搜索的东西！";
            this.blogs = [];
          }
        });
        // this.toSearch(newValue)
      },
    },
    getBlogListIndex: {
      deep: true,
      handler(val) {
        console.log(val);
        this.currentIndex = val;
      },
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