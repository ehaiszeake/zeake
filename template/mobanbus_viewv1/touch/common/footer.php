<?php echo '模板巴士原创模板，版权所有，盗版必究，官网 www.mobanbus.cn';exit;?>
<!--{hook/global_footer_mobile}-->
<!--{eval $useragent = strtolower($_SERVER['HTTP_USER_AGENT']);$clienturl = ''}-->
<!--{if strpos($useragent, 'iphone') !== false || strpos($useragent, 'ios') !== false}-->
<!--{eval $clienturl = $_G['cache']['mobileoem_data']['iframeUrl'] ? $_G['cache']['mobileoem_data']['iframeUrl'].'&platform=ios' : 'http://www.discuz.net/mobile.php?platform=ios';}-->
<!--{elseif strpos($useragent, 'android') !== false}-->
<!--{eval $clienturl = $_G['cache']['mobileoem_data']['iframeUrl'] ? $_G['cache']['mobileoem_data']['iframeUrl'].'&platform=android' : 'http://www.discuz.net/mobile.php?platform=android';}-->
<!--{elseif strpos($useragent, 'windows phone') !== false}-->
<!--{eval $clienturl = $_G['cache']['mobileoem_data']['iframeUrl'] ? $_G['cache']['mobileoem_data']['iframeUrl'].'&platform=windowsphone' : 'http://www.discuz.net/mobile.php?platform=windowsphone';}-->
<!--{/if}-->

<div id="mask" style="display:none;"></div>
<!--{if !$nofooter}-->
<div class="footer">
	<div>
		<!--{if !$_G[uid] && !$_G['connectguest']}-->
		<!--{else}-->
		<a href="forum.php">{lang mobilehome} | <a href="home.php?mod=space&uid={$_G[uid]}&do=profile&mycenter=1">{$_G['member']['username']}</a> | <a href="member.php?mod=logging&action=logout&formhash={FORMHASH}" title="{lang logout}" class="dialog">{lang logout}</a>
		<!--{/if}-->
	</div>
	<div class="bus_foot_nav">
		<a href="{$_G['setting']['mobile']['simpletypeurl'][0]}">{lang no_simplemobiletype}</a>
		<a href="javascript:;" style=" color:#e6242b">{lang mobile2version}</a>
		<a href="{$_G['setting']['mobile']['nomobileurl']}">{lang nomobiletype}</a>
		<!--{if $clienturl}--><a href="$clienturl">{lang clientversion}</a><!--{/if}-->
	</div>
	<p>&copy; Comsenz Inc.</p>
</div>
<!-- Mobanbus_cn footer end -->

<!--{/if}-->
</section>
<!-- Mobanbus_cn mobanbus_wrap end -->

<!--{if $_GET[mod] == 'logging'}-->
	<span class="bus_back"><a class="head_ico icon-angle-left" href="javascript:history.go(-1);"></a></span>
<!--{elseif $_GET[mod] == 'register'}-->
	<span class="bus_back"><a class="head_ico icon-angle-left" href="javascript:history.go(-1);"></a></span>
<!--{elseif $_GET[mod] == 'viewthread'}-->
<div class="bus_headbox"></div>
<!--{else}-->
<!--{/if}-->
<div class="bus_up">
<a href="javascript:scroll(0,0)"><i class="icon-angle-up"></i></a>
</div>
<div class="bus_copyright">
<script type="text/javascript" src="$_G[siteurl]template/mobanbus_viewv1/viewv1_st/js/mobanbus.js"></script>
</div>
</html>
<!--{eval updatesession();}-->
<!--{if defined('IN_MOBILE')}-->
	<!--{eval output();}-->
<!--{else}-->
	<!--{eval output_preview();}-->
<!--{/if}-->
