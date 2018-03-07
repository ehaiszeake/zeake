<?php

function webImg($img,$website){
    return (strpos($img, "http")===0 ? $img : $website."/".$img);
}

function webImgDefault($img,$website,$defaultImg){
    if(empty($img))return $defaultImg;
    return (strpos($img, "http")===0 ? $img : $website."/".$img);
}

?>