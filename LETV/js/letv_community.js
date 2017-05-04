//轮播区图片
var imgs=[
	"community_imgs/banner1.jpg",
	"community_imgs/banner2.jpg",
	"community_imgs/banner3.jpg"
];
//轮播开始
+function(){
	var LIWIDTH=parseFloat($("#slider_box").css("width"));console.log(LIWIDTH);
	var DURATION=1000;
	var canAuto=true;
	var timer=null;
	var n=0;
	var $slider=$("#slider_box");
	var $ulImgs=$("#imgs");
	var $indexs=$("#indexs");
	+function(){
		for(var i=0,$htmlImgs="",$htmlIndexs="";i<imgs.length;i++){
			$htmlImgs+="<li><img src='"+imgs[i]+"'></li>";
			$htmlIndexs+="<a href='#'></a>";
		}
		$ulImgs.append($htmlImgs);
		$indexs.append($htmlIndexs).children(":first").addClass("hover");
		$ulImgs.append($ulImgs.children(":first").clone());
		$ulImgs.css("width",LIWIDTH*(imgs.length+1));

	}();
	function autoMove(){
		timer=setTimeout(function(){
			n++;
			$ulImgs.animate({
				left:-n*LIWIDTH
			},DURATION,function(){
					if(n==imgs.length){
						n=0;
						$ulImgs.css("left",0);
					}
					$indexs.children(":eq("+(n)+")").addClass("hover").siblings().removeClass("hover");
					if(canAuto)autoMove();
				})
		},DURATION)
					//console.log(n);
	};
	 autoMove();
	$indexs.on("mouseenter","a",function(){
		$ulImgs.stop(true);
		clearTimeout(timer);
		n=$("#indexs>a").index(this);
		console.log(n);
		$ulImgs.animate({
			left:-n*LIWIDTH
		},function(){
				$indexs.children(":eq("+n+")").addClass("hover").siblings().removeClass("hover");
			})
	});
	$ulImgs.mouseenter(function(){
		canAuto=false;
		clearTimeout(timer);
	}).mouseleave(function(){
		canAuto=true;
		autoMove();
	})
}();
//轮播结束
//section热门群组单击滑动
+function(){
	var $ul=$(".hot_group_bottom_list>ul");
	var $LIWIDTH=parseFloat($(".hot_group_bottom_list>ul>li").css("width").slice(0,-2));
	var n=$ul.children().size();
	var $showNum=4;
	var moved=0;
	var $bward=$("#hot_group_bottom>.backward");
	var $fward=$("#hot_group_bottom>.forward");
	$ul.css("width",n*$LIWIDTH);
	if(n-$showNum>0){
		$fward.click(function(){
			//this.preventDefault();
				if(n-moved>$showNum){
				moved++;
				$ul.animate({
					left:-moved*$LIWIDTH
				},500)	
			}
		});
		$bward.click(function(){
			//this.preventDefault();
				if(moved>0){
				moved--;
				$ul.animate({
					left:-moved*$LIWIDTH
				},500)	
			}
		});
	}
}();
//section热门群组单击滑动结束
//热门活动轮播
+function(){
	var moved=0;
	var $ul=$("#hot_active>ul");
	var $btn=$("#hot_active>.btn");
	var timer=null;
	var i=0;
	function autoMove(){
		if(moved>2){
			moved=0;
			//$ul.children(":eq("+moved+")").css("display","block").siblings().css("display","none");
			//$btn.children(":eq("+moved+")").addClass("hover").siblings().removeClass("hover");
			//moved++;
		}else{
			$ul.children().css("display","none");
			$ul.children(":eq("+moved+")").css("display","block").siblings().css("display","none");
			$btn.children(":eq("+moved+")").addClass("hover").siblings().removeClass("hover");
			moved++;
		}
	}
	timer=setInterval(autoMove,1000);
	$ul.on("mouseenter","li",function(){
		clearInterval(timer);
		i=$("#hot_active>ul>li").index($(this));
		$btn.children(":eq("+i+")").addClass("hover").siblings().removeClass("hover");
	}).on("mouseleave","li",function(){
		moved=i;
		timer=setInterval(autoMove,1000);
	})
	$btn.on("mouseenter","a",function(){
		clearInterval(timer);
		i=$("#hot_active>.btn>a").index($(this));
		$btn.children(":eq("+i+")").addClass("hover").siblings().removeClass("hover");
		console.log(i);
		$ul.children(":eq("+i+")").css("display","block").siblings().css("display","none");
	}).on("mouseleave","a",function(){
		moved=i;
		timer=setInterval(autoMove,1000);
	})
}();
//热门活动轮播结束
//返回顶部
+function(){
	$("#backTop>a").mouseenter(function(){
				$(this).addClass("hover");
				$(this).prev().removeClass("hover");
			}).mouseleave(function(){
				$(this).removeClass("hover");
			})
	//$("#backTop").mouseenter(function(){
		//$(this).children(":first").addClass("hover");
	//}).mouseleave(function(){
		//$(this).children(":first").removeClass("hover");
	//})
	$(window).scroll(function(){
		var scrollTop=$("body").scrollTop();
		if(scrollTop>0){
			$("#backTop>a").css("display","block");
		}else{
			$("#backTop>a").css("display","none");
		}
	});
	//$("#backTop").hover(function(){
		//$(this).children(":first").toggleClass("hover");
	//})
}();
//返回顶部结束
//nav导航背景移动
+function(){
	var $ul=$(".nav_list>ul");
	var $LIWIDTH=parseFloat($(".nav_list>ul>li").css("width").slice(0,-2));
	console.log($LIWIDTH);
	var $move_bg=$(".move_bg");
	$ul.on("mouseover","li",function(){
		var i=$ul.children().index($(this));console.log($ul.children("li:last"));
		$ul.children("li:last").css({
			"left":i*$LIWIDTH,
			"visibility":"visible"
		});
	}).on("mouseout","li",function(){
		$ul.children("li:last").css({
			
			"visibility":"hidden"
		});
	})
}();
//nav导航背景移动结束
//同城城市选择
+function(){
	var $ul=$("#city_wide .peop_bottom");
	console.log($ul);
	//$ul.children(":first").children().addClass("hover");
	$ul.on("mouseenter","li",function(){
		$(this).children().addClass("hover").parent().siblings().children().removeClass("hover");
	}).on("mouseleave","li",function(){
		//$(this).children(":first").addClass("hover").removeClass("hover");
		//	$ul.children(":first").children().addClass("hover");
	})
}();
//同城城市选择结束
//分类导航
+function(){
	var $div=$("#classify .classify_list_content");
	console.log($div);
	$div.each(function(){
		var n=parseFloat($(this).index());
		$(this).children(":first").css({
			"backgroundImage":"url(community_imgs/56400237d790e.png)",
			"backgroundRepeat":"no-repeat",
			"backgroundPosition":""+0+" "+( -n*25)+"px"
			//"backgroundColor":"red"

				});	
	})
	$div.last().children(":first").css({
		"backgroundImage":"url(community_imgs/5822de563da56.png)",
			"backgroundRepeat":"no-repeat",
			"backgroundPosition":""+0+" "+0+"px"
	});
//background:url("../community_imgs/56400237d790e.png") no-repeat 0px 3px;
}();
//分类导航结束
//官方公告
$("#section_right .inner_list").on("mouseenter","p",function(){
	var i=$(this).index();
	$("#section_right .pic_box>ul>li").eq(i).css({
		opacity:1
	}).siblings().css({
		opacity:0
	});
});
//官方公告结束
//header
$(window).load(function(){
	var uname = sessionStorage['uname'];
	if(uname){
		$("#header .login").html(uname+"   "+" 您好!!!");
	}

});
//header结束
