<template>
	<view class="container">
		<view class="list">
			<Card v-for="item in friendList" :key="item.id">
				<template #image>
					<image :src="item.imgUrl" mode="scaleToFill"></image>
				</template>
				<template #content>
					<text class="name">{{item.name}}</text>
				</template>
				<template #right_icon>
					<image v-if='item.identity' :src="rabbit" mode="scaleToFill"></image>
					<image v-else :src="fox" mode="scaleToFill"></image>
				</template>
			</Card>
		</view>
	</view>
</template>

<script setup>
import {ref,getCurrentInstance, reactive} from 'vue'
import {Card} from '@/components/Card/Card.vue'
import rabbit from "@/static/my-icons/rabbit.png"
import fox from "@/static/my-icons/fox.png"

const friendList = reactive([])
const {proxy} = getCurrentInstance()

// 获取好友列表
proxy.$api.getFriendList({id:"12321233123"}).then((res)=>{
	res.data.friends.forEach(item=>friendList.push((item)))
})

</script>

<style lang="scss" scoped>
.container{
	padding:10rpx 50rpx;
}
</style>
