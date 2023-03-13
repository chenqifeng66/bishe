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
    const { proxy } = common_vendor.getCurrentInstance();
    const state = common_vendor.reactive({
      recentContactsList: []
    });
    proxy.$api.getRecentContactsList({ id: "213123213" }).then((res) => {
      state.recentContactsList = res.data.recent_contacts;
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets.fox,
        b: common_vendor.o(_ctx.search),
        c: common_vendor.o(_ctx.input),
        d: common_vendor.p({
          cancelButton: "none",
          placeholder: "搜索"
        }),
        e: common_vendor.f(state.recentContactsList, (item, k0, i0) => {
          return {
            a: "4c1b26cf-2-" + i0 + ",4c1b26cf-1",
            b: common_vendor.p({
              title: item.name,
              avatar: item.avatar,
              note: item.end_message,
              time: item.end_time,
              ["badge-positon"]: "right",
              ["badge-text"]: item.unread_message
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4c1b26cf"], ["__file", "/Users/lindo001/work/bishe/pages/message/message.vue"]]);
wx.createPage(MiniProgramPage);
