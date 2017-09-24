<template>
	<nav>
		<ul>
			<li v-for="item in menus" @click="flushCom(index)"><router-link :to="item.path">{{item.title}}</router-link></li>
		</ul>
	</nav>
</template>

<script>
	export default {
		data () {
			return {
				menus: [
					{
						path: '/home',
						title: '网站首页'
					},
					{
						path: '/allView',
						title: '全景体验'
					},
					{
						path: '/case',
						title: '经典案例'
					},
					{
						path: '/about',
						title: '关于我们'
					},
					{
						path: '/contact',
						title: '联系我们'
					},
				],
				cur: 0
			}
		},
		methods: {
			flushCom (i) {
				this.$router.go(0)
			}
		}
	}
</script>