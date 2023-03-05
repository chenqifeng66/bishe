"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const common_vendor = require("./common/vendor.js");
const common_api = require("./common/api.js");
require("./utils/request.js");
require("./common/operate.js");
if (!Math) {
  "./pages/login/login.js";
  "./pages/register/register.js";
  "./pages/message/message.js";
  "./pages/contacts/contacts.js";
  "./pages/set/set.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.warn("\u5F53\u524D\u7EC4\u4EF6\u4EC5\u652F\u6301 uni_modules \u76EE\u5F55\u7ED3\u6784 \uFF0C\u8BF7\u5347\u7EA7 HBuilderX \u5230 3.1.0 \u7248\u672C\u4EE5\u4E0A\uFF01");
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/\u5927\u56DB\u4E0A\u5B66\u671F\u8BFE\u7A0B\u5185\u5BB9/\u6BD5\u8BBE/uni-app/yike/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.config.globalProperties.$api = common_api.api;
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
