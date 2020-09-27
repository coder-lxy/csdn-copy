import axios from "axios";
import { URL } from "./config";
// 分页获取新闻
export async function getBlogs() {
  var resp = await axios.get(URL)
  console.log(resp);
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
  return resp.data;
}
export async function register(data) {
  var resp = await axios.post(URL + "/register/", data)
  console.log(resp);
  return resp.data;
}
