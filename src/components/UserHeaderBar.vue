<template>
  <div class="infoMsgHead">
    <div class="inner">
      <div class="user-left">
        <div class="user-img">
          <img src="" alt="">
          <p class="modify-img">上传头像</p>
        </div>
        <p></p>
      </div>
      <div class="user-info">
        <p class="user-id"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.infoMsgHead {
  height: 150px;
  width: 100%;
}
.infoMsgHead .inner {
  width: 960px;
  height: 100%;
  margin: 0 auto;
}
.infoMsgHead .inner .user-left {
  float: left;
  padding: 35px 48px 0 40px;
}
.infoMsgHead .inner .user-left .user-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border: 1px solid #464646;
}
.infoMsgHead .inner .user-left .user-img img {
  width: 100%;
  height: 100%;
}
.infoMsgHead .inner .user-left .user-img p {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 24px;
  line-height: 24px;
  text-align: center;
  background: rgba(0,0,0,.8);
}
.infoMsgHead .inner .user-left p {
  color: #f0f0f5;
  font-size: 13px;
  text-align: center;
  margin-top: 8px;
}
.infoMsgHead .inner .user-info {
  float: left;
  padding-top: 40px;
  color: #fff;
  font-size: 16px;
  padding-right: 24px;
}
</style>