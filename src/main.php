<?php
$result=array();
$_X=floatval($_POST['x']);
$_Y=floatval($_POST['y']);
$_R=floatval($_POST['r']);
$result=array();


if ($_X>=0 && $_Y>=0 && $_X**2 + $_Y**2 <=$_R**2){
    $result["check"]=true;
}else if($_X<0 && $_Y>=0 && $_X>=-$_R && $_Y<=$_R){
    $result["check"]=true;
}else if($_X>=0 && $_Y<0 && $_Y>=0.5 * $_X - 0.5 * $_R){
    $result["check"]=true;
}else{
    $result["check"]=false;
     }
  echo json_encode($result);  
?>
