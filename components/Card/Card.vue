<template>
	<view class="item">
		<view class="left">
			<slot name="image"></slot>
			<slot name="content"></slot>
		</view>
		<div class="right">
			<slot name="right_icon"></slot>
		</div>
	</view>
</template>

<script setup>
	// defineProps({
	// 	itemData: Object
	// })
</script>

<style lang="scss">
	.item {
		display: flex;
		height: 100rpx;
		background-color: #fff;
		border-radius: 10rpx;
		margin-top: 10rpx;
		padding: 0 15rpx;
		justify-content: space-between;
		align-items: center;

		.left {
			display: flex;
			align-items: center;

			image {
				width: 75rpx;
				height: 75rpx;
				border-radius: 8rpx;
				margin-right: 20rpx;
			}

			.name {
				font-size: 30rpx;
			}
		}

		.right {
			height: 40rpx;
			width: 40rpx;
			box-sizing: border-box;

			image {
				height: 40rpx;
				width: 40rpx;
				margin-right: 5rpx;
			}
		}
	}
</style>
