//引入头部底部php
$(function(){
	$("#header").load("data/header.php");
	$("#footer").load("data/footer.php");
});
//轮播
+function(){
	var imgs=[
			"member_imgs/92.jpg",
			"member_imgs/86.jpg",
			"member_imgs/94.jpg",
			"member_imgs/92.jpg"
		];
	var $slider_box=$(".slider_box");
	var $ULWIDTH=parseFloat($slider_box.css("width").slice(0,-2));
	var $pic=$(".slider_box>.pic");
	var $btn=$(".slider_box>.btn");
	var timer=null;
	var num=0;
	//console.log($btn);
	+function(){
		for(var i=0,$ulimgs="",$index="";i<imgs.length;i++){
			$ulimgs+="<li><img src='"+imgs[i]+"'></li>";
			if(i<imgs.length-1){
				$index+="<li>"+i+"</li>";
			}
		}
		$pic.html($ulimgs);
		$btn.html($index);
		$pic.css("width",imgs.length*$ULWIDTH+"px");
	}();
	$(".slider_box>.pic>li").css("width",$ULWIDTH+"px");
	$(window).load(function(){
		clearInterval(timer);
		timer=setInterval(nextplay,2000);
	});
	function nextplay(){		
		if(num>imgs.length-2){
			$pic.css("left",0).stop().animate({left:-$ULWIDTH},500);
				num=0;					
		}else{
			$pic.stop().animate({left:-(num+1)*$ULWIDTH},500);
		}
		num++;
	}
	$btn.on("mouseenter","li",function(){
		var i=$(this).index();
		num=i;
		clearInterval(timer);
		$pic.stop(true).animate({left:-(i)*$ULWIDTH},350);
	});
	$pic.on("mouseenter","li",function(){
		clearInterval(timer);
		var i=$(this).index();
		num=i;
		$pic.stop(true).animate({left:-(i)*$ULWIDTH},350);
	}).on("mouseleave","img",function(){
		timer=setInterval(nextplay,2000);
	})

}();
//轮播结束
//elevator
+function(){
	var $elev=$("#elevator");
	var $div=$(".floor");
	var i=0;
	$(window).scroll(function(){
		var scrollTop=$("body").scrollTop();
		$div.each(function(){
			if($(this).offset().top<=innerHeight/2+scrollTop){
				$div.removeClass("choice");
				$(this).addClass("choice");
			}else{
				$(this).removeClass("choice");
			}
		});
		if($div.first().offset().top<=innerHeight/2+scrollTop){
			$elev.fadeIn(500);
		}else{
			$elev.fadeOut(500);
		};
		i=$(".choice").index(".floor");
		var $li=$elev.find("li");
		if(i>=0){
			$li.children(":eq("+i+")").addClass("hover").parent().siblings().children().removeClass("hover");
		};
	})
	//鼠标移入移出事件
	$elev.children("ul").on("mouseenter","li a",function(){
		$(this).addClass("hover");
		$(this).siblings().removeClass("hover");
	}).on("mouseout","li a",function(){
		if($elev.find("a").index($(this))!=i){
			//console.log($elev.find("a").index($(this)));
			$(this).removeClass("hover");
		}
	});
	 ///滚动事件
	//单击事件
	$elev.on("click"," ul li ",function(){
		var n=$(this).index();
		//console.log($(".floor").eq(n).offset().top-innerHeight/2+2);
		$("body").animate({
			scrollTop:$(".floor").eq(n).offset().top-innerHeight/3
		},500);
	});
	//$elev.find("a").click(function(){
		//var n=$elev.find("a").index($(this));
		//$("body").animate({
			//scrollTop:$(".floor").eq(n).offset().top-innerHeight/2+2,
		//},500);
	//})
}();
//elevator结束
//section
+function(){
	var div_pic=$("#f1>.super_member_right>ul>li>div");
	for(var i=0;i<div_pic.length;i++){
		var w=parseFloat($(div_pic[0]).css("width").slice(0,-2));
		$(div_pic[i]).css({
			"backgroundImage":"url(member_imgs/28.jpg)",
			"backgroundRepeat":"no-repeat",
			"backgroundPosition":""+(-i*w)+"px "+0+"px"
		});
		//console.log($(div_pic[i]));
	}
	var div_pic=$("#f2>.super_member_right>ul>li>div");
	for(var i=0;i<div_pic.length;i++){
		var w=parseFloat($(div_pic[0]).css("width").slice(0,-2));
		$(div_pic[i]).css({
			"backgroundImage":"url(member_imgs/29.jpg)",
			"backgroundRepeat":"no-repeat",
			"backgroundPosition":""+(-i*w)+"px "+0+"px"
		});
		//console.log($(div_pic[i]));
	}
	var div_pic=$("#f3>.super_member_right>ul>li>div");
	for(var i=0;i<div_pic.length;i++){
		var w=parseFloat($(div_pic[0]).css("width").slice(0,-2));
		$(div_pic[i]).css({
			"backgroundImage":"url(member_imgs/30.jpg)",
			"backgroundRepeat":"no-repeat",
			"backgroundPosition":""+(-i*w)+"px "+0+"px"
		});
		//console.log($(div_pic[i]));
	}
}();
//section结束
//movie动态获取数据
$.get('data/letv_member_movie.php',function(data){
	var html="";
	$.each(data,function(i,obj){
		html+=`
			<li>
				<div class="pic"><a href="#"><img src="${obj.pic}" alt=""/></a></div>
				<div class="content">
					<h2>${obj.mname}</h2>
					<p>导演:${obj.director}</p>
					<p>上映时间:${obj.mtime}</p>
					<p>${obj.brief}</p>
				</div>
			</li>
		`;
	})
	$(".floor>.movie_box>ul").append(html);
});
//movie动态获取数据结束