<template>
  <div class="blog-content-box">
    <div class="article-header-box">
      <div class="article-title-box">
        <h1>{{blog.title}}</h1>
      </div>
      <div class="article-info-box">
        <div class="bar-content">
          <a href class="nickname">{{blog.username}}</a>
          <span class="time">{{blog.createDate}}</span>
          <img src="../assets/articleReadEyes.png" alt class="article-read-img" />
          <span class="read-count">{{blog.hitCount}}</span>
          <a href class="collection">
            <img src="../assets/tobarCollect.png" alt="" class="un-collect" />
            <img src alt class="collect" />
            <span class="name">收藏</span>
          </a>
        </div>
      </div>
    </div>
    <div v-html="blog.article" class="article-content">
    </div>
    <div class="more-toolbox">
      <ul class="toolbox-list">
        <li class="tool-item">
          <a href="javascript:;" @click="beLike(blog.blogId)">
            <img style="display:none" class="like-imgActive" src="../assets/tobarThumbUpactive.png" alt="">
            <img class="like-img" src="../assets/tobarThumbUp.png" alt="">
            <span class="name" >点赞</span>
            <span class="count">{{blog.likeCount}}</span>
          </a>
        </li>
        <li class="tool-item">
          <a href="">
            <img style="display:none" class="like-imgActive" src="../assets/tobarThumbUpactive.png" alt="">
            <img class="like-img" src="../assets/tobarComment.png" alt="">
            <span class="name">评论</span>
            <span class="count">{{blog.commentCount}}</span>
          </a>
        </li>
        <li class="tool-item">
          <a href="">
            <img style="display:none" class="collect-imgActive" src="../assets/tobarCollectionActive.png" alt="">
            <img class="collect-img" src="../assets/tobarCollect.png" alt="">
            <span class="name">收藏</span>
            <span class="count"></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { like } from '../services/blogService';
export default {
  props: {
    blog: {},
  },
  methods:{
    beLike(id) {
      like(id)
    }
  }
};
</script>

<style scoped>
.blog-content-box {
  position: relative;
  padding: 0 24px 16px;
  background: #fff;
  margin-bottom: 10px;
}
.blog-content-box .article-header-box {
  padding-top: 8px;
  border-bottom: 1px solid #f5f5f5;
}
.blog-content-box .article-header-box .article-title-box {
  margin-bottom: 8px;
}
.blog-content-box .article-header-box .article-title-box h1 {
  font-size: 24px;
  color: #222226;
  font-weight: 600;
  word-break: break-all;
}
.blog-content-box .article-header-box .article-info-box {
  height: 32px;
  line-height: 32px;
  background: #f7f7fc;
  border-radius: 4px;
}
.blog-content-box .article-header-box .article-info-box .bar-content {
  float: left;
  height: 32px;
  line-height: 32px;
  padding-left: 10px;
}
.blog-content-box .bar-content .nickname{
  color: #5893c2;
  margin-right: 20px;
}
.blog-content-box .bar-content .time {
  color: #999aaa;
  font-size: 12px;
  margin-right: 12px;
  line-height: 32px;
}
.blog-content-box .bar-content .article-read-img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.blog-content-box .bar-content .read-count {
  color: #999aaa;
  font-size: 12px;
  margin-right: 12px;
}
.blog-content-box .bar-content a {
  color: #999aaa;
  display: inline-block;
  margin-right: 12px;
  line-height: 32px;
  font-size: 12px;
}
.blog-content-box .bar-content a img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-right: 2px;
}
.blog-content-box .article-content {
  padding-top: 16px;
  padding-bottom: 48px;
}
.blog-content-box .more-toolbox {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
}
.blog-content-box .more-toolbox ul {
  /* width: 1010px; */
  height: 38px;
  line-height: 38px;
  display: flex;
  align-items: center;
  padding-left: 24px;
  background: #f3f7fb;
  box-shadow: 0 3px 5px 0 rgba(0,0,0,0.05);
}
.blog-content-box .more-toolbox ul li {
  border-radius: 4px;
  font-size: 12px;
  height: 30px;
  line-height: 30px;
}
.blog-content-box .more-toolbox ul li a {
  display: flex;
  height: 36px;
  align-items: center;
  padding: 0 12px;
}
.blog-content-box .more-toolbox ul li:hover {
  background: rgba(39,124,204,0.1);
}
.blog-content-box .more-toolbox ul .tool-item img {
  width: 22px;
  height: 22px;
  margin-right: 4px;
}
.blog-content-box .more-toolbox ul .tool-item .name {
  font-size: 14px;
  color: #555666;
}
.blog-content-box .more-toolbox ul .tool-item .count{
  margin-top: -8px;
  margin-left: 2px;
  font-size: 12px;
  color: #555666;
}
</style>