"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
new Proxy({}, {
  get(_, key) {
    throw new Error(`Module "os" has been externalized for browser compatibility. Cannot access "os.${key}" in client code.`);
  }
});
if (!Math) {
  common_vendor.unref(Card)();
}
const Card = () => "../../components/Card/Card.js";
const _sfc_main = {
  __name: "set",
  setup(__props) {
    const state = common_vendor.reactive({
      userInfo: {}
    });
    const setOptions = common_vendor.reactive([{
      name: "个人信息",
      imgUrl: common_assets.set_img
    }, {
      name: "个人信息",
      imgUrl: common_assets.set_img
    }, {
      name: "个人信息",
      imgUrl: common_assets.set_img
    }, {
      name: "个人信息",
      imgUrl: common_assets.set_img
    }]);
    const getUserInfo = () => {
      common_vendor.index.getUserProfile({
        desc: "weixin",
        success({
          userInfo
        }) {
          common_vendor.index.setStorageSync("userInfo", userInfo);
          state.userInfo = common_vendor.index.getStorageSync("userInfo");
        }
      });
    };
    common_vendor.onMounted(() => {
      state.userInfo = common_vendor.index.getStorageSync("userInfo") || {};
    });
    return (_ctx, _cache) => {
      return {
        a: state.userInfo.avatarUrl || common_vendor.unref(common_assets.fox),
        b: common_vendor.o(getUserInfo),
        c: common_vendor.f(setOptions, (item, index, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.t(item.name),
            c: index,
            d: "8936fe0d-0-" + i0
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8936fe0d"], ["__file", "/Users/lindo001/work/bishe/pages/set/set.vue"]]);
wx.createPage(MiniProgramPage);
