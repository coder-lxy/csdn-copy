<template>
  <div class="container clearfix">
    <div class="nav clearfix">
      <NavSecond />
    </div>
    <div class="mainContent clearfix">
      <div class="main">
        <BlogList :blogList="blogs" />
      </div>
    </div>
    <!-- <NavSecond></NavSecond> -->
  </div>
</template>

<script>
import NavSecond from "../components/NavSecond";
import BlogList from "../components/BlogList";
import * as blogServ from "../services/blogService";
import { search } from "../services/blogService";
export default {
  data() {
    return {
      blogs: [],
    };
  },
  components: {
    BlogList,
    NavSecond,
  },
  created() {
    this.setBlogs();
    console.log(this.$store.state.token);
    // console.log();
  },
  methods:{
    toSearch() {
      search().then(v=>{
        console.log(v);
      })
    }
  },
  computed: {
    getSearchKey() {
      return this.$store.state.searchKey;
    },
  },
  watch: {
    getSearchKey: {
      deep:true,
      handler(val){
        // console.log(val);
        search(val).then(v=>{
          // console.log(v);
          this.blogs=v.data
        })
        // this.toSearch(newValue)
      }
      
    },
  },
  methods: {
    async setBlogs() {
      var resp = await blogServ.getBlogs();
      this.blogs = resp;
    },
  },
};
</script>

<style scoped>
.container {
  width: 1180px;
  padding: 12px 0 0;
  margin: 0 auto;
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
  width: 1072px;
  float: right;
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
  width: 760px;
  min-height: 500px;
  margin-right: 12px;
}
/* .header {
  width: 1200;
  height: 180px;
  background: url(../assets/bgImg.jpg);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
} */
/* .fixedNav {
  position: fixed;
  top: 300px;
  right: 50px;
} */
</style>