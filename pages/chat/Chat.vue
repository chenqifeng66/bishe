<template>
	<view class="container">
		<view class="bottom">
			<view class="left">
				<image src="../../static/my-icons/语音.png" mode="scaleToFill"></image>
			</view>
			<view class="middle">
				<input type="text">
			</view>
			<view class="right">
				<image src="../../static/my-icons/表情.png" mode="scaleToFill"></image>
				<image src="../../static/my-icons/加号.png" mode="scaleToFill"></image>
			</view>
		</view>
	</view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.container{
	height: 100vh;
	background-color: #ccc;
	.bottom{
		height: 100rpx;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		width: 100%;
		display: flex;
		align-items: center;
		
		.left{
			width: 10%;
			display: flex;
			justify-content: center;
			align-items: center;
			image{
				height: 50rpx;
				width: 50rpx;
			}
		}
		
		.middle{
			width: 75%;
			box-sizing: border-box;
			margin-right: 5rpx;
			input{
				border-radius: 5px;
				height: 60rpx;
				background-color: #ccc;
			}
		}
		
		.right{
			width: 15%;
			display: flex;
			justify-content: space-around;
			margin-right: 5rpx;
			image{
				height: 50rpx;
				width: 50rpx;
			}
		}
		
	}
}
</style>
