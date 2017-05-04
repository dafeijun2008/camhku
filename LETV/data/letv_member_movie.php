<?php
	header("content-type:application/json;charset=utf-8");
	require("init.php");
	$sql="select * from letv_member_movie";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_all($result,MYSQLI_ASSOC);
	echo json_encode($row);
?>