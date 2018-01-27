<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>主页</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="msapplication-tap-highlight" content="no" />
<meta name="format-detection" content="telephone=no, email=no" />
<meta http-equiv="Cache-Control" content="no-transform" />
<meta http-equiv="Cache-Control" content="no-siteapp" /> 
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<link rel="shortcut icon" href="./images/favicon.ico?v=1.0" type="image/x-icon" />
<link rel="stylesheet" href="css/common.css?v=1.4" />
		<!--<script src="js/ckplayer/ckplayer.js"></script>-->
    </head>


    <body>

        <!--头部 start-->
    	<div class="header f_pr">
        	<div class="header_inner f_cf f_pr">
            	<h1 class="logo f_fl"><a href="index.html" class="f_full f_db f_two">知客网</a></h1>
                <div class="center_title f_tac f_fl"></div>
                <div class="nav_search f_fl">
                    <div class="search_box f_fr">
                    	<form action="search_result.html" class="f_full f_pr"><label class="for_text" for="keyword">想要找点什么</label><input type="text" class="keyword placeholder f_fl" id="keyword"/><input type="button" class="search_btn f_fr" value="搜索"/></form>
                    </div>
                	<ul class="f_fl">
                		<?php if(is_array($column_nav)): $i = 0; $__LIST__ = $column_nav;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$nav): $mod = ($i % 2 );++$i;?><li class="f_fl"><a href="column.html?id=<?php echo ($nav["id"]); ?>&column=<?php echo ($nav["id"]); ?>"class="f_dib"><?php echo ($nav["name"]); ?></a></li><?php endforeach; endif; else: echo "" ;endif; ?>
<li class="f_fl"><a href="special_theme_page.html?column=0" class="f_dib ">知客专题</a></li>
<li class="f_fl"><a href="hall_of_fame.html?column=-1" class="f_dib ">名人堂</a></li>
                        
                    </ul>
                </div>
                <div class="l_r f_pa">
                	<div class="no_login "><a href="javascript:;" class="js_login_pop f_dib">登录</a><i class="f_dib"></i><a href="javascript:;" class="js_register_pop  f_dib">注册</a></div>
                    <div class="logined f_dn">
                    	<div class="f_dib f_vat name_man_head f_pr">
                    		<div class="man_head f_pr f_dib"><img src="images/weixin.png" class="f_vart"/><div class="head_mask f_pa"></div><div class="message_info f_pa"></div></div>
                        	<span class="f_dib f_toe name f_vat">xxxxxxxx</span>
                            <span class="f_dn f_toe name f_vat my_home_page_a" data-type="pc_home.html">我的主页</span>
                            <div class="pc_dropDown f_pa f_dn">
                            	<div class="pc_dropDown_inner">
                                    <a href="pc_home.html">个人中心</a>
                                    <a href="pc_message.html">消息通知<i class="f_dib message_num">76</i></a>
                                    <a href="pc_public.html">发表文章</a>
                                    <a href="pc_my_hall.html">我的名人堂</a>
                                    <a href="pc_personal_info.html">账户设置</a>
                                    <a href="javascript:;" class="js_logout">退出</a>
                                </div>
                            </div>
                        </div>
                    	<a href="javascript:;" class="js_logout f_dib logout">退出</a>
                    </div>
                </div>
                <div class="mobile_nav f_pa f_dn"><div class="mobile_ico f_pa"></div><div class="mobile_mask f_pa"></div></div>
            </div>
        </div>
        <!--头部   end-->


        <!--主内容  start-->
        <div class="main_content f_pr loading" data-type="index_page">
        	<div class="main_contnet_inner f_pr ">
                <div class="ad_box">
                    <div class="ad1_place f_cf">
                        <div class="ad1_place1 f_fl">
                        	<a href="<?php echo ($index['data']['ad'][0]['url']); ?>"><img src="<?php echo (webimg($index['data']['ad'][0]['img'],$website)); ?>" class="placeholderImg f_vat" title="<?php echo ($index['data']['ad'][0]['name']); ?>"/></a>
                        </div>
                        <div class="ad1_place2 f_fl">
                            <div class="ad1_place2_1">
                            	<a href="<?php echo ($index['data']['ad'][1]['url']); ?>"><img src="<?php echo (webimg($index['data']['ad'][1]['img'],$website)); ?>" class="placeholderImg2 f_vat" title="<?php echo ($index['data']['ad'][1]['name']); ?>"/></a>
                            </div>
                            <div class="ad1_place2_2">
                            	<a href="<?php echo ($index['data']['ad'][2]['url']); ?>"><img src="<?php echo (webimg($index['data']['ad'][2]['img'],$website)); ?>" class="placeholderImg2 f_vat" title="<?php echo ($index['data']['ad'][2]['name']); ?>"/></a>
                            </div>
                        </div>
                    </div>
                    
                    <div id="index_slideBox" class="index_slideBox ad2_place_list">
                        <div class="bd">
                        
                        <ul class="f_cf" id="top_article">
							<?php if(is_array($index[data][top_article])): $i = 0; $__LIST__ = $index[data][top_article];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><li class="f_fl" style="'+sy+'">
								<div class="ad2_place_img">
								<a href="">
								<img src="<?php echo (webimg($item["img"],$website)); ?>" class="placeholderImg2 f_vat"/>
								</a>
								</div>
								<p><a href="'+link+'">'+item.title+'</a></p> <div class="view_num">'+item.pv+'</div> </li><?php endforeach; endif; else: echo "" ;endif; ?>        
                        </ul>
                        
                        </div>
                        <a class="index_prev_btn" href="javascript:void(0)"></a>
                        <a class="index_next_btn" href="javascript:void(0)"></a>
                    </div>
                    
                    
                </div>
                
                
                <!--文章列表 以及 右侧信息 start-->
                <div class="article_list_right_info f_cf">
                    <div class="article_list_box f_fl">
                        <ul class="article_list">
							<?php if(is_array($index['data']['article_list'])): $i = 0; $__LIST__ = $index['data']['article_list'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i; if($item["type"] == 1): ?><li>
												<div class="article_cover f_pr">
												
												    <?php if(empty($item['skip_url'])): ?><div class="article_cover_box"><a href="article_detail.html?id=<?php echo ($item["id"]); ?>" class="f_db"><img src="<?php echo (webimg($item["img"],$website)); ?>" class="f_vat placeholderImg2" width="100%"/></a></div>
												    <?php else: ?>
												    	<div class="article_cover_box"><a href="<?php echo ($item["skip_url"]); ?>" class="f_db"><img src="<?php echo (webimg($item["img"],$website)); ?>" class="f_vat placeholderImg2" width="100%"/></a></div><?php endif; ?>
												    
											
												</div>
												<div class="article_author f_cf f_pr">
													<div class="author_head f_fl"><img src="images/head_sculpture.png" class="f_vat"/></div>
													<div class="author_nickname f_fl f_toe jump_personal_info" data-author_id="'+item.author_id+'"><?php echo ($item["author"]); ?></div>
												</div>
											
											
											
												<?php if(empty($item['skip_url'])): ?><div class="article_title f_toe"><a href="article_detail.html?id='+item.id+'"><?php echo ($item["title"]); ?></a></div>
											    <?php else: ?>
											    	<div class="article_title f_toe"><a href="'+item.skip_url+'"><?php echo ($item["title"]); ?></a></div><?php endif; ?>
											
											
												<div class="article_intro"><?php echo ($item["abstract"]); ?></div>
												<div class="article_date_view_message f_cf">
													<div class="date f_fl"><?php echo (date('Y/m/d',$item['created'])); ?></div>
													<div class="view_message f_fr">
														<div class="article_view f_dib f_vat"><?php echo ($item["pv"]); ?></div><div class="article_message f_dib f_vat"><?php echo ($item["reply"]); ?></div>
													</div>
												</div>
											</li>
								
								<?php elseif($item["type"] == 2): ?>
								
									<li class="l_news_flash">
									 
									 <?php if(empty($item['skip_url'])): ?><div class="article_title f_toe"><a href="article_detail.html?id='+item.id+'">${item.title}</a></div>
									 <?php else: ?>
									 	<div class="article_title f_toe"><a href="'+item.skip_url+'">${item.title}</a></div><?php endif; ?>
									 	<div class="article_date_view_message f_cf">
									 		<div class="date f_fl"><?php echo (date('Y/m/d',$item['created'])); ?></div>
									 		<div class="view_message f_fr"><div class="article_view f_dib f_vat">${item.pv}</div><div class="article_message f_dib f_vat">${item.reply}</div></div>
									 	</div>
									 </li>
								
								<?php elseif($item["type"] == 3): ?>
								
									<li class="video_view">
											<?php if(empty($item['skip_url'])): ?><div class="video_cover_box f_pr"><a href="video_detail.html?id=${item.id}" class="f_db"><img src="${item.img|webImg=$website}" width="100%"/></a><div class="play_ico f_pa"></div></div>
												<div class="video_title f_toe"><a href="video_detail.html?id=${item.id}">${item.title}</a></div>
											<?php else: ?>
												<div class="video_cover_box f_pr"><a href="${item.skip_url}" class="f_db"><img src="${item.img|webImg=$website}" width="100%"/></a><div class="play_ico f_pa"></div></div>
												<div class="video_title f_toe"><a href="${item.skip_url}">${item.title}</a></div><?php endif; ?>
												<div class="author_date"><span>${item.author}</span><i>/</i><em><?php echo (date('Y/m/d',$item['created'])); ?></em></div>
											</li><?php endif; endforeach; endif; else: echo "" ;endif; ?>
                        </ul>
                        
                        <div class="load_more_article f_tac">加载更多...</div>
                        
                    </div>
                    
                    
                    <div class="right_info f_fl">
                        <dl class="activities_newest">
                            <dt class="f_cf"><span class="f_fl">知客最新活动</span></dt>
							<?php if(is_array($index['data']['right_info']['new_live'])): $i = 0; $__LIST__ = $index['data']['right_info']['new_live'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$live): $mod = ($i % 2 );++$i;?><dd><div class="state_intro f_cf"><div class="state state1 f_fl"><?php echo ($live["status"]); ?></div><div class="intro f_fl"><a href="<?php echo ($live["skip_url"]); ?>"><?php echo ($live["title"]); ?></a></div></div><div class="activities_date f_tar"><?php echo (date('Y/m/d',$live['created'])); ?></div></dd><?php endforeach; endif; else: echo "" ;endif; ?>
                        </dl>
                        <dl class="news_flash">
                            <dt class="f_cf"><span class="f_fl">知客快讯</span></dt>
                            <?php if(is_array($index['data']['right_info']['new_news'])): $i = 0; $__LIST__ = $index['data']['right_info']['new_news'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$news): $mod = ($i % 2 );++$i;?><dd><div class="img_intro_date f_cf"><div class="news_flash_img f_fl"><a href="<?php echo ($news["skip_url"]); ?>" class="f_db" style="height:100%"><img src="<?php echo (webimg($news["img"],$website)); ?>" class="f_vat placeholderImg2"/></a></div> <div class="intro f_fl"><p><a href="<?php echo ($news["skip_url"]); ?>"><?php echo ($news["title"]); ?></a></p><div class="news_flash_date f_tar"><?php echo (date('Y/m/d',$news['created'])); ?></div></div> </div></dd><?php endforeach; endif; else: echo "" ;endif; ?>
                        </dl>
                        <dl class="special_theme">
                            <dt class="f_cf"><span class="f_fl">知客专题</span></dt>
							<?php if(is_array($index['data']['right_info']['new_special'])): $i = 0; $__LIST__ = $index['data']['right_info']['new_special'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$special): $mod = ($i % 2 );++$i;?><dd><a href="special_theme_page.html?id=<?php echo ($special["id"]); ?>"><img src="<?php echo (webimg($special["img"],$website)); ?>" class="f_vat placeholderImg2"/></a></dd><?php endforeach; endif; else: echo "" ;endif; ?>
                        </dl>
                    </div>
                </div>
                
                <!--文章列表 以及 右侧信息  end-->
            
            </div>
        </div>
        <!--主内容    end-->
        
        <!--底部 start-->
        <div class="footer f_pr">
        	<div class="footer_inner f_pr f_cf">
            	<div class="link_qrcode f_cf">
                    <dl class="f_fl">
                        <dt>ZAEKE</dt>
                        <dd class="f_toe"><a href="">加入我们</a></dd>
                        <dd class="f_toe"><a href="">商务合作</a></dd>
                        <dd class="f_toe"><a href="">用户协议</a></dd>
                    </dl>
                    <dl class="f_fl">
                        <dt>合作伙伴</dt>
                        <dd class="f_toe"><a href="">速致</a></dd>
                        <dd class="f_toe"><a href="">知客数码</a></dd>
                    </dl>
                    <dl class="f_fl">
                        <dt>试用介绍</dt>
                        <dd class="f_toe"><a href="">试用方式</a></dd>
                        <dd class="f_toe"><a href="">试用流程</a></dd>
                        <dd class="f_toe"><a href="">试用须知</a></dd>
                    </dl>
                    <dl class="f_fl">
                        <dt>友情链接</dt>
                        
                        <?php if(is_array($link)): $i = 0; $__LIST__ = $link;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$link): $mod = ($i % 2 );++$i;?><dd class="f_toe"><a href="<?php echo ($link["url"]); ?>" target="_blank"><?php echo ($link["title"]); ?></a></dd><?php endforeach; endif; else: echo "" ;endif; ?>
                    </dl>
                    <ul class="f_fr">
                        <li><p>知客、让数码更懂你</p></li>
                        <li><img src="images/qrcode.png" class="f_vat"/></li>
                    </ul>
                </div>
                <div class="web_info f_cf">
                	<div class="big_logo_us_info f_fl">
                        <div class="big_logo f_fl"></div>
                        <div class="about_us_info f_fr">
                            <p>关于我们</p>
                            <div class="des">知客数码致力于打造数码玩家一站式完美体验的平台。我们希望能给每一位热爱数码的玩家，提供一个展示自己的平台。</div>
                            <div class="email_tel">
                                <span class="f_dib f_vat mobile">13049894061</span>
                                <span class="f_dib f_vat email">chenwei@zaeke.com</span>
                            </div>
                        </div>
                    </div>
                    <div class="other_platform f_fr">
                    	<p>其他平台账号</p>
                        <div class="other_platform_list">
                    		<div class="l_qq f_dib"></div><div class="l_weixin f_dib"></div><div class="l_weibo f_dib"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--底部   end-->
        
        
        <script src="js/jquery.min.1.8.4.js"></script>
        
        <script>
			//图片路径
			var imgRoute="./";
					
        	$(function(){
				var total = 0,
					skipnum = 0,
					pagenum=20;
				$.ajax({
					url:golbalIp+"/main/index",
					type:"get",
					dataType:"json",
					data:{"skipnum":0,"length":pagenum},
					beforeSend:function(){
						//数据加载宏优化	
					},
					success:function(data){
					    total = data.data.article_total;
						/* 
						var ad1=data.data.ad[0].img,
							ad2=data.data.ad[1].img,
							ad3=data.data.ad[2].img;
							ad1=(ad1) ? ((ad1.substr(0,7).toLowerCase()=="http://" || ad1.substr(0,8).toLowerCase()=="https://") ? ad1 : golbalIp+ad1) : imgRoute+"images/placeholder_img_L04.jpg";
							ad2=(ad2) ? ((ad2.substr(0,7).toLowerCase()=="http://" || ad2.substr(0,8).toLowerCase()=="https://") ? ad2 : golbalIp+ad2) : imgRoute+"images/placeholder_img_L04.jpg";
							ad3=(ad3) ? ((ad3.substr(0,7).toLowerCase()=="http://" || ad3.substr(0,8).toLowerCase()=="https://") ? ad3 : golbalIp+ad3) : imgRoute+"images/placeholder_img_L04.jpg";
						
					    //广告位1
					    $(".ad1_place1").find('a').attr('href',data.data.ad[0].url);
                        $(".ad1_place1").find('img').attr({'src':ad1,"title":data.data.ad[0].name});
                        //广告位2
                        $(".ad1_place2_1").find('a').attr('href',data.data.ad[1].url);
                        $(".ad1_place2_1").find('img').attr({'src':ad2,"title":data.data.ad[1].name});
                        //广告位3
                        $(".ad1_place2_2").find('a').attr('href',data.data.ad[2].url);
                        $(".ad1_place2_2").find('img').attr({'src':ad3,"title":data.data.ad[2].name});
						 */
						
                        //知客最新活动
						/**
                        var str = '';
                        $.each(data.data.right_info.new_live,function(i,item){
                            var unixTimestamp =item.created*1000;
                            var created = variable_obj.formatDate(unixTimestamp);
							var link=item.skip_url ? item.skip_url : "live_broadcast_detail.html?id="+item.id;
                            str += ' <dd><div class="state_intro f_cf"><div class="state state1 f_fl">'+ item.status + '</div><div class="intro f_fl"><a href="'+link+'">'+ item.title+'</a></div></div><div class="activities_date f_tar">'+created+'</div></dd>'
                        });
                        $(".activities_newest").append(str);
						

                        //知客快讯
                        var str2 = '';
                        $.each(data.data.right_info.new_news,function(i,item){
                            var unixTimestamp =item.created*1000;
                            var updated = variable_obj.formatDate(unixTimestamp);
								img=item.img;
								img=(img) ? ((img.substr(0,7).toLowerCase()=="http://" || img.substr(0,8).toLowerCase()=="https://") ? img : golbalIp+img) : imgRoute+"images/placeholder_img_L04.jpg";
							var link=item.skip_url ? item.skip_url : "article_detail.html?id="+item.id;
                            str2 += ' <dd><div class="img_intro_date f_cf"><div class="news_flash_img f_fl"><a href="'+link+'" class="f_db" style="height:100%"><img src="'+ img+'" class="f_vat placeholderImg2"/></a></div> <div class="intro f_fl"><p><a href="'+link+'">'+ item.title +'</a></p><div class="news_flash_date f_tar">'+ updated +'</div></div> </div></dd>'
                        });
                        $(".news_flash").append(str2);
**/
                        //知客专题
/*                        var str3 = '';
                        $.each(data.data.right_info.new_special,function(i,item){
                            var unixTimestamp = new Date( item.updated*1000 ),
								updated = unixTimestamp.toLocaleString(),
								img=item.img;
								img=(img) ? ((img.substr(0,7).toLowerCase()=="http://" || img.substr(0,8).toLowerCase()=="https://") ? img : golbalIp+img) : imgRoute+"images/placeholder_img_L04.jpg";
							
                            str3 += '<dd><a href="article_detail.html?id='+item.id+'"><img src="'+img+'" class="f_vat placeholderImg2"/></a></dd>';
                        });
                        $(".special_theme").append(str3);
                        var str3 = '';
                        $.each(data.data.right_info.new_special,function(i,item){
                            var unixTimestamp = new Date( item.updated*1000 ),
								updated = unixTimestamp.toLocaleString(),
								img=item.img;
								img=(img) ? ((img.substr(0,7).toLowerCase()=="http://" || img.substr(0,8).toLowerCase()=="https://") ? img : golbalIp+img) : imgRoute+"images/placeholder_img_L04.jpg";
							
                            str3 += '<dd><a href="special_theme_page.html?id='+item.id+'"><img src="'+img+'" class="f_vat placeholderImg2"/></a></dd>';
                        });
                        $(".special_theme").append(str3);
						
						*/
						/**
						//文章列表
						if(data.data.article_list.length>0){
							var str4="";
								$.each(data.data.article_list,function(i,item){
									if(item.type==3){
										var img=item.img;
											img=(img) ? ((img.substr(0,7).toLowerCase()=="http://" || img.substr(0,8).toLowerCase()=="https://") ? img : golbalIp+img) : imgRoute+"images/placeholder_img_L04.jpg";
											str4+='<li class="video_view">';
											if(item.skip_url){
												str4+='	<div class="video_cover_box f_pr"><a href="'+item.skip_url+'" class="f_db"><img src="'+img+'" width="100%"/></a><div class="play_ico f_pa"></div></div>';
												str4+='	<div class="video_title f_toe"><a href="'+item.skip_url+'">'+item.title+'</a></div>';
											}else {
												str4+='	<div class="video_cover_box f_pr"><a href="video_detail.html?id='+item.id+'"" class="f_db"><img src="'+img+'" width="100%"/></a><div class="play_ico f_pa"></div></div>';
												str4+='	<div class="video_title f_toe"><a href="video_detail.html?id='+item.id+'">'+item.title+'</a></div>';
											}
											str4+='	<div class="author_date"><span>'+item.author+'</span><i>/</i><em>'+variable_obj.formatDate(item.created*1000)+'</em></div>';
											str4+='</li>';
									}else if(item.type==2){
											 str4+='<li class="l_news_flash">';
											 if(item.skip_url){
											 	str4+='	<div class="article_title f_toe"><a href="'+item.skip_url+'">'+item.title+'</a></div>';
											 }else {
												 str4+='	<div class="article_title f_toe"><a href="article_detail.html?id='+item.id+'">'+item.title+'</a></div>';
											 }
											 str4+='	<div class="article_date_view_message f_cf">';
											 str4+='		<div class="date f_fl">'+variable_obj.formatDate(item.created*1000)+'</div>';
											 str4+='		<div class="view_message f_fr"><div class="article_view f_dib f_vat">'+item.pv+'</div><div class="article_message f_dib f_vat">'+item.reply+'</div></div>';
											 str4+='	</div>';
											 str4+='</li>';
									}else if(item.type==1){
										var img=item.img;
											img=(img) ? ((img.substr(0,7).toLowerCase()=="http://" || img.substr(0,8).toLowerCase()=="https://") ? img : golbalIp+img) : imgRoute+"images/placeholder_img_L04.jpg";
											str4+='<li>';
											str4+='	<div class="article_cover f_pr">';
											if(item.skip_url){
												str4+='		<div class="article_cover_box"><a href="'+item.skip_url+'" class="f_db"><img src="'+img+'" class="f_vat placeholderImg2" width="100%"/></a></div>';
											}else {
												str4+='		<div class="article_cover_box"><a href="article_detail.html?id='+item.id+'"" class="f_db"><img src="'+img+'" class="f_vat placeholderImg2" width="100%"/></a></div>';
											}
											str4+='	</div>';
											str4+='	<div class="article_author f_cf f_pr">';
											str4+='		<div class="author_head f_fl"><img src="images/head_sculpture.png" class="f_vat"/></div>';
											str4+='		<div class="author_nickname f_fl f_toe jump_personal_info" data-author_id="'+item.author_id+'">'+item.author+' </div>';
											str4+='	</div>';
											if(item.skip_url){
												str4+='	<div class="article_title f_toe"><a href="'+item.skip_url+'">'+item.title+'</a></div>';
											}else {
												str4+='	<div class="article_title f_toe"><a href="article_detail.html?id='+item.id+'">'+item.title+'</a></div>';
											}
											str4+='	<div class="article_intro">'+item.abstract+'</div>';
											str4+='	<div class="article_date_view_message f_cf">';
											str4+='		<div class="date f_fl">'+variable_obj.formatDate(item.created*1000)+'</div>';
											str4+='		<div class="view_message f_fr">';
											str4+='			<div class="article_view f_dib f_vat">'+item.pv+'</div><div class="article_message f_dib f_vat">'+item.reply+'</div>';
											str4+='		</div>';
											str4+='	</div>';
											str4+='</li>';
									}
								});
								$(".article_list").append(str4);
						}else {
							$(".article_list").addClass("no_data");
						}
						**/

                        //头部4个
                        var str5 = '',
							top_article_length=data.data.top_article.length,
							clientO=document.documentElement.getBoundingClientRect(),
							//viewWidth=$(document).width(),
							sy=top_article_length>=5 ? "width:326px;margin-right:18px;" : "";
                        $.each(data.data.top_article,function(i,item){
							var img=(item.img==null || item.img=="")  ? imgRoute+"images/placeholder_img_L04.jpg" : (item.img.substr(0,7).toLowerCase()=="http://" || item.img.substr(0,8).toLowerCase()=="https://") ? item.img : golbalIp+item.img,
								link=item.type==2 ? "video_detail.html?id="+item.id : "article_detail.html?id="+item.id;
								str5 += '<li class="f_fl" style="'+sy+'"><div class="ad2_place_img"><a href="'+link+'"><img src="'+img+'" class="placeholderImg2 f_vat"/></a></div>';
								str5 += '<p><a href="'+link+'">'+item.title+'</a></p> <div class="view_num">'+item.pv+'</div> </li>';
                        });
                        $("#top_article").append(str5);
						if(top_article_length>=5){
							$("#index_slideBox").slide({mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:false,vis:4,trigger:"click",prevCell:".index_prev_btn",nextCell:".index_next_btn",pnLoop:false});
						}else {
							$(".index_prev_btn,.index_next_btn").hide();	
						}
/*						$(window).on("resize",units.throttle(function(){
							var clientO=document.documentElement.getBoundingClientRect(),
								w=Math.ceil((clientO.right-clientO.left)*(1360/1904)),
								wpx=(w-14*4)/4;
							$("#index_slideBox").find("li").each(function(){$(this).width(wpx+"px");});
							$("#index_slideBox").slide({mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:4,trigger:"click",prevCell:".index_prev_btn",nextCell:".index_next_btn"});
						},100,600));*/



						if(data.data.article_list.length<pagenum || data.data.article_total==pagenum){
							skipnum=skipnum;
							$(".load_more_article").addClass("f_dn")	
						}else {
							skipnum+=pagenum;
							var remain=data.data.article_total>=skipnum ? data.data.article_total-skipnum : 0;
							$(".load_more_article").html("查看更多（"+remain+"）").removeClass("f_dn");
							if(remain==0){$(".load_more_article").addClass("f_dn");}
						}


						//移除loading的效果
						$(".main_content[data-type='index_page']").removeClass("loading");


					},
					error:function(){
						alert("网络错误，请稍后再试！");
						load_data_lock=false;
					}
				})


				//加载更多数据
				var load_data_lock=false;
				$(".load_more_article").on("click",function(){
					if(!load_data_lock){
						load_data_lock=true;
						$.ajax({
							url:golbalIp+"/main/index",
							type:"get",
							dataType:"json",
							data:{"skipnum":skipnum,"length":pagenum},
							beforeSend:function(){
								//数据加载宏优化
							},
							success:function(data){
								
								//文章列表
								if(data.data.article_list.length>0){
									var str4="";
										$.each(data.data.article_list,function(i,item){
											if(item.type==3){
												var img=item.img;
													img=(img) ? ((img.substr(0,7).toLowerCase()=="http://" || img.substr(0,8).toLowerCase()=="https://") ? img : golbalIp+img) : imgRoute+"images/placeholder_img_L04.jpg";
													str4+='<li class="video_view">';
													if(item.skip_url){
														str4+='	<div class="video_cover_box f_pr"><a href="'+item.skip_url+'" class="f_db"><img src="'+img+'" width="100%"/></a><div class="play_ico f_pa"></div></div>';
														str4+='	<div class="video_title f_toe"><a href="'+item.skip_url+'">'+item.title+'</a></div>';
													}else {
														str4+='	<div class="video_cover_box f_pr"><a href="video_detail.html?id='+item.id+'"" class="f_db"><img src="'+img+'" width="100%"/></a><div class="play_ico f_pa"></div></div>';
														str4+='	<div class="video_title f_toe"><a href="video_detail.html?id='+item.id+'">'+item.title+'</a></div>';
													}
													str4+='	<div class="author_date"><span>'+item.author+'</span><i>/</i><em>'+variable_obj.formatDate(item.created*1000)+'</em></div>';
													str4+='</li>';
											}else if(item.type==2){
													 str4+='<li class="l_news_flash">';
													 if(item.skip_url){
													 	str4+='	<div class="article_title f_toe"><a href="'+item.skip_url+'">'+item.title+'</a></div>';
													 }else {
														str4+='	<div class="article_title f_toe"><a href="article_detail.html?id='+item.id+'">'+item.title+'</a></div>'; 
													 }
													 str4+='	<div class="article_date_view_message f_cf">';
													 str4+='		<div class="date f_fl">'+variable_obj.formatDate(item.created*1000)+'</div>';
													 str4+='		<div class="view_message f_fr"><div class="article_view f_dib f_vat">'+item.pv+'</div><div class="article_message f_dib f_vat">'+item.reply+'</div></div>';
													 str4+='	</div>';
													 str4+='</li>';
											}else if(item.type==1){
												var img=item.img;
													img=(img) ? ((img.substr(0,7).toLowerCase()=="http://" || img.substr(0,8).toLowerCase()=="https://") ? img : golbalIp+img) : imgRoute+"images/placeholder_img_L04.jpg";
													str4+='<li>';
													str4+='	<div class="article_cover f_pr">';
													if(item.skip_url){
														str4+='		<div class="article_cover_box"><a href="'+item.skip_url+'" class="f_db"><img src="'+img+'" class="f_vat placeholderImg2" width="100%"/></a></div>';
													}else {
														str4+='		<div class="article_cover_box"><a href="article_detail.html?id='+item.id+'"" class="f_db"><img src="'+img+'" class="f_vat placeholderImg2" width="100%"/></a></div>';
													}
													str4+='	</div>';
													str4+='	<div class="article_author f_cf f_pr">';
													str4+='		<div class="author_head f_fl"><img src="images/head_sculpture.png" class="f_vat"/></div>';
													str4+='		<div class="author_nickname f_fl f_toe jump_personal_info" data-author_id="'+item.author_id+'">'+item.author+' </div>';
													str4+='	</div>';
													if(item.skip_url){
														str4+='	<div class="article_title f_toe"><a href="'+item.skip_url+'">'+item.title+'</a></div>';
													}else {
														str4+='	<div class="article_title f_toe"><a href="article_detail.html?id='+item.id+'">'+item.title+'</a></div>';
													}
													str4+='	<div class="article_intro">'+item.abstract+'</div>';
													str4+='	<div class="article_date_view_message f_cf">';
													str4+='		<div class="date f_fl">'+variable_obj.formatDate(item.created*1000)+'</div>';
													str4+='		<div class="view_message f_fr">';
													str4+='			<div class="article_view f_dib f_vat">'+item.pv+'</div><div class="article_message f_dib f_vat">'+item.reply+'</div>';
													str4+='		</div>';
													str4+='	</div>';
													str4+='</li>';
											}
										});
										$(".article_list").append(str4);
								}else {
									//没有更多数据
									$(".load_more_article").addClass("f_dn");
								}
								
								if(data.data.article_list.length<pagenum || data.data.article_total==pagenum){
									skipnum=skipnum;
									$(".load_more_article").addClass("f_dn")	
								}else {
									skipnum+=pagenum;
									var remain=data.data.article_total>=skipnum ? data.data.article_total-skipnum : 0;
									$(".load_more_article").html("查看更多（"+remain+"）").removeClass("f_dn");
									if(remain==0){$(".load_more_article").addClass("f_dn");}
								}

								//请求解锁
								load_data_lock=false;

							},
							error:function(){
								alert("网络错误，请稍后再试！");
								load_data_lock=false;
							}
						})
					}
				});
			})
        </script>        
        
        
        
    </body>
    
</html>