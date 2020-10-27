<template>
  <div class="article-list">
    <div class="article-item-box">
      <h4>
        <a href=""> 标题 </a>
      </h4>
      <p class="content">内容</p>
      <div class="info-box">
        <p>
          <span class="date">日期</span>
          <span class="read-num"></span>
        </p>
      </div>
      <div class="opt-box">
        <button class="btn-opt btn-top">置顶</button>
        <a href="" class="btn-opt btn-edit">编辑</a>
        <button class="btn-opt delete"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.article-list {
  border-top: 1px solid #f0f2f5;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
}
.article-list .article-item-box {
  position: relative;
  padding: 16px 24px 12px 24px;
  border-bottom: 1px solid #f0f2f5;
}
.article-list .article-item-box h4 a {
  display: block;
  padding-left: 36px;
  word-break: break-all;
  color: #222226;
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;
}
.article-list .article-item-box p.content {
  margin-top: 6px;
  font-size: 14px;
  line-height: 22px;
  white-space: normal;
  color: #999aaa;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.article-list .article-item-box div.info-box {
  display: flex;
  margin-top: 2px;
}
.article-list .article-item-box div.info-box p .date {
  color: #5f6471;
}
.article-list .article-item-box div.info-box p .read-num {
  color: #5f6471;
  margin-left: 16px;
}
.article-list .article-item-box div.info-box p .read-num img {
  width: 14px;
  height: 14px;
  vertical-align: -2px;
  margin-right: 4px;
}
.article-list .article-item-box div.opt-box {
  display: none;
  position: absolute;
  right: 24px;
  bottom: 14px;
}
.article-list .article-item-box div.opt-box .btn-opt {
  border: none;
  color: #5893c2;
  font-size: 14px;
  margin-left: 12px;
  background-color: transparent;
  cursor: pointer;
}
.article-list .article-item-box div.opt-box .delete {
  color: #e33e33;
}
</style>