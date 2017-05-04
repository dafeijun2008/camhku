//模块五:页面加载完成后,异步请求登录用户购物车中商品
//!!!!加入一个判断如果sessionStorage没有uid
//没登录   shopping.js
$(window).load(function(){
	$("#header").load("data/header.php",function(){

				var uname = sessionStorage['uname'];
				if(uname){
					$("#top_box .login").html(uname+"   "+" 您好!!!");
				}


	});
	$("#footer").load("data/footer.php");
});

+function(){
	var uid1 = sessionStorage['userId'];
//ajax start
	$.ajax({
		url: "data/cart_detail_list.php",
		data: {uid: uid1},
		success: function (data) {
			var html = '';
			$.each(data, function (i, obj) {
				console.log(obj);
				html += `
						<tr>
							<td>
								<input type="checkbox"/>
								<input type="hidden" value="1" />
								<div><img src="${obj.pic}" alt=""/></div>
							</td>
							<td><a href="">${obj.pname}</a></td>
							<td>${obj.price}</td>
							<td>
								<button class="reduceCount"id="${obj.did}">-</button>
								<input type="text" value="${obj.count}" class="ccount"/>
								<button class='addCount' id="${obj.did}">+</button>
							</td>
							<td><span>￥${obj.price * obj.count}</span></td>
							<td><a href="${obj.did}">删除</a></td>
						</tr>
					`;
			});
			$("#cart tbody").html(html);
			var tr=$("#cart>tbody>tr");
			var span_sum=$("#cart_footer>div>span.sum");
			var sum=0;
			for(var i=0;i<tr.length;i++){
				var price=parseFloat(($(tr[i]).children(":nth-child(5)").children(":first").html()).slice(1));
				//var ccount=parseFloat($(tr[i]).children().children(".ccount").val());
				sum+=price;
			}
			span_sum.html(sum+".00");
			console.log(sum);
		}
	})
	//删除购物车项
//1:绑定点击事件
	$("#cart").on('click','a',function(e){
		e.preventDefault();
		//2:获取当前元素a href did
		var did = $(this).attr("href");
		//console.log(did);
		var a = this;
		//console.log(a);
		$.get("data/update_cart_detail.php?did="+did,
			function(data){
				//4:如果删除成功
				console.dir(data);
				if(data.code>0){
					$(a).parents("tr").remove();
					//console.log(this);
				}
				//5:将当前行删除 tr
			});
	});
//第五个模块:更新数量+
//1:选择器绑定点击事件
	$("#cart").on('click','.addCount',function(e){
		var id = $(this).attr("id");
		var self = this;
		$.get("data/update_add_cart_detail.php?did="+id,
			function(data){
				//数据库增加成功
				var input = $(self).parent().find('.ccount');
				var v = parseInt(input.val())+1;
				input.val(v);
			});
	});
	//第五个模块:更新数量-
	$("#cart").on('click','.reduceCount',function(e){
		var id = $(this).attr("id");
		var self = this;
		var input = $(self).parent().find('.ccount');
		var v = parseInt(input.val());
		if(v>1){
				$.get("data/update_reduce_cart_detail.php?did="+id,
					function(data){
						//数据库减少成功
						if(data.code>0){
							console.log("更新成功");
						}
					});
			v=v-1;
			input.val(v);
		}
	});
}();

