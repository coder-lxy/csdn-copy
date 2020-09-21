<template>
  <div class="csdn-nav-second">
    <div class="nav-com">
      <ul>
        <li v-for = "(item,index) in navLists" :key="index" class="nav-com-li" :class="{active: index==currentIndex}">
            <a href="" class="current">{{item}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            navLists:['推荐','动态','程序人生','Python','Java','百万人学AI','前端','架构','区块链','数据库','5G','游戏开发','移动开发','运维','安全','云计算/大数据','研发管理','物联网','计算机基础'],
            currentIndex:0
        }
    }
};
</script>

<style>
.csdn-nav-second {
  width: 96px;
  background-color: #fff;
  margin-right: 12px;
  text-align: center;
  line-height: 32px;
}
.csdn-nav-second .nav-com ul .active {
    background-color: #fff;
}
.csdn-nav-second .nav-com ul .active a {
    color: #e33e33;
    font-weight: 700;
}
.csdn-nav-second .nav-com .nav-com-li {
    width: 100%;
    border-radius: 4px;
}
.csdn-nav-second .nav-com .nav-com-li:hover {
    background-color: rgba(227,62,51,.2);
}
.csdn-nav-second .nav-com .nav-com-li a {
    width: 100%;
    height: 32px;
    display: block;
    font-size: 14px;
    color: #555666;
    margin-bottom: 1px;
    /* position:relative;
    z-index: 1; */
}
.csdn-nav-second .nav-com .nav-com-li:hover a{
    color: #e33e33;
    font-weight: 700;
}
</style>