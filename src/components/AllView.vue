<template>
	<div>
		<div class="w980 page">
			<div class="wb">
				<app-nav></app-nav>
				<div class="all-view-banner">
					<a href="#/allView"><img src="../assets/images/all-view-banner.jpg"></a>
				</div>
			</div>
		</div>
		<div class="location w980">
			<a href="#/home">首页</a>－<a href="#/allView">全景体验馆</a>
		</div>
		<div class="content w980 clear">
			<div class="content-left">
				<div class="sidebar b12">
					<div class="wb b12">
						<div class="sidebar-title">
							<img src="../assets/images/sidebar-title.png">
						</div>
						<div class="side-nav"><a title="全景体验馆" href="#/allView">全景体验馆</a></div>
					</div>
				</div>
				<div class="visit b12">
					<div class="wb b12">
						<div class="visit-title"><img src="../assets/images/visit-title.png"></div>
						<div class="demo" id="demo">
							<div class="demo1" id="demo1">
								<template v-for="item in demoes">
									<h3>{{item.title}}：</h3>
									<p>{{item.content}}</p>
								</template>
							</div>
							<div id="demo2"></div>
						</div>
					</div>
				</div>
				<div class="events b12">
					<div class="wb b12">
						<div class="events-title"><img src="../assets/images/events-title.png"></div>
						<div class="events-content"><img src="../assets/images/events.jpg"></div>
					</div>
				</div>
			</div>
			<div class="content-right">
				<div class="intro b15">
					<div class="wb b15 clear">
						<div class="intro-title"><img src="../assets/images/intro-title.png"></div>
						<figure><a href="#/allView"><img src="../assets/images/intro.jpg"><img src="../assets/images/intro.jpg"></a></figure>
						<figcaption>
							<h1>细节见证创新品质 筑造专属生活空间</h1>
	    					<p>朗域装饰打造的时尚家装新居体验馆，深度理解融合了年轻一代“时尚，舒适”的家装理念，同时吸取了近年来实景样板展示的精粹，从家装的每个细节着手，在全新施工体系与工艺革新的支持下，为业主提供既时尚又严谨的实景体验。新居体验馆包含众多分区：厨房实景区，拥有多套不同风格、不同色系、不同造型的时尚厨房；浴室实景区，打造多套淋浴实景，并展示了瓷砖搭配设计与瓷砖铺贴工艺；卫生间实景区，将不同品牌不同色系的厨卫产品混搭，无论面积大小，都有精心空间设计……用全实景的感受，带给您360度的家居体验。</p>
						</figcaption>
					</div>
				</div>
				<div class="case">
					<ul>
						<li class="b12" :class="rotates[index%4]" v-for="(item, index) in allViews">
							<div class="wb b12">
								<a href="#/allView">
									<img :src="item.img" :alt="item.title">
									<img :src="item.img" :alt="item.title">
								</a>
								<span>{{item.title}}</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import marque from '../assets/js/allView.js'
	import AppNav from './Nav'
	export default {
		data () {
			return {
				demoes: [
					{
						title: '保利叶语--郁先生、陈女士',
						content: '橱柜那些做的很好，不同的颜色啊，不同类型的厨房都做得挺有意思的，特意去敲了敲墙砖，不像有些样板房，自己的墙砖都做的空鼓，贴的真好，设计师的解说也说得满具体的，很多瓷砖的铺贴细节问题都能给我回答，我家要是也能贴成这样，就好了。'
					},
					{
						title: '慧芝湖--陈女士',
						content: '我家就在他们的体验馆旁边，很近，就五分钟，那天闲逛过去的，挺不好意思的，去的时候带着宝宝，一直闹一直闹，朗域一个工作的小姑娘一直帮忙哄，他们有那个装修顾问，挺好的，看装修档次我以为很贵，后来价格搭配，却少好多，挺实惠的，最近设计方案看完了，等待预算确定，就让他们装啦。'
					},
					{
						title: '宝华北岸郡亭--李先生夫妇',
						content: '开始以为是家装公司那种宣传噱头，也正好是有房装修，就想过去聊聊也成，掌握下现在装修行情。过去一看，居然是真的实景，功能分区做的还很全面，转了一圈，感觉还不错，就签了设计协议，主要我是看中后期施工的闭口合同，如果真的能做到无增加那就不错，现在的话图纸看过了，和我在展会之前看的不同，他们给我看的是全套的图纸，很多电的图纸我还是第一次见，感觉不错。'
					},
					{
						title: '宝华盛世花园--魏女士',
						content: '儿子的房子装修我最近一直在对比选装修，去了朗域，他们那几套实景厨房特别喜欢，儿子新房的厨房面积不大，一直也是想看看怎么做能显得宽敞一点，实用一点，过来一看，我至少有两三种想法可以弄，都挺好的。最近我家已经开始施工了，工人都挺规范，选朗域，到目前为止，我都是很满意！'
					},
					{
						title: '万业紫辰苑--张先生，李小姐',
						content: '我们其实比较感兴趣他们做的工艺演示，因为家里房子入手后，也是搜房、篱笆各种地方学习装修知识，但是一直没有个系统全面的认识，很多时候不知道有些工序要怎么做，怎么做才能好一点，在体验馆这次都看到了，跟他们工程类的服务人员聊了一下，感觉不错，深有所得——这也是我选朗域的原因，我家现在泥木结束了，特满意！'
					},
					{
						title: '三花现代城--李女士',
						content: '我是做服务行业的，所以对服务的细节很关注，朗域公司里面服务挺好的，不像有的地方促销是的使劲拉着你装修什么的。随便你看，你感兴趣的时候，公司的人员就给你详细讲一下，我觉得这个服务模式挺人性化的。让人感觉很舒服，装修的东西做的也很具体，很实际！回头要和朋友们推荐一下来看看！'
					},
					{
						title: '兰湖美域--王先生',
						content: '蛮好的，基本上海这几年的风格都看得到，整体效果看起来特别舒服。这最大的特点是不像别的样板房用很多的软装饰来拉效果，而是用硬装来看，真实不少。我平时也忙，工作事情也多，也不想因为一个装修四处跑来看这个看那个，前期电话和他们聊了聊，全包的模式，实景选材让我省事不少，前两天去了趟工地看了看，师傅活干得很细，工地也干净，不错！'
					},
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
				rotates: ['roleft', 'rotop', 'roright', 'robottom']
			}
		},
		components: {
			'app-nav': AppNav
		},
		mounted: function () {
			marque.marque();
		}
	}
</script>

<style src="../assets/css/allView.css" scoped>
	/*@import '../assets/css/allView.css'*/
</style>