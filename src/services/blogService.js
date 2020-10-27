import axios from "axios";
import { URL } from "./config";
// 分页获取新闻
export async function getHotBlogs(page) {
  var resp = await axios.get(URL + "/hot/" + page)
  // console.log(resp);
  return resp;
}
export async function getRec(page) {
  var resp = await axios.post(URL + "/recommend/"+ page)
  // console.log(resp);
  return resp;
}
export async function getNewest(page) {
  var resp = await axios.post(URL + "/newest/"+ page)
  // console.log(resp);
  return resp;
}
export async function getTodayRec() {
  var resp = await axios.post(URL + "/todayrecommend/")
  // console.log(resp);
  return resp;
}
export async function getFollow(page) {
  var resp = await axios.post(URL + "/follow/"+ page)
  // console.log(resp);
  return resp;
}
export async function getBlog(id) {
  var resp = await axios.get(URL + "/detail/" + id)
  // console.log(resp);
  return resp;
}
export async function getUserInfo(id) {
  var resp = await axios.get(URL + "/userinfo/" + id)
  // console.log(resp);
  return resp;
}
export async function login(data) {
  var resp = await axios.post(URL + "/login/", data)
  // console.log(resp);
  return resp;
}
export async function logout(data) {
  var resp = await axios.post(URL + "/logout/", data)
  // console.log(resp);
  return resp;
}
export async function register(data) {
  var resp = await axios.post(URL + "/register/", data)
  // console.log(resp);
  return resp;
}
export async function edit(data) {
  var resp = await axios.post(URL + "/editormd/", data)
  // console.log(resp);
  return resp;
}
export async function like(id) {
  var resp = await axios.post(URL + "/like/" + id)
  console.log(resp);
  return resp.data;
}
export async function renewal() {
  var resp = await axios.post(URL + "/islogin/")
  // console.log(resp);
  return resp;
}
export async function uploadImg(formData) {
  var resp = await axios.post(URL + "/uploadimage/", formData)
  // console.log(resp);
  return resp;
}
export async function uploadEditorImg(formData) {
  var resp = await axios.post(URL + "/uploadeditorimage/", formData)
  // console.log(resp);
  return resp;
}
export async function getClassify(id) {
  var resp = await axios.post(URL + "/gettype/" + id)
  // console.log(resp);
  return resp;

}
export async function search(msg) {
  var resp = await axios.get(URL + "/search/" + msg)
  console.log(resp);
  return resp;
}
export async function publish(msg) {
  var resp = await axios.post(URL + "/editor/", msg)
  // console.log(resp);
  return resp;
}

export async function getComment(blogId) {
  var resp = await axios.post(URL + "/comment/" + blogId)
  // console.log(resp);
  return resp;
}
export async function pubComment(comment) {
  var resp = await axios.post(URL + "/publishcomment/", comment)
  // console.log(resp);
  return resp;
}
export async function getUserBlogs(userId) {
  var resp = await axios.post(URL + "/publishcomment/", userId)
  // console.log(resp);
  return resp;
}



