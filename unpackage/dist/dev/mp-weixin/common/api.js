"use strict";
const utils_request = require("../utils/request.js");
let request = new utils_request.Request().http;
const api = {
  login: (data) => {
    return request({
      url: "/login/login",
      method: "POST",
      data
    });
  },
  register: (data) => {
    return request({
      url: "/login/register",
      method: "POST",
      data
    });
  }
};
exports.api = api;
