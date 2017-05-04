<?php
	header("content-type:application/json;charset=utf-8");
	require("init.php");
	$sql="select * from t_index_product";
	$result=mysqli_query($conn,$sql);
	$pro_up=mysqli_fetch_all($result,MYSQLI_ASSOC);
	$sql="select*from t_index_product1";
	$result=mysqli_query($conn,$sql);
	$pro_down=mysqli_fetch_all($result,MYSQLI_ASSOC);
	//echo $pro_down[0];
	$html=[];
	$html[]=$pro_up;
	$html[]=$pro_down;
	echo json_encode($html);
?>