// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import api from "@/common/api.js"

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})

app.config.globalProperties.$api = api
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import App from './App.vue'

import api from "@/common/api.js"
export function createApp() {
	const app = createSSRApp(App)
	app.config.globalProperties.$api = api
	return {
		app
	}
}
// #endif
