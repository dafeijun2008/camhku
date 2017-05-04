<?php
    header("content-type:application/json;charset=utf-8");
    @$uid=$_REQUEST['uid'] or die('{"code":-2,"msg":"用户编号不能为空}');
    require("init.php");
    $sql="SELECT pid,pname,price,pic,did,count FROM letv_details_product,letv_cart_detail WHERE pid=productId AND cartId=(SELECT cid FROM letv_cart WHERE userId=$uid)";
    $result=mysqli_query($conn,$sql);
    $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode($rows);
?>