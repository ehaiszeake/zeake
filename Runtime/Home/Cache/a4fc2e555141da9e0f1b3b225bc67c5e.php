<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>专题-集合类专题</title>
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
        <div class="main_content f_pr " data-type="special_theme_page_list">
        	<div class="main_contnet_inner f_pr ">
            
            
                <div class="ad1_place f_cf">
                    <div class="ad1_place1 f_fl">
                        <a href=""><img src="<?php echo (webimg($data['data']['list']['ad'][0]['img'],$website)); ?>" class="placeholderImg f_vat"/></a>
                    </div>
                    <div class="ad1_place2 f_fl">
                        <div class="ad1_place2_1">
                            <a href=""><img src="<?php echo (webimg($data['data']['list']['ad'][1]['img'],$website)); ?>" class="placeholderImg2 f_vat"/></a>
                        </div>
                        <div class="ad1_place2_2">
                            <a href=""><img src="<?php echo (webimg($data['data']['list']['ad'][2]['img'],$website)); ?>" class="placeholderImg2 f_vat"/></a>
                        </div>
                    </div>
                </div>
               
               <div class="special_theme_page_list_box">
					<ul class="f_cf special_theme_page_list">
						<?php if(is_array($data["data"]["list"]["list"])): $i = 0; $__LIST__ = $data["data"]["list"]["list"];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><li class="f_fl">
								<div class="special_theme_cover_img f_pr"><a href="special_detail.php?id=<?php echo ($item["id"]); ?>" class="f_dib f_full f_pa"><img src="<?php echo (webimg($item["img"],$website)); ?>" width="100%" height="100%"/></a></div>
								<div class="special_theme_item_title"><a href="special_detail.php?id=<?php echo ($item["id"]); ?>"><?php echo ($item["title"]); ?></a></div>
							</li><?php endforeach; endif; else: echo "" ;endif; ?>
					</ul>
                    <div class="load_more_article f_tac">加载更多...</div>
               </div>
               
            
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

				
				var imgRoute="./";
				
				//评论列表
				root.page=0;
				root.dataNum=10;
				root.themeLock=!1;
				function theme_list() { 
					if(!root.themeLock) { 
						root.themeLock=!0;
						$.ajax({
							url:golbalIp+"/main/special_list",
							type:"get",
							dataType:"json",
							data:{"skipnum":root.page,"length":root.dataNum},
							beforeSend:function() { },
							success:function(data) { 
								console.log(data);
								
								/**	
								//广告位
								var ad_box=[".ad1_place1",".ad1_place2_1",".ad1_place2_2"]
								if(data.data.list.ad.length>0) { 
									$.each(data.data.list.ad,function(i,item) { 
										var ad=(item.img) ? ((item.img.substr(0,7).toLowerCase()=="http://" || item.img.substr(0,8).toLowerCase()=="https://") ? 
											item.img : golbalIp+item.img) : imgRoute+"images/placeholder_img_L04.jpg";
										$(ad_box[i]).find('a').attr('href',item.url);
										$(ad_box[i]).find('img').attr({'src':ad,"title":item.name});	
									});
								}
								**/
								
								
								//请求成功
								if(data.code==1) { 
									//有数据
									/**
									if(data.data.list.list.length>0) { 
										var str="";
											$.each(data.data.list.list,function(i,item) { 
												var img=(item.img==null ||  item.img=="")  ? imgRoute+"images/head_sculpture.png" : golbalIp+ item.img;
													str+='<li class="f_fl">';
													str+='	<div class="special_theme_cover_img f_pr"><a href="special_detail.php?id='+item.id+'" class="f_dib f_full f_pa"><img src="'+img+'" width="100%" height="100%"/></a></div>';
													str+='	<div class="special_theme_item_title"><a href="special_detail.php?id='+item.id+'">'+item.title+'</a></div>';
													str+='</li>';
											});
											$(".special_theme_page_list").append(str);
									}
									**/
									
									//请求页码递增
									if(data.data.list.length<root.dataNum || data.data.total==root.dataNum) { 
										root.page=root.page;
										$(".load_more_article").addClass("f_dn")	
									}else {
										root.page+=root.dataNum;
										var remain=data.data.total>=root.page ? data.data.total-root.page : 0;
										$(".load_more_article").html("查看更多（"+remain+"）").removeClass("f_dn");
										if(remain==0) { $(".load_more_article").addClass("f_dn");}
									}
									
									
								}else if(data.code==3) { 
									alert("您未登录或者登录超时，请刷新页面后重新登录！");	
								}else {
									alert(data.message);	
								}
								root.themeLock=!1;
							},error:function() { 
								alert("网络异常，请稍后重试！");
								root.themeLock=!1;
							}
						});
					}
				}
				//进入页面请求评论列表
				theme_list();
				
				//加载更多评论
				$(".load_more_article").on("click",function() { theme_list();});


			})
        </script>
        
    </body>
    
</html>