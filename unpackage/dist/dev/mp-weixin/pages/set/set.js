"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  common_vendor.unref(Card)();
}
const Card = () => "../../components/Card/Card.js";
const _sfc_main = {
  __name: "set",
  setup(__props) {
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
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.f(setOptions, (item, index, i0) => {
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8936fe0d"], ["__file", "/Users/lindo02/work/bishe/bishe/pages/set/set.vue"]]);
wx.createPage(MiniProgramPage);
