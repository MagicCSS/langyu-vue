<template>
	<div>
		<div class="w980 page">
			<div class="wb">
				<app-nav></app-nav>
				<div class="case-banner">
					<a href="#/caseDetail"><img src="../assets/images/case-banner.jpg"></a>
				</div>
			</div>
		</div>
		<div class="location w980">
			<a href="#/home">首页</a>－<a href="#/case">案例</a>－当前位置
		</div>
		<div class="title w980 b12">
			<div class="wb b12">
				<h1>{{$route.params.title}}</h1>
			</div>
		</div>
		<div class="container w980">
			<ul class="main-pic">
			  <li v-for="(item, index) in cases" :class="{show: active==index}">
			    <p>{{item.content}}</p>
			    <a :href="item.img"><img :src="item.img"></a>
			  </li>
			</ul>
			<ul class="sub-pic">
				<li v-for="(item, index) in cases" @mouseover="toggle(index)"><img :src="item.img" :class="{cur: active==index}"></li>
			</ul>
		</div>
		<div class="intro w980 b15">
			<div class="wb b15">
				<ul>
					<li><strong>项目名称：</strong><span>大华公园世家</span></li>
					<li><strong>区域：</strong><span>宝山区</span></li>
					<li><strong>户型：</strong><span>别墅</span></li>
					<li><strong>面积：</strong><span></span></li>
				</ul>
				<ul>
					<li><strong>风格：</strong><span>中式</span></li>
					<li><strong>造价：</strong><span>27.6</span></li>
					<li><strong>设计师：</strong><span>张三</span></li>
					<li><strong>施工：</strong><span>朗域装饰</span></li>
				</ul>
				<p><strong>设计说明：</strong><span>这个案例的设计以休闲自然的为基调，让空间得到充分利用。别墅设计最重要的工作是平面布局和建筑改造，平面合理了，空间自然有效果，所有的设计是在“轻装修、重装饰”的理念下进行的，装修在满足风格及功能的需要下，选用不过于昂贵的材料及过于复杂的装饰手法，追求轻松、实用、明快。</span></p>
			</div>
		</div>
		<div class="discussion w980 b15">
			<div class="wb b15">
				<div class="discussion-title"><img src="../assets/images/discussion-title.png"></div>
				<div class="discussion-content">
					<span>正在加载评论...</span>
				</div>
			</div>
		</div>
		<div class="more-case w980 b15">
			<div class="wb b15">
				<div class="more-case-title"><img src="../assets/images/more-case-title.png"></div>
				<div class="more-case-content">
					<ul>
						<li v-for="item in moreCases"><a href="#/caseDetail"><span>{{item.title}}</span><img :src="item.img"></a><a href="">{{item.title}}</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import AppNav from './Nav'
	export default {
		data () {
			return {
				cases: [
					{
						img: 'static/images/case-detail1.jpg',
						content: '这个案例的设计以休闲自然的为基调，让空间得到充分利用。别墅设计最重要的工作是平面布局和建筑改造，平面合理了，空间自然有效果，所有的设计是在“轻装修、重装饰”的理念下进行的，装修在满足风格及功能的需要下，选用不过于昂贵的材料及过于复杂的装饰手法，追求轻松、实用、明快。1'
					},
					{
						img: 'static/images/case-detail2.jpg',
						content: '这个案例的设计以休闲自然的为基调，让空间得到充分利用。别墅设计最重要的工作是平面布局和建筑改造，平面合理了，空间自然有效果，所有的设计是在“轻装修、重装饰”的理念下进行的，装修在满足风格及功能的需要下，选用不过于昂贵的材料及过于复杂的装饰手法，追求轻松、实用、明快。2'
					},
					{
						img: 'static/images/case-detail3.jpg',
						content: '这个案例的设计以休闲自然的为基调，让空间得到充分利用。别墅设计最重要的工作是平面布局和建筑改造，平面合理了，空间自然有效果，所有的设计是在“轻装修、重装饰”的理念下进行的，装修在满足风格及功能的需要下，选用不过于昂贵的材料及过于复杂的装饰手法，追求轻松、实用、明快。3'
					},
					{
						img: 'static/images/case-detail4.jpg',
						content: '这个案例的设计以休闲自然的为基调，让空间得到充分利用。别墅设计最重要的工作是平面布局和建筑改造，平面合理了，空间自然有效果，所有的设计是在“轻装修、重装饰”的理念下进行的，装修在满足风格及功能的需要下，选用不过于昂贵的材料及过于复杂的装饰手法，追求轻松、实用、明快。4'
					},
					{
						img: 'static/images/case-detail5.jpg',
						content: '这个案例的设计以休闲自然的为基调，让空间得到充分利用。别墅设计最重要的工作是平面布局和建筑改造，平面合理了，空间自然有效果，所有的设计是在“轻装修、重装饰”的理念下进行的，装修在满足风格及功能的需要下，选用不过于昂贵的材料及过于复杂的装饰手法，追求轻松、实用、明快。5'
					},
					{
						img: 'static/images/case-detail6.jpg',
						content: '这个案例的设计以休闲自然的为基调，让空间得到充分利用。别墅设计最重要的工作是平面布局和建筑改造，平面合理了，空间自然有效果，所有的设计是在“轻装修、重装饰”的理念下进行的，装修在满足风格及功能的需要下，选用不过于昂贵的材料及过于复杂的装饰手法，追求轻松、实用、明快。6'
					},
					{
						img: 'static/images/case-detail7.jpg',
						content: '这个案例的设计以休闲自然的为基调，让空间得到充分利用。别墅设计最重要的工作是平面布局和建筑改造，平面合理了，空间自然有效果，所有的设计是在“轻装修、重装饰”的理念下进行的，装修在满足风格及功能的需要下，选用不过于昂贵的材料及过于复杂的装饰手法，追求轻松、实用、明快。7'
					}
				],
				moreCases: [
					{
						img: 'static/images/anli1.jpg',
						title: '27.6万打造中式风格'
					},
					{
						img: 'static/images/anli2.jpg',
						title: '保利叶语120平方中式风格案例'
					},
					{
						img: 'static/images/case2.jpg',
						title: '18.1万打造欧式风格'
					},
					{
						img: 'static/images/case3.jpg',
						title: '22.1万打造复式欧式风格案例'
					}
				],
				active: 0
			}
		},
		components: {
			'app-nav': AppNav
		},
		methods: {
			toggle (index) {
				this.active = index
			}
		}
	}
</script>

<style src="../assets/css/caseDetail.css" scoped></style>