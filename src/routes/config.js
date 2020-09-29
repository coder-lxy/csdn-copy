export default {
  routes:[
    {
      path:"/",
      name:"Home",
      component:()=>import("@/views/Home")
    },
    {
      path:"/login",
      name:"Login",
      component:()=>import("@/views/Login")
    },
    {
      path:"/detail",
      name:"BlogDetails",
      component:()=>import("@/views/BlogDetails")
    },
    {
      path:"/userinfo",
      name:"UserInfo",
      component:()=>import("@/views/UserInfo")
    }
  ]
}