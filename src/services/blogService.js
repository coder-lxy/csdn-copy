import axios from "axios";
import { URL } from "./config";
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
  var resp = await axios.get(URL + "all/newest/"+ page)
  return resp.data;
}
// 获取关注动态
export async function getFollow(page) {
  var resp = await axios.get(URL + "user/follow/"+ page)
  // console.log(resp);
  return resp.data;
}
// 获取今日推荐新闻
export async function getTodayRec() {
  var resp = await axios.get(URL + "all/todayRecommend/")
  // console.log(resp);
  return resp.data;
}

export async function getBlog(id) {
  var resp = await axios.get(URL + "all/detail/" + id)
  // console.log(resp);
  return resp.data;
}
export async function getUserInfo(id) {
  var resp = await axios.get(URL + "all/info/" + id)
  return resp.data;
}
export async function login(data) {
  var resp = await axios.post(URL + "login/", data)
  // console.log(resp);
  return resp;
}
export async function logout() {
  var resp = await axios.get(URL + "user/logout/")
  console.log(resp);
  return resp;
}
export async function register(data) {
  var resp = await axios.post(URL + "register/", data)
  // console.log(resp);
  return resp;
}
// 根据用户id 获取新闻列表(按最后发布时间)
export async function getUserNewsList(data) {
  var resp = await axios.post(URL + "all/user", data)
  console.log(resp);
  return resp;
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
export async function uploadImg(formData) {
  var resp = await axios.post(URL + "user/uploadImage/", formData)
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

export async function getComment(blogId) {
  var resp = await axios.get(URL + "comment/" + blogId)
  // console.log(resp);
  return resp;
}
export async function pubComment(comment) {
  var resp = await axios.post(URL + "user/publishcomment/", comment)
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



