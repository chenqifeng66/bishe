<template>
	<view class="container">
		<div class="header">
			<text>Welcome</text>
		</div>

		<div class="username">
			<input v-model="username" @focus="onFocus('username')" />
			<uni-icons type="clear" v-if="active.username" class='clearBtn' color="rgb(196, 196, 196)" size="28"
				@click="Clear('username')">
			</uni-icons>


		</div>

		<div class="password">
			<input v-model="password" password @focus="onFocus('password')" />
			<uni-icons type="clear" v-if="active.password" class='clearBtn' color="rgb(196, 196, 196)" size="28"
				@click="Clear('password')">
			</uni-icons>
		</div>

		<button class="nextBtn" @click="Login">登录</button>


	</view>
</template>

<script setup>
	import {
		ref,
		getCurrentInstance,
		reactive
	} from 'vue'

	// 用户名和密码
	const username = ref("Mr.")
	const password = ref("123456")
	// 控制清除按钮样式
	const active = reactive({
		username: false,
		password: false,
	})

	const {
		proxy
	} = getCurrentInstance()

	// 登录
	const Login = async () => {
		const data = await proxy.$api.login({
			data: username.value,
			password: password.value
		})
		// 登录成功跳转到消息页
		if (data.code == 200) {
			uni.switchTab({
				url: "/pages/message/message"
			})
		}
	}

	// 注册
	const Register = () => {
		uni.navigateTo({
			url: "/pages/register/register"
		})
	}

	// 清除输入框
	const Clear = (type) => {
		if (type == 'username') {
			username.value = ''
			active.username = false
		}
		if (type == "password") {
			password.value = ''
			active.password = false
		}

	}

	const onFocus = (type) => {
		if (type == 'username' && username.value.trim()) {
			active.username = true
		} else {
			active.username = false
		}

		if (type == "password" && password.value.trim()) {
			active.password = true
		} else {
			active.password = false
		}
	}
</script>

<style lang="scss">
	.container {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 48rpx;
		position: relative;

		.header {
			width: 100%;
			margin-top: 150rpx;
			margin-bottom: 48rpx;

			text {
				font-size: 64rpx;
				line-height: 88rpx;
				font-weight: 300;
			}
		}

		.username,
		.password {
			width: 100%;
			position: relative;

			input {
				background-color: rgb(248, 249, 250);
				border: none;
				color: rgb(33, 37, 41);
				padding: 32rpx;
				font-size: 32rpx;
				line-height: 82rpx;
				border-radius: 32rpx;
			}

			.clearBtn {
				position: absolute;
				top: 50%;
				right: 0;
				transform: translate(-50%, -50%);
				z-index: 999;
			}
		}

		.password {
			margin-top: 30rpx;
		}


		.nextBtn {
			width: 654rpx;
			background-color: rgb(33, 37, 41);
			color: #fff;
			font-size: 32rpx;
			line-height: 48rpx;
			padding: 32rpx 48rpx;
			border-radius: 32rpx;
			position: absolute;
			bottom: 160rpx;
		}
	}
</style>
