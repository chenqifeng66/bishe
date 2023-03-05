"use strict";
const common_vendor = require("../common/vendor.js");
const common_operate = require("../common/operate.js");
class Request {
  http(param) {
    const url = param.url, method = param.method.toUpperCase(), header = {}, data = param.data || {};
    param.token || "";
    const requestUrl = common_operate.operate.api + url;
    common_vendor.index.showLoading({
      title: "\u52A0\u8F7D\u4E2D..."
    });
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        url: requestUrl,
        data,
        method,
        header,
        success: (res) => {
          if (res.data.code) {
            if (res.data.code != "200") {
              common_vendor.index.showToast({
                title: "" + res.data.message,
                icon: "none"
              });
              return;
            }
          } else {
            common_vendor.index.showToast({
              title: res.data.message,
              icon: "none"
            });
            return;
          }
          resolve(res.data);
        },
        fail: (e) => {
          common_vendor.index.showToast({
            title: "" + e.data.message,
            icon: "none"
          });
          resolve(e.data);
        },
        complete() {
          common_vendor.index.hideLoading();
          resolve();
          return;
        }
      });
    });
  }
}
exports.Request = Request;
