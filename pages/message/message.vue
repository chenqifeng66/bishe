<template>
	<!-- 顶部导航 -->
	<view class="top-bar">
		<view class="left">
			<image src="@/static/my-icons/logo.png" mode="scaleToFill"></image>
		</view>
		<view class="right">
			<image src="@/static/my-icons/add.png" mode="scaleToFill" @click="showPopup = !showPopup"></image>
			<view class="popup" v-if="showPopup">
				<view class="add-friend">
					<span>添加好友</span>
				</view>
			</view>
		</view>
	</view>

	<!-- 搜索框区域 -->
	<uni-search-bar @confirm="search" @input="input" cancelButton="none" placeholder="搜索"></uni-search-bar>

	<!-- 消息列表区域 -->
	<view class="main">
		<uni-list>
			<uni-list-chat title="uni-app" avatar="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
				note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="right" badge-text="99">
			</uni-list-chat>
			<uni-list-chat title="uni-app" avatar="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
				note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="right" badge-text="99">
			</uni-list-chat>
			<uni-list-chat title="uni-app" avatar="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
				note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="right" badge-text="99">
			</uni-list-chat>
			<uni-list-chat title="uni-app" avatar="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
				note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="right" badge-text="99">
			</uni-list-chat>
			<uni-list-chat title="uni-app" avatar="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
				note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="right" badge-text="99">
			</uni-list-chat>
		</uni-list>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'

	let showPopup = ref(false)
</script>

<style lang="scss">
	.top-bar {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10rpx 30rpx;
		box-sizing: border-box;

		.left {

			image {
				width: 50rpx;
				height: 50rpx;
			}
		}

		.right {
			position: relative;

			image {
				width: 50rpx;
				height: 50rpx;
			}

			.popup {
				position: absolute;
				left: -355%;
				top: 40%;
				width: 200rpx;
				height: 200rpx;
				border: 1px solid #ccc;
				text-align: center;
				background-color: #fff;
				z-index: 999;
			}
		}
	}

	uni-search-bar {
		.uni-searchbar {
			padding-top: 0;
		}
	}

	.main {
		.uni-list--border::after {
			height: 0 !important;
		}

		.uni-list--border-top {
			height: 0;
		}

		.uni-list--border-bottom {
			height: 0;
		}
	}
</style>
