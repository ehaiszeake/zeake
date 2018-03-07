<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>专栏-名人堂-列表aaa</title>
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
        <div class="main_content f_pr " data-type="hall_of_fame_page">
			<div class="main_contnet_inner f_pr ">


                <!--名人堂列表  start-->
                <div class="fame_list_box">
                    <div class="fame_list_box_inner">

                        <ul class="fame_list">
							<?php if(is_array($data["data"]["list"])): $i = 0; $__LIST__ = $data["data"]["list"];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><li class="f_cf">
									<div class="fame_info_box f_cf">
										<div class="fame_info f_fl f_tac">
											<div class="fame_head_name">
												<div class="fame_head"><img src="<?php echo (webimgdefault($item["img"],$website,'./images/head_sculpture.png')); ?>" width="100%"/><div class="head_mask f_pa f_full"></div></div>
									            <div class="fame_name f_toe jump_personal_info" data-author_id="'+item.member_id+'"><?php echo ($item["nickname"]); ?></div>
											</div>
											<div class="fame_article_type f_toe">手机/生活/游戏</div>
											<div class="fame_article_num">文章：<?php echo ($item["article_total"]); ?>篇</div>
											<div class="fame_mood"><?php echo ($item["mark"]); ?></div>
										</div>

										<div class="fame_recommend_article f_fl <?php if(empty($item[article])): ?>noData<?php endif; ?>">

										<?php if(!empty($item['article'])): ?><div class="article_cover f_pr">
													<div class="article_cover_box"><a href="fame_home_page.php?id=<?php echo ($item["id"]); ?>"><img src="<?php echo ($item["article"]["img"]); ?>" class="f_vat placeholderImg2" width="100%"/></a></div>
												</div>
												<div class="article_title f_toe"><a href="fame_home_page.php?id=<?php echo ($item["id"]); ?>"><?php echo ($item["article"]["title"]); ?></a></div>
										        <div class="article_intro"><?php echo ($item["article"]["abstract"]); ?></div>
												<div class="article_date_view_message f_cf">
												<?php if(!empty($item['created'])): ?><div class="date f_fl"><?php echo (date('Y/m/d',$item['created'])); ?></div><?php endif; ?>
													<div class="view_message f_fr">
														<div class="article_view f_dib f_vat"><?php echo ($item["article"]["pv"]); ?></div>
														<div class="article_message f_dib f_vat"><?php echo ($item["article"]["reply"]); ?></div>
													</div>
												</div><?php endif; ?>

										</div>

									</div>
									<?php if(!empty($item['article'])): ?><div class="fame_all_article f_tar"><a href="fame_home_page.php?id=<?php echo ($item["id"]); ?>">全部文章</a></div><?php endif; ?>
								</li><?php endforeach; endif; else: echo "" ;endif; ?>
                        </ul>
                        <div class="load_more_article f_tac f_dn">加载更多...</div>

                    </div>
                </div>

                <!--名人堂列表  end-->

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
				/*
                $.ajax({
                    url: golbalIp + "/main/vip",
                    type: "get",
                    dataType: "json",
                    data: {},
                    beforeSend:function() { },
                    success: function (data) {
                        var str = '';
                        console.log(data);
                         $.each(data.data.list,function(i,item) {
						   	var img=(item.img==null || item.img=="")  ? imgRoute+"images/head_sculpture.png" : golbalIp+item.img;
								str+='<li class="f_cf">';
								str+='	<div class="fame_info_box f_cf">';
								str+='		<div class="fame_info f_fl f_tac">';
								str+='			<div class="fame_head_name">';
								str+='				<div class="fame_head"><img src="'+img+'" width="100%"/><div class="head_mask f_pa f_full"></div></div>';
								str+='	            <div class="fame_name f_toe jump_personal_info" data-author_id="'+item.member_id+'">'+item.nickname+'</div>';
								str+='			</div>';
								str+='			<div class="fame_article_type f_toe">手机/生活/游戏</div>';
								str+='			<div class="fame_article_num">文章：'+item.article_total+'篇</div>';
								str+='			<div class="fame_mood">'+item.mark+'</div>';
								str+='		</div>';

								str+='		<div class="fame_recommend_article f_fl '+(item.article===null ? ["noData"][0] : [" "][0])+'">';
								if(item.article!=null) {
									var img2=item.article.img;
										img2=(img2) ? ((img2.substr(0,7).toLowerCase()=="http://" || img2.substr(0,8).toLowerCase()=="https://") ? img2 : golbalIp+img2) : imgRoute+"images/cover_img.jpg";

									str+='			<div class="article_cover f_pr">';
									str+='				<div class="article_cover_box"><a href="fame_home_page.php?id='+item.id+'"><img src="'+img2+'" class="f_vat placeholderImg2" width="100%"/></a></div>';
									str+='			</div>';
									str+='			<div class="article_title f_toe"><a href="fame_home_page.php?id='+item.id+'">'+item.article.title+'</a></div>';
									str+='	        <div class="article_intro">'+item.article.abstract+'</div>';
									str+='			<div class="article_date_view_message f_cf">';
									if(item.created) {
										str+='				<div class="date f_fl">'+variable_obj.formatDate(item.created*1000)+'</div>';
									}
									str+='				<div class="view_message f_fr">';
									str+='					<div class="article_view f_dib f_vat">'+item.article.pv+'</div>';
									str+='					<div class="article_message f_dib f_vat">'+item.article.reply+'</div>';
									str+='				</div>';
									str+='			</div>';
								}
								str+='		</div>';

								str+='	</div>';
							if(item.article!=null) {
								str+='	<div class="fame_all_article f_tar"><a href="fame_home_page.php?id='+item.id+'">全部文章</a></div>';
							}
								str+='</li>';
                        });
                        //$(".fame_list").append(str);
					}
				});

				 */
			})
        </script>


    </body>

</html>