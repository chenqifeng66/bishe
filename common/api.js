import Request from "../utils/request.js"

let request = new Request().http

export default {
	// 登录请求
	login: (data) => {
		return request({
			url: "/login/login",
			method: "POST",
			data: data
		})
	},

	// 注册请求
	register: (data) => {
		return request({
			url: "/login/register",
			method: "POST",
			data: data
		})
	},
	
	// 获取好友列表
	getFriendList:(data)=>{
		return request({
			url:"/friend/list",
			method:"GET",
			data:data
		})
	}
}
