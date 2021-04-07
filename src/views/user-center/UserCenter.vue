<template>
  <div>
    <div class="main">
      <AsideProfile :userInfo="userInfo" class="left clearfix"></AsideProfile>
      <UserManage :userId="userInfo.user.userId" class="right clearfix"></UserManage>
    </div>
  </div>
</template>

<script>
import AsideProfile from '@/components/AsideProfile'
import UserManage from './components/UserManage.vue'
import { getUserInfo } from '@/services/blogService.js'
export default {
  data() {
    return {
      userInfo: {},
      userId: ''
    }
  },
  components: {
    AsideProfile,
    UserManage,
  },
  created() {
    getUserInfo(this.$route.query.id).then((v) => {
      this.userInfo = v.data
      this.userId = this.userInfo.user.userId
    })
  },
}
</script>

<style scoped>
.main {
  margin-right: 278px;
}
.left {
  float: right;
  margin-left: 10px;
  margin-top: 20px;
}
.right {
  float: right;
  margin-top: 20px;
}
</style>
