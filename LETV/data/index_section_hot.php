<?php
	header("content-type:application/json;charset=utf-8");
	require("init.php");
	$sql="select*from t_index_hot";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_all($result,MYSQLI_ASSOC);
	echo json_encode($row);
?>