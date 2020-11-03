<template>
  <div class="msg-list">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <span>
          <a href="">{{ item.remindContent }}</a>
          <!-- 点赞了你的博文 -->
        </span>
        <!-- <p>{{ msg.title }}</p> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    list:[]
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