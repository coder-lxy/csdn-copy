<template>
  <div class="wrap">
    <div class="follow_list" v-if="followList.length">
      <el-row v-for="(item, index) in followList" :key="index">
      <el-col :span="2">
        <el-avatar size="small" :src="item.headUrl"></el-avatar>
      </el-col>
      <el-col :span="2">
        <el-link :underline="false">
          {{ item.username }}
        </el-link>
      </el-col>
      <el-col :span="2" :offset="10">
        <el-button round @click="changeStatus">{{isFollow ? '取消关注':'已关注'}}</el-button>
      </el-col>
    </el-row>
    </div>
    <div class="follow_list" v-if="!followList.length">
      暂无关注
    </div>
  </div>
</template>

<script>
import {getFollowList} from '@/services/blogService.js'
export default {
  data() {
    return {
      followList: [],
      isFollow: 0
    }
  },
  props: {
    userId: ''
  },
  created() {
    getFollowList(this.userId).then(v=>{
      this.followList = v.data.data
    })
  },
  methods: {
    // 查看关注状态
    
    // 关注或者取消关注
    changeStatus() {
      this.isFollow = !this.isFollow
    }
  }
}
</script>

<style scoped>
.wrap {
  padding: 20px;
}
.wrap .el-row {
  border-bottom: 1px solid #f0f2f5;
}
</style>
