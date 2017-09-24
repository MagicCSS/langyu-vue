<template>
	<div>
		<div class="w980 page">
			<div class="wb">
				<app-nav></app-nav>
				<div class="about-banner">
					<a href="#/about"><img src="../assets/images/about-banner.jpg"></a>
				</div>
			</div>
		</div>
		<div class="location w980">
			<a href="#/home">首页</a>－<a href="#/about">关于我们</a>－当前位置
		</div>
		<div class="content w980">
			<div class="content-left">
				<div class="about b15">
					<div class="wb b15">
						<div class="about-title"><img src="../assets/images/about-title.png"></div>
						<ul class="side-nav">
							<li v-for="(item, index) in menu"><a :title="item.title" :class="{cur: active==index}" @click="toggle(index, item.isShow)">{{item.title}}</a></li>
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
			<div class="content-right clear">
				<div v-if="isShow">
					<div class="title b12">
						<div class="wb b12">
							<h1>关于我们</h1>
						</div>
					</div>
					<div class="intro-content b15">
						<div class="wb b15">
							<div class="intro-img"><img src="../assets/images/intro-img.jpg"></div>
							<div class="intro-words">
								<p>上海朗域建筑装饰工程有限公司（朗域装饰）由上海家装巨头统帅集团倾力打造，以满足年轻一代“时尚、舒适”家装需求为己任，提供潮流荟萃、绿色环保、高性价比、高品质服务、全新模式一体化家装解决方案的新型家装企业。公司凭借自身过硬的设计水平、施工水准、材料保障及售后服务，业务范围迅速覆盖上海地区，并获得消费者高度认可。</p>
								<p>公司成立之初便定位成为中国时尚家装行业的领跑者，2013年1月，上海首个时尚家装新居体验馆建设落成并供业主参观，这一喜讯预示着朗域装饰从装修各环节时尚元素融入到整体家装时尚潮流彰显的全面升级。设计上，朗域装饰完成了从谈装修风格、看案例到业主居住空间艺术性与功能性结合的过渡，并成功培养了一批专业、细心、时尚的设计人才；施工上，朗域装饰充分继承并发扬了统帅集团施工中踏实、严谨的作风，高于行业标准、严于质量要求成为公司施工团队的习惯，以最优质的工程提供，获得了众多消费者的交口称赞；材料保障系统的进一步完善与扩充，时尚、舒适定位的融入与实用主义融合萃取，使朗域装饰提供上海地区最完善的家居材料系统保障；对消费者群体需求的准确理解与诚挚态度，对售后保障承诺的恪守与诚信，一直都是朗域装饰的立命之本。时尚家装新居体验馆的落成使用，将朗域装饰时尚家装服务推至大成，蓬勃发展。</p>
								<p>公司共有员工150多人，下辖设计部、施工部、材料部、售后服务部、市场部、内部监管部等多个部门，创新、时尚、严谨、团队、责任的价值观贯穿始终，秉承并发扬集团“发现需求，满足需求”理念的朗域装饰，必将以“时尚”标签为传统家装市场注入新的血液，创新、创意的家装理念，必将成为新兴中产阶级与城市年轻白领幸福生活完美构筑首选。</p>
								<p><strong>朗域，广阔天地，无限创意。</strong></p>
								<p><strong>朗域，中国年轻时尚家装行业领跑者。</strong></p>
							</div>
						</div>
					</div>
				</div>
				<div v-else>
					<div v-for="item in news" class="news b15">
						<div class="wb b15 clear">
							<figure><a href="#/about"><img :src="item.img"></a></figure>
							<figcaption>
								<h1><em>[2014-02-27]</em><a href="#/about" :title="item.title">{{item.title}}</a></h1>
								<p>{{item.content}}<a href="#/about">【点击查看更多】</a></p>
							</figcaption>
						</div>
					</div>
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
				active: 0,
				isShow: true,
				menu: [
					{
						title: '关于我们',
						isShow: true
					},
					{
						title: '最新活动',
						isShow: false
					}
				],
				news: [
					{
						img: 'static/images/news1.jpg',
						title: '2014装修实景展邀您一起共享装修盛宴',
						content: '2013年即将结束，伴随着新年钟声的敲响，朗域装饰辞旧迎新第一篇章即将拉开序幕。本届“装修实景展”由上海五大标杆企业、上海家装十强企业、2013百姓最喜欢的装修品牌主办，上海市装饰装修行业协会协办，旨在为申城待装修的业主们奉上一场装修界的饕餮盛宴。'
					},
					{
						img: 'static/images/news2.jpg',
						title: '11月23日朗域装饰重点楼盘热装发布会',
						content: '朗域装饰重点楼盘热装发布会热浪来袭朗'
					},
					{
						img: 'static/images/news3.jpg',
						title: '寂静秋日，朗域为您的生活增添色彩',
						content: '寂静秋日，朗域为您的生活增添色彩炎炎夏日已经远离，秋高气爽的时节，正是装修施工的黄金时期。为满足沪上业主的装修需求，朗域装饰将于11月2-3日（周六、日）在朗域实景新居体验馆开展“岁末大促，装修采购...'
					},
					{
						img: 'static/images/news4.jpg',
						title: '拒绝囧汉”朗域装饰大讲堂即将开始啦！',
						content: '拒绝囧汉”朗域装饰大讲堂即将开始啦！金秋送爽，10月19日，朗域装饰将迎来第二期装饰大讲堂。继上一次朗域大讲堂开课后，不少业主反映这样的活动对他们帮助很大，颇具意义。为感谢各位业主对朗域装饰大讲堂...'
					},
					{
						img: 'static/images/news5.jpg',
						title: '申城之东，朗域装饰新居体验馆盛大开业',
						content: '申城之东，朗域装饰新居体验馆盛大开业十一筑家黄金周，在申城之东，第三代装修公司领军者朗域装饰，将会点亮第二颗闪耀的新星——浦东新居体验馆。浦东新居体验馆位于浦东新区浦东南路2100号上尚商厦...'
					},
					{
						img: 'static/images/news6.jpg',
						title: '全面满足经济型装修消费者需求',
						content: '上海家装展览，上海家庭装修'
					},
					{
						img: 'static/images/news7.jpg',
						title: '朗域装饰:都市忙客专属装修咨询季',
						content: '本届都市忙客专属装修咨询季邀请到参加过央视《交换空间》的数位青年设计师现场服务，专业的素质内涵加上热情的服务，定会给到场装修消费者一个耳目一新的感受。不懂设计？没关系，先让贴心装修小管家为您讲解装修设计小技巧。'
					},
					{
						img: 'static/images/news8.jpg',
						title: '朗域装饰6000元征集企业广告语',
						content: '作为上海家装巨头统帅装饰集团旗下子公司，朗域装饰的全新服务模式更好的为家装消费者带来便利与实惠。为了更好的塑造朗域装饰企业形象，提升公司品牌知名度与社会影响力，即日起'
					},
					{
						img: 'static/images/news9.jpg',
						title: '不看实景，怎能定家装——2013朗域家装幸福定制汇',
						content: '朗域家装幸福定制汇活动日期定于5月18日—19日，网络报名独享三重优惠：一、法恩莎卫浴精美礼品一份或久盛地板精美礼品一份；二、文艺范儿无纺布环保袋一只；三、第三代装修公司服务模式手册一份。现场更有签单抽奖...'
					},
					{
						img: 'static/images/news10.jpg',
						title: '朗域装饰五一实景体验周',
						content: ''
					},
					{
						img: 'static/images/news11.jpg',
						title: '实景装修体验展',
						content: '实景家装 厨卫样板间'
					},
					{
						img: 'static/images/news12.jpg',
						title: '朗域装饰全景体验馆1月12日盛大开业',
						content: '上海朗域建筑装饰工程有限公司耗时三个月打造的时尚家装新居体验馆将于2013年1月12日广中路805号盛大开业'
					},
				]
			}
		},
		components: {
			'app-nav': AppNav
		},
		methods: {
			toggle (i, v) {
				this.active = i
				this.isShow = v
			}
		}
	}
</script>

<style src="../assets/css/about.css" scoped></style>