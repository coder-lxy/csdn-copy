<template>
  <div class="main">
    <div class="main-login">
      <div class="main-process-login">
        <div class="login-form">
          <div class="head">
            <span>登录</span>
            <span>注册</span>
          </div>
          <div class="content">
            <div class="login-content">
              <input type="text" placeholder="账号" />
              <input type="text" placeholder="密码" />
              <button>登录</button>
            </div>
            <div class="reg-content">
              <input type="text" placeholder="账号" />
              <input type="text" placeholder="密码" />
              <button>注册</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  width: 450px;
  height: 500px;
  padding-bottom: 30px 0;
  background-color: #fff;
}
</style>