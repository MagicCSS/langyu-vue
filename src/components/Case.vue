<template>
	<div>
		<div class="w980 page">
			<div class="wb">
				<app-nav></app-nav>
				<div class="case-banner">
					<a href="#/case"><img src="../assets/images/case-banner.jpg"></a>
				</div>
			</div>
		</div>
		<div class="location w980">
			<a href="#/home">首页</a>－<a href="#/case">经典案例</a>－当前位置
		</div>
		<div class="content w980">
			<div class="content-left w200">
				<div class="styles b15">
					<div class="wb b15">
						<div class="styles-title"><img src="../assets/images/styles-title.png"></div>
						<ul class="side-nav">
							<li v-for="item in stylesTitle"><a :title="item.title" href="javascript:void(0)" class="cur">{{item.title}}</a></li>
						</ul>
					</div>
				</div>
				<div class="tuanzhuang b12">
					<div class="wb b12">
						<div class="tuanzhuang-title"><img src="../assets/images/tuanzhuang-title.png"></div>
						<div class="tuanzhuang-content"><img src="../assets/images/tuanzhuang.jpg"></div>
					</div>
				</div>
				<div class="events b12">
					<div class="wb b12">
						<div class="events-title"><img src="../assets/images/events-title.png"></div>
						<div class="events-content"><img src="../assets/images/events.jpg"></div>
					</div>
				</div>
			</div>
			<div class="content-right w770 clear">
				<div class="case-title b15">
					<div class="wb b15">
						<div class="case-shows"><img src="../assets/images/case-title.png"></div>
						<div class="filter">
							<strong>筛选：</strong>
							<span>请选择风格：</span>
							<select id="xiangmufengge">
							  <option v-for="item in stylesTitle" :value="item.value">{{item.title}}</option>
							</select>
							<span>请选择户型：</span>
							<select id="xiangmuhuxing">
							  <option v-for="item in huxing" :value="item.value">{{item.title}}</option>
							</select>
							<input type="button" name="button" value="筛选"/>
							<input type="text" name="keyword" id="" placeholder="请输入小区名称"/>
							<input type="submit" class="button" value="搜索" />
						</div>
					</div>
				</div>
				<div class="case-content">
					<ul>
						<li class="b12" v-for="item in newCases">
							<div class="wb b12">
								<a :href="href+item.title"><img :src="item.img"><p>{{item.title}}</p></a>
								<span>{{item.title}}</span>
							</div>
						</li>
					</ul>
				</div>
				<div class="turn">
					<em>共{{total}}条</em><a href="javascript:void(0)" @click="getPage(1)">第一页</a><a href="javascript:void(0)" @click="getPage(--curNum)">上一页</a><a href="javascript:void(0)" @click="getPage(++curNum)">下一页</a><a href="javascript:void(0)" @click="getPage(num)">最后一页</a><em>{{curNum}}/{{num}}页</em>
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
				stylesTitle: [
					{
						value: 'xiandaijianyue',
						title: '现代简约'
					},
					{
						value: 'dizhonghai',
						title: '地中海'
					},
					{
						value: 'oushi',
						title: '欧式'
					},
					{
						value: 'beimeifengqing',
						title: '北美风情'
					},
					{
						value: 'dongnanya',
						title: '东南亚'
					},
					{
						value: 'hunda',
						title: '混搭'
					},
					{
						value: 'xingudian',
						title: '新古典'
					},
					{
						value: 'xinzhongshi',
						title: '新中式'
					},
					{
						value: 'qita',
						title: '其它'
					}
				],
				huxing: [
					{
						value: 'fushi',
						title: '复式'
					},
					{
						value: 'wujushi',
						title: '五居室'
					},
					{
						value: 'sijushi',
						title: '四居室'
					},
					{
						value: 'sanjushi',
						title: '三居室'
					},
					{
						value: 'erjushi',
						title: '二居室'
					},
					{
						value: 'yijushi',
						title: '一居室'
					},
					{
						value: 'gongzhuang',
						title: '公装'
					},
					{
						value: 'qita',
						title: '其它'
					}
				],
				cases: [
					{
						img: 'static/images/anli1.jpg',
						title: '27.6万打造中式风格'
					},
					{
						img: 'static/images/case2.jpg',
						title: '18.1万打造欧式风格'
					},
					{
						img: 'static/images/case3.jpg',
						title: '22.1万打造复式欧式风格案例'
					},
					{
						img: 'static/images/anli2.jpg',
						title: '22.1万打造复式欧式风格案例'
					},
					{
						img: 'static/images/case4.jpg',
						title: '慧芝湖花园120平方后现代主义案例'
					},
					{
						img: 'static/images/case5.jpg',
						title: '嘉利明珠城114平方现代简约风格案例'
					},
					{
						img: 'static/images/case6.jpg',
						title: '锦园新邨新中式案例赏析'
					},
					{
						img: 'static/images/case7.jpg',
						title: '龙安佳苑新中式风格案例赏析'
					},
					{
						img: 'static/images/case8.jpg',
						title: '汇锦城145平方米简欧案例'
					},
					{
						img: 'static/images/case9.jpg',
						title: '18.5万打造简欧风格'
					},
					{
						img: 'static/images/case10.jpg',
						title: '11.8万打造新中式3房'
					},
					{
						img: 'static/images/case11.jpg',
						title: '18.6万打造新中式风格'
					},
					{
						img: 'static/images/case12.jpg',
						title: '18.8万打造新古典风格3房'
					},
					{
						img: 'static/images/case13.jpg',
						title: '15.6万打造现代简约风格'
					},
					{
						img: 'static/images/case14.jpg',
						title: '28.4万打造地中海风格四房'
					}
				],
				newCases: [],
				href: '#/caseDetail/',
				total: 0,
				num: 0,
				curNum: 1,
				offset: 9
			}
		},
		components: {
			'app-nav': AppNav
		},
		methods: {
			getNum () {
				this.total = this.cases.length
				this.num = Math.ceil(this.total / this.offset)
			},
			getPage (n) {
				if (n <= 1) {
					n = 1
				}
				if (n >= this.num) {
					n = this.num
				}
				this.curNum = n
				this.newCases = this.cases.slice((n-1)*this.offset, n*this.offset)
			}
			
		},
		mounted () {
			this.getNum()
			this.getPage(this.curNum)
		}
	}
</script>

<style src="../assets/css/case.css" scoped></style>