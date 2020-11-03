import axios from "axios";
import { URL } from "./config";
// 分页获取新闻
export async function getHotBlogs(page) {
  var resp = await axios.get(URL + "all/hot/" + page)
  console.log(resp);
  return resp;
}
export async function getRec(page) {
  var resp = await axios.post(URL + "user/recommend/"+ page)
  // console.log(resp);
  return resp;
}
export async function getNewest(page) {
  var resp = await axios.post(URL + "all/newest/"+ page)
  // console.log(resp);
  return resp;
}
export async function getTodayRec() {
  var resp = await axios.post(URL + "all/todayrecommend/")
  // console.log(resp);
  return resp;
}
export async function getFollow(page) {
  var resp = await axios.post(URL + "user/follow/"+ page)
  // console.log(resp);
  return resp;
}
export async function getBlog(id) {
  var resp = await axios.get(URL + "all/detail/" + id)
  // console.log(resp);
  return resp;
}
export async function getUserInfo(id) {
  var resp = await axios.get(URL + "userinfo/" + id)
  // console.log(resp);
  return resp;
}
export async function login(data) {
  var resp = await axios.post(URL + "login/", data)
  // console.log(resp);
  return resp;
}
export async function logout() {
  var resp = await axios.post(URL + "user/logout/")
  console.log(resp);
  return resp;
}
export async function register(data) {
  var resp = await axios.post(URL + "register/", data)
  // console.log(resp);
  return resp;
}
export async function edit(data) {
  var resp = await axios.post(URL + "editormd/", data)
  // console.log(resp);
  return resp;
}
export async function like(id) {
  var resp = await axios.post(URL + "user/like/" + id)
  console.log(resp);
  return resp.data;
}
export async function renewal() {
  var resp = await axios.post(URL + "islogin/")
  // console.log(resp);
  return resp;
}
export async function uploadImg(formData) {
  var resp = await axios.post(URL + "uploadimage/", formData)
  // console.log(resp);
  return resp;
}
export async function uploadEditorImg(formData) {
  var resp = await axios.post(URL + "uploadeditorimage/", formData)
  // console.log(resp);
  return resp;
}
export async function getClassify(id) {
  var resp = await axios.post(URL + "gettype/" + id)
  // console.log(resp);
  return resp;

}
export async function search(msg) {
  var resp = await axios.get(URL + "search/" + msg)
  console.log(resp);
  return resp;
}
export async function publish(msg) {
  var resp = await axios.post(URL + "editor/", msg)
  // console.log(resp);
  return resp;
}

export async function getComment(blogId) {
  var resp = await axios.post(URL + "comment/" + blogId)
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
  var resp = await axios.post(URL + "msg/like/")
  console.log(resp);
  return resp;
}
export async function lookLike() {
  var resp = await axios.post(URL + "msg/likedetail/")
  console.log(resp);
  return resp;
}
export async function commentMsg() {
  var resp = await axios.post(URL + "msg/comment/")
  console.log(resp);
  return resp;
}
export async function lookComment() {
  var resp = await axios.post(URL + "msg/commentdetail/")
  console.log(resp);
  return resp;
}



