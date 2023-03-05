<template>
	<view class="container">
		<!-- logo区域-->
		<view class="logo">
			<image src="../static/my-icons/logo.png" alt=""></image>
		</view>

		<!-- 登录区域 -->
		<view class="main">
			<!-- 表单区域 -->
			<view class="form">
				<input type="text" v-model="username" placeholder="用户名">
				<input type="email" v-model="email" placeholder="邮箱">
				<input type="password" v-model="password" placeholder="输入密码">
				<input type="password" v-model="password" placeholder="再次输入密码">
			</view>

			<!-- 登录按钮 -->
			<button class="btn-login" @click="toRegister">→</button>
		</view>

		<!-- 底部文字区域 -->
		<view class="bottom-bar">
			<span @click="toLogin">登录</span>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		getCurrentInstance
	} from 'vue'

	// 用户名、密码、邮箱
	const username = ref("Mr.")
	const password = ref("123456")
	const email = ref("839860666@qq.com")

	const {
		proxy
	} = getCurrentInstance()

	// 注册
	const toRegister = () => {
		proxy.$api.register({
			name: username.value,
			email: email.value,
			password: password.value
		})
	}

	// 登录
	const toLogin = () => {
		uni.navigateTo({
			url: "/pages/login/login"
		})
	}
</script>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;

		// logo区域
		.logo {
			margin-top: 150rpx;

			image {
				height: 150rpx;
				width: 150rpx;
			}
		}

		// 表单区域
		.main {
			margin: 50rpx 0;

			.form {
				input {
					border: 1px solid #ccc;
					border-radius: 50rpx;
					margin: 30rpx 0;
					width: 400rpx;
					height: 60rpx;
					padding: 10rpx 40rpx;
					text-align: center;
				}
			}

			.btn-login {
				background-color: #5b88b3;
				width: 130rpx;
				height: 130rpx;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #fff;
				font-size: 50rpx;
				margin-top: 60rpx;
			}
		}

		// 底部文字区域
		.bottom-bar {
			position: absolute;
			bottom: 80rpx;
			font-size: 30rpx;
		}
	}
</style>
