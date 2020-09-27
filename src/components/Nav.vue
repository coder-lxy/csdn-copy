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
            <img src="../assets/csdnqr.png" alt />
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
        </li>
        <li class="sub-menu-box">
          <a href>下载</a>
          <div class="sub-menu">
            <a href>我的资源</a>
          </div>
        </li>
        <li class="sub-menu-box">
          <a href>论坛</a>
          <div class="sub-menu">
            <a href>我的积分</a>
          </div>
        </li>
        <li class="sub-menu-box">
          <a href>问答</a>
        </li>
        <li class="sub-menu-box">
          <a href>直播</a>
        </li>
        <li class="sub-menu-box">
          <a href>代码</a>
          <div class="sub-menu">
            <a href>新建项目</a>
          </div>
        </li>
        <li class="sub-menu-box">
          <a href>招聘</a>
        </li>

        <li class="sub-menu-box">
          <a href>VIP会员</a>
          <div class="sub-menu">
            <a href>VIP权益</a>
            <a href>电子书</a>
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
          <a href>
            <i class="csdn-write"></i>
            <span>创作中心</span>
          </a>
        </li>
        <li class="collection">
          <a href title="我的收藏">
            <i class="icon"></i>
          </a>
        </li>
        <li class="msg">
          <a href>
            <i class="icon"></i>
            <div class="msg-circle"></div>
          </a>
          <div class="msgList">
            <ul>
              <li>
                <a href>
                  公告
                  <em class="notice"></em>
                </a>
              </li>
              <li>
                <a href>
                  评论
                  <em class="comment"></em>
                </a>
              </li>
              <li>
                <a href>
                  关注
                  <em class="follow"></em>
                </a>
              </li>
              <li>
                <a href>
                  点赞
                  <em class="like"></em>
                </a>
              </li>
              <li>
                <a href>
                  私信
                  <em class="im"></em>
                </a>
              </li>
              <li>
                <a href>
                  回答
                  <em class="invitition"></em>
                </a>
              </li>
              <li>
                <a href>
                  系统通知
                  <em class="system"></em>
                </a>
              </li>
              <li>
                <a href>消息设置</a>
              </li>
            </ul>
          </div>
        </li>
        <li v-show="!isLogin" @click="login" class="userinfo">
          <a href="javascript:;">登录/注册</a>
        </li>
        <li v-show="isLogin" class="user-login">
          <a href="javascript:;">
            <img :src="currentUser.headUrl" alt="" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import logo from "../assets/logo.png "
export default {
  props: {
    isLogin: false,
    currentUser: {},
  },
  methods: {
    login() {
      this.$router.push({
        path: "/login",
        // query:''
      });
      console.log(this.isLogin);
      console.log(this.currentUser);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.csdn-nav-bar {
  width: 100%;
  height: 44px;
  min-width: 1200px;
  padding: 0 24px;
  line-height: 1.5em;
  color: #333;
  font-size: 0.75em;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;
}
.csdn-nav-bar .container {
  width: 1200px;
  line-height: 1.5em;
  margin: 0 auto;
  text-align: left;
}

.csdn-nav-bar .container .nav-left-menu {
  height: 100%;
  float: left;
  margin-left: -6px;
}
.csdn-nav-bar .container .csdn-logo {
  width: 80px;
}
.csdn-nav-bar .container .nav-left-menu .sub-menu-box {
  position: relative;
  float: left;
}
.csdn-nav-bar .container .nav-left-menu .sub-menu-box:hover > a {
  background-color: #fff;
  color: #20232c;
}
.csdn-nav-bar .container .nav-left-menu .sub-menu-box:hover .sub-menu {
  display: block;
}
.csdn-nav-bar .container .nav-left-menu .sub-menu-box .sub-menu a:hover {
  background-color: rgba(220, 220, 221, 0.6);
}
.csdn-nav-bar .container .nav-left-menu .sub-menu-box a {
  display: inline-block;
  height: 44px;
  line-height: 44px;
  padding: 0 10px;
  text-align: center;
  font-size: 12px;
  color: #555666;
}
.csdn-nav-bar .container .nav-left-menu .sub-menu-box .sub-menu {
  display: none;
  position: absolute;
  top: 44px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 96px;
  padding: 8px 0;
  border-radius: 0 0 4px 4px;
  background-color: rgba(255, 255, 255, 0.9);
  text-align: center;
  line-height: 32px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  z-index: 9999;
}
.csdn-nav-bar .container .nav-left-menu .sub-menu-box .sub-menu > a {
  width: 100%;
  height: 32px;
  line-height: 32px;
  display: block;
  color: #555666;
}
.csdn-nav-bar .container .nav-left-menu .sub-menu-box .sub-menu img {
  width: 96px;
  height: 96px;
}
.csdn-nav-bar .container .serch-bar {
  float: left;
  height: 32px;
  background: #f0f0f5;
  border-radius: 5px;
  margin: 6px 0 0 8px;
  box-sizing: border-box;
}
.csdn-nav-bar .container .serch-bar .input-search {
  float: left;
  width: 382px;
  height: 100%;
  line-height: inherit;
  font-size: 12px;
  color: #999;
  padding-left: 16px;
  border: 0;
  outline: none;
  border-radius: 5px 0 0 5px;
  text-align: left;
  background: #f0f0f5;
  box-sizing: border-box;
}
.csdn-nav-bar .container .serch-bar .btn-search {
  float: right;
  width: 32px;
  height: 32px;
  background: #e8e8ee;
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
.csdn-nav-bar .container .nav-right-menu > li {
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
  background: #e33e33;
  padding-left: 0;
  padding-right: 0;
}
.csdn-nav-bar .container .nav-right-menu .write-bolg-btn a i {
  width: 16px;
  height: 16px;
  float: left;
  margin-top: 7.5px;
  margin-left: 8px;
  background: url(../assets/csdn-write.png) center center no-repeat;
  background-size: contain;
}
.csdn-nav-bar .container .nav-right-menu .userinfo a {
  display: inline-block;
  height: 100%;
  line-height: 44px;
  color: #555666;
  font-size: 12px;
}
.csdn-nav-bar .container .nav-right-menu li .icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-top: 14px;
  cursor: pointer;
}
.csdn-nav-bar .container .nav-right-menu .collection i {
  background: url(../assets/collection.png) no-repeat;
  background-size: contain;
  /* margin-right: 0; */
}
.csdn-nav-bar .container .nav-right-menu .msg {
  position: relative;
}
.csdn-nav-bar .container .nav-right-menu .msg:hover .msgList {
  display: block;
}
.csdn-nav-bar .container .nav-right-menu .msg i {
  background: url(../assets/message.png) no-repeat;
  background-size: contain;
}
.csdn-nav-bar .container .nav-right-menu .msg .msgList {
  display: none;
  min-width: 120px;
  line-height: 1.5em;
  text-align: left;
  position: absolute;
  background-color: #fff;
  top: 44px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  z-index: 99999;
}
.csdn-nav-bar .container .nav-right-menu .msg .msgList li {
  display: block;
  text-align: left;
}
.csdn-nav-bar .container .nav-right-menu .msg .msgList li a {
  display: inline-block;
  padding-left: 32px;
  height: 40px;
  font-size: 12px;
  color: #555666;
  line-height: 40px;
}
.csdn-nav-bar .container .nav-right-menu .msg .msgList li:hover {
  background-color: #f0f0f5;
}
.csdn-nav-bar .container .nav-right-menu .msg .msgList li a em {
  display: inline-block;
  margin-left: 8px;
  font-style: normal;
  color: #e33e33;
  font-weight: 400;
}
.csdn-nav-bar .container .nav-right-menu .user-login {
  text-align: center;
}
.csdn-nav-bar .container .nav-right-menu .user-login img {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #eee;
}
</style>
