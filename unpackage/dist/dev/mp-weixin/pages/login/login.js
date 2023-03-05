"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const username = common_vendor.ref("Mr.");
    const password = common_vendor.ref("123456");
    const active = common_vendor.reactive({
      username: false,
      password: false
    });
    const {
      proxy
    } = common_vendor.getCurrentInstance();
    const Login = async () => {
      const data = await proxy.$api.login({
        data: username.value,
        password: password.value
      });
      if (data.code == 200) {
        common_vendor.index.switchTab({
          url: "/pages/message/message"
        });
      }
    };
    const Clear = (type) => {
      if (type == "username") {
        username.value = "";
        active.username = false;
      }
      if (type == "password") {
        password.value = "";
        active.password = false;
      }
    };
    const onFocus = (type) => {
      if (type == "username" && username.value.trim()) {
        active.username = true;
      } else {
        active.username = false;
      }
      if (type == "password" && password.value.trim()) {
        active.password = true;
      } else {
        active.password = false;
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => onFocus("username")),
        b: username.value,
        c: common_vendor.o(($event) => username.value = $event.detail.value),
        d: active.username
      }, active.username ? {
        e: common_vendor.o(($event) => Clear("username")),
        f: common_vendor.p({
          type: "clear",
          color: "rgb(196, 196, 196)",
          size: "28"
        })
      } : {}, {
        g: common_vendor.o(($event) => onFocus("password")),
        h: password.value,
        i: common_vendor.o(($event) => password.value = $event.detail.value),
        j: active.password
      }, active.password ? {
        k: common_vendor.o(($event) => Clear("password")),
        l: common_vendor.p({
          type: "clear",
          color: "rgb(196, 196, 196)",
          size: "28"
        })
      } : {}, {
        m: common_vendor.o(Login)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/\u5927\u56DB\u4E0A\u5B66\u671F\u8BFE\u7A0B\u5185\u5BB9/\u6BD5\u8BBE/uni-app/yike/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
