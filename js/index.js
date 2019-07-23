$(function () {
	$(".hNav li").hover(function () { //主菜单放上改变背景色
		var th = $(this);
		var thx = th.position().left;
		var thy = th.position().top;
		var thw = th.width();
		var thh = th.height();
		th.toggleClass("hNavOn"); //改变背景色
		// console.log(thh);
	});
	$(".hLoginLi>ul>li").hover(function () {  //登录部分放上改变背景色
		var th = $(this);
		th.toggleClass("hNavOn");
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
		th1.css({"left":0,"top":thy+thh});
		th1.fadeIn("normal");
		th.parent().mouseleave(function() {
			th1.stop();
			th1.fadeOut("normal");
		});
	});

	$(".gameLdmod").hover(function () {  //游戏mod放上改变背景色
		var th = $(this);
		th.toggleClass("hNavOn");
	})
	$(".gameRname>a>div").hover(function () {  //游戏名称选择放上改变背景色
		var th = $(this);
		th.toggleClass("hNavOn");
	})
	$("#navLive").mouseover(function () {  //直播菜单放上显示downpage
		var th = $(this);
		var thx = th.offset().left;
		var thy = th.offset().top;
		var thw = th.width();
		var thh = th.height();
		// console.log("hello");
		var th1 = $(".navLiveBlock");
		th1.css({"left":0,"top":thy+thh}).fadeIn("normal");
		th.parent().mouseleave(function() {
			th1.stop();
			th1.fadeOut("normal");
		});
	});
	$(".navLimod").hover(function () {  //直播mod 放上显示cover层
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
	$(".navLRConPic").hover(function () {  //直播右侧放上改变背景色
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
		th1.css({"left":0,"top":thy+thh}).fadeIn("normal");
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
		th1.css({"left":-20,"top":thy+thh}).fadeIn("normal");
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
		th1.css({"left":-th1w/2+20,"top":thh+10}).fadeIn("normal");
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
		var thx = th.offset().left;
		var thy = th.offset().top;
		var thw = th.outerWidth();
		var thh = th.height();
		var th1 = $(".navActBlock");
		var th1w = th1.width();
		// console.log(thw);
		th1.css({"left":-th1w/2+25,"top":thy+thh}).fadeIn("normal");
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
	$(".blcrMore").hover(function() { //ranking 查看更多改变背景色
		var th = $(this);
		th.toggleClass("ongray");
	});
	$(".bNew3").hover(function() { //最新动态 放上改变背景色
		var th = $(this);
		th.toggleClass("ongray");
	});
	$(".blMore").hover(function() { //block 标题栏 更多 放上改变背景色
		var th = $(this);
		th.toggleClass("ongray");
	});

	$(".blcr1,.blcr").on("mouseover",function () {  //ranking显示细节框
		var th = $(this);
		var thx = th.offset().left;
		var thy = th.offset().top;
		var thw = th.width();
		var thh = th.height();
		var th1 = $(".brcShow");
		var th1h = th1.height();
		// console.log("hello");
		th1.css({"left":thx,"top":thy-th1h-40}).fadeIn("200");
		th.on("mouseleave",function() {
			th1.stop();
			th1.css("display","none");})
	});

	$(".bNew1").hover(function() {  //转变selOn
		var th = $(this);
		th.toggleClass("ona");
		th.click(function() {
			th.siblings().removeClass("selOn")
			th.addClass("selOn");
		});
	});
	$(".bNew2").hover(function() {  //转变selOn
		var th = $(this);
		th.toggleClass("ona");
		th.click(function() {
			th.siblings().removeClass("selOn")
			th.addClass("selOn");
		});
	});


	$(".brall").hover(function() {  //转变selOn
		var th = $(this);
		th.toggleClass("ona");
		th.click(function() {
			th.siblings().removeClass("selOn")
			th.addClass("selOn");
		});
	});
	$(".bror").hover(function() {  //转变selOn
		var th = $(this);
		th.toggleClass("ona");
		th.click(function() {
			th.siblings().removeClass("selOn")
			th.addClass("selOn");
		});
	});
	$(".liRititle").hover(function() { //转变selOn
		var th = $(this);
		th.toggleClass("ona");
		th.click(function() {
			th.siblings().removeClass("selOn")
			th.addClass("selOn");
		});
	});

	$(".hMenu>ul>a>li").hover(function () {	//menu放上显示子菜单
		var th = $(this);
		th.children(".hliul").toggle();
	});

	$(".hliul>ul>li").hover(function() {  //menu子菜单放上变化背景与位置
		var th = $(this);
		th.addClass("onlgray");
		th.css({"padding-left":"5px"});
	},function() {
		var th = $(this);
		th.removeClass("onlgray");
		th.css({"padding-left":"0"});
	});


	$(".crCfDots>ul>li").hover(function() { //主推栏dotOn转移
		var th = $(this);
		th.click(function() {
			th.siblings().removeClass("dotOn");
			th.addClass("dotOn");
		});
	});

	$(".fanTime").hover(function() { //番剧栏时间selOn转移
		var th = $(this);
		th.toggleClass("ona");
		th.click(function() {
			th.siblings().removeClass("selOn")
			th.addClass("selOn");
		});
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

	var CRdotTimeVar;
	function CRdotTime() {	//主推栏圆点按时间变化
		CRdotTimeVar = setInterval(function() {
			var imgUrl;
			var dotVal;
			// console.log(imgurl);
			var th = $(".crCfDots>ul>.dotOn");
			th.removeClass("dotOn");
			th.next("li").addClass("dotOn");
			var th = $(".crCfDots>ul>.dotOn");
			dotVal = th.val();
			if (!th.val()) {
				$(".crCfDots>ul>li").first().addClass("dotOn");
				dotVal = 1;
			}
			CRaddPic(0,dotVal);
		},5000);
	}
	CRdotTime();

	function CRaddPic(preDot,dotVal) {  //轮播图添加图片,preDot为前一个dotOn的val，dotVal为要添加的dotOn的val		
		var imgUrl,imgNode;
			imgUrl = "img/cr"+dotVal+".jpg";  //下一个img的url
			imgNode = "<img src='"+imgUrl+"' title='轮播图"+dotVal+"'\/>";
			var th = $(".crCfPic");
			var th1 = $(".crCfPic>img:nth-child(1)");
			var th3 = $(".crCfPic>img:nth-child(2)");
			var time = 400;
			if (th3) {
				th3.stop();
				th3.remove();
			}

			if ((dotVal-preDot)>0) {
				th.append(imgNode);
				var th2 = $(".crCfPic>img:nth-child(2)");
				// console.log("<img src='"+imgUrl+"' title='轮播图"+dotVal+"'\/>");
				th1.animate({left: "-440px"},time,"linear",function() {$(this).remove();});
				th2.animate({left: "0px"},time,"linear");
			} else if((dotVal-preDot)<0){
				th.append(imgNode);
				var th2 = $(".crCfPic>img:nth-child(2)");
				// console.log("<img src='"+imgUrl+"' title='轮播图"+dotVal+"'\/>");
				th1.animate({left: "440px"},time,"linear",function() {$(this).remove();});
				th2.css({left:"-440px"}).animate({left: "0px"},time,"linear");
			}
		}

	$(".crCfDots>ul>li").on("click",function() { //主推栏圆点点击转移dotOn
		var th = $(this);
		var preDot = $(".dotOn").val(); //上一个dotOn的值
		var dotVal = th.val();
		CRaddPic(preDot,dotVal);
		th.addClass("dotOn");
		th.siblings().removeClass("dotOn");
		clearInterval(CRdotTimeVar);
		CRdotTime();
		// console.log(preDot+"\n"+th.val());
	});

	$(".nav>ul>li").hover(function() { //导航放上背景色变化
		var th = $(this);
		th.css({"background-color":"#00a1d6",opacity:"0"}).animate({opacity:"1"},200).delay(200).css("color","#fff");
	},function() {
		var th = $(this);
		th.css({color:"#000","background-color":"#eee",opacity:"1"});
	});

	$(".nav>ul>li").click(function() { //导航点击变化位置，并转移 navOn
		var th = $(this);
		var thval = "."+th.attr("value");
		var th1 = $(thval);
		var th1y = th1.offset().top;
		// console.log(th1y);
		window.scroll(0,th1y-30);
		th.addClass("navOn");
		th.siblings().removeClass("navOn");
	});

	$(window).scroll(function() { //导航根据scroll变动
		var th = $(".navigator")
		if (pageYOffset > 230) {
			th.css({position:"fixed",top:"0px"});
		}else {
			th.css({position:"absolute",top:"230px"});
			th.attr("value","22");
			// console.log(th.attr("style"));
		}
		// nav绑定block的位置

	});

	$(".fanSel>span , .guoPicTrig>span").mouseover(function() { //标题底部三角转换
		var th = $(this);
		th.addClass("trigOnPoint");
		th.siblings().removeClass("trigOnPoint");
	});

	$(".lircTrig>span").mouseover(function() { //live栏轮播图
		var th = $(this);
		var preDot = $(".lircTrig").children(".trigOnPoint").attr("name");
		th.addClass("trigOnPoint");
		th.siblings().removeClass("trigOnPoint");
		var dotVal = th.attr("name");
		liAddPic(preDot,dotVal);
		clearInterval(LIdotTimeVar);
		LIdotTime();
		// console.log(preDot);
	});

	$(".liveRecom>.bl>.blc>.mod").hover(function() { //直播栏mod 分类放上消失
		var th = $(this);
		th.children(".modText").children(".modClassify").css("bottom","-20px");
	},function() {
		var th = $(this);
		th.children(".modText").children(".modClassify").css("bottom","0");
	});

	$(".crContent").hover(function() {	//主推栏左右btn出现消失
		var th1 = $(".crCButtonle");
		var th2 = $(".crCButtonri");
		th1.fadeIn(300);
		th2.fadeIn(300);
	},function() {
		var th1 = $(".crCButtonle");
		var th2 = $(".crCButtonri");
		th1.fadeOut(200);
		th2.fadeOut(200);
	});

	$(".mod").hover(function() {  //所有内容mod 播放栏放上消失
		var th = $(this);
		var th1 = th.children(".modText").children(".modPlayCom");
		th1.stop();
		th1.animate({bottom:"-30px"},300);
		// console.log("hello");
	},function() {
		var th = $(this);
		var th1 = th.children(".modText").children(".modPlayCom");
		th1.stop();
		th1.animate({bottom:"0"},300);
	});


	var LIdotTimeVar;
	function LIdotTime() {  //live栏 右侧轮播图 设置间隔时间
		LIdotTimeVar = setInterval(function() {
			var th = $(".lircTrig");
			var th1 = th.children(".trigOnPoint");
			var preDot = th1.attr("name");
			th1.removeClass("trigOnPoint");
			th1.next().addClass("trigOnPoint");
			var th1 = th.children(".trigOnPoint");
			var dotVal = th1.attr("name");
			if (!dotVal) {
				th.children("span:nth-child(1)").addClass("trigOnPoint");
				dotVal = 1;
			}
			liAddPic(preDot,dotVal);
			// console.log(preDot+"\n"+dotVal);
		},3000);
	}
	LIdotTime();

	function liAddPic(preDot,dotVal) {
		var th = $(".lircPic");
		var th1 = th.children("img:nth-child(1)");
		var time = 500;
		var imgUrl = "img/li"+dotVal+".jpg";
		var imgNode = "<img src='"+imgUrl+"' title='轮播图"+dotVal+"'\/>";
		if ($(".lircPic>img:nth-child(2)")) {
			$(".lircPic>img:nth-child(2)").stop();
			$(".lircPic>img:nth-child(2)").remove();
		}
		if ((dotVal-preDot)>0) {
			th.append(imgNode);
			var th2 = $(".lircPic>img:nth-child(2)");
				// console.log("<img src='"+imgUrl+"' title='轮播图"+dotVal+"'\/>");
				th1.animate({left: "-260px"},time,"linear",function() {$(this).remove();});
				th2.animate({left: "0px"},time,"linear");
			} else if((dotVal-preDot)<0){
				th.append(imgNode);
				var th2 = $(".lircPic>img:nth-child(2)");
				// console.log("<img src='"+imgUrl+"' title='轮播图"+dotVal+"'\/>");
				th1.animate({left: "260px"},time,"linear",function() {$(this).remove();});
				th2.css({left:"-260px"}).animate({left: "0px"},time,"linear");
			}

	}

})