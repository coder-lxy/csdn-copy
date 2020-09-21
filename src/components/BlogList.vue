<template>
  <ul class="blog-list">
    <li v-for="(item,index) in blogList" :key="index" class="list-item">
      <div class="list-con">
        <div class="title">
          <h2>
            <a href>{{item.blog.title}}</a>
          </h2>
          <div class="close-tag">
            <i>x</i>
          </div>
        </div>
        <dl class="list-userbar">
          <dt>
            <a href="#">
              <img :src="item.user.headUrl" alt />
            </a>
          </dt>
          <dd class="name">
            <a href="#">{{item.user.username}}</a>
          </dd>
          <div class="summary">{{item.blog.summary}}</div>
          <div class="interactive">
            <a href class="click-heart">
              <span class="icon like"></span>
              <span class="num">{{item.blog.likeCount}}</span>
            </a>
            <div class="interval"></div>
            <a href class="read-num">
              <span class="icon hit"></span>
              <span class="num">{{item.blog.hitCount}}</span>
            </a>
            <div class="interval"></div>
            <a href class="read-num">
              <span class="icon comment"></span>
              <span class="num">{{item.blog.commentCount}}</span>
            </a>
            <span></span>
          </div>
        </dl>
      </div>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      blogList: [],
    };
  },
  mounted() {
    axios.get("http://192.168.137.65:8080").then((response) => {
      this.blogList = response.data;
      console.log(this.blogList);
    });
  },
};
</script>

<style scoped>
.blog-list {
  width: 760px;
}
.blog-list li {
  position: relative;
  display: block;
  padding: 18px 24px 13px 24px;
  background-color: #fff;
  border-bottom: 1px solid #f4f4f4;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.04);
}
.blog-list li .list-con .title h2 {
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  margin-bottom: 4px;
  overflow: hidden;
  white-space: nowrap;
}
.blog-list li .list-con .title h2 a {
  max-width: 98%;
  display: block;
  color: #3d3d3d;
  height: 24px;
  line-height: 24px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.blog-list li .list-con .title .close-tag {
  position: absolute;
  display: inline-block;
  right: 24px;
  top: 18px;
}
.blog-list li .list-con .title .close-tag i {
  font-style: normal;
  display: inline-block;
  color: #e7e7e7;
  width: 14px;
  height: 14px;
}
.blog-list li .list-con .list-userbar {
  height: 24px;
  line-height: 24px;
  display: flex;
}
.blog-list li .list-con .list-userbar dt {
  float: left;
  margin: 0 6px 0 0;
}
.blog-list li .list-con .list-userbar dt img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
}
.blog-list li .list-con .list-userbar dd {
  float: left;
  font-size: 14px;
  color: #8a8a8a;
  line-height: 24px;
}
.blog-list li .list-con .list-userbar dd a {
  color: #3d3d3d;
}
.blog-list li .list-con .list-userbar .summary {
  padding-left: 16px;
  flex: 40;
  margin-bottom: 4px;
  color: #8a8a8a;
  font-size: 14px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.blog-list li .list-con .list-userbar .interactive {
  line-height: 24px;
  display: flex;
  justify-content: flex-end;
}
.blog-list li .list-con .list-userbar .interactive .icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  vertical-align: -3px;
}
.blog-list li .list-con .list-userbar .interactive .like {
  background-image: url(../assets/dianzan.png);
}
.blog-list li .list-con .list-userbar .interactive .hit {
  background-image: url(../assets/hit.png);
}
.blog-list li .list-con .list-userbar .interactive .comment {
  background-image: url(../assets/comment.png);
}
.blog-list li .list-con .list-userbar .interactive .num {
  color: #8a8a8a;
}
.blog-list li .list-con .list-userbar .interactive .interval {
  float: left;
  width: 1px;
  height: 12px;
  border-radius: 50%;
  background-color: #e0e0e0;
  margin-top: 6px;
  margin-left: 8px;
  margin-right: 8px;
}
</style>