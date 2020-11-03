<template>
  <div class="infoMsgHead">
    <div class="inner">
      <div class="user-left clearfix">
        <div class="user-img clearfix">
          <img :src="user.headUrl" alt="" />
          <span>上传头像</span>
          <input type="file" class="modify-img" @change="uploadFile($event)" />
        </div>
        <div class="user-info">
          <p class="user-id">{{ user.username }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { uploadEditorImg, uploadImg } from "../services/blogService";
export default {
  data() {
    return {
      user: this.$store.state.userInfo,
    };
  },
  created() {
    console.log(this.user);
  },
  methods: {
    //上传图片
    uploadFile(event) {
      var file = event.target.files[0]; //获取input的图片file值
      console.log(file);
      var formData = new FormData(); // 创建form对象
      formData.append("file", file); //对应后台接收图片名
      console.log(formData);
      uploadImg(formData).then((v) => {
        // console.log(v);
        this.imgUrl = v.data.msg;
        // console.log(this.imgUrl);
      });
    },
  },
};
</script>

<style scoped>
.infoMsgHead {
  height: 150px;
  width: 100%;
}
.infoMsgHead .inner {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}
.infoMsgHead .inner .user-left {
  /* float: left; */
  padding: 35px 48px 0 40px;
}
.infoMsgHead .inner .user-left .user-img {
  float: left;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border: 1px solid #464646;
}
.infoMsgHead .inner .user-left .user-img span {
  display: none;
  width: 100%;
  height: 24px;
  text-align: center;
  line-height: 24px;
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 12px;
  color: #f0f0f5;
  background: rgba(0, 0, 0, 0.8);
}
.infoMsgHead .inner .user-left .user-img:hover span {
  display: block;
}
.infoMsgHead .inner .user-left .user-img img {
  width: 100%;
  height: 100%;
}
.infoMsgHead .inner .user-left .user-img input {
  filter: alpha(opacity=0);
  opacity: 0;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 24px;
  line-height: 24px;
  text-align: center;
}
/* .infoMsgHead .inner .user-left p {
  color: #f0f0f5;
  font-size: 13px;
  text-align: center;
  margin-top: 8px;
} */
.infoMsgHead .inner .user-info {
  float: left;
  padding-top: 40px;
  color: #555666;
  font-size: 16px;
  padding-right: 24px;
}
</style>