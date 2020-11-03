<template>
  <ul class="blog-list">
    <li
      v-for="(item, index) in blogList"
      :key="index"
      @click="toDetail(item.blogId)"
      class="list-item"
    >
      <div class="list-con">
        <div class="title">
          <h2>
            <a href="javascript:;">{{ item.title }}</a>
          </h2>
          <!-- <div class="close-tag">
            <i>x</i>
          </div>-->
        </div>
        <dl class="list-userbar">
          <dt>
            <a href="javascript:;">
              <img :src="item.headUrl" alt />
            </a>
          </dt>
          <dd class="name">
            <a href="javascript:;">{{ item.username }}</a>
          </dd>
          <div class="summary">{{ item.summary }}</div>
          <div class="interactive">
            <a
              href="javascript:;"
              @click.stop="beLike($event, index, item.blogId)"
              class="click-heart"
               :class="{active:item.isLike===1}"
            >
              <Icon type="like"></Icon>
              <span class="num">{{ item.likeCount }}</span>
            </a>
            <div class="interval"></div>
            <a href="javascript:;" class="read-num">
              <Icon type="hit"></Icon>
              <span class="num">{{ item.hitCount }}</span>
            </a>
            <div class="interval"></div>
            <a href="javascript:;" class="comment">
              <Icon type="comment"></Icon>
              <span class="num">{{ item.commentCount }}</span>
            </a>
            <span></span>
          </div>
        </dl>
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "./Icon";
import { like, likeMsg } from "../services/blogService";
export default {
  props: {
    blogList: {},
  },
  data() {
    return {
      blogId: null,
    };
  },
  components: {
    Icon,
  },
  methods: {
    toDetail(id) {
      this.$router.push({
        path: "/detail",
        query: {
          id: id,
        },
      });
    },
    beLike(e, index, id) {
      console.log(this.blogList[index]);
      // this.isLike[index]=true;
      like(id).then(v=> {
        // if(v.data.isLike===1)
        this.blogList[index].likeCount=v.data.likeCount
        this.blogList[index].isLike=v.data.isLike
        // likeMsg()
        console.log(v);
      });
      console.log(this.blogList[index].likeCount);
      // this.likeCount=this.blogList[index].likeCount
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2080474_j8vb4q8gzqk.css";
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
  cursor: pointer;
}
.blog-list li:hover {
  background-color: #fafafa;
}
.blog-list li .list-con .title h2 {
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  margin-bottom: 4px;
  overflow: hidden;
  white-space: nowrap;
}
.blog-list li .list-con .title h2 a:hover {
  color: #ca0c16;
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
.blog-list li .list-con .list-userbar dd a:hover {
  color: #157dcf;
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
.blog-list li .list-con .list-userbar .interactive a {
  font-size: 14px;
  color: #999;
  text-align: center;
}
.blog-list li .list-con .list-userbar .interactive a:hover {
  color: #157dcf;
}
.blog-list li .list-con .list-userbar .interactive a.active {
  color: #ca0c16;
}
.blog-list li .list-con .list-userbar .interactive .icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  vertical-align: -3px;
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