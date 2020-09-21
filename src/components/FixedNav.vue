<template>
  <div class="list-box">
    <div class="mask"></div>
    <img src="../assets/monkey.png" alt />
    <div class="list-group">
      <a href class="item"></a>
      <a
        v-for="(item,index) in listItmes"
        :key="index"
        href="javascript:;"
        class="item"
        @click="itemChange(index)"
        :class="{active:index==currentIndex}"
      >{{item}}</a>
      <div class="sort">
        <i></i>
      </div>
      <div class="back-top">
        <i></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listItmes: [
        "导航",
        "热门话题",
        "精选头条",
        "精彩视频",
        "技术团队",
        "会员精选",
        "推荐专题",
        "Python",
        "程序人生",
        "大前端",
        "Java",
        "开源技术",
        "人工智能",
        "友情链接",
      ],
      currentIndex: -1,
    };
  },
  methods: {
    itemChange(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.list-box {
  position: relative;
  padding-top: 10px;
  width: 62px;
}
.list-box img {
  width: 55px;
  position: absolute;
  top: -44px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9;
}
.list-box .list-group {
  position: relative;
  width: 62px;
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  z-index: 99;
}
.list-box .list-group .item {
  display: block;
  font-size: 12px;
  font-weight: 400;
  color: #000;
  text-align: center;
  line-height: 24px;
  margin-bottom: 10px;
  /* transform: all .3s; */
}
.list-box .list-group .item:hover {
  border-radius: 4px;
  background-color: #ff4d4d;
  color: #fff;
}
.list-box .list-group .active {
  border-radius: 4px;
  background-color: #ff4d4d;
  color: #fff;
}
</style>