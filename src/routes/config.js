export default {
  mode:"history",
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
    },
    {
      path:"/editor",
      name:"Editor",
      component:()=>import("@/views/Editor")
    },
    {
      path: "*", // 匹配所有路径
      name:"NotFound",
      component: () => import("@/views/NotFound")
    },
  ]
}