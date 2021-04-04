<template>
  <div class="msg-list">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <span>
          <a href="">{{ item.remindContent }}</a>
        </span>
      </li>
    </ul>
    <!-- <ul>
      <li v-for="(item,index) in list" :key="index" @click="lookNoticeDetail(item.noticeId)">
        <span>{{item.noticeTitle}}</span>
        <span>{{item.remindContent}}</span>
      </li>
    </ul> -->
  </div>
</template>

<script>
import { lookNotice } from '../services/blogService';
export default {
  props:{
    list:[]
  },
  methods:{
    lookNoticeDetail(id) {
      alert(11)
      lookNotice(id)
    }
  }
};
</script>

<style scoped>
.msg-list {
  padding: 0 0 0 15px;
  min-height: 370px;
}
.msg-list ul li {
  position: relative;
  display: block;
  padding: 16px 0;
  border-bottom: 1px solid #e0e0e0;
}
</style>