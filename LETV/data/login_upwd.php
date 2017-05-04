<?php
	header("content-type:application/json;charset=utf-8");
	$upwd=$_REQUEST['upwd'];
	$uname=$_REQUEST['uname'];
	require("init.php");
	$sql="select*from letv_user where uname='$uname' and upwd='$upwd'";
	$result=mysqli_query($conn,$sql);
	$upwd=mysqli_fetch_assoc($result);
	if($upwd){
		echo '{"code":-1,"msg":"密码正确"}';
	}else{
		echo '{"code":1,"msg":"密码错误,请重新输入"}';
	}
?>