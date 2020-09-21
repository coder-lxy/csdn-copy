<template>
  <div class="floor">
    <div class="floor-nav">
      <div class="nav-left">
        <ul class="nav-left-wrap">
          <li v-for="(item,index) in navLeftList" :key="index">
            <a href>
              <img :src="item.imgUrl" alt />
              <span>{{item.name}}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="nav-center">
        <ul class="nav-center-wrap">
          <li v-for="(item,index) in navCenterList" :key="index">
            <a href>{{item}}</a>
          </li>
          <li class="moreLi">
            <a href>
              更多
              <i class="moreIcon"></i>
            </a>
            <ul class="moreData">
              <li>
                <a href>其他</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="nav-right">
        <ul class="nav-right-wrap">
          <li v-for="(item,index) in navRightList" :key="index">
            <a href>
              <img :src="item.imgUrl" alt />
              <span>{{item.name}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import homeImg from "../assets/home.png";
import dynamicImg from "../assets/dynamic.png";
import rankingImg from "../assets/ranking.png";
import liveImg from "../assets/live.png";
import specialColumnImg from "../assets/specialColumn.png";
import activityImg from "../assets/activity.png";
import learnImg from "../assets/learn.png";
export default {
  data() {
    return {
      navLeftList: [
        {
          imgUrl: homeImg,
          name: "首页",
        },
        {
          imgUrl: dynamicImg,
          name: "动态",
        },
        {
          imgUrl: rankingImg,
          name: "排行",
        },
      ],
      navCenterList: [
        "Python",
        "游戏开发",
        "Java",
        "运维",
        "架构",
        "5G",
        "人工智能",
        "音视频开发",
        "移动开发",
        "研发管理",
        "信息安全",
        "程序人生",
        "计算机基础",
        "考试认证",
        "物联网",
        "数据库",
        "前端",
        "云计算",
        "区块链",
      ],
      navCenterListMore: ["其他"],
      navRightList: [
        {
          imgUrl: liveImg,
          name: "直播",
        },
        {
          imgUrl: specialColumnImg,
          name: "专栏",
        },
        {
          imgUrl: activityImg,
          name: "活动",
        },
        {
          imgUrl: learnImg,
          name: "学习",
        },
      ],
    };
  },
};
</script>

<style scoped>
.floor {
  width: 100%;
  height: 68px;
  margin-top: 24px;
}
.floor .floor-nav {
  display: flex;
  justify-content: space-between;
  width: 972px;
  margin: 0 auto;
  color: #20232c;
}
.floor .floor-nav .nav-left {
  /* float: left; */
  width: 180px;
  height: 68px;
}
.floor .floor-nav .nav-left .nav-left-wrap {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.floor .floor-nav .nav-left .nav-left-wrap:after {
  display: block;
  content: "";
  width: 1px;
  height: 40px;
  background-color: #e1e1e1;
  position: absolute;
  right: 0;
  top: 15px;
}
.floor .floor-nav .nav-left li {
  width: 36px;
  height: 68px;
  margin-right: 24px;
  text-align: center;
}
.floor .floor-nav .nav-left li img {
  width: 36px;
  height: 36px;
}
.floor .floor-nav .nav-left li span {
  color: #20232c;
  font-size: 14px;
  text-align: center;
  line-height: 36px;
}
.floor .floor-nav .nav-left li:hover span {
  color: #ff4d4d;
}
.floor .floor-nav .nav-center {
  width: 662px;
  height: 68px;
  padding: 0 27px;
  font-size: 14px;
  box-sizing: border-box;
}
.floor .floor-nav .nav-center .nav-center-wrap {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  height: 68px;
}
.floor .floor-nav .nav-center li {
  padding-left: 7px;
  padding-top: 3px;
  height: 34px;
  line-height: 34px;
  text-align: left;
}
.floor .floor-nav .nav-center li a {
  color: #20232c;
  font-size: 14px;
}
.floor .floor-nav .nav-center li a:hover {
  color: #ff4d4d;
  font-weight: bolder;
}
.floor .floor-nav .nav-center .nav-center-wrap .moreLi {
  position: relative;
}
.floor .floor-nav .nav-center .nav-center-wrap .moreLi:hover .moreData {
  display: block;
}
.floor .floor-nav .nav-center .nav-center-wrap .moreLi .moreIcon {
  font-style: normal;
  font-weight: 400;
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url("../assets/moreInfo.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  vertical-align: middle;
  cursor: pointer;
}
.floor .floor-nav .nav-center .nav-center-wrap .moreLi .moreData {
  display: none;
  position: ansolute;
  background-color: #fff;
  border: 1px solid #e1e1e1;
  width: 176px;
  border-radius: 4px;
  z-index: 999999;
  top: 34px;
  left: 9px;
  padding-bottom: 5px;
}
.floor .floor-nav .nav-center .nav-center-wrap .moreLi .moreData li {
  padding-left: 14px;
  display: list-item;
}
.floor .floor-nav .nav-right {
  position: relative;
  width: 130px;
  height: 70px;
}
.floor .floor-nav .nav-right .nav-right-wrap {
  display: flex;
  flex-flow: row wrap;
}
.floor .floor-nav .nav-right:before {
  display: block;
  content: "";
  width: 1px;
  height: 40px;
  background-color: #e1e1e1;
  position: absolute;
  left: -18px;
  top: 15px;
}
.floor .floor-nav .nav-right li {
  height: 34px;
  line-height: 34px;
  margin-right: 10px;
  font-size: 14px;
  text-align: center;
}
.floor .floor-nav .nav-right li img {
  width: 20px;
  height: 20px;
  border: 0;
}
.floor .floor-nav .nav-right li span {
  padding-left: 4px;
  color: #20232c;
}
.floor .floor-nav .nav-right li:hover span {
  color: #ff4d4d;
}
</style>