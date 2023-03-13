<template>
	<view class="container">
		<view class="avatar">
			<image :src="state.userInfo.avatarUrl || fox" mode="scaleToFill" @click="getUserInfo"></image>
		</view>

		<view class="options">
			<Card v-for="(item,index) in state.setOptions" :key="index">
				<template #image>
					<image class="icon" :src="item.imgUrl" mode="scaleToFill"></image>
				</template>
				<template #content>
					<span>{{item.name}}</span>
				</template>
			</Card>
		</view>
	</view>
</template>

<script setup>
	import {
		Card
	} from "@/components/Card/Card.vue"
	import set_img from "@/static/my-icons/set.png"
	import fox from "@/static/my-icons/fox.png"
	import rabbit from "@/static/my-icons/rabbit.png"
	import {
		userInfo
	} from "os";
	import {
		onMounted,
		reactive,
		ref
	} from "vue";

	const state = reactive({
		setOptions: [{
			name: "个人信息",
			imgUrl: set_img
		}, {
			name: "个人信息",
			imgUrl: set_img
		}, {
			name: "个人信息",
			imgUrl: set_img
		}, {
			name: "个人信息",
			imgUrl: set_img
		}],
		userInfo: {}
	})

	const getUserInfo = () => {
		uni.getUserProfile({
			desc: "weixin",
			success({
				userInfo
			}) {
				uni.setStorageSync('userInfo', userInfo)
				state.userInfo = uni.getStorageSync('userInfo');
			}
		})
	}


	onMounted(() => {
		state.userInfo = uni.getStorageSync("userInfo") || {}
	})
</script>

<style lang="scss" scoped>
	.container {
		width: 100%;
		height: 100%;
		padding: 20rpx;
		box-sizing: border-box;

		.avatar {
			height: 300rpx;
			display: flex;
			justify-content: center;
			align-items: flex-end;
			margin-bottom: 20rpx;

			image {
				width: 150rpx;
				height: 150rpx;
			}
		}

		.options {
			.icon {
				width: 50rpx;
				height: 50rpx;
				margin-left: 20rpx;
			}
		}
	}
</style>
