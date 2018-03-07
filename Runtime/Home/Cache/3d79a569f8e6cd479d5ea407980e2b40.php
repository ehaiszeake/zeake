<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>个人中心</title>
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
		<link rel="shortcut icon" href="./images/favicon.ico?v=1.0" type="image/x-icon" />
        <link rel="stylesheet" href="css/pc.css?v=1.2" />
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
        <div class="main_content f_pr loading" data-type="pc_home">
        	<div class="main_contnet_inner f_pr ">

            	<!--个人中心主页  start-->
            	<div class="pc_home_page">

                    <!--作者信息  start-->
                    <div class="pc_author_info f_cf">
                    	<div class="pc_head_unit f_ofh f_fl"><img src="images/head_sculpture.png" class="f_vat" width="100%" onerror="this.src='images/default_head.png'"/></div>
                        <div class="nickName_sign_ico f_pr">
                        	<div class="nickName f_toe jump_personal_info"></div>
                            <div class="sign f_toe f_wwb"></div>
                            <div class="login_ico f_toe">
                            	<a href="javascript:;" class="f_dib f_vat qq_login_ico"><img src="images/qq.png" width="100%" class="f_vat"/></a><a href="javascript:;" class="f_dib f_vat weibo_login_ico"><img src="images/weibo.png" width="100%" class="f_vat"/></a><a href="javascript:;" class="f_dib f_vat weixin_login_ico"><img src="images/weixin.png" width="100%" class="f_vat"/></a>
                            </div>
                        </div>
                    </div>
                    <!--作者信息    end-->

                    <!--收藏、评论、点赞、转发、我的文章  start-->
                    <div class="pc_fun_tab"><ul class="f_cf"><li class="f_fl">收藏</li><li class="f_fl">评论</li><li class="f_fl">点赞</li><li class="f_fl">我的文章</li></ul></div>
                    <!--收藏、评论、点赞、转发、我的文章    end-->

                    <!--收藏、评论、点赞、转发、我的文章 对应展示容器  start-->
                    <div class="pc_fun_show_list">
                        <ul class="pc_fun_list " data-type=""></ul>
                        <div class="pc_load_more_data f_dn">查看更多</div>
                    </div>
                    <!--收藏、评论、点赞、转发、我的文章 对应展示容器    end-->


                </div>
                <!--个人中心主页    end-->

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
        <script src="js/pc_common.js?v=1.2"></script>
        <script>

			//收藏、评论、点赞、我的文章
			var page=0,loadLock=false,imgRoute="./",firstLength=10,secondLength=10,thirdLength=10,fourthLength=10;
			function loadFunData(index) {

				var url,ary={},paramLen=arguments.length;
				console.log(paramLen);

				if(index==0) { //收藏
					url=golbalIp+"/user/amass_list";
					ary={"account":JSON.parse($.cookie('bz')).account,"token":JSON.parse($.cookie('bz')).token,"skipnum":page,"length":firstLength};
				}else if(index==1) { //评论
					url=golbalIp+"/user/comment_list";
					ary={"account":JSON.parse($.cookie('bz')).account,"token":JSON.parse($.cookie('bz')).token,"skipnum":page,"length":secondLength};
				}else if(index==2) { //点赞
					url=golbalIp+"/user/thumb_list";
					ary={"account":JSON.parse($.cookie('bz')).account,"token":JSON.parse($.cookie('bz')).token,"skipnum":page,"length":thirdLength};
				}else if(index==3) { //文章
					url=golbalIp+"/user/article_list";
					ary={"account":JSON.parse($.cookie('bz')).account,"token":JSON.parse($.cookie('bz')).token,"skipnum":page,"length":fourthLength};
				}

				if(!loadLock) {
					loadLock=true;
					$.ajax({
						url:url,
						type:"get",
						dataType:"json",
						data:ary,
						beforeSend:function() { },
						success:function(data) {

							if(data.code==1) { //数据请求成功
								var html="";
									if(index==0) { //收藏列表
										$.each(data.data.list,function(i,item) {
                                            console.log(item);
											if(item.type==1) {
												var img=(item.img==null || item.img=="")  ? imgRoute+"images/placeholder_img_L04.jpg" : item.img;
													html+='<li data-type="0">';//普通文章
													html+='<div class="pc_pic_head_name">';
													html+='	<div class="pc_pic_box"><img src="'+img+'" class="f_vat" width="100%" onerror="this.src=\'images/placeholder_img_L04.jpg\'"/></div>';
													html+='	<div class="pc_head_name f_cf f_ofh">';
													html+='		<div class="pc_head_unit f_ofh f_fl" author-id="'+item.author_id+'">';
													html+='			<img src="images/head_sculpture.png" class="f_vat" width="100%" onerror="this.src=\'images/default_head.png\'"/>';
													html+='		</div>';
													html+='		<div class="pc_name f_pr" author-id="'+item.author_id+'">'+item.author+'</div>';
													html+='	</div>';
													html+='</div>';
													html+='<div class="pc_title f_wwb"><a href="article_detail_'+item.id+'.php">'+item.title+'</a></div>';
													html+='<div class="pc_intro f_wwb">'+item.abstract+'</div>';
													html+='<div class="pc_date_view_message f_cf">';
													html+='	<div class="pc_date f_fl">'+variable_obj.formatDate(item.created*1000)+'</div>';
													html+='	<div class="pc_view_message f_pr f_tar">';
													html+='	<div class="pc_view f_dib f_vat">'+item.pv+'</div>';
													html+='	<div class="pc_message f_dib f_vat">'+item.reply+'</div>';

													html+='</div>';
													html+='</div>';
													html+='</li>';
											}else if(item.type==2) {
												html+='<li data-type="1">';//快讯
												html+='<div class="pc_title f_wwb"><a href="article_detail_'+item.id+'.php">'+item.title+'</a></div>';
												html+='<div class="pc_date_view_message f_cf">';
												html+='<div class="pc_date f_fl">'+variable_obj.formatDate(item.created*1000)+'</div>';
												html+='<div class="pc_view_message f_pr f_tar">';
												html+='<div class="pc_view f_dib f_vat">'+item.pv+'</div>';
												html+='<div class="pc_message f_dib f_vat">'+item.reply+'</div>';
												html+='</div></div></li>';
											}else if(item.type==3) {
												var img=(item.img==null || item.img=="")  ? imgRoute+"images/placeholder_img_L04.jpg" : item.img;
													html+='<li data-type="2">';//视频
													html+='<div class="pc_video_cover f_pr">';
													html+='<a href="video_detail.php?id='+item.id+'" class="f_db">';
													html+='<img src="'+img+'" class="f_vat" width="100%" onerror="this.src=\'images/placeholder_img_L04.jpg\'"/>';
													html+='<div class="pc_play_btn f_pa f_two"></div>';
													html+='</a></div>';
													html+='<div class="pc_title f_wwb"><a href="video_detail.php?id='+item.id+'">'+item.title+'</a></div>';
													html+='<div class="pc_name_date"><em>'+item.author+'</em><i>  /   </i><span>'+variable_obj.formatDate(item.created*1000)+'</span></div>';
													html+='</li>';
											}
										});
										if(paramLen==1) {
											$(".pc_fun_list").attr("data-type",0).html(html);
										}else {
											$(".pc_fun_list").attr("data-type",0).append(html);
										}
									}else if(index==1) { //评论列表
										$.each(data.data.list,function(i,item) {
											html+='<li>';
											html+='<div class="pc_head_name_time_opera f_cf">';
											html+='	<div class="pc_head f_fl f_ofh"><img src="images/head_sculpture.png" class="f_vat"/></div>';
											html+='	<div class="pc_name_time f_fl"><div class="pc_name jump_personal_info" data-author_id="'+item.member_id+'">'+item.member_id+'</div><div class="pc_time">'+units.getDateDiff(item.created*1000)+'</div></div>';
											html+='	<div class="pc_delete f_fr" data-id="'+item.id+'">删除</div>';
											html+='</div>';
											html+='<div class="pc_author_comment f_wwb">'+item.content+'</div>';
											if(item.reply_comment!==undefined && item.reply_comment!==null) {
												html+='<div class="pc_article_comment_list">';
												html+='	<dl class="pc_article_des">';
													$.each(item.reply_comment,function(a,subItem) {
														html+='		<dd class="f_wwb">'+subItem.content+'</dd>';
													})
												html+='	</dl>';
												html+='</div>';
											}
											html+='<div class="pc_article_title_des">';
											if(item.article.type!=3) {
												html+='	<a href="article_detail_'+item.article.id+'.php" class="f_db f_wwb">'+item.article.title+'</a>';
											}else {
												html+='	<a href="video_detail.php?id='+item.article.id+'" class="f_db f_wwb">'+item.article.title+'</a>';
											}
											html+='	<div class="pc_des f_wwb">'+item.article.abstract+'</div>';
											html+='</div>';
											html+='</li>';
										});
										if(paramLen==1) {
											$(".pc_fun_list").attr("data-type",1).html(html);
										}else {
											$(".pc_fun_list").attr("data-type",1).append(html);
										}
									}else if(index==2) { //点赞列表
										$.each(data.data.list,function(i,item) {
											if(item.type==1) {
												var img=(item.img==null || item.img=="")  ? imgRoute+"images/placeholder_img_L04.jpg" : item.img;
													html+='<li data-type="0">';//普通文章
													html+='<div class="pc_pic_head_name">';
													html+='	<div class="pc_pic_box"><img src="'+img+'" class="f_vat" width="100%" onerror="this.src=\'images/placeholder_img_L04.jpg\'"/></div>';
													html+='	<div class="pc_head_name f_cf f_ofh">';
													html+='		<div class="pc_head_unit f_ofh f_fl" author-id="'+item.author_id+'">';
													html+='			<img src="images/head_sculpture.png" class="f_vat" width="100%" onerror="this.src=\'images/default_head.png\'"/>';
													html+='		</div>';
													html+='		<div class="pc_name f_pr" author-id="'+item.author_id+'">'+item.author+'</div>';
													html+='	</div>';
													html+='	<div class="pc_praise f_pa"></div>';
													html+='</div>';
													html+='<div class="pc_title f_wwb"><a href="article_detail_'+item.id+'.php">'+item.title+'</a></div>';
													html+='<div class="pc_intro f_wwb">'+item.abstract+'</div>';
													html+='<div class="pc_date_view_message f_cf">';
													html+='	<div class="pc_date f_fl">'+variable_obj.formatDate(item.created*1000)+'</div>';
													html+='	<div class="pc_view_message f_pr f_tar">';
													html+='	<div class="pc_view f_dib f_vat">'+item.pv+'</div>';
													html+='	<div class="pc_message f_dib f_vat">'+item.reply+'</div>';
													html+='</div>';
													html+='</div>';
													html+='</li>';
											}else if(item.type==2) {
												html+='<li data-type="1">';//快讯
												html+='<div class="pc_title f_wwb"><a href="article_detail_'+item.id+'.php">'+item.titlle+'</a></div>';
												//html+='	<div class="pc_praise f_pa"></div>';
												html+='<div class="pc_date_view_message f_cf">';
												html+='<div class="pc_date f_fl">'+variable_obj.formatDate(item.created*1000)+'</div>';
												html+='<div class="pc_view_message f_pr f_tar">';
												html+='<div class="pc_view f_dib f_vat">'+item.pv+'</div>';
												html+='<div class="pc_message f_dib f_vat">'+item.reply+'</div>';
												html+='</div></div></li>';
											}else if(item.type==3) {
												var img=(item.img==null || item.img=="")  ? imgRoute+"images/placeholder_img_L04.jpg" : item.img;
													html+='<li data-type="2">';//视频
													html+='<div class="pc_video_cover f_pr">';
													html+='<a href="video_detail.php?id='+item.id+'" class="f_db">';
													html+='<img src="'+img+'" class="f_vat" width="100%" onerror="this.src=\'images/placeholder_img_L04.jpg\'"/>';
													html+='<div class="pc_play_btn f_pa f_two"></div>';
													//html+='	<div class="pc_praise f_pa"></div>';
													html+='</a></div>';
													html+='<div class="pc_title f_wwb"><a href="video_detail.php?id='+item.id+'">'+item.title+'</a></div>';
													html+='<div class="pc_name_date"><em>'+item.author+'</em><i>  /   </i><span>'+variable_obj.formatDate(item.created*1000)+'</span></div>';
													html+='</li>';
											}
										});
										if(paramLen==1) {
											$(".pc_fun_list").attr("data-type",2).html(html);
										}else {
											$(".pc_fun_list").attr("data-type",2).append(html);
										}
									}else if(index==3) {
										var id=$(".pc_author_info").attr("data-id"),
											state=$(".pc_author_info").attr("data-type");
										$.each(data.data.list,function(i,item) {
											html+='<li>';
											html+='	<div class="pc_state_title">';
											if((state==1 || state==2) && (item.status==0 || item.status==1 || item.status==2)) {
												var type="other";
												if(item.status_name=="草稿") { type="cg";}
												html+='		<div class="pc_editor_link"><a href="pc_public.php?id='+item.id+'&type='+type+'">编辑</a></div>';
											}else if(state==3) {
												var type="other";
												if(item.status_name=="草稿") { type="cg";}
												html+='		<div class="pc_editor_link">';
												html+='		<a href="javascript:;" class="pc_new_pass" data-id="'+item.id+'" data-type="'+item.type+'">通过</a>';
												html+='		<a href="javascript:;" class="pc_new_noPass" data-id="'+item.id+'">不通过</a>';
												html+='		<a href="javascript:;" class="pc_new_delete" data-id="'+item.id+'">删除</a>';
												html+='		<a href="pc_public.php?id='+item.id+'&type='+type+'">编辑</a></div>';
											}
											html+='		<div class="pc_state f_dib f_vat" data-type="'+item.status+'">#'+item.status_name+'：</div><div class="pc_title f_dib f_vat">';
											if(item.type!=3) {
													if(item.status==0 || item.status==1 || item.status==2) {
														html+='	<a href="javascript:;" class="f_wwb">'+item.title+'</a>';
													}else {
														html+='	<a href="article_detail_'+item.id+'.php" class="f_wwb">'+item.title+'</a>';
													}
											}else {
													if(item.status==0 || item.status==1 || item.status==2) {
														html+='	<a href="javascript:;" class="f_wwb">'+item.title+'</a>';
													}else {
														html+='	<a href="video_detail.php?id='+item.id+'" class="f_wwb">'+item.title+'</a>';
													}

											}
											html+='		</div>';
											html+='	</div>';
											html+='	<div class="pc_des">'+item.abstract+'</div>';
											html+='</li>';
										});
										if(paramLen==1) {
											$(".pc_fun_list").attr("data-type",3).html(html);
										}else {
											$(".pc_fun_list").attr("data-type",3).append(html);
										}
									}

									var difItemNum=index==0 ? firstLength : index==1 ? secondLength : index==2 ? thirdLength : fourthLength;

									//请求页码递增
										if(data.data.list.length<difItemNum || data.data.total==difItemNum) {
											page=page;
											$(".pc_load_more_data").addClass("f_dn")
										}else {
											page+=difItemNum;
											var remain=data.data.total>=page ? data.data.total-page : 0;
											$(".pc_load_more_data").html("查看更多（"+remain+"）").removeClass("f_dn");
											if(remain==0) { $(".pc_load_more_data").addClass("f_dn");}
										}



								}else if(data.code==3) {
									if(paramLen!=1) {
										alert("登录超时，请重新登录！");
									}
								}else {
									alert(data.message);
								}
								loadLock=false
						},
						error:function() {
							alert("网络错误，请刷新重试！");
							loadLock=false
						}
					})
				}
			}


        	$(function() {

				//获取个人资料
				$.ajax({
					url:golbalIp+"/user/info",
					type:"get",
					dataType:"json",
					data:{"account":JSON.parse($.cookie('bz')).account,"token":JSON.parse($.cookie('bz')).token},
					beforeSend:function() { },
					success:function(data) {
						console.log("个人资料信息");
						console.log(data);
						if(data.code==1) {
							//请求成功
							var img=( data.data.img==null ||  data.data.img=="")  ? imgRoute+"images/head_sculpture.png" : data.data.img;
								$(".pc_author_info").attr({"data-id":data.data.id,"data-type":data.data.type}).find(".pc_head_unit").find("img").attr("src",img);
								$(".pc_author_info").find(".nickName").html(data.data.nickname).attr("data-author_id",data.data.id);
								$(".pc_author_info").find(".sign").html(data.data.mark);
								$(".main_content[data-type='pc_home']").removeClass("loading");
						}else if(data.code==3) {
							//未登录
							//alert("登录超时，请重新登录！");
						}else {
							alert(data.message);
						}
					},
					error:function() {
						alert("网络错误，请稍后再试！");
					}
				})



				//加载更多数据
				$(".pc_load_more_data").on("click",function() {
					//判断是否登录有效
					variable_obj.logined();
					//请求更多相关数据
					var index=$(".pc_fun_tab").find("li.on").index();
						loadFunData(index,1);
				});


				//查看  收藏、评论、点赞、转发、我的文章
				root.firstClick=true;
				$(".pc_fun_tab").click(function(e) {
					var target=$(e.target),name=e.target.nodeName;
						if(name=="LI" && !target.hasClass("on")) {
							if(root.firstClick) {
								root.firstClick=false;
							}else {
								//判断是否登录有效
								variable_obj.logined();
							}
							var index=target.index();
							target.addClass("on").siblings("li").removeClass("on");
							page=0;
							loadFunData(index);
							//请求对应功能模块
						}
				});

				//自定义点击第一个
				$(".pc_fun_tab").find("li:eq(0)")[0].click();


				//删除评论
				root.deleteComment=false;
				$(".pc_fun_list").on("click",function(e) {
					var target=$(e.target);
						if(target.hasClass("pc_delete")) {
							if($.cookie('bz')===undefined || $.trim($.cookie('bz'))==="" || ((new Date().getTime()/1000-JSON.parse($.cookie('bz')).updated) > 3600)) {
								alert("您未登录或者登录超时，请重新登录后操作！");
								return false;
							}else {
								if(!root.deleteComment) {
									root.deleteComment=true;
									var state=window.confirm("确定删除该评论？");
										if(state) {
											$.ajax({
												url:golbalIp+"/user/delete_comment",
												type:"post",
												dataType:"json",
												data:{"account":JSON.parse($.cookie('bz')).account,"token":JSON.parse($.cookie('bz')).token,"id":target.attr("data-id")},
												beforeSend:function() { },
												success:function(data) {
													if(data.code==1) {
														target.parents("li").remove();
													}else {
														alert(data.message);
													}
													root.deleteComment=!1;
												},error:function() {
													alert("网络错误，请稍后再试！");
													root.deleteComment=!1;
												}
											});
										}
								}
							}
						}
				});


				root.deleteArticle=false
				$(".pc_fun_show_list").on("click",function(e) {
					var target=$(e.target);
						if(target.hasClass("pc_new_delete")) {
							if(!root.deleteArticle) {
								root.deleteArticle=true;
								var state=window.confirm("确定删除该文章？");
									if(state) {
										$.ajax({
											url:golbalIp+"/user/delete_article",
											type:"post",
											dataType:"json",
											data:{"account":JSON.parse($.cookie('bz')).account,"token":JSON.parse($.cookie('bz')).token,"id":target.attr("data-id")},
											beforeSend:function() { },
											success:function(data) {
												if(data.code==1) {
													target.parents("li").remove();
													alert("删除成功");
												}else {
													alert(data.message);
												}
												root.deleteArticle=!1;
											},error:function() {
												alert("网络错误，请稍后再试！");
												root.deleteArticle=!1;
											}
										});
									}
							}
						}else if(target.hasClass("pc_new_pass")) {
							//文章审核通过
							if(!root.deleteArticle) {
								root.deleteArticle=true;
								var state=window.confirm("确定通过该文章审核？");
									if(state) {
										$.ajax({
											url:golbalIp+"/user/agree_article",
											type:"post",
											dataType:"json",
											data:{"account":JSON.parse($.cookie('bz')).account,"token":JSON.parse($.cookie('bz')).token,"id":target.attr("data-id")},
											beforeSend:function() { },
											success:function(data) {
												if(data.code==1) {
													if(target.attr("data-type")!=3) {
														target.parent(".pc_editor_link").next(".pc_state").attr("data-type",3).html("#已发布")
														.next(".pc_title").find("a").attr("href","article_detail_"+target.attr("data-id")+".php");
													}else {
														target.parent(".pc_editor_link").next(".pc_state").attr("data-type",3).html("#已发布")
														.next(".pc_title").find("a").attr("href","video_detail.php?id="+target.attr("data-id"));
													}
													alert("文章审核通过");
												}else {
													alert(data.message);
												}
												root.deleteArticle=!1;
											},error:function() {
												alert("网络错误，请稍后再试！");
												root.deleteArticle=!1;
											}
										});
									}
							}
						}else if(target.hasClass("pc_new_noPass")) {
							//文章审核不通过
							if(!root.deleteArticle) {
								root.deleteArticle=true;
								var state=window.confirm("确定不通过文章审核？");
									if(state) {
										$.ajax({
											url:golbalIp+"/user/disagree_article",
											type:"post",
											dataType:"json",
											data:{"account":JSON.parse($.cookie('bz')).account,"token":JSON.parse($.cookie('bz')).token,"id":target.attr("data-id")},
											beforeSend:function() { },
											success:function(data) {
												if(data.code==1) {
													target.parent(".pc_editor_link").next(".pc_state").attr("data-type",2).html("#未通过")
													.next(".pc_title").find("a").attr("href","javascript:;");
													alert("文章审核不通过！");
												}else {
													alert(data.message);
												}
												root.deleteArticle=!1;
											},error:function() {
												alert("网络错误，请稍后再试！");
												root.deleteArticle=!1;
											}
										});
									}
							}
						}
				});


			})
        </script>




    </body>

</html>