<template>
  <div class="view-container">
    <div class="content">
      <div class="bar">
        <h3 class="title">我的关注</h3>
        <span class="num">共11人</span>
      </div>
      <ul class="watch-list">
        <li class="item-cont">
          <a href="" class="fans">
            <img class="header" src="" alt="">
            </a>
            <a href="" class="nick"></a>
            <a href="" class="warch-btn">取消关注</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    blogList:[]
  }

}
</script>

<style scoped>
.view-container {
    margin-left: 168px;
    background-color: #fff;
    min-height: 95%;
    padding: 0 24px;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
    min-height: 510px;
}
.content .bar{
    overflow: hidden;
    height: 90px;
    line-height: 90px;
    border-bottom: 1px solid #e0e0e0;
}
.content .bar .title {
    font-size: 20px;
    color: #3d3d3d;
    float: left;
}
.content .bar .num {
    font-size: 14px;
    color: #4d4d4d;
    float: right;
}
.content .watch-list .item-cont {
    height: 82px;
    line-height: 82px;
    overflow: hidden;
    border-bottom: 1px solid #e0e0e0;
}
.content .watch-list .item-cont .header {
    float: left;
    width: 50px;
    height: 50px;
    margin-right: 16px;
    border-radius: 50%;
    margin-top: 16px;
}
.content .watch-list .item-cont .nick {
    float: left;
    font-size: 16px;
    color: #4d4d4d;
}
.content .watch_list .item_cont .watch_btn{
    float: right;
    border: 1px solid #999;
    border-radius: 4px;
    font-size: 14px;
    color: #999;
    width: 90px;
    height: 32px;
    margin-top: 25px;
    background: #fff;
    text-align: center;
    line-height: 32px;
}
</style>