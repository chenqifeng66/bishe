"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  common_vendor.unref(Card)();
}
const Card = () => "../../components/Card/Card.js";
const _sfc_main = {
  __name: "contacts",
  setup(__props) {
    const friendList = common_vendor.reactive([]);
    const { proxy } = common_vendor.getCurrentInstance();
    proxy.$api.getFriendList({ id: "12321233123" }).then((res) => {
      res.data.friends.forEach((item) => friendList.push(item));
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(friendList, (item, k0, i0) => {
          return common_vendor.e({
            a: item.imgUrl,
            b: common_vendor.t(item.name),
            c: item.identity
          }, item.identity ? {
            d: common_vendor.unref(common_assets.rabbit)
          } : {
            e: common_vendor.unref(common_assets.fox)
          }, {
            f: item.id,
            g: "90a1bbf6-0-" + i0
          });
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-90a1bbf6"], ["__file", "/Users/lindo02/work/bishe/bishe/pages/contacts/contacts.vue"]]);
wx.createPage(MiniProgramPage);
