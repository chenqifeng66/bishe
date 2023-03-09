<template class="container">
	<view class="container">
		<view class="avatar">
			<image src="../../static/logo.png" mode="scaleToFill"></image>
		</view>
		<view class="options">
			<view class="item">
				<uni-icons type="person-filled"></uni-icons>
				<span>个人信息</span>
			</view>
			<view class="item">
				<uni-icons type="gear-filled"></uni-icons>
				<span>设置</span>
			</view>
			<view class="item">
				<uni-icons type="info"></uni-icons>
				<span>关于我们</span>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
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
		
		.options{
			.item{
				height: 80rpx;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				border-radius: 10rpx;
				background-color: #fff;
				box-shadow: 0px 4px 8px 0px rgba(200, 200, 200, 0.1);
				margin: 20rpx 0;
				padding: 0 20rpx;
				:first-child{
					margin-right:10rpx;
				}
			}
		}
	}
</style>
