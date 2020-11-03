<template>
  <ul class="aside">
    <li v-for="(item,index) in myList" :key="index">
      <a href="javascript:;" @click="changeIndex(index)" :class="{active:currentIndex===index}">{{item}}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props:{
    currentIndex:''
  },
  data() {
    return {
      myList:['我的收藏','我的关注','我的粉丝','我的博客','我的点赞','我的评论'],
      // currentIndex:0
    }
  },
  created() {

  },
  methods:{
    changeIndex(index) {
      this.$store.commit("changeUserListIndex",index)
    }
  }
}
</script>

<style scoped>
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
.aside li a:hover {
  background: #f7f7fc;
  color: #555666;
}
.aside li .active {
  background: #e33e33;
  color: #fff;
}
</style>