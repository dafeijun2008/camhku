<?php
//1:获取参数购物车did
$did = $_REQUEST['did'];
//2:创建sql
require("init.php");
$sql = "DELETE FROM letv_cart_detail WHERE did = $did";
$result = mysqli_query($conn,$sql);
//3:执行
header("content-type:application/json;charset=utf-8");
if($result===true){
  echo '{"code":1,"msg":"删除成功"}';
}else{
  echo '{"code":-1,"msg":"删除失败"}';
}