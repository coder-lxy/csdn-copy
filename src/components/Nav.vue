<!-- 顶部导航栏 -->
<template>
  <div class="csdn-nav-bar">
    <div class="container clearfix">
      <ul class="nav-left-menu clearfix">
        <li class="sub-menu-box">
          <a href="javascript:;" @click="changeBlogList(0)" title="CSDN首页">
            <img src="../assets/logo.png" alt class="csdn-logo" />
          </a>
          <div class="sub-menu">
            <img src="../assets/erweima.jpg" alt />
          </div>
        </li>
        <li
          v-for="(item, index) in navList"
          :key="index"
          class="sub-menu-box"
          @click="changeBlogList(index)"
          :class="{ active: currentIndex === index }"
        >
          <a href="javascript:;">{{ item }}</a>
        </li>
        <div class="serch-bar">
          <input
            type="text"
            v-model="msg"
            class="input-search"
            placeholder="搜文章"
            @keyup.enter="toSearch(msg)"
          />
          <a @click="toSearch(msg)" class="btn-search">
            <img src="../assets/csdn-sou.png" alt />
          </a>
        </div>
      </ul>
      <ul class="nav-right-menu clearfix">
        <li class="write-bolg-btn">
          <a href="javascript:;" @click="toWrite()">
            <i class="csdn-write"></i>
            <span>写文章</span>
          </a>
        </li>
        <li class="collection">
          <a href="javascript:;" title="我的收藏">
            收藏
            <!-- <i class="icon"></i> -->
          </a>
        </li>
        <li class="msg">
          <a href="javascript:;">
            消息
            <i v-show="msgCount != 0" class="msg-circle">{{ msgCount }}</i>
          </a>
          <div class="msgList">
            <ul>
              <li @click="lookNoticeDetail(6)">
                <a href="javascript:;">
                  公告
                  <em v-show="noticeCount != 0" class="notice">{{noticeCount}}</em>
                </a>
              </li>
              <li @click="lookCommentDetail(5)">
                <a href="javascript:;">
                  评论
                  <em v-show="commentCount != 0" class="comment">{{
                    commentCount
                  }}</em>
                </a>
              </li>
              <li>
                <a href>
                  关注
                  <em v-show="followCount != 0" class="follow">{{
                    followCount
                  }}</em>
                </a>
              </li>
              <li @click="lookLikeDetail(4)">
                <a href="javascript:;">
                  点赞
                  <em v-show="likeCount != 0" class="like">{{ likeCount }}</em>
                </a>
              </li>
              <li>
                <a href>
                  私信
                  <em v-show="sxCount != 0" class="im"></em>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li v-show="!this.$store.state.isLogin" @click="login" class="userinfo">
          <a href="javascript:;">登录/注册</a>
        </li>
        <li v-show="isLogin" class="user-login">
          <a href="javascript:;">
            <img @click="toProfile()" :src="userInfo.headUrl" alt="" />
          </a>
          <div class="userControl">
            <div
              @click="toUserInfo(index)"
              v-for="(item, index) in Mylist"
              :key="index"
            >
              <a href="javascript:;">{{ item }}</a>
            </div>
            <div class="logout">
              <a @click="toLogout" href="javascript:;">退出登录</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  commentMsg,
  likeMsg,
  logout,
  lookComment,
  lookLike,
  getNotice,
  noticeMsg,
} from "../services/blogService";
// import logo from "../assets/logo.png "
export default {
  props: {
    isLogin: false,
    userInfo: {},
    currentIndex: "",
  },
  data() {
    return {
      navList: ["热榜", "推荐", "最新", "关注"],
      Mylist: ["我的收藏", "我的关注", "我的粉丝", "我的博客"],
      msg: "",
      searchList: {},
      blogList: [],
      msgCount: 0, // 消息数
      noticeCount: 0, // 公告数
      commentCount: 0, // 评论数
      followCount: 0, // 关注数
      likeCount: 0, // 点赞数
      sxCount: 0, // 私信数
    };
  },
  created() {
    likeMsg().then((v) => {
      // console.log(v.data.data.length);
      this.likeCount = v.data.data;
      // console.log(this.$store.state.likeList);
    });
    commentMsg().then((v) => {
      this.commentCount = v.data.data;
      console.log(this.commentCount);
    });
    noticeMsg().then(v=>{
      this.noticeCount=v.data.data
    })
  },
  methods: {
    login() {
      this.$router.push({
        path: "/login",
        // query:''
      });
    },
    toLogout() {
      // console.log(this.$store.state.isLogin);
      logout().then((v) => {
        localStorage.removeItem("token");
        localStorage.removeItem("userInfo");
        this.$store.commit("changeIsLogin", false);
        this.$store.commit("removeUserInfo");

        this.$router.push({
          path: "/",
          // query:''
        });
      });
    },
    changeBlogList(index) {
      this.$store.commit("changeBlogListIndex", index);
      this.$router.push({
        path: "/",
      });
    },
    toWrite() {
      this.$store.commit("changeBlogListIndex", "");
      if (localStorage.getItem("token")) {
        this.$router.push({
          path: "/editor",
        });
      } else {
        this.$router.push({
          path: "/login",
        });
      }
    },
    toProfile() {
      this.$store.commit("changeBlogListIndex", "");
      this.$router.push({
        path: "/userinfo",
      });
    },
    toSearch(msg) {
      this.$store.commit("changeBlogListIndex", "");
      this.$store.commit("changeSearchKey", msg);
      this.$router.push({
        path: "/",
      });
    },
    toUserInfo(index) {
      this.$store.commit("changeBlogListIndex", "");
      this.$router.push({
        path: "/userinfo",
        query: {
          id: index,
        },
      });
    },
    // 查看点赞详情
    lookLikeDetail(index) {
      lookLike().then((v) => {
        this.$store.commit("setLikeList",v.data.data)
      });
      this.$store.commit("changeUserListIndex", index);
      this.likeCount = 0;
      this.$router.push({
        path: "/userinfo",
      });
    },
    lookCommentDetail(index) {
      lookComment().then(v=>{
      this.$store.commit("setCommentList", v.data.data);
      });
      this.$store.commit("changeUserListIndex", index);
      this.commentCount = 0;
      this.$router.push({
        path: "/userinfo",
      });
    },
    lookNoticeDetail(index) {
      getNotice().then(v=>{
        console.log(v);
      this.$store.commit("setNoticeList", v.data.data);
      });
      this.$store.commit("changeUserListIndex", index);
      this.$router.push({
        path: "/userinfo",
      });
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
  /* margin-left: -6px; */
}
.csdn-nav-bar .container .csdn-logo {
  width: 80px;
}
.csdn-nav-bar .container .nav-left-menu .sub-menu-box {
  position: relative;
  float: left;
}
.csdn-nav-bar .container .nav-left-menu .sub-menu-box:hover > a {
  background-color: #f0f0f5;
  color: #555666;
  font-weight: normal;
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
  font-size: 14px;
  color: #555666;
}
.csdn-nav-bar .container .nav-left-menu .active a {
  color: #e33e33;
  font-weight: 700;
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
  font-size: 14px;
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
  float: left;
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
  font-size: 14px;
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
  font-size: 14px;
}
.csdn-nav-bar .container .nav-right-menu li .icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-top: 14px;
  cursor: pointer;
}
.csdn-nav-bar .container .nav-right-menu .msg {
  position: relative;
}
.csdn-nav-bar .container .nav-right-menu .msg:hover .msgList {
  display: block;
}
.csdn-nav-bar .container .nav-right-menu a {
  color: #555666;
  font-size: 14px;
}
.csdn-nav-bar .container .nav-right-menu i {
  /* background: url(../assets/message.png) no-repeat; */
  /* background-size: contain; */
  position: absolute;
  left: 28px;
  top: 4px;
  width: 16px;
  height: 16px;
  line-height: 16px;
  background: #e33e33;
  border-radius: 50%;
  border: 1px solid #fff;
  color: #fff;
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
  font-size: 14px;
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
  font-size: 14px;
  color: #555666;
  line-height: 40px;
}
.csdn-nav-bar .container .nav-right-menu .msg .msgList li:hover {
  background-color: #f0f0f5;
}
.csdn-nav-bar .container .nav-right-menu .msg .msgList li a em {
  display: inline-block;
  font-style: normal;
  width: 16px;
  height: 16px;
  line-height: 16px;
  background: #e33e33;
  border-radius: 50%;
  border: 1px solid #fff;
  color: #fff;
}
.csdn-nav-bar .container .nav-right-menu .user-login {
  position: relative;
  text-align: center;
}
.csdn-nav-bar .container .nav-right-menu .user-login a {
  display: inline-block;
  width: 26px;
  height: 26px;
  margin-top: 9px;
}
.csdn-nav-bar .container .nav-right-menu .user-login img {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #eee;
}
.csdn-nav-bar .container .nav-right-menu .user-login .userControl {
  display: none;
  position: absolute;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999999;
}
.csdn-nav-bar .container .nav-right-menu .user-login .userControl div {
  padding: 0 16px 0 16px;
}
.csdn-nav-bar .container .nav-right-menu .user-login .userControl div a {
  color: #555666;
  font-size: 14px;
  width: 56px;
  height: 36px;
  line-height: 36px;
  text-align: left;
}
.csdn-nav-bar .container .nav-right-menu .user-login .userControl div:hover {
  background: #f0f0f5;
}

.csdn-nav-bar .container .nav-right-menu .user-login:hover .userControl {
  display: block;
}
</style>
