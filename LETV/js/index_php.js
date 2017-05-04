//nav区域
//var nav_left="";
//var nav_right="";
//$.ajax({
//	 url:"data/index_nav.php",
//     success:function(data){
//		 $.each(data,function(i,obj){
//			nav_left+=`
//				<li class="home"><a href="#">${obj.homepage}</a></li>
//				<li><a href="letv_member.html">${obj.vip}</a></li>
//				<li><a href="#">${obj.comm}</a></li>
//				<li><a href="letv_community.html">${obj.zoology}</a></li>
//				<li><a href="#">${obj.rep}</a></li>
//		`;
//		nav_right+=`
//				<li><a href="#">${obj.compare}</a></li>
//				<li><a href="#">${obj.ask}</a></li>
//				<li><a href="#">${obj.look}</a></li>
//				<li><a href="#">${obj.invite}</a></li>
//		`;
//		 });
//
//		$("#nav_left").html(nav_left);
//		$("#nav_right").html(nav_right);
//	 },
//	 error:function(data){
//	  console.log("响应消息失败!");
//	 }
//});
	//nav区域结束

//$.ajax({
//	url:"data/index_banner.php",
//	success:function(data){
//
//		var html="";
//		html+=`
//			<dl	class="home_items1">
//			<dt><span>${data[0].data}</span></dt>
//			<dd><span>${data[1].data}</span></dd>
//			<dd><span>${data[2].data}</span></dd>
//			</dl>
//			<dl>
//			<dt><span>${data[3].data}</span></dt>
//			<dd><span>${data[4].data}</span></dd>
//			<dd><span>${data[5].data}</span></dd>
//			<dd><span>${data[6].data}</span></dd>
//			<dd><span>${data[7].data}</span></dd>
//			<dd><span>${data[8].data}</span></dd>
//			<dd><span>${data[9].data}</span></dd>
//			<dd><span>${data[10].data}</span></dd>
//			</dl>
//		`;
//		$("#home_items").html(html);
//		}
//});
$.ajax({
	url:"data/index_section_hot.php",
	success:function(data){
		var html="";
			for(var i=0;i<data.length;i++){
				if(i<data.length-1){
					html+=`
					<div class="hot_${i+1}">
						<div class="hot_items">
							<p>${data[i].pname}</p>
							<span>¥${data[i].price}起</span>
							<a href="letv_details.html">${data[i].details}</a>
						</div>		
						<div class="picture"></div>
					</div>
					<b></b>
				`;
				}else{
					html+=`
					<div class="hot_${i+1}">
						<div class="hot_items">
							<p>${data[i].pname}</p>
							<span>¥${data[i].price}起</span>
							<a href="letv_details.html">${data[i].details}</a>
						</div>		
						<div class="picture"></div>
					</div>
					
				`;
				}
				
			}
			$("#hot").html(html);
		//console.log(data);
		}
});
//product区域
$.ajax({
	url:"data/index_product.php",
	success:function(data){
		var pro_up="";
		var pro_down="";
				pro_up+=`
					<div class="picture lf"><img src="${data[0][0].pic}" alt=""></div>
					<div class="text lf">
						<span>${data[0][0].pname}</span>
						<ul>
							<li>${data[0][0].size1}</li>
							<li>${data[0][0].size2}</li>
							<li>${data[0][0].size3}</li>
							<li>${data[0][0].size4}</li>
						</ul>
						<div class="price">
							<!--<span>${data[0][0].copy}</span>-->
							<span>¥${data[0][0].price}起</span>
						</div>
						<a href="letv_details.html" class="btn">${data[0][0].btn}</a>
					</div>		
			`;
						pro_down+=`
							<div class="product_down_left" >
								<b>${data[1][0].title}</b>
								<span>${data[1][0].pname}</span>
								<p>${data[1][0].content}</p>
								<div class="price">
									<span>¥${data[1][0].price}起</span>
								</div>
								<div class="picture"><img src="${data[1][0].pic}" alt=""></div>
								<a href="#" class="btn">${data[1][0].btn}</a>
							</div>
							<div class="product_down_right">
								<b>${data[1][1].title}</b>
								<span>${data[1][1].pname}</span>
								<p>${data[1][1].content}</p>
								<div class="price">
									<span>¥${data[1][1].price}起</span>
								</div>
								<div class="picture"><img src="${data[1][1].pic}" alt=""></div>
								<a href="letv_details.html" class="btn">${data[1][1].btn}</a>
							</div>		
						`;					
			$(".product_up").html(pro_up);
			$(".product_down").html(pro_down);
		}
});
//product区域结束
	