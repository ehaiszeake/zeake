<?php

function webImg($img,$website){
    return (strpos($img, "http")===0 ? $img : $website."/".$img);
}

?>