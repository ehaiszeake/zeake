<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset={CHARSET}">
<meta http-equiv="Cache-control" content="{if $_G['setting']['mobile'][mobilecachetime] > 0}{$_G['setting']['mobile'][mobilecachetime]}{else}no-cache{/if}" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
<meta name="format-detection" content="telephone=no" />
<meta name="keywords" content="{if !empty($metakeywords)}{echo dhtmlspecialchars($metakeywords)}{/if}" />
<meta name="description" content="{if !empty($metadescription)}{echo dhtmlspecialchars($metadescription)} {/if},$_G['setting']['bbname']" />
<title><!--{if !empty($navtitle)}-->$navtitle - <!--{/if}--><!--{if empty($nobbname)}--> $_G['setting']['bbname'] - <!--{/if}--> {lang waptitle} - Powered by Discuz!</title>
<script type="text/javascript">var STYLEID = '{STYLEID}', STATICURL = '{STATICURL}', IMGDIR = '{IMGDIR}', VERHASH = '{VERHASH}', charset = '{CHARSET}', discuz_uid = '$_G[uid]', cookiepre = '{$_G[config][cookie][cookiepre]}', cookiedomain = '{$_G[config][cookie][cookiedomain]}', cookiepath = '{$_G[config][cookie][cookiepath]}', showusercard = '{$_G[setting][showusercard]}', attackevasive = '{$_G[config][security][attackevasive]}', disallowfloat = '{$_G[setting][disallowfloat]}', creditnotice = '<!--{if $_G['setting']['creditnotice']}-->$_G['setting']['creditnames']<!--{/if}-->', defaultstyle = '$_G[style][defaultextstyle]', REPORTURL = '$_G[currenturl_encode]', SITEURL = '$_G[siteurl]', JSPATH = '$_G[setting][jspath]';</script>
<!--{if $_GET[mod] == 'misc'}-->
<script type="text/javascript" src="{$_G[setting][jspath]}common.js?{VERHASH}"></script>
<!--{else}-->
<script src="$_G[siteurl]{STATICURL}js/mobile/jquery-1.8.3.min.js?{VERHASH}"></script>
<script src="$_G[siteurl]{STATICURL}js/mobile/common.js?{VERHASH}" charset="{CHARSET}"></script>
<!--{/if}-->
<link rel="stylesheet" href="$_G[siteurl]template/mobanbus_viewv1/viewv1_st/css/mobanbus_viewv1_st.css" media="screen" />
<link rel="stylesheet" href="$_G[siteurl]template/mobanbus_viewv1/viewv1_st/css/mobanbus.min.css" />
</head>
<body onLoad="LoadFinish()" class="mobanbus slideleftin page-container"> 

<!--{if $_GET[mod] == 'viewthread'}-->
<!--{else}-->
<base href="$_G[siteurl]" />
<!-- Mobanbus_cn header start -->
<header class="mobanbus_header bus_index">
  <div class="bus_nav">
	<div class="icon-reorder">
		<div class="bus_h_hide">
			<a class="ico" href="javascript:void(0)" onClick="mobanbusshow(this)"></a>
			<div class="mobanbus_nav">
			<ul>
				
				<!-- 这里放 顶部导航模块 调用地址 -->
				
				<!-- <li><a href="search.php?mod=forum&mobile=2">搜索</a></li> -->
				<li><a href="portal.php?mod=list&catid=2">主页</a></li>
				<li><a href="forum.php?mod=forumdisplay&fid=36&mobile=2">分享</a></li>
				<!-- <li><a href="#">社区</a></li> -->
				<li><a href="home.php?mod=space&uid={$_G[uid]}&do=profile&mycenter=1&mobile=2">个人主页</a></li>
				<div class="clear"></div>
			</ul>
			</div>	
		</div>
	</div>
	<div class="logo_index">
		<h1 class="bus_logo"><a href="portal.php?mod=index&mobile=2"><img src="$_G[siteurl]/template/mobanbus_viewv1/viewv1_st/img/logo.png" title="$navtitle"></a></h1>
	</div>
	<div class="icon-edit"><a class="ico" href="forum.php?mod=misc&action=nav&mobile=2"></a></div>
  </div>	
<div class="bus_headbox"></div>
</header>
<!-- Mobanbus_cn header end -->

<!--{/if}-->

<section class="bus_warp">

