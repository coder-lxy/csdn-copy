<!-- 顶部导航栏 -->
<template>
  <div class="csdn-nav-bar">
    <div class="container">
      <ul class="nav-left-menu">
        <li class="sub-menu-box">
          <a href="https://www.csdn.net" title="CSDN首页">
            <img src="../assets/logo.png" alt class="csdn-logo" />
          </a>
          <div class="sub-menu">
            <a href>创作中心</a>
          </div>
        </li>
        <li class="sub-menu-box">
          <a href>博客</a>
          <div class="sub-menu">
            <a href>创作中心</a>
          </div>
        </li>
        <li class="sub-menu-box">
          <a href>学院</a>
          <div class="sub-menu">
            <a href>创作中心</a>
          </div>
        </li>
        <li class="sub-menu-box">
          <a href>下载</a>
          <div class="sub-menu">
            <a href>创作中心</a>
          </div>
        </li>
        <li class="sub-menu-box">
          <a href>论坛</a>
          <div class="sub-menu">
            <a href>创作中心</a>
          </div>
        </li>
        <li class="sub-menu-box">
          <a href>问答</a>
          <div class="sub-menu">
            <a href>创作中心</a>
          </div>
        </li>
        <li class="sub-menu-box">
          <a href>直播</a>
          <div class="sub-menu">
            <a href>创作中心</a>
          </div>
        </li>
        <li class="sub-menu-box">
          <a href>招聘</a>
          <div class="sub-menu">
            <a href>创作中心</a>
          </div>
        </li>
        <li class="sub-menu-box">
          <a href>VIP会员</a>
          <div class="sub-menu">
            <a href>创作中心</a>
          </div>
        </li>
        <div class="serch-bar">
          <input type="text" class="input-search" placeholder="搜CSDN" />
          <a href class="btn-search">
            <img src="../assets/csdn-sou.png" alt />
          </a>
        </div>
      </ul>
      <ul class="nav-right-menu">
        <li class="write-bolg-btn">
          <a href="">
            <i class="csdn-write"></i>
            <span>创作中心</span>
          </a>
        </li>
        <li class="collection">
          <a href="" title="我的收藏">
            <i class="icon"></i>
          </a>
        </li>
        <li class="msg">
          <a href="">
            <i class="icon"></i>
            <div class="msg-circle"></div>
          </a>
          <div class="msgList"></div>
        </li>
        <li class="userinfo">
          <a href="">登录/注册</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import logo from "../assets/logo.png "
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.csdn-nav-bar .container {
  width: 1200px;
  height: 44px;
  margin: 0 auto;
}
.csdn-nav-bar .container a:first-child {
  float: left;
  height: 44px;
}
.csdn-nav-bar .container .nav-left-menu {
  float: left;
  width: auto;
}
.csdn-nav-bar .container .csdn-logo {
  width: 80px;
}
.csdn-nav-bar .container .nav-left-menu .sub-menu-box {
  float: left;
  padding: 0 8px;
}
.csdn-nav-bar .container .nav-left-menu .sub-menu-box a {
  display: inline-block;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-size: 14px;
  color: #555666;
}
.csdn-nav-bar .container .nav-left-menu .sub-menu-box .sub-menu {
  display: none;
}
.csdn-nav-bar .container .nav-left-menu .sub-menu-box:hover {
  background: #f0f0f5;
}
.csdn-nav-bar .container .serch-bar {
  float: left;
  width: 440px;
  height: 32px;
  background: #f0f0f5;
  border-radius: 5px;
  margin: 6px 0 0 8px;
}
.csdn-nav-bar .container .serch-bar .input-search {
  width: 392px;
  font-size: 14px;
  color: #555666;
  float: left;
  padding-left: 16px;
  border: 0;
  outline: none;
  height: 32px;
  border-radius: 5px;
  text-align: left;
  background: 0 0;
}
.csdn-nav-bar .container .serch-bar .btn-search {
  background: rgb(232, 232, 238);
  width: 32px;
  height: 32px;
  float: left;
  line-height: 32px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.csdn-nav-bar .container .serch-bar .btn-search img {
  width: 32px;
  height: 32px;
}
.csdn-nav-bar .container .nav-right-menu {
  float: right;
  height: 44px;
  line-height: 44px;
  color: #333;
}
.csdn-nav-bar .container .nav-right-menu li {
  float: left;
  padding: 0 8px;
}
.csdn-nav-bar .container .nav-right-menu .write-bolg-btn {
  height: 100%;
  /* border: 1px solid #eee; */
}
.csdn-nav-bar .container .nav-right-menu li a {
  display: inline-block;
  text-align: center;
}

.csdn-nav-bar .container .nav-right-menu .write-bolg-btn a {
  height: 32px;
  width: 92px;
  margin-top: 6px;
  border-radius: 4px;
  color: #fff;
  line-height: 32px;
  background: #E33E33;
  padding-left: 0;
  padding-right: 0;
}
.csdn-nav-bar .container .nav-right-menu .write-bolg-btn a i{
  width: 16px;
  height: 16px;
  float: left;
  margin-top: 7.5px;
  margin-left: 8px;
  background: url(../assets/csdn-write.png) center center no-repeat;
  background-size: contain;
}
.csdn-nav-bar .container .nav-right-menu .userinfo a {
  color: #555666;
  font-size: 14px;
}
.csdn-nav-bar .container .nav-right-menu li .icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-top: 14px;
  cursor: pointer;
}
.csdn-nav-bar .container .nav-right-menu .collection i {
  background: url(../assets/collectionicon.png) center center no-repeat;
  background-size: contain;
}
.csdn-nav-bar .container .nav-right-menu .msg i {
  background: url(../assets/messageIcon.png) center center no-repeat;
  background-size: contain;
}
</style>
