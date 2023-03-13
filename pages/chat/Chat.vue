<template>
	<view class="container">
		<!-- 聊天内容区域 -->
		<view class="main">
			<view class="message">
				<image src="../../static/my-icons/fox.png" mode="scaleToFill"></image>
				<view class="content">
					<text>这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息这是一条这是一条消息这是一条消息这是一条</text>
				</view>
			</view>
			<view class="message right">
				<image src="../../static/my-icons/rabbit.png" mode="scaleToFill"></image>
				<view class="content">
					<text>这是一条消息这是一条消息这是一条消息</text>
				</view>
			</view>
		</view>
		
		<!-- 底部控件 -->
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
	
	// 底部控件
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

	// 聊天内容区域
	.main{
		height: 100%;
		margin-bottom: 100rpx;
		padding: 0 20rpx;
		
		.message{
			display: flex;
			align-items: flex-start;
			padding: 15rpx 0;
			
			image{
				height: 50rpx;
				width: 50rpx;
			}
			
			.content{
				background-color: #fff;
				margin-left: 10rpx;
				padding:10rpx;
				border-radius: 8rpx;
				max-width: 70%;
			}
		}
		
		.right{
			flex-direction: row-reverse;
			
			.content{
				margin-right: 10rpx;
			}
		}
	}
}
</style>
