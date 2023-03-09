<template>
	<view class="container">
		<view class="avatar">
			<image src="@/static/my-icons/fox.png" mode="scaleToFill"></image>
		</view>

		<view class="options">
			<Card v-for="(item,index) in setOptions" :key="index">
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
	import set_img from "@/static/set.png" 
import { reactive } from "vue";
	
	const setOptions = reactive([{
		name:"个人信息",
		imgUrl:set_img
	},{
		name:"个人信息",
		imgUrl:set_img
	},{
		name:"个人信息",
		imgUrl:set_img
	},{
		name:"个人信息",
		imgUrl:set_img
	}])
	
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
			.icon{
				width:50rpx;
				height: 50rpx;
				margin-left: 20rpx;
			}
		}
	}
</style>
