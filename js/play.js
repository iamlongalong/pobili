$(function (){
	// $(".hNav>ul>li").hover(function () { //主菜单放上改变背景色
	// 	var th = $(this);
	// 	th.toggleClass("hNavOn"); //改变背景色
	// 	// console.log(thh);
	// });
	// $(".hLoginLi>ul>li").hover(function () {  //登录部分放上改变背景色
	// 	var th = $(this);
	// 	th.toggleClass("hNavOn");
	// });

	$("#navMain").mouseover(function () {  //游戏菜单放上显示downpage
		var th = $(this);
		var thx = th.offset().left;
		var thy = th.offset().top;
		var thw = th.width();
		var thh = th.height();
		var th1 = $(".navMainBlock");
		var th1w = th1.outerWidth();
		// console.log("hello");
		th1.css({"left":0,"top":thh});
		th1.fadeIn("normal");
		th.parent().mouseleave(function() {
			th1.stop();
			th1.fadeOut("normal");
		});
	});
	$(".navMainBlock li").mouseover(function () {
		var th = $(this);
		th.addClass("onlgray");
	}).mouseleave(function () {
		var th = $(this);
		th.removeClass("onlgray");
	});
	$("#navGame").mouseover(function () {  //游戏菜单放上显示downpage
		var th = $(this);
		var thx = th.offset().left;
		var thy = th.offset().top;
		var thw = th.width();
		var thh = th.height();
		var th1 = $(".navGameBlock");
		var th1w = th1.outerWidth();
		// console.log("hello");
		th1.css({"left":0,"top":thh});
		th1.fadeIn("normal");
		th.parent().mouseleave(function() {
			th1.stop();
			th1.fadeOut("normal");
		});
	});

	$(".gameLdmod").hover(function () {  //游戏mod放上改变背景色
		var th = $(this);
		th.toggleClass("hNavOn");
	});
	$(".gameRname>a>div").hover(function () {  //游戏名称选择放上改变背景色
		var th = $(this);
		th.toggleClass("hNavOn");
	});
	$("#navLive").mouseover(function () {  //直播菜单放上显示downpage
		var th = $(this);
		var thx = th.offset().left;
		var thy = th.offset().top;
		var thw = th.width();
		var thh = th.height();
		// console.log("hello");
		var th1 = $(".navLiveBlock");
		th1.css({"left":0,"top":thh}).fadeIn("normal");
		th.parent().mouseleave(function() {
			th1.stop();
			th1.fadeOut("normal");
		});
	});
	$(".navLimod").hover(function () {  //直播菜单mod 放上显示cover层
		var th = $(this);
		var th1 = th.children(".navLiModCover");
		th1.stop();
		th1.animate({opacity:"1"},500);
	},function() {
		var th = $(this);
		var th1 = th.children(".navLiModCover");
		th1.stop();
		th1.animate({opacity:"0"},200);
	});
	$(".navLRConPic").hover(function () {  //直播菜单右侧放上改变背景色
		var th = $(this);
		th.stop();
		th.toggleClass("onlgray");
	});


	$("#navBW").mouseover(function () {  //BW菜单放上显示downpage
		var th = $(this);
		var thx = th.offset().left;
		var thy = th.offset().top;
		var thw = th.width();
		var thh = th.height();
		// console.log("hello");
		var th1 = $(".navBWBlock");
		th1.css({"left":0,"top":thh}).fadeIn("normal");
		th.parent().mouseleave(function() {
			th1.stop();
			th1.fadeOut("normal");
		});
	});

	$("#navAPP").mouseover(function () {  //APP菜单放上显示downpage
		var th = $(this);
		var thx = th.offset().left;
		var thy = th.offset().top;
		var thw = th.width();
		var thh = th.height();
		// console.log("hello");
		var th1 = $(".navApp");
		th1.css({"left":-20,"top":thh}).fadeIn("normal");
		th.parent().mouseleave(function() {
			th1.stop();
			th1.fadeOut("normal");
		});
	});

	$("#navLog").mouseover(function () {  //登陆头像放上显示downpage
		var th = $(this);
		var thh = th.height();	
		var th1 = $(".navlogBlock");
		var th1w = th1.width();
		var th2 = $("#selfimg");
		th.css("z-index",102);
		th1.css({"left":-th1w/2+20,"top":thh+18}).fadeIn("normal");
		th1.parent().mouseleave(function() {
			th2.stop();
			th1.stop();
			th1.fadeOut("normal");
			th2.animate({width:"32px",height:"32px",left:"0",top:"0"},500)
		});
		th2.animate({width: "60px", height: "60px",left:"-16px",top:"6px"},500);

	});

	$(".navlogNav>a>div").hover(function() {  //登陆部分放上改变字体颜色
		var th = $(this);
		th.toggleClass("ona");
	});

	$("#navAct").mouseover(function () {  //登陆动态菜单放上显示downpage
		var th = $(this);
		var thw = th.outerWidth();
		var th1 = $(".navActBlock");
		var th1w = th1.width();
		// console.log(thw);
		th1.css({"left":-th1w/2+25,"top":"50px"}).fadeIn("normal");
		th.parent().mouseleave(function() {
			th1.stop();
			th1.fadeOut("normal");
		});
	});

	$("#navAct").one("mouseover",function() {  //登陆动态菜单显示时 内容显示动画
		var th1 = $(".navActBlock");
		th1.children(".navActCon").children(".navAmod").css({left:"200px",opacity:"0"}).animate({left:"0",opacity:"1"},300);
	});

	$(".navActclass").click(function() {  //登陆动态 点击分类时内容显示动画
		var th1 = $(".navActBlock");
		th1.children(".navActCon").children(".navAmod").css({left:"200px",opacity:"0"}).animate({left:"0",opacity:"1"},300);
	});


	$(".navAmod").hover(function() { //登陆动态 内容 放上改变背景
		var th = $(this);
		th.toggleClass("onlgray");
	});
	$(".navActMore").hover(function() {  //登陆动态 更多 放上改变背景
		var th = $(this);
		th.toggleClass("ongray");
	});
	$(".navActclass").click(function() {  //登陆动态 分类标题底部三角转移
		var th = $(this);
		th.siblings().removeClass("selOn");
		th.addClass("selOn");
	});


	$(".crContent .mod").hover(function() { //所有mod 放上显示later按钮
		var th = $(this);
		th.children(".modCover").show();
		th.children(".modMedia").children(".modCoName").hide();
		th.children(".modMedia").children(".modLater").show();
		$(".modLater").hover(function() {
			th1 = $(this);
			th1.children(".modLaterTitle").show();
		},function() {
			th1 = $(this);
			th1.children(".modLaterTitle").hide();
		});
	},function() {
		var th = $(this);
		th.children(".modCover").hide();
		th.children(".modMedia").children(".modCoName").show();
		th.children(".modMedia").children(".modLater").hide();
	});


	$(".fanSel>span , .guoPicTrig>span").mouseover(function() { //标题底部三角转换
		var th = $(this);
		th.addClass("trigOnPoint");
		th.siblings().removeClass("trigOnPoint");
	});

	$(".danLhead").click(function () {
		var $dan = $(".danliCon");
		if ($dan.height()>100) {
			$dan.animate({height:"0px",width:"320px"},1000);
		}else {
			$dan.animate({height:"447px",width:"320px"},1000);			
		}
	});

	$(".danliul>li").mouseover(function () {
		var th = $(this);
		th.addClass("onlgray");
		// th.siblings().removeClass("onlgray");
		th.mouseleave(function () {
			th.removeClass("onlgray");
		})
	});
})