import operate from "../common/operate.js"

export default class Request {
	http(param) {
		const url = param.url,
			method = param.method.toUpperCase(),
			header = {},
			data = param.data || {},
			token = param.token || ""

		//拼接完整请求地址
		const requestUrl = operate.api + url;

		//加载圈
		uni.showLoading({
			title: '加载中...'
		});

		// 返回promise
		return new Promise((resolve, reject) => {
			// 请求
			uni.request({
				url: requestUrl,
				data: data,
				method: method,
				header: header,
				success: (res) => {
					// 判断 请求 api 格式是否正确
					// if (res.statusCode && res.statusCode != 200) {
					// 	uni.showToast({
					// 		title: "api错误" + res.errMsg,
					// 		icon: 'none'
					// 	});
					// 	return;
					// }
					// code判断:200成功,不等于200错误
					if (res.data.code) {
						if (res.data.code != '200') {
							uni.showToast({
								title: "" + res.data.message,
								icon: 'none'
							});
							return;
						}
					} else {
						uni.showToast({
							title: res.data.message,
							icon: 'none'
						});
						return;
					}
					// 将结果抛出
					resolve(res.data)
				},
				//请求失败
				fail: (e) => {
					uni.showToast({
						title: "" + e.data.message,
						icon: 'none'
					});
					resolve(e.data);
				},
				//请求完成
				complete() {
					//隐藏加载
					uni.hideLoading();
					resolve();
					return;
				}
			})
		})
	}
}
