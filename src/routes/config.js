export default {
  mode:"history",
  routes:[
    {
      path:"/",
      name:"Hot",
      component:()=>import("@/views/HotBlogList")
    },
    {
      path:"/rec",
      name:"Rec",
      component:()=>import("@/views/RecBlogList")
    },
    {
      path:"/new",
      name:"New",
      component:()=>import("@/views/NewestBlogList")
    },
    {
      path:"/follow",
      name:"Follow",
      component:()=>import("@/views/FollowBlogList")
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
      path:"/user",
      name:"UserInfo",
      component:()=>import("@/views/user-center/UserCenter")
    },
    {
      path:"/editor",
      name:"Editor",
      component:()=>import("@/views/Editor")
    },
    // 消息中心
    {
      path: "/msg",
      name: "Msg",
      component:()=>import("@/views/message-center/MessageCenter.vue")
    },
    {
      path: "*", // 匹配所有路径
      name:"NotFound",
      component: () => import("@/views/NotFound")
    },
  ]
}