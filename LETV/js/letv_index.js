$(window).load(function(){
	$("#header").load("data/header.php",function(){

		var uname = sessionStorage['uname'];
		if(uname){
			$("#top_box .login").html(uname+"   "+" 您好!!!");
		}


	});
	$("#footer").load("data/footer.php");
});
//为header添加hover时间
//$(".region,.help,.zoology").hover(function(){
	//$(this).children(":last").toggleClass("hide")
//});
//margin样式定义
$("#section").css("marginTop",30);
//margin样式定义结束
//storey添加滚动事件
$(".storey_picture_title").children(":first").css({borderRight:"1px solid #e4393c"});
$(".storey_picture_title>li").click(function(){
	$(this).css({
		borderRight:"1px solid #e4393c"
		
	}).siblings().css({borderRight:"1px solid transparent"});
		var i=$(this).index("#super_list>.storey_picture_title>li");
		$("#storey_picture_box>ul").animate({
			top:-i*500
		},1000);
});
$("#product_up div.picture,.product_down_right div.picture,.product_down_left div.picture")
	.on("mouseenter","img",function(){
					$(this).css({
						transform:"rotatey(360deg)"})
					}). mouseleave(function(){
					$(this).css({
						transform:"rotatey(0deg)"})
					});
//广告图片数组
+function(){
var imgs=[
	"imgs/banner11.jpg",
	"imgs/banner22.jpg",
	"imgs/banner33.jpg",
	"imgs/banner44.jpg",
	"imgs/banner55.jpg",
	"imgs/banner11.jpg"
];
var $slider=$("#slider");
var $ULWIDTH=parseFloat($slider.css("width").slice(0,-2));
var $imgs=$("#slider>.imgs");
var $btn=$("#slider>.indexs");
var timer=null;
var num=0;
//console.log($btn);
+function(){
	for(var i=0,$ulimgs="",$index="";i<imgs.length;i++){
		$ulimgs+="<li><img src='"+imgs[i]+"'/></li>";
		if(i<imgs.length-1){
			$index+="<li>"+(i+1)+"</li>";
		}
	}
	$imgs.html($ulimgs);
	$btn.html($index);
	$imgs.css("width",imgs.length*$ULWIDTH+"px");
}();
$("#slider>.images>li").css("width",$ULWIDTH+"px");
$(window).load(function(){
	clearInterval(timer);
	timer=setInterval(nextplay,3000);
});
function nextplay(){
	if(num>imgs.length-2){
		$imgs.css("left",0).stop().animate({left:-$ULWIDTH},500);
		num=0;
	}else{
		$imgs.stop().animate({left:-(num+1)*$ULWIDTH},500);
	}
	num++;
}
$btn.on("mouseenter","li",function(){
	var i=$(this).index();
	num=i;
	clearInterval(timer);
	$imgs.stop(true).animate({left:-(i)*$ULWIDTH},350);
});
$imgs.on("mouseenter","li",function(){
	clearInterval(timer);
	var i=$(this).index();
	num=i;
	$imgs.stop(true).animate({left:-(i)*$ULWIDTH},350);
}).on("mouseleave","img",function(){
	timer=setInterval(nextplay,3000)
})
}();