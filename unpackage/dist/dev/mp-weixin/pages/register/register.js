"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "register",
  setup(__props) {
    const username = common_vendor.ref("Mr.");
    const password = common_vendor.ref("123456");
    const email = common_vendor.ref("839860666@qq.com");
    const {
      proxy
    } = common_vendor.getCurrentInstance();
    const toRegister = () => {
      proxy.$api.register({
        name: username.value,
        email: email.value,
        password: password.value
      });
    };
    const toLogin = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: username.value,
        b: common_vendor.o(($event) => username.value = $event.detail.value),
        c: email.value,
        d: common_vendor.o(($event) => email.value = $event.detail.value),
        e: password.value,
        f: common_vendor.o(($event) => password.value = $event.detail.value),
        g: password.value,
        h: common_vendor.o(($event) => password.value = $event.detail.value),
        i: common_vendor.o(toRegister),
        j: common_vendor.o(toLogin)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/\u5927\u56DB\u4E0A\u5B66\u671F\u8BFE\u7A0B\u5185\u5BB9/\u6BD5\u8BBE/uni-app/yike/pages/register/register.vue"]]);
wx.createPage(MiniProgramPage);
