var $runame=$(".form>.register .uname");
var $luname=$(".form>.login .uname");
var $lupwd=$(".form>.login .upwd");
$runame.blur(function(){
	loseBlur($(this),'data/register.php',{uname:$(this).val()},'请输入3-10个字符');
});
$luname.blur(function(){
	loseBlur($(this),'data/login_uname.php',{uname:$(this).val()},'用户名不正确,请重新输入');
});
$lupwd.blur(function(){
	loseBlur($(this),'data/login_upwd.php',{uname:$luname.val(),upwd:$(this).val()},'密码错误,请重新输入');
});
function loseBlur(obj,src,msg,txt){
	if(obj.next().attr("class")==="vali_success"){
		$.ajax({
			type:'post',
			url:src,
			data:msg,
			success:function(data){
				if(data.code==1){
					obj.next().attr("class","vali_fail");
				}else{
					obj.next().attr("class","vali_success");
				}
				obj.next().html(data.msg);
			},
			error:function(data){
				console.log("响应出错");
			}
		})
	}else{obj.next().html(txt);}
}

$(".form>.register .btn").click(function(){
	subm($(this),'data/register_add_do.php');
});
$(".form>.login .btn").click(function(){
	subm($(this),'data/login.php');
});
function subm(txt,src){
	var tname=txt.parent().parent().children(":first").children().eq(2).attr("class")==="vali_success";
	var tpwd=txt.parent().parent().children(":nth-child(2)").children().eq(2).attr("class")==="vali_success";
	var tcode=txt.parent().parent().children(":nth-child(3)").children().eq(2).attr("class")==="vali_success";
	var uname=txt.parent().parent().children(":first").children().eq(1);
	var upwd=txt.parent().parent().children(":nth-child(2)").children().eq(1);
	//console.log(uname.val());
	//console.log(upwd.val());
	if(tname&&tpwd&&tcode) {
		//console.log(1111);
		$.ajax({
			type: 'post',
			url: src,
			data: {uname:uname.val(),upwd:upwd.val()},
			success: function (data) {
				console.log(data.name);
				if(data.code==1){
					window.location.href="../index.html";
					sessionStorage["userId"]=data.uid;
					sessionStorage["uname"]=data.uname;
				}
			},
			error: function (data) {
				console.log("响应出错"+data);
			}
		})
	}else{
		txt.click=null;
	}

}
function parseSearch(){
	if(location.search!=""){//如果search不是""//将location的search去掉开头?,再按&切割,保存在数组arr中
		var arr=location.search.slice(1).split("&");//获取url传过来的参数包括?号所以要进行切割
		//arr:["username=zhangdong","pwd=123456"]//遍历arr中,同时声明空对象obj
		for(var i=0,obj={};i<arr.length;i++){//将当前元素按=切割保存在数组split中
			var split=arr[i].split("=");//为obj添加新属性，属性名为split的第一个元素,属性值为split的第二个元素
			obj[split[0]]=split[1];
		}     return obj;
	}else return {};
}
var obj=parseSearch().user;
var login=$(".login");
var register=$(".register");
if(obj=="login"){
	console.log(1);
	$("#section>.form>.section_top").children(":last").addClass("bg_color").siblings().removeClass("bg_color");
	login.removeClass("hidden").prev().addClass("hidden");
}else if(obj=="register"){
	console.log(2);
	$("#section>.form>.section_top").children(":first").addClass("bg_color").siblings().removeClass("bg_color");
	register.removeClass("hidden").next().addClass("hidden");
}
$("#section>.form>.section_top").on("click","span",function(){
	$(this).addClass("bg_color").siblings().removeClass("bg_color");
	if($(this).html()==="注册"){
		register.removeClass("hidden").next().addClass("hidden");
	}else if($(this).html()==="登录"){
		login.removeClass("hidden").prev().addClass("hidden");
	}
})


