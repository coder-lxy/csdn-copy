import axios from "axios";
import { URL } from "./config";
// 分页获取新闻
export async function getBlogs() {
  var resp = await axios.get(URL)
  // console.log(resp);
  return resp.data;
}
export async function getBlog(id) {
  var resp = await axios.get(URL + "/detail/" + id)
  // console.log(resp);
  return resp.data;
}
export async function getUserInfo(id) {
  var resp = await axios.get(URL + "/userinfo/" + id)
  // console.log(resp);
  return resp.data;
}
export async function login(data) {
  var resp = await axios.post(URL + "/login/", data)
  console.log(resp);
  return resp;
}
export async function logout(data) {
  var resp = await axios.post(URL + "/logout/", data)
  console.log(resp);
  return resp;
}
export async function register(data) {
  var resp = await axios.post(URL + "/register/", data)
  // console.log(resp);
  return resp;
}
export async function edit(data) {
  var resp = await axios.post(URL + "/editormd/", data)
  console.log(resp);
  return resp;
}
export async function like(id) {
  var resp = await axios.post(URL + "/like/"+id)
  console.log(resp);
  return resp.data;
}
export async function renewal() {
  var resp = await axios.post(URL + "/islogin/")
  console.log(resp);
  return resp;
}
export async function uploadImg(formData) {
  var resp = await axios.post(URL + "/uploadImage/", formData)
  console.log(resp);
  return resp;
}
export async function getClassify(id) {
  var resp = await axios.post(URL + "/gettype/"+id)
  console.log(resp);
  return resp;
}
export async function search(msg) {
  var resp = await axios.get(URL + "/search/"+msg)
  console.log(resp);
  return resp;
}
export async function publish(msg) {
  var resp = await axios.post(URL + "/editor/",msg)
  console.log(resp);
  return resp;
}



