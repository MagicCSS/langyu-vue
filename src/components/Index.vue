<template>
	<div>
		<div class="w980 page b15">
			<div class="wb b15">
				<app-nav></app-nav>
				<div class="index-banner">
					<ul class="banner-imgs">
						<li v-for="item in banners"><a href=""><img :src="item" alt=""></a></li>
					</ul>
					<ul class="banner-nums">
						<li class="cur-num"></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="w980">
			<div class="case-title">
				<a href="#" class="read-more"></a>
			</div>
			<div class="case-content">
				<ul>
					<li class="b15 turn-left" v-for="item in cases">
						<div class="wb b15">
							<a :href="href+item.title"><img :src="item.img" :alt="item.title"><img :src="item.img" :alt="item.title"></a>
							<span>{{item.title}}</span>
						</div>
					</li>
				</ul>
			</div>
			<div class="all-view-title">
				<a href="#" class="read-more"></a>
			</div>
			<div class="all-view-content">
				<ul>
					<li class="b12" :class="rotates[index%4]" v-for="(item, index) in allViews">
						<div class="wb b12">
							<a href="#">
								<img :src="item.img" :alt="item.title">
								<span>{{item.title}}</span>
							</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="content w980 clear">
			<div class="knowledges b15">
				<div class="wb b15">
					<div class="knowledges-title">
						<a href="#" class="read-more"></a>
					</div>
					<div class="knowledges-content">
						<ul v-for="type in content">
							<li v-for="item in type">
								【<span>{{item.type}}</span>】
								<a href="#" :title="item.title">{{item.title}}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="news b12">
				<div class="wb b12">
					<div class="news-title">
					</div>
					<div class="news-content">
						<ul>
							<li v-for="item in news"><a href="#" :title="item.title">{{item.title}}</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import index from '../assets/js/index.js'
	import AppNav from './Nav'

	export default {
		data () {
			return {
				banners: ['static/images/banner1.jpg', 'static/images/banner2.jpg', 'static/images/banner3.jpg', 'static/images/banner4.jpg'],
				cases: [
					{
						img: 'static/images/anli1.jpg',
						title: '27.6万打造中国风格'
					},
					{
						img: 'static/images/anli2.jpg',
						title: '保利叶语120平方中式风格案例'
					},
					{
						img: 'static/images/anli3.jpg',
						title: '15.6万打造北美风情'
					},
					{
						img: 'static/images/anli4.jpg',
						title: '9.1万打造现代简约风居室'
					},
					{
						img: 'static/images/anli5.jpg',
						title: '8.9万打造简欧两房'
					},
					{
						img: 'static/images/anli6.jpg',
						title: '10.4万打造风情东南亚2居婚房'
					}
				],
				allViews: [
					{
						img: 'static/images/all-view1.jpg',
						title: '厨房实景体验区'
					},
					{
						img: 'static/images/all-view2.jpg',
						title: '室内门实景体验区'
					},
					{
						img: 'static/images/all-view3.jpg',
						title: '工艺实景体验区'
					},
					{
						img: 'static/images/all-view4.jpg',
						title: '卫生间实景体验区'
					},
					{
						img: 'static/images/all-view5.jpg',
						title: '地板实景体验区'
					},
					{
						img: 'static/images/all-view6.jpg',
						title: '瓷砖实景体验区'
					},
					{
						img: 'static/images/all-view7.jpg',
						title: '台盆水槽实景体验区'
					}
				],
				rotates: ['roleft', 'rotop', 'roright', 'robottom'],
				content: [
					[
						{
							type: '装修日记',
							title: '现代混搭·设计控的装修日记'
						},
						{
							type: '装修日记',
							title: '两房现代风格成长记 经济型装修 闭口合同的'
						},
						{
							type: '装修日记',
							title: '90后猫小苗的现代简约 小窝装修记'
						},
						{
							type: '装修日记',
							title: '买房苦装修更是一场持久战'
						},
						{
							type: '装修日记',
							title: '看完木木写的装修日记·相信你也可以懂装修'
						},
						{
							type: '装修日记',
							title: '朗域装饰： 交房啦'
						},
						{
							type: '装修日记',
							title: '朗域装饰： 小窝 开工啦'
						},
						{
							type: '装修日记',
							title: '朗域装饰：黄山新苑开工前'
						}
					],
					[
						{
							type: '装修知识',
							title: '如何选择木材板材及注意事项'
						},
						{
							type: '装修知识',
							title: '如何选购装饰板的方法和注意事项'
						},
						{
							type: '装修知识',
							title: '正确的认识和了解人造板材'
						},
						{
							type: '装修知识',
							title: '家庭装修木质板材的选择'
						},
						{
							type: '装修知识',
							title: '消费者如何正确的选择乳胶漆'
						},
						{
							type: '装修知识',
							title: '家庭装修装饰材料和涂料的选择'
						},
						{
							type: '装修知识',
							title: '上海家庭装饰之绿色建树'
						},
						{
							type: '装修知识',
							title: '上海装修公司 家装浴室不可忽视'
						}
					]
				],
				news: [
					{
						title: '朗域装饰2014中国年装修综合博览会完美收官'
					},
					{
						title: '新年新气象，锦旗飘扬朗域之光'
					},
					{
						title: '提高自身专业素养，争做优秀朗域人'
					},
					{
						title: '2014，我们一起装修吧！'
					},
					{
						title: '您的满意，我的荣誉'
					},
					{
						title: '你们的肯定，我们的信心'
					},
					{
						title: '第五届实景装修咨询会'
					},
					{
						title: '上海朗域装饰携手并进共创美好明天'
					}
				],
				href: '#/caseDetail/'
			}
		},
		components: {
			'app-nav': AppNav
		},
		mounted () {
			index.bannerImgs();
			index.showIndexCont();
		}
	}
</script>

<style src="../assets/css/index.css" scoped>
	/*@import '../assets/css/index.css';*/
</style>