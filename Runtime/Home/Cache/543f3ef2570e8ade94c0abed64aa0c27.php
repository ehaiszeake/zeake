<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>专栏-名人堂-名人列表</title>
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
            	<h1 class="logo f_fl"><a href="index.php" class="f_full f_db f_two">知客网</a></h1>
                <div class="center_title f_tac f_fl"></div>
                <div class="nav_search f_fl">
                    <div class="search_box f_fr">
                    	<form action="search_result.php" class="f_full f_pr"><label class="for_text" for="keyword">想要找点什么</label><input type="text" class="keyword placeholder f_fl" id="keyword"/><input type="button" class="search_btn f_fr" value="搜索"/></form>
                    </div>
                	<ul class="f_fl">
                		<?php if(empty($pc_public_write)): if(is_array($column_nav)): $i = 0; $__LIST__ = $column_nav;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$nav): $mod = ($i % 2 );++$i;?><li class="f_fl"><a href="column_<?php echo ($nav["id"]); ?>.php" class="f_dib <?php if($column == $nav[id]): ?>on<?php endif; ?>"><?php echo ($nav["name"]); ?></a></li><?php endforeach; endif; else: echo "" ;endif; ?>
<li class="f_fl"><a href="special_theme_page.php" class="f_dib <?php echo ($column0); ?>">知客专题</a></li>
<li class="f_fl"><a href="hall_of_fame.php" class="f_dib <?php echo ($column_1); ?>">名人堂</a></li><?php endif; ?>                     
                    </ul>
                </div>
                
                <?php if(!empty($pc_public_write)): ?><div class="pc_public_page f_pa">
                	<div class="pc_public_title f_tac">撰写文章</div>
                    <div class="fun_opera_btn f_pa f_cf">
                    	<a href="javascript:;" class="js_pc_update_article f_dn">更新</a>
                    	<a href="javascript:;" class="js_pc_public_article">发布</a>
                    	<a href="javascript:;" class="js_pc_public_preview">预览</a>
                        <a href="javascript:;" class="js_pc_public_save">保存</a>
                        <a href="javascript:;" class="js_pc_public_delete f_dn">删除</a>
                    </div>
                </div><?php endif; ?>
                
                
                <div class="l_r f_pa">
                	<div class="no_login "><a href="javascript:;" class="js_login_pop f_dib">登录</a><i class="f_dib"></i><a href="javascript:;" class="js_register_pop  f_dib">注册</a></div>
                    <div class="logined f_dn">
                    	<div class="f_dib f_vat name_man_head f_pr">
                    		<div class="man_head f_pr f_dib"><img src="images/weixin.png" class="f_vart"/><div class="head_mask f_pa"></div><div class="message_info f_pa"></div></div>
                        	<span class="f_dib f_toe name f_vat">xxxxxxxx</span>
                            <span class="f_dn f_toe name f_vat my_home_page_a" data-type="pc_home.php">我的主页</span>
                            <div class="pc_dropDown f_pa f_dn">
                            	<div class="pc_dropDown_inner">
                                    <a href="pc_home.php">个人中心</a>
                                    <a href="pc_message.php">消息通知<i class="f_dib message_num">76</i></a>
                                    <a href="pc_public.php">发表文章</a>
                                    <a href="pc_my_hall.php">我的名人堂</a>
                                    <a href="pc_personal_info.php">账户设置</a>
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
        <div class="main_content f_pr loading" data-type="column_page">
			<div class="main_contnet_inner f_pr ">
            
            	<!--名人信息 start-->
                <div class="fame_relative_info f_cf"></div>
                <!--名人信息   end-->
                
                <!--文章列表 以及 右侧信息 start-->
                <div class="article_list_right_info f_cf">
                
                    <!--文章列表 start-->
                    <div class="article_list_box f_fl">
                        <ul class="article_list "><!--文章列表直接容器--></ul>
                        <div class="load_more_article f_tac f_dn">加载更多...</div>
                    </div>
                    <!--文章列表   end--> 
                    
                     <!--右侧模块 start-->
                    <div class="right_info f_fl">
                        <dl class="activities_newest">
                            <dt class="f_cf"><span class="f_fl">知客最新活动</span></dt>

                        </dl>
                        <dl class="news_flash">
                            <dt class="f_cf"><span class="f_fl">知客快讯</span></dt>

                        </dl>
                        <dl class="special_theme">
                            <dt class="f_cf"><span class="f_fl">知客专题</span></dt>

                        </dl>
                    </div>
                    <!--右侧模块 end-->
                    
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
        
        
        <script src="js/jquery.min.1.8.4.js?v=1.7"></script>
        <script>
        	$(function() { 

				
				//图片路径
				var imgRoute="./",
					pagenum=5,
					skipnum=0;
					//不同专栏数据请求
					$.ajax({
						url:golbalIp+"/main/vip_detail",
						type:"get",
						dataType:"json",
						data:{"skipnum":0,"length":pagenum,"id":units.getUrlParam("id")!=null ? units.getUrlParam("id") : ""},
						beforeSend:function() { },
						success:function(data) { 
							//请求成功
							if(data.code==1) { 
	
								//名人信息
								var img=(data.data.img==null || data.data.img=="")  ? imgRoute+"images/head_sculpture.png" : golbalIp+data.data.img;
								var str='<div class="fame_relative_info_inner f_cf">';
									str+='<div class="fame_info_l f_fl f_tac">';
									str+='<div class="fame_head"><img src="'+img+'" width="100%"/><div class="head_mask f_pa f_full"></div></div>';
									str+='<div class="fame_name f_toe">'+data.data.nickname+'</div>';
									str+='</div>';
									str+='<div class="fame_info_r f_fl">';
									str+='<div class="fame_article_type f_toe">手机/生活/游戏</div>';
									str+='<div class="fame_article_num">文章：'+data.data.article_total+'篇</div>';
									str+='<div class="fame_mood">'+data.data.mark+'</div>';
									str+='</div>';
									str+='</div>';
								$(".fame_relative_info").html(str);
								
								
								//文章列表
								if(data.data.article_list.length>0) { 
									var str1="";
										$.each(data.data.article_list,function(i,item) { 
											if(item.type==3) { 
												var img=item.img;
													img=(img) ? ((img.substr(0,7).toLowerCase()=="http://" || img.substr(0,8).toLowerCase()=="https://") ? img : golbalIp+img) : imgRoute+"images/placeholder_img_L04.jpg";
													str1+='<li class="video_view">';
													str1+='	<div class="video_cover_box f_pr"><img src="'+img+'" width="100%"/><div class="play_ico f_pa"></div></div>';
													str1+='	<div class="video_title f_toe"><a href="video_detail.php?id='+item.id+'">'+item.title+'</a></div>';
													str1+='	<div class="author_date"><span class="jump_personal_info" data-author_id="'+item.author_id+'">'+item.author+'</span><i>/</i><em>'+variable_obj.formatDate(item.created*1000)+'</em></div>';
													str1+='</li>';
											}else if(item.type==2) { 
													 str1+='<li class="l_news_flash">';
													 str1+='	<div class="article_title f_toe"><a href="article_detail_'+item.id+'.php">'+item.title+'</a></div>';
													 str1+='	<div class="article_date_view_message f_cf">';
													 str1+='		<div class="date f_fl">'+variable_obj.formatDate(item.created*1000)+'</div>';
													 str1+='		<div class="view_message f_fr"><div class="article_view f_dib f_vat">'+item.pv+'</div><div class="article_message f_dib f_vat">'+item.reply+'</div></div>';
													 str1+='	</div>';
													 str1+='</li>';
											}else if(item.type==1) { 
												var img=item.img;
													img=(img) ? ((img.substr(0,7).toLowerCase()=="http://" || img.substr(0,8).toLowerCase()=="https://") ? img : golbalIp+img) : imgRoute+"images/placeholder_img_L04.jpg";
													str1+='<li>';
													str1+='	<div class="article_cover f_pr">';
													str1+='		<div class="article_cover_box"><a href="article_detail_'+item.id+'.php"><img src="'+img+'" class="f_vat placeholderImg2" width="100%"/></a></div>';
													str1+='	</div>';
													str1+='	<div class="article_author f_cf f_pr">';
													str1+='		<div class="author_head f_fl"><img src="images/head_sculpture.png" class="f_vat"/></div>';
													str1+='		<div class="author_nickname f_fl f_toe jump_personal_info" data-author_id="'+item.author_id+'">'+data.data.nickname+' </div>';
													str1+='	</div>';
													str1+='	<div class="article_title f_toe"><a href="article_detail_'+item.id+'.php">'+item.title+'</a></div>';
													str1+='	<div class="article_intro">'+item.abstract+'</div>';
													str1+='	<div class="article_date_view_message f_cf">';
													str1+='		<div class="date f_fl">'+variable_obj.formatDate(item.created*1000)+'</div>';
													str1+='		<div class="view_message f_fr">';
													str1+='			<div class="article_view f_dib f_vat">'+item.pv+'</div><div class="article_message f_dib f_vat">'+item.reply+'</div>';
													str1+='		</div>';
													str1+='	</div>';
													str1+='</li>';
											}
										});
										$(".article_list").append(str1);
								}else {
									$(".article_list").addClass("no_data");
								}
								
								
								if(data.data.article_list.length<pagenum || data.data.article_total==pagenum) { 
									skipnum=skipnum;
									$(".load_more_article").addClass("f_dn")	
								}else {
									skipnum+=pagenum;
									var remain=data.data.article_total>=skipnum ? data.data.article_total-skipnum : 0;
									$(".load_more_article").html("查看更多（"+remain+"）").removeClass("f_dn");
									if(remain==0) { $(".load_more_article").addClass("f_dn");}
								}
										
										
								//知客最新活动
								var str = '';
								$.each(data.data.right_info.new_live,function(i,item) { 
									var unixTimestamp =item.created*1000;
									var created = variable_obj.formatDate(unixTimestamp);
									str += ' <dd><div class="state_intro f_cf"><div class="state state1 f_fl">'+ item.status + '</div><div class="intro f_fl"><a href="live_broadcast_detail.php?id='+ item.id+'">'+ item.title+'</a></div></div><div class="activities_date f_tar">'+created+'</div></dd>'
								});
								$(".activities_newest").append(str);
		
								//知客快讯
								var str2 = '';
								$.each(data.data.right_info.new_news,function(i,item) { 
									var unixTimestamp =item.created*1000;
									var updated = variable_obj.formatDate(unixTimestamp);
										img=item.img;
										img=(img) ? ((img.substr(0,7).toLowerCase()=="http://" || img.substr(0,8).toLowerCase()=="https://") ? img : golbalIp+img) : imgRoute+"images/placeholder_img_L04.jpg";
									
									str2 += ' <dd><div class="img_intro_date f_cf"><div class="news_flash_img f_fl"><a href="article_detail_'+item.id+'.php" class="f_db" style="height:100%"><img src="'+ img+'" class="f_vat placeholderImg2"/></a></div> <div class="intro f_fl"><p><a href="article_detail_'+item.id+'.php">'+ item.title +'</a></p><div class="news_flash_date f_tar">'+ updated +'</div></div> </div></dd>'
								});
								$(".news_flash").append(str2);
		
								//知客专题
		/*                        var str3 = '';
								$.each(data.data.right_info.new_special,function(i,item) { 
									var unixTimestamp = new Date( item.updated*1000 ),
										updated = unixTimestamp.toLocaleString(),
										img=item.img;
										img=(img) ? ((img.substr(0,7).toLowerCase()=="http://" || img.substr(0,8).toLowerCase()=="https://") ? img : golbalIp+img) : imgRoute+"images/placeholder_img_L04.jpg";
									
									str3 += '<dd><a href="article_detail_'+item.id+'.php"><img src="'+img+'" class="f_vat placeholderImg2"/></a></dd>';
								});
								$(".special_theme").append(str3);*/
								var str3 = '';
								$.each(data.data.right_info.new_special,function(i,item) { 
									var unixTimestamp = new Date( item.updated*1000 ),
										updated = unixTimestamp.toLocaleString(),
										img=item.img;
										img=(img) ? ((img.substr(0,7).toLowerCase()=="http://" || img.substr(0,8).toLowerCase()=="https://") ? img : golbalIp+img) : imgRoute+"images/placeholder_img_L04.jpg";
									
									str3 += '<dd><a href="special_theme_page.php?id='+item.id+'"><img src="'+img+'" class="f_vat placeholderImg2"/></a></dd>';
								});
								$(".special_theme").append(str3);
								

								
								//移除loading的效果
								$(".main_content[data-type='column_page']").removeClass("loading");
								
								
							}else {
								
							}
						},
						error:function() { 
							alert("网络错误，请稍后再试！");
							load_data_lock=false;
						}	
					});
					
					
					
					
					//加载更多文章
					var moreDataLock=false;
					$(".load_more_article").on("click",function() { 
						if(!moreDataLock) { 
							moreDataLock=true;
							$.ajax({
								url:golbalIp+"/main/vip_detail",
								type:"get",
								dataType:"json",
								data:{"skipnum":skipnum,"length":pagenum,"id":units.getUrlParam("id")!=null ? units.getUrlParam("id") : ""},
								beforeSend:function() { },
								success:function(data) { 
									//请求成功
									if(data.code==1) { 
										//文章列表
										if(data.data.article_list.length>0) { 
											var str1="";
												$.each(data.data.article_list,function(i,item) { 
													if(item.type==3) { 
														var img=item.img;
															img=(img) ? ((img.substr(0,7).toLowerCase()=="http://" || img.substr(0,8).toLowerCase()=="https://") ? img : golbalIp+img) : imgRoute+"images/placeholder_img_L04.jpg";
														
															str1+='<li class="video_view">';
															str1+='	<div class="video_cover_box f_pr"><a href="video_detail.php?id='+item.id+'"><img src="'+img+'" width="100%"/><div class="play_ico f_pa"></a></div></div>';
															str1+='	<div class="video_title f_toe"><a href="video_detail.php?id='+item.id+'">'+item.title+'</a></div>';
															str1+='	<div class="author_date"><span class="jump_personal_info" data-author_id="'+item.author_id+'">'+item.author+'</span><i>/</i><em>'+variable_obj.formatDate(item.created*1000)+'</em></div>';
															str1+='</li>';
													}else if(item.type==2) { 
															 str1+='<li class="l_news_flash">';
															 str1+='	<div class="article_title f_toe"><a href="article_detail_'+item.id+'.php">'+item.title+'</a></div>';
															 str1+='	<div class="article_date_view_message f_cf">';
															 str1+='		<div class="date f_fl">'+variable_obj.formatDate(item.created*1000)+'</div>';
															 str1+='		<div class="view_message f_fr"><div class="article_view f_dib f_vat">'+item.pv+'</div><div class="article_message f_dib f_vat">'+item.reply+'</div></div>';
															 str1+='	</div>';
															 str1+='</li>';
													}else if(item.type==1) { 
														var img=item.img;
															img=(img) ? ((img.substr(0,7).toLowerCase()=="http://" || img.substr(0,8).toLowerCase()=="https://") ? img : golbalIp+img) : imgRoute+"images/placeholder_img_L04.jpg";
															str1+='<li>';
															str1+='	<div class="article_cover f_pr">';
															str1+='		<div class="article_cover_box"><a href="article_detail_'+item.id+'.php"><img src="'+img+'" class="f_vat placeholderImg2" width="100%"/></a></div>';
															str1+='	</div>';
															str1+='	<div class="article_author f_cf f_pr">';
															str1+='		<div class="author_head f_fl"><img src="images/head_sculpture.png" class="f_vat"/></div>';
															str1+='		<div class="author_nickname f_fl f_toe jump_personal_info" data-author_id="'+item.author_id+'">'+item.author+' </div>';
															str1+='	</div>';
															str1+='	<div class="article_title f_toe"><a href="article_detail_'+item.id+'.php">'+item.title+'</a></div>';
															str1+='	<div class="article_intro">'+item.abstract+'</div>';
															str1+='	<div class="article_date_view_message f_cf">';
															str1+='		<div class="date f_fl">'+variable_obj.formatDate(item.created*1000)+'</div>';
															str1+='		<div class="view_message f_fr">';
															str1+='			<div class="article_view f_dib f_vat">'+item.pv+'</div><div class="article_message f_dib f_vat">'+item.reply+'</div>';
															str1+='		</div>';
															str1+='	</div>';
															str1+='</li>';
													}
												});
												$(".article_list").append(str1);
										}else {
											//没有更多数据
											$(".load_more_article").addClass("f_dn");
										}
										
										
										if(data.data.article_list.length<pagenum || data.data.article_total==pagenum) { 
											skipnum=skipnum;
											$(".load_more_article").addClass("f_dn")	
										}else {
											skipnum+=pagenum;
											var remain=data.data.article_total>=skipnum ? data.data.article_total-skipnum : 0;
											$(".load_more_article").html("查看更多（"+remain+"）").removeClass("f_dn");
											if(remain==0) { $(".load_more_article").addClass("f_dn");}
										}
										
										//解除锁定
										moreDataLock=false;
										
										
										
									}else {
										
									}
								},
								error:function() { 
									alert("网络错误，请稍后再试！");
									load_data_lock=false;
								}	
							});
						}
					});
				



			})
        </script>       
        
        
    </body>
    
</html>