import axios from "axios";
import { URL } from "./config";
// 用户模块：
// 注册
export async function register(data) {
  var resp = await axios.post(URL+"register/", data)
  return resp;
}
// 登录
export async function login(data) {
  var resp = await axios.post(URL + "login/", data)
  return resp;
}
// 登出
export async function logout() {
  var resp = await axios.get(URL + "user/logout/")
  return resp;
}
// 修改用户信息
export async function updateUserInfo(data) {
  var resp = await axios.post(URL + "user/updateUserByUserId/", data)
  // console.log(resp);
  return resp;
}
// 上传头像
export async function uploadImg(formData) {
  var resp = await axios.post(URL + "user/uploadImage/", formData)
  // console.log(resp);
  return resp;
}
// 获取用户信息
export async function getUserInfo(id) {
  var resp = await axios.get(URL + "all/info/" + id)
  return resp.data;
}

// 新闻模块
// 获取热榜新闻
export async function getHotBlogs(data) {
  var resp = await axios.post(URL + "all/hot/", data)
  return resp.data;
}
// 获取推荐新闻
export async function getRec(data) {
  var resp = await axios.post(URL + "user/recommend/", data)
  return resp.data;
}
// 获取最新发布新闻
export async function getNewest(page) {
  var resp = await axios.post(URL + "all/newest/", page)
  return resp.data;
}
// 获取关注动态
export async function getFollow(page) {
  var resp = await axios.post(URL + "user/follow/", page)
  // console.log(resp);
  return resp.data;
}
// 获取今日推荐新闻
export async function getTodayRec() {
  var resp = await axios.get(URL + "all/todayRecommend/")
  // console.log(resp);
  return resp.data;
}
// 评论模块
// 获取评论
export async function getComment(data) {
  var resp = await axios.post(URL + "all/getCommentVOByBlogId/", data)
  return resp;
}
// 发布评论
export async function pubComment(comment) {
  var resp = await axios.post(URL + "user/addComment/", comment)
  return resp;
}
// 删除评论
export async function delComment(id) {
  var resp = await axios.get(URL + "user/deleteCommentByCommentId?commentId=" + id)
  return resp;
}
export async function getBlog(id) {
  var resp = await axios.get(URL + "all/detail/" + id)
  // console.log(resp);
  return resp.data;
}
// 根据用户id 获取新闻列表(按最后发布时间)
export async function getUserNewsList(data) {
  var resp = await axios.post(URL + "all/user", data)
  console.log(resp);
  return resp;
}
// 获取收藏的文章
export async function collectList(id) {
  var resp = await axios.get(URL + 'collect/select/' + id) 
    console.log(resp);
    return resp
}
// 关注模块
// 获取关注列表
export async function getFollowList(id) {
  var resp = await axios.get(URL + 'user/selectFollowUserByUserId?userId=' + id) 
    return resp
}
// 获取粉丝列表
export async function getFansList(id) {
  var resp = await axios.get(URL + 'user/selectFansByUserId?userId=' + id) 
    return resp
}
// 关注和取消关注
export async function follow(data) {
  var resp = await axios.post(URL + 'user/followUser', data) 
    return resp
}
export async function edit(data) {
  var resp = await axios.post(URL + "editormd/", data)
  // console.log(resp);
  return resp;
}
export async function like(id) {
  var resp = await axios.get(URL + "user/like/" + id)
  console.log(resp);
  return resp.data;
}
export async function renewal() {
  var resp = await axios.get(URL + "islogin/")
  // console.log(resp);
  return resp;
}
export async function uploadEditorImg(formData) {
  var resp = await axios.post(URL + "uploadeditorimage/", formData)
  // console.log(resp);
  return resp;
}
export async function getClassify(id) {
  var resp = await axios.get(URL + "gettype/" + id)
  // console.log(resp);
  return resp;

}
export async function search(msg) {
  var resp = await axios.get(URL + "search/" + msg)
  console.log(resp);
  return resp;
}
export async function publish(msg) {
  var resp = await axios.post(URL + "user/publish/", msg)
  // console.log(resp);
  return resp;
}
export async function getUserBlogs(userId) {
  var resp = await axios.post(URL + "publishcomment/", userId)
  // console.log(resp);
  return resp;
}
export async function likeMsg() {
  var resp = await axios.get(URL + "msg/like/")
  console.log(resp);
  return resp;
}
export async function lookLike() {
  var resp = await axios.get(URL + "msg/likedetail/")
  console.log(resp);
  return resp;
}
export async function commentMsg() {
  var resp = await axios.get(URL + "msg/comment/")
  console.log(resp);
  return resp;
}
export async function lookComment() {
  var resp = await axios.get(URL + "msg/commentdetail/")
  console.log(resp);
  return resp;
}
// 获取公告数量
export async function noticeMsg() {
  var resp = await axios.get(URL + "msg/notice/")
  console.log(resp);
  return resp;
}
// 获取公告列表
export async function getNotice() {
  var resp = await axios.get(URL + "msg/noticedetail/")
  console.log(resp);
  return resp;
}
// 查看公告
export async function lookNotice(id) {
  var resp = await axios.get(URL + "msg/noticedetail/"+id)
  console.log(resp);
  return resp;
}
// 发布公告
export async function pubNotice(obj) {
  var resp = await axios.post(URL + "admin/notice/",obj)
  console.log(resp);
  return resp;
}



