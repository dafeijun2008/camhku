<?php
//1:获取参数购物车did
$did = $_REQUEST['did'];
//2:创建sql
require("init.php");
$sql = "UPDATE letv_cart_detail SET count=count-1 WHERE did = $did";
$result = mysqli_query($conn,$sql);
//3:执行
header("content-type:application/json;charset=utf-8");
if($result===true){
  echo '{"code":1,"msg":"更新成功"}';
}else{
  echo '{"code":-1,"msg":"列新失败"}';
}