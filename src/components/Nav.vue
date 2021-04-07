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
          @click="changeBlogList(item.path, index)"
          :class="{ active: currentIndex === index }"
        >
          <a href="javascript:;">{{ item.name }}</a>
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
              <li @click="toMsgCenter(0)">
                <a href="javascript:;">
                  公告
                  <em v-show="noticeCount != 0" class="notice">{{noticeCount}}</em>
                </a>
              </li>
              <li @click="toMsgCenter(1)">
                <a href="javascript:;">
                  评论
                  <em v-show="commentCount != 0" class="comment">{{
                    commentCount
                  }}</em>
                </a>
              </li>
              <li @click="toMsgCenter(2)">
                <a href>
                  关注
                  <em v-show="followCount != 0" class="follow">{{
                    followCount
                  }}</em>
                </a>
              </li>
              <li @click="toMsgCenter(3)">
                <a href="javascript:;">
                  点赞
                  <em v-show="likeCount != 0" class="like">{{ likeCount }}</em>
                </a>
              </li>
              <!-- <li @click="toMsgCenter(index)">
                <a href>
                  私信
                  <em v-show="sxCount != 0" class="im"></em>
                </a>
              </li> -->
            </ul>
          </div>
        </li>
        <li v-if="!this.$store.getters['base/token']" @click="login" class="userinfo">
          <a href="javascript:;">登录/注册</a>
        </li>
        <li v-if="this.$store.getters['base/token']" class="user-login">
          <a href="javascript:;">
            <img @click="toUserInfo" :src="headUrl" alt="" />
          </a>
          <div class="userControl">
            <div>
              <a @click="toUserInfo" href="javascript:;">用户中心</a>
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
import { logout} from "../services/blogService";
import { commentNotice, likeNotice, followNotice } from '@/services/noticeService'
// import logo from "../assets/logo.png "
export default {
  data() {
    return {
      userId: '',
      navList: [
        { name: "热榜", path:'/' },
        { name: "推荐", path:'/rec' },
        { name: "最新", path:'/new' },
        { name: "关注", path:'/follow' }],
      currentIndex: 0,
      Mylist: ["我的收藏", "我的关注", "我的粉丝", "我的博客"],
      msg: "",
      searchList: {},
      blogList: [],
      headUrl : '',
      msgCount: 0, // 消息数
      noticeCount: 0, // 公告数
      commentCount: 0, // 评论数
      followCount: 0, // 关注数
      likeCount: 0, // 点赞数
      sxCount: 0, // 私信数
    };
  },
  created() {
    this.headUrl =  this.$store.getters['base/userInfo'].headUrl
    this.userId = this.$store.getters['base/userInfo'].userId
    // 评论通知
    commentNotice(this.userId).then(v => {
      if(v.data.data.count) {
        this.msgList[1].count = v.data.data.count
        this.isDot = true
      }
      console.log('comment', v)

    })
    // 点赞通知
    likeNotice(this.userId).then(v=>{
      if(v.data.data.count) {
        this.msgList[3].count = v.data.data.count
        this.isDot = true
      }
      console.log('like', v)
    })
    // 关注通知
    followNotice(this.userId).then(v=> {
      if(v.data.data.count) {
        this.msgList[2].count = v.data.data.count
        this.isDot = true
      }
      console.log('follow', v);
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
      logout().then((v) => {
        localStorage.removeItem('token')
        localStorage.removeItem('userInfo')
        this.$store.commit('base/token', '')
        this.$store.commit('base/userInfo', null)
        this.$router.push({
          path: '/',
        })
      })
    },
    changeBlogList(path, index) {
      this.currentIndex = index
      this.$router.push({
        path: path,
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
    toSearch(msg) {
      this.$store.commit("changeBlogListIndex", "");
      this.$store.commit("changeSearchKey", msg);
      this.$router.push({
        path: "/",
      });
    },
    toUserInfo() {
      this.$router.push({
        path: '/user',
        query: {
          id: this.$store.getters['base/userInfo'].userId,
        },
      })
    },
    toMsgCenter(id) {
      this.$router.push({
        path: '/msg',
        query: {
          id: id,
        },
      })
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
