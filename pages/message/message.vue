<template>
	<!-- 顶部导航 -->
	<view class="top-bar">
		<view class="avatar">
			<image src="@/static/my-icons/fox.png" mode="scaleToFill"></image>
		</view>
		<uni-search-bar class="search" @confirm="search" @input="input" cancelButton="none" placeholder="搜索">
		</uni-search-bar>
	</view>


	<!-- 消息列表区域 -->
	<view class="main">
		<uni-list>
			<uni-list-chat
				@click="toChat"
				clickable
				v-for="item in state.recentContactsList"
				:title="item.name" 
				:avatar="item.avatar" 
				:note="item.end_message" 
				:time="item.end_time"
				badge-positon="right" 
				:badge-text="item.unread_message">
			</uni-list-chat>
		</uni-list>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref,
		getCurrentInstance,
		onMounted
	} from 'vue'

	const {
		proxy
	} = getCurrentInstance()

	const state = reactive({
		recentContactsList: []
	})

	// 获取最近联系人列表
	proxy.$api.getRecentContactsList({
		id: '213123213'
	}).then(res => {
		state.recentContactsList = res.data.recent_contacts
	})
	
	const toChat = () => {
		uni.navigateTo({
			url:'/pages/chat/Chat'
		})
	}
</script>

<style lang="scss">
	.top-bar {
		background-color: #fff;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 10rpx 30rpx;
		box-sizing: border-box;

		.avatar {

			image {
				width: 50rpx;
				height: 50rpx;
			}
		}

		.uni-searchbar {
			width: 620rpx;
		}
	}


	.main {
		.uni-list--border::after {
			height: 0 !important;
		}

		.uni-list--border-top,
		.uni-list--border-bottom {
			height: 0;
		}

		.uni-list-chat__header-image {
			margin: 0px;
		}
	}
</style>
