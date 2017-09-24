// 联系我们表单验证
// 判断用户名
function testUserName() {
	var $userName = $(".user-info input[type='text']").val();
	var $tip = $(".user-info li:first span");
	if($userName == "") {
		$tip.html("用户名不能为空!").css({opacity:"1"});
	}else {
		$tip.css({opacity:"0"});
	}
}
// 提示用户输入密码
function testPwd() {
	var $pwd = $(".user-info input[type='password']").val();
	var $tip = $(".user-info").find("span").eq(1);
	if( $pwd == "") {
		$tip.html("您的密码不能为空!").css({opacity:"1"});
	}else if(!(/^[0-9A-Za-z]{6,18}$/.test($pwd))) {
		$tip.html("长度在6-18之间").css({opacity:"1"});
	}else {
		$tip.css({opacity:"0"});
	}
}
// 提示用户输入正确的邮箱
function testEmail() { 
	var $email = $(".user-info input[type='email']").val();
	var $tip = $(".user-info").find("span").eq(2);
	if($email == "") {
		$tip.html("请输入您的电子邮箱!").css({opacity:"1"});
	}else if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))) {
		$tip.html("请输入正确的电子邮箱!").css({opacity:"1"});
	}else {
		$tip.css({opacity:"0"});
	}
}

module.exports = {
	testUserName,
	testPwd,
	testEmail
}