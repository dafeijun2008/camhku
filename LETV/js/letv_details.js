$(window).load(function(){
	$("#header").load("data/header.php",function(){

		var uname = sessionStorage['uname'];
		if(uname){
			$("#top_box .login").html(uname+"   "+" 您好!!!");
		}


	});
	$("#footer").load("data/footer.php");
});
$("#footer").css({marginTop:20});//footer
//为header添加hover时间
//$(".region,.help,.zoology").hover(function(){
//	$(this).children(":last").toggleClass("hide")
//});
//banner文本去 配送地区
$("#delivery_address>dd>ul>li:first-child").hover(function(){
	$("#delivery_address #address_list").toggleClass("hide");
});
$("#address_list>ul>li:first-child").css({
	border:"1px solid #e4393c",
	borderBottom:"1px solid transparent"
});
//console.log($("#address_list>ul>li"))
$("#address_list>ul>li").click(function(){
	 //console.log($(this))
		$(this).css({
				border:"1px solid #e4393c",
				borderBottom:"1px solid transparent"
			}).siblings().css({
				border:"1px solid #ddd",
				borderBottom:"1px solid #e4393c"
			});
			//var i=$("#address_list>ul").index();
			var i=$(this).index();//第几个li
			$("#content_box").css({
				left:-i*400
			})
})

//banner文本去li选中
$("#text_tab>.data_choose>dd>ul>li").click(function(){
	$(this).toggleClass("info_choose").siblings().removeClass("info_choose");
});
//支付方式花呗支付
$("#text #text_tab .vip_service>dd>ul>li").hover(function(){
	$(this).children(":last").toggleClass("hide");
})
//商品详情 标签切换
$("#product_details>.main_tabs").on("mouseenter","li:not(.current)",function(){
	 $(this).addClass("current")
           .siblings().removeClass("current");
	 
	var $divs=$("#product_details>[id^='product']");
	$divs.removeClass("show");
	if(!$(this).is(":contains('商品评价')")){
		var i=$(this).index("#product_details>.main_tabs>li:not(:contains('商品评价'))");
		$divs.eq(i).addClass("show");
	}
});
//超级手机hover切换
$("#product_box>.header>ul>li").on("mouseenter","a",function(){
	$(this).addClass("current").parent()
		.siblings().children().removeClass("current");
});
//超级手机hover切换结束
+function(){
	var LIWIDTH=parseFloat($("#picture_list>ul>li").css("width").slice(0,-2))+2;
	var $ul=$("#picture_list>ul");
	var $bward=$("#picture_box .picture_down .backward");
	var $fward=$("#picture_box .picture_down a.forward ");
	var $super=$("#superMask");
	var $mImg=$("#mImg");
	var $mask=$("#mask");
	var $large=$("#largeDiv");
	var MSIZE=parseFloat($mask.css("width"));
	var SSIZE=parseFloat($super.css("width"));
	var MAX=SSIZE-MSIZE;
	var moved=0;
	if(moved==0){
		$bward.css({backgroundColor:"#EAEAEA"});
		$fward.css({backgroundColor:"#F7E8E8"});
	}else if(moved==3){
		$fward.css({backgroundColor:"#EAEAEA"});
		$bward.css({backgroundColor:"#F7E8E8"});
	}
		$bward.click(function(){
			if(moved<3){
				moved++;
				$ul.css("left",-moved*LIWIDTH+"px");
				if(moved>0&&moved<3){
					$fward.css({backgroundColor:"#F7E8E8"});
					$bward.css({backgroundColor:"#F7E8E8"});
				}else if(moved==0){
					$bward.css({backgroundColor:"#EAEAEA"});
					$fward.css({backgroundColor:"#F7E8E8"});
				}else if(moved==3){
					$fward.css({backgroundColor:"#EAEAEA"});
					$bward.css({backgroundColor:"#F7E8E8"});
				}
			}
		});
		$fward.click(function(){
			if(moved>0){
				moved--;
				$ul.css("left",-moved*LIWIDTH+"px");
				if(moved>0&&moved<3){
					$bward.css({backgroundColor:"#F7E8E8"});
					$fward.css({backgroundColor:"#F7E8E8"});
				}else if(moved==0){
					$fward.css({backgroundColor:"#EAEAEA"});
					$bward.css({backgroundColor:"#F7E8E8"});
				}else if(moved==3){
					$bward.css({backgroundColor:"#EAEAEA"});
					$fward.css({backgroundColor:"#F7E8E8"});
				}
			}
		});


	$ul.on("mouseover","li>img",function(){
		var src=$(this).attr("src");
		var i=src.lastIndexOf(".");
		src=src.slice(0,i)+"_m"+src.slice(i);
		$("#mImg").attr("src",src);
	});
	//$large.css("backgroundImage","url('"+src+"')")
	$super.mouseover(function(){
		$mask.show(); 
		var src=$mImg.attr("src");
		var i=src.lastIndexOf(".");
		src=src.slice(0,i-1)+"l"+src.slice(i);
		$large.css(
			"backgroundImage","url('"+src+"')")
		$large.show();
	}).mouseout(function(){
		$mask.hide(); $large.hide();
	}).mousemove(function(e){
		//计算$mask的left和top
		var left=e.offsetX-MSIZE/2;
		var top=e.offsetY-MSIZE/2;
		//如果left<0，就改回0，否则如果left>MAX，就改回MAX，否则不变:
		left=left<0?0:left>MAX?MAX:left;
    top=top<0?0:top>MAX?MAX:top;
		$mask.css({ left,top });
		$large.css("backgroundPosition",-left+"px "+ -top+"px");
	});
}();
//logo
//logo结束
//PHP数据返回

+function(){
	var li=$("#product_box>.header>ul>li");
	//$(window).scroll(function(){
	//	var scrollTop=$("body").scrollTop();
	//	var pTop=$("#product_box").offset().top;
	//	console.log(pTop);
	//	if(scrollTop=pTop/2){
	//		$.ajax({
	//			url:'data/details_product.php?type='+"LE_1",
	//			success:function(obj){
	//				//console.log(obj);
	//				numb(obj);
	//			},
	//			error:function(){
	//				console.log("出错啦");
	//			}
	//		})
	//	}
	//});
	$(window).load(function(){
		$.ajax({
			url:'data/details_product.php?type='+"LE_1",
			success:function(obj){
				//console.log(obj);
				numb(obj);
			},
			error:function(){
				console.log("出错啦");
			}
		})
	});
	 $.each(li,function(i,obj){
		 $(obj).mouseenter(function(){
			 var j=$(this).index();
			 var type=null;
			 if(j==0){type='LE_1';}
			 else if(j==1){type='LE_2';}
			 else if(j==2){type='LE_3';}
			 $.ajax({
				 url:'data/details_product.php?type='+type,
				 success:function(obj){
					 //console.log(obj);
					 numb(obj);
				 },
				 error:function(){
					 console.log("出错啦");
				 }
			 })
		 });
	 })
	var numb=function(data){
		var html="";
		for(var i=0;i<data.length;i++){
			html+=`
			<li>
				 <div class="pic"><a href="${data[i].pid}"><img src="${data[i].pic}" alt=""/></a></div>
				 <div class="price">¥${data[i].price}</div>
				 <p>${data[i].pname}</p>
				 <a class="btn"href="#">加入购物车</a>
			 </li>
		 `;
		}
		$("#product_content>.product_list>ul").html(html);
		//为产品按钮立即购买添加单击事件
		var btn=$("#product_content>.product_list>ul>li>a");
		//console.log(btn);
		btn.click(function(e){
			e.preventDefault();
			var $pid=parseFloat($(this).parent().children(":first").children(":first").attr("href"));
			var $uid=parseFloat(sessionStorage.userId);//获取用户登录或者注册后的uid;
			//sessionStorage['pid']=pid;
			console.log($uid);
			$.ajax({
				type:'post',
				url:'data/cart_detail_add.php',
				data:{productId:$pid,userId:$uid},
				success:function(data){
					console.log(data);
					if(data.code<0){
						console.log('添加失败！错误原因：'+data.msg);
					}else {
						console.log('添加成功！该商品已加入购物车：'+data.count);
					}
				},
				error:function(data){
					console.log('添加购物车商品出错！请检查响应消息！');
				}
			});
		})
	}
}();
//PHP数据返回结束
//产品点击购买按钮
