<template>
  <div class="main">
    <div class="main-login">
      <div class="main-process-login">
        <div class="login-form">
          <div class="head clearfix">
            <span @click="changeToLogin()" class="login" :class="{active:login}">登录</span>
            <span @click="changeToReg()" class="reg" :class="{active:!login}">注册</span>
          </div>
          <div class="content">
            <div v-show="login" class="login-content">
              <input
                v-model="userInfo.username"
                type="text"
                placeholder="账号"
                class="form-control"
              />
              <input v-model="userInfo.password" type="password" placeholder="密码" class="form-control" />
              <div class="check-box">
                <input type="checkBox" class="remember" @click="remember()"/>记住密码
              </div>
               <div v-show="this.loginMsg.code===-1" class="tips">{{this.loginMsg.msg}}</div>
              <button @click="toLogin">登录</button>
             
            </div>
            <div v-show="!login" class="reg-content">
              <input  v-model="newUserInfo.username" type="text" placeholder="账号" class="form-control" />
              <input v-model="newUserInfo.password" type="password" placeholder="密码" class="form-control" />
               <div v-show="this.regMsg.code===-1" class="tips">{{this.regMsg.msg}}</div>
              <button @click="toRegister">注册</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "../services/blogService";
import { register } from "../services/blogService";
export default {
  data() {
    return {
      login:true,
      userInfo: {
        username: "",
        password: "",
        rememberme: false,
      },
      newUserInfo: {
        username: "",
        password: "",
      },
      loginMsg:{
        msg:'',
        code:''
      },
      regMsg:{
        msg:'',
        code:''
      }
    };
  },
  methods: {
    toLogin() {
      login(this.userInfo).then((v) => {
        this.loginMsg=v;
        if(this.loginMsg.code===0) {
          // console.log(v.user);
          this.$store.state.currentUser=v.user;
          this.$store.state.isLogin = true
          this.$router.push({
            path:'/',
          })
        }
      });
    },
    toRegister() {
        console.log(this.newUserInfo);
      register(this.newUserInfo).then((v) => {
        console.log(v);
        this.regMsg=v;
        if(this.regMsg.code===0) {
          this.$router.push({
            path:'/',
          })
        }
      });
    },
    changeToLogin() {
      this.login=true
    },
    changeToReg() {
      this.login=false
    },
    remember(){
      // console.log(event.target.checked);
      this.userInfo.rememberme=event.target.checked
    }
  },
};
</script>

<style scoped>
.main {
  width: 450px;
  height: 450px;
  margin: 100px auto;
  padding-bottom: 30px 0;
  background-color: #fff;
  border: 1px solid #fff;
}
.main .main-process-login {
  width: 50%;
  margin: 44px auto 0;
}
.main .main-process-login .head {
  padding: 0 5px;
  margin-bottom: 20px;
}
.main .main-process-login .head span {
  width: 50%;
  padding: 0 15px;
  text-align: center;
  font-size: 14px;
  color: #4d4d4d;
  cursor: pointer;
  border-bottom: 2px solid #f5f5f5;
}

.main .main-process-login .head .login {
  float: left;
}
.main .main-process-login .head .reg {
  float: right;
}
.main .main-process-login .head .active {
  border-bottom: 2px solid #ca0416;
}
.main .main-process-login .content .form-control {
  width: 100%;
  height: 32px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px 4px;
  background-color: #fff;
  color: #4d4d4d;
  font-size: 14px;
  margin-bottom: 20px;
}
.main .main-process-login .content .tips {
  width: 100%;
  text-align: center;
  color: #ca0c16;
  font-size: 12px;
}
.main .main-process-login .content button {
  margin-top: 30px;
  width: 100%;
  background-color: #f5f5f5;
  color: #ccc;
  border-color: transparent;
  padding: 8px 12px;
  border-radius: 4px 4px;
  font-size: 14px;
}
.main .main-process-login .content button:hover {
  color: #c2c2c2;
}
.main .main-process-login .content .login-content .check-box {
  text-align: end;
  font-size: 12px;
  color: #4d4d4d;
}
</style>