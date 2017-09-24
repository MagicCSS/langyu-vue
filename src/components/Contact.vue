<template>
	<div>
		<div class="w980 page">
			<div class="wb">
				<app-nav></app-nav>
				<div class="contact-banner">
					<a href="#/contact"><img src="../assets/images/contact-banner.jpg"></a>
				</div>
			</div>
		</div>
		<div class="location w980">
			<a href="#/home">首页</a>－<a href="#/contact">联系我们</a>－当前位置
		</div>
		<div class="content w980 clear">
			<div class="content-left">
				<div class="contact b15">
					<div class="wb b15">
						<div class="contact-title"><img src="../assets/images/contact-title.png"></div>
						<ul class="side-nav">
							<li><a title="联系我们" href="javascript:void(0)">联系我们</a></li>
						</ul>
					</div>
				</div>
				<div class="tuanzhuang b12">
					<div class="wb b12">
						<div class="tuanzhuang-title"><img src="../assets/images/tuanzhuang-title.png"></div>
						<div class="tuanzhuang-content"><img src="../assets/images/tuanzhuang.jpg"></div>
					</div>
				</div>
			</div>
			<div class="content-right">
				
				<div class="contact2-title b12">
					<div class="wb b12"><h2>联系我们</h2></div>
				</div>
				<div class="contact2-content">
					<form action="" method="get" class="user-info b12">
						<ul class="wb b12">
							<li>
								<label for="userName">姓&emsp;名：</label>
								<input type="text" id="userName" placeholder="徐辉" @blur="testUserName"><span></span>
							</li>
							<li>
								<label for="pwd">密&emsp;码：</label>
								<input type="password" id="pwd" placeholder="******" @blur="testPwd"><span>请输入密码！</span>
							</li>
							<li>
								<label for="email">邮&emsp;箱：</label>
								<input type="email" id="email" placeholder="xuhui@qq.com" name="email" @blur="testEmail"><span>请输入正确的电子邮箱!</span>
							</li>
							<li>
						 		<label for="remark">备&emsp;注：</label>
								<textarea name="remark" id="remark"></textarea>
							</li>
							<li>
							<label for="agree"></label>
								<input type="checkbox" id="agree">我同意,已阅读
								<a href="#"><<上海朗域建筑装饰工程有限公司协议>></a>
							</li>
							<li>
								<input type="submit" value="登录">
								<input type="reset" value="重置">
								<a href="#/contact">忘记密码</a>
							</li>
						</ul>
					</form>
					<div class="info b12">
						<div class="wb b12">
							<ul>
								<li>电&emsp;话：400-821-6862</li>
								<li>邮&emsp;箱：1339893892@qq.com</li>
								<li>地&emsp;址：上海市闸北区广中路809号2楼</li>
								<li><a href="#/home"><img src="../assets/images/wx.jpg"></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import test from '../assets/js/test.js'
	import AppNav from './Nav'
	export default {
		data () {
			return {
			}
		},
		components: {
			'app-nav': AppNav
		},
		methods: {
			testUserName () {
				test.testUserName()
			},
			testPwd () {
				test.testPwd()
			},
			testEmail () {
				test.testEmail()
			}
		}
	}
</script>

<style src="../assets/css/contact.css" scoped></style>