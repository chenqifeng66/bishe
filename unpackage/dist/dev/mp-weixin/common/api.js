"use strict";
const utils_request = require("../utils/request.js");
let request = new utils_request.Request().http;
const api = {
  // 登录请求
  login: (data) => {
    return request({
      url: "/login/login",
      method: "POST",
      data
    });
  },
  // 注册请求
  register: (data) => {
    return request({
      url: "/login/register",
      method: "POST",
      data
    });
  },
  // 获取好友列表
  getFriendList: (data) => {
    return request({
      url: "/friend/list",
      method: "GET",
      data
    });
  },
  // 获取最近联系人列表
  getRecentContactsList: (data) => {
    return request({
      url: "/recent_contacts",
      method: "GET",
      data
    });
  }
};
exports.api = api;
