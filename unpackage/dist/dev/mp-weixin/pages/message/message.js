"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_list_chat2 = common_vendor.resolveComponent("uni-list-chat");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_search_bar2 + _easycom_uni_list_chat2 + _easycom_uni_list2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_list_chat = () => "../../uni_modules/uni-list/components/uni-list-chat/uni-list-chat.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_list_chat + _easycom_uni_list)();
}
const _sfc_main = {
  __name: "message",
  setup(__props) {
    let showPopup = common_vendor.ref(false);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0,
        b: common_assets._imports_1,
        c: common_vendor.o(($event) => common_vendor.isRef(showPopup) ? showPopup.value = !common_vendor.unref(showPopup) : showPopup = !common_vendor.unref(showPopup)),
        d: common_vendor.unref(showPopup)
      }, common_vendor.unref(showPopup) ? {} : {}, {
        e: common_vendor.o(_ctx.search),
        f: common_vendor.o(_ctx.input),
        g: common_vendor.p({
          cancelButton: "none",
          placeholder: "搜索"
        }),
        h: common_vendor.p({
          title: "uni-app",
          avatar: "https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
          note: "您收到一条新的消息",
          time: "2020-02-02 20:20",
          ["badge-positon"]: "right",
          ["badge-text"]: "99"
        }),
        i: common_vendor.p({
          title: "uni-app",
          avatar: "https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
          note: "您收到一条新的消息",
          time: "2020-02-02 20:20",
          ["badge-positon"]: "right",
          ["badge-text"]: "99"
        }),
        j: common_vendor.p({
          title: "uni-app",
          avatar: "https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
          note: "您收到一条新的消息",
          time: "2020-02-02 20:20",
          ["badge-positon"]: "right",
          ["badge-text"]: "99"
        }),
        k: common_vendor.p({
          title: "uni-app",
          avatar: "https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
          note: "您收到一条新的消息",
          time: "2020-02-02 20:20",
          ["badge-positon"]: "right",
          ["badge-text"]: "99"
        }),
        l: common_vendor.p({
          title: "uni-app",
          avatar: "https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
          note: "您收到一条新的消息",
          time: "2020-02-02 20:20",
          ["badge-positon"]: "right",
          ["badge-text"]: "99"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/lindo02/work/bishe/bishe/pages/message/message.vue"]]);
wx.createPage(MiniProgramPage);
