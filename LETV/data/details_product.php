<?php
	header("content-type:application/json;charset=utf-8");
	require("init.php");
	$type=$_REQUEST['type'];
	$sql="select * from letv_details_product where type='$type'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_all($result,MYSQLI_ASSOC);
	echo json_encode($row);
?>