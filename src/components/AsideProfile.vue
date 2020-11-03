<template>
  <div class="aside-box">
    <div class="profile-intro">
      <div class="head">
        <a href="">
          <img :src="userInfo.user.headUrl" alt="" />
        </a>
      </div>
      <div class="user-info">
        <a href="" class="name">{{userInfo.user.username}}</a>
      </div>
    </div>
    <div class="info-list">
      <ul>
        <li class="data-item">
          <span class="count">{{userInfo.blogCountSum}}</span>
          <span class="title font">原创</span>
        </li>
        <li class="data-item">
          <span class="count">{{userInfo.hitCountSum}}</span>
          <span class="title">访问</span>
        </li>
        <li class="data-item">
          <span class="count">1</span>
          <span class="title">等级</span>
        </li>
      </ul>
    </div>
    <div class="item-rank"></div>
    <div class="info-list">
      <ul>
        <li class="data-item">
          <span class="count">1</span>
          <span class="title">积分</span>
        </li>
        <li class="data-item">
          <span class="count">{{userInfo.fansCount}}</span>
          <span class="title">粉丝</span>
        </li>
        <li class="data-item">
          <span class="count">{{userInfo.likeCount}}</span>
          <span class="title">获赞</span>
        </li>
      </ul>
    </div>
    <div class="profile-box-opration">
      <div class="opt-button">
        <a href="" class="home-page">TA的主页</a>
      </div>
      <div class="opt-button">
        <a href="" class="personal-letter">私信</a>
      </div>
      <div class="opt-button">
        <a href="" class="attention">关注</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    userInfo:{},
  },
  created(){
    console.log(this.userInfo);
  }
};
</script>

<style scoped>
.aside-box {
  background-color: #fff;
  padding-bottom: 10px;
  margin-bottom: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
}
.aside-box .profile-intro {
  padding: 12px;
}
.aside-box .profile-intro .head {
  width: 46px;
  height: 46px;
  margin: 0 auto;
}
.aside-box .profile-intro .head img {
  width: 46px;
  height: 46px;
  border-radius: 50%;
}
.aside-box .profile-intro .user-info {
  /* margin-left: 8px; */
  /* padding-top: 4px; */
  text-align: center;
}
.aside-box .profile-intro .user-info .name {
  font-size: 14px;
  font-weight: 500;
  color: #555666;
}
.aside-box .info-list {
  padding: 9px 10px;
}
.aside-box .info-list ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.aside-box .info-list li {
  display: flex;
  flex-flow: column wrap;
}
.aside-box .info-list .count {
  color: #4a4d52;
  font-size: 12px;
  text-align: center;
}
.aside-box .info-list .title {
  color: #999aaa;
  font-size: 12px;
  padding: 3px 0;
}
.aside-box .info-list .font {
  color: #267dcc;
  cursor: pointer;
}
.aside-box .item-rank {
  height: 1px;
  background-color: #f5f6f7;
}
.aside-box .profile-box-opration {
  padding: 8px 16px 10px 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.aside-box .profile-box-opration .opt-button {
  width: 74px;
  text-align: center;
}
.aside-box .profile-box-opration .opt-button a {
  display: inline-block;
  width: 100%;
  height: 100%;
  border: 1px solid #eaeaef;
  border-radius: 4px;
  background-color: #fafafc;
  color: #4a4d52;
  font-size: 12px;
}
.aside-box .profile-box-opration .opt-button .attention {
  background-color: #e33e33;
  color: #fff;
}
</style>