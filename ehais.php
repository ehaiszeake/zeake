<?php
/**
 * description 
 * @author tyler
 * 2013-6-24 UTF-8
 */

if(!isset($_SESSION)){
    session_start ();
}
defined ( 'ROOT_PATH' ) or define ( 'ROOT_PATH', dirname ( $_SERVER ['SCRIPT_FILENAME'] ) . '/' );
header ( 'Content-type: text/html; charset=utf-8' );



define ( 'APP_NAME', 'Home' );
define ( 'APP_PATH', './Home/' );
define( 'RUNTIME_PATH' , './Runtime/Home/' );

define ( 'APP_CODE', 'index' );//用于区分前台与后台的应用编码

//die($_SERVER ['SERVER_NAME']);
//die(APP_PATH);

// if($_SERVER['HTTP_HOST']=="ehais.org") {

// 	define("DEFAULT_MODULE","Home");

// }elseif($_SERVER['HTTP_HOST']=="www.ehais.org") {

// 	define("DEFAULT_GROUP","Company");

// }

define('DATA_PATH',      './Runtime/Data/');


define('APP_DEBUG',true); // 开启调试模式
// require dirname ( __FILE__ ) . '/ThinkPHP/ThinkPHP.php';
require dirname ( __FILE__ ) . '/../ehais/ThinkPHP/ThinkPHP.php';

//define('APP_DEBUG',false);
//require '/var/www/ThinkPHP/ThinkPHP.php';
?>