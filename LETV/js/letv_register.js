+function(){
	var forms=document.forms;
	for(var i=0;i<forms.length;i++){
		test(forms[i]);
	}
	function test(form){
		form.uname.onfocus=getfocus;
		form.upwd.onfocus=getfocus;
		form.code.onfocus=getfocus;
		function getfocus(){
			this.nextElementSibling.className="txt_focus";
			//console.log(this.value);
		}
		form.uname.onblur=function(){losefocus(this,/^\w{3,10}$/)};
		form.upwd.onblur=function(){losefocus(this,/^\d{6,8}$/)};

		function losefocus(txt,reg){
			if(reg.test(txt.value)){
				txt.nextElementSibling.className="vali_success";
			}else{
				txt.nextElementSibling.className="vali_fail";
			}
		}
		form.code.onblur=function(){
			var num=(this.parentNode.nextElementSibling.children[1].innerHTML).toLowerCase();
			if(this.value.toLowerCase()==num){
				this.nextElementSibling.className="vali_success";
			}else{
				this.nextElementSibling.className="vali_fail";
			}
		};

		var code=form.code.parentNode.nextElementSibling.children[1];
		code.onclick=function(){
			var chars=[];
			for(var i=48;i<=57;i++)
				chars.push(String.fromCharCode(i));
			for(var i=65;i<=90;i++)
				chars.push(String.fromCharCode(i));
			for(var i=97;i<=122;i++)
				chars.push(String.fromCharCode(i));

			function getcode(){
				var code=[];
				while(code.length<4){
					var i=Math.floor(Math.random()*chars.length);
					code.push(chars[i]);
				}
				return code.join("");
			}
			form.code.value=null;
			code.innerHTML=getcode();
		}
	}
}();

window.onload=function(){
	document.querySelector(".form").style.opacity=0.88;
}