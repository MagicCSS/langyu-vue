// 首页自动轮播图
function bannerImgs() {
	var clone = $(".banner-imgs li").first().clone();//克隆第一张图片
	$(".banner-imgs").append(clone);//复制到列表最后
	var size = $(".banner-imgs li").size();
	var width = $(".banner-imgs li").width();
	var i = 0,
		t = null;

	// 自动轮播
	t = setInterval(move, 2000);
	// 鼠标悬停事件
	$(".index-banner").hover(function () {
	    clearInterval(t);//鼠标悬停时清除定时器
	}, function () {
	    t = setInterval(move, 2000); //鼠标移出时启动定时器
	});
	$(".banner-nums li").hover(function () {
		i = $(this).index();
		$(".banner-imgs").stop().animate({ left: -i * width }, 500);
		$(this).addClass("cur-num").siblings().removeClass("cur-num");
	});
	function move() {
		i++;
		if(i == size - 1) {
			$(".banner-nums li").eq(0).addClass("cur-num").siblings().removeClass("cur-num");
		}
		// 当i等于5时，让第一张图片显示，i重新归一
		if(i == size) {
		    $(".banner-imgs").css({left: 0});
		    i = 1;
		}
		// 停止之前动画，执行新的动画
		$(".banner-imgs").stop().animate({left: -i * width }, 500);
		$(".banner-nums li").eq(i).addClass("cur-num").siblings().removeClass("cur-num");
	}	
}

function showIndexCont() {
	$(window).scroll(function() {
		// 当滚动条位置大于240时，出现案例区域
		if($(window).scrollTop() > 240) {
			// alert($(window).scrollTop());
			$(".case-content").animate({marginLeft:"0",opacity:"1"},500,"linear");
		}
		// 当滚动条位置大于640时，出现全景展示区域
		if($(window).scrollTop() > 640) {
			$(".all-view-content").animate({opacity:"1"},500,"linear");
		}
		// 当滚动条位置大于1240时，出现朗域知道和最新资讯区域
		if($(window).scrollTop() > 900) {
			$(".content").animate({opacity:"1"},500,"linear");
			$(".knowledges").animate({marginLeft:"0",opacity:"1"},500,"linear");
			$(".news").animate({marginRight:"0",opacity:"1"},500,"linear");
		}
	});
}

module.exports = {
	bannerImgs,
	showIndexCont
}