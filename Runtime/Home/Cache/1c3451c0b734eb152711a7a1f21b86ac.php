<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>发布文章</title>
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
        <link rel="stylesheet" href="css/pc.css?v=1.2" />
        <link rel="stylesheet" href="js/editormd/css/editormd.css" />
		<!--<script src="js/ckplayer/ckplayer.js"></script>-->
    </head>
    
    
    <body class="pc_public_article_body">
 		
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
        <div class="main_content f_pr " data-type="pc_public_article"> 
        	<div class="main_contnet_inner f_pr "> 
            
            	<!--发表文章  start-->
            	<div class="pc_public_page_box"> 

					<input type="hidden" value="1" name="cid" />
                    <input type="hidden" value="1" name="type" />
                    
					<div class="pc_cover_pic f_pr f_cf no_pic">
                    	<div class="pc_cover_pic_inner f_pa">
                        	<img src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==" class="f_vat" />
                        </div>
                        <div class="upload_cover f_pa f_dn"><div>上传封面</div><input type="file" class="full_size f_pa" accept="image/gif,image/png,image/jpg,image/jpeg" name="file" id="file"/></div> 
                    </div>
                    <div class="upload_cover_pic_tip f_tac">请加入封面图，支持2MB以内的JPG，GIF，PNG图片。尺寸为1600x428</div>
					<div class="b_title f_pr">
                    	<label class="for_text f_tac" for="b_title"><b>输入标题</b></label>
                        <textarea id="b_title" class="placeholder" name="b_title"></textarea>
                    </div>
                    
                    <div class="aritcle_type_sel f_cf">
                    	<label class="f_fl">请选择内容类型：</label>
                        <div class="f_pr"><select id="article_type"><option value="1" selected="selected">文章</option><option value="2">快讯</option><option value="3">视频</option></select></div>
                    </div>
                    
                    <div class="column_type_sel f_cf dn">
                    	<label class="f_fl">请选择所属栏目：</label>
                        <div class="f_pr"><select id="column_type"><option value="">请选择栏目</option></select></div>
                    </div>
                    
                    
                    <div class="video_addr f_cf f_dn">
                    	<label class="f_fl">请填写视频地址：</label>
                        <div class="f_pr"><input type="text"  id="video_addr" /></div>
                        <p style="color:#f00;padding-left:130px;line-height:2.2">*支持Ogg、MPEG4、WebM格式</p>
                    </div>
                    
                    <div class="publish_broadcast f_cf f_dn">
                    	<label for="publish_broadcast" class="f_fl"><input type="checkbox" id="publish_broadcast" disabled/>将内容发布到直播</label>
                        <select id="live_list" class="f_fl" style="margin-top:10px;margin-left:5px"></select>
                    </div>
                    
                    
                    
					<div class="eidtor_box f_pr">
                    	<div class="f_pr" id="myEditor">
                            <textarea id="myEditor-markdown-doc" name="myEditor-markdown-doc" style="display:none;"></textarea>
                            <!-- 注意：name属性的值-->
                            <textarea id="myEditor-html-code" name="myEditor-html-code" style="display:none;"></textarea>
                        </div>
                    </div>
                    
                    <div class="add_label_qa_common_buy">
                    	<div class="add_label_qa_comment_budy_inner f_cf">
                            <div class="add_label_qa f_fl">
                                <div class="add_label_box f_cf nb">
                                    <div class="add_label_title f_fl">系统标签</div>
                                    <div class="system_label_content f_pr">
                                    	<ul class="system_label"></ul>
                                    	<div class="system_pr_div">
                                    		<input type="text" id="system_input_text" class="system_input_text">
                                    		<ul id="txt_system_lbl"></ul>
                                    	</div>
                                    </div>
                                </div>
                                <div class="add_label_box f_cf">
                                	
                                	
                                    <div class="system_label_content f_pr"><span>仅限选择两个</span></div>
                                </div>
                                
                                <div class="add_label_box f_cf">
                                    <div class="add_label_title f_fl">添加标签</div>
                                    <div class="add_label_content f_pr"><input type="text" class="f_dib f_vat ipt_label" placeholder="请填写标签" title="回车确定标签"/><div class="add_label_new_btn f_dib f_vat">+</div><div class="cut_label_new_btn f_dib f_vat">-</div></div>
                                </div>
                                <div class="add_qa_box f_cf">
                                    <div class="add_qa_title f_fl">Q&A模块</div>
                                    <div class="add_qa_content f_pr">
                                        <div class="ques_answer_box">
                                            <div class="ques_box f_cf">
                                                <span class="f_fl">Q1:</span>
                                                <div class="ques_inner_box f_pr"><textarea class="f_db ques_ipt" placeholder="请填写Q1" ></textarea></div>
                                            </div>
                                            <div class="answer_box f_cf">
                                                <span class="f_fl">A1:</span>
                                                <div class="answer_inner_box f_pr"><textarea class="f_db answer_ipt" placeholder="请填写A1" ></textarea></div>
                                            </div>
                                        </div>
                                        <div class="add_qa_btn"><b>+ 新增Q&A</b></div>
                                    </div>
                                </div>
                            </div>
                            <div class="f_pr add_comment_budy">
                                <div class="coment_open_or_no f_cf"><span class="f_fl">评论开关</span><label for="open_comment" class="open_comment on"><input type="checkbox" checked="checked" class="f_pa full_size" id="open_comment"/></label></div>
                                <div class="buy_open_or_no f_cf"><span class="f_fl">买不买开关</span><label for="open_buy_or_no" class="open_buy_or_no"><input type="checkbox" class="f_pa full_size" id="open_buy_or_no"/></label></div>
                                <div class="qa_open_or_no f_cf"><span class="f_fl">QA开关</span><label for="qa_open_no" class="qa_open_no"><input type="checkbox" class="f_pa full_size" id="qa_open_no"/></label></div>
                            </div>
                    	</div>
                    </div>
                    
                </div>
                <!--发表文章    end-->
            
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


		<!--编辑器简单教程 start-->
        <div class="simple_course_box full_size f_pf f_dn">
        
        	<div class="view_course_box f_pa f_cf">
            	<div class="title f_tac">"ZAEKE 知客数码" 后台文章编辑器 简单教程</div>
                <div class="des">Hi！欢迎来到"ZAEKE 知客数码"后台文章编辑器，ZAEKE在全站改版过后后台文章编辑器也进行了相应更人性化的调整，例如文章编辑页面与上线后文章展现保持相当高的相似度，左侧快速选择工具方便快速编写文章等等，快来简单了解后台编辑起吧！</div>
            	<div class="close_view_course f_pa"></div>
                <div class="to_know_course f_tac btn f_pa">知道啦</div>
            </div>
        
        	<div class="view_course_step1 f_pa f_dn f_cf">
            	<div class="title f_tac">文章发送，预览，保存，删除 </div>
                <div class="des">关于文章个体发送，预览，保存，删除都在导航栏右上角，实时固定于右上角，保证在编辑文章过程中随时对文章进行操控，例如保存，预览，发布等操作，方便，简洁</div>
                <div class="plane f_pa"></div>
                <div class="btn f_tac next_step1 f_pa">下一步</div>
            </div>
        
        	<div class="view_course_step2 f_pa f_dn f_cf">
            	<div class="title f_tac">快速选择工具</div>
                <div class="des">快速选择工具中，可以快速对标题，字体样式，链接，引用等文字样式进行快速选择，点击后即在正文内显示相应样式，输入编辑文字即可</div>
                <div class="plane f_pa"></div>
                <div class="btn f_tac next_step2 f_pa">下一步</div>
            </div>
        
        	<div class="view_course_step3 f_pa f_dn f_cf">
            	<div class="title f_tac">上传封面</div>
                <div class="des">封面为文章详情中的文章图片，同为文章瀑布流中的图片，点击上传封面即可从电脑本地选择图片进行上传</div>
                <div class="plane f_pa"></div>
                <div class="btn f_tac next_step3 f_pa">完成</div>
            </div>
            
            
        </div>
        <!--编辑器简单教程   end-->

        <script src="js/jquery.min.1.8.4.js?v=1.7"></script>
        <script src="js/pc_common.js?v=1.2"></script>
        
		<script src="js/editormd/lib/marked.min.js"></script>
        <script src="js/editormd/lib/prettify.min.js"></script>
        <script src="js/editormd/lib/raphael.min.js"></script>
        <script src="js/editormd/lib/underscore.min.js"></script>
        <script src="js/editormd/lib/sequence-diagram.min.js"></script>
        <script src="js/editormd/lib/flowchart.min.js"></script>
        <script src="js/editormd/lib/jquery.flowchart.min.js"></script>
        <script src="js/editormd/editormd.min.js"></script>
        <script src="js/users_tags.js"></script>
        <script>
			
			$(function() { 

				if(!variable_obj.sys.ios() && !variable_obj.sys.adr() && !variable_obj.sys.wip()) { $(".nav_search").hide();}
				
				//栏目选择
				$.ajax({
					url:golbalIp+"/main/column_nav",
					type:"get",
					dataType:"json",
					beforeSend:function() { },
					success:function(data) { 
						if(data.code==1) { 
							var html="<option value=''>请选择栏目</option>";
							$.each(data.data,function(i,item) { html+='<option value="'+item.id+'">'+item.name+'</option>';});
							$("#column_type").html(html);
						}
					}	
				})	
				
				
				var testEditor;
				if(units.getUrlParam("id")==null) { 

				//代码编辑器初始化
					testEditor = editormd("myEditor", {
					    toolbarIcons : function() {
            return ["bold", "del", "italic", "quote", "ucwords", "uppercase", "lowercase", "|", "h1", "h2", "h3", "h4", "h5", "h6", "|", "list-ul", "list-ol", "hr", "|","link", "reference-link", "image", "code", "preformatted-text", "table", "datetime","pagebreak", "|","goto-line", "watch","help"]},
						width:"100%",
						height:500,
                        codeFold : true,
						path : 'js/editormd/lib/',
                        saveHTMLToTextarea : true,    // 保存 HTML 到 Textarea
                        searchReplace : true,
                        //watch : false,                // 关闭实时预览
                        htmlDecode : "style,script,iframe|on*",            // 开启 HTML 标签解析，为了安全性，默认不开启    
                        emoji : true,
                        taskList : true,
                        tocm            : true,         // Using [TOCM]
                        tex : true,                   // 开启科学公式TeX语言支持，默认关闭
                        flowChart : true,             // 开启流程图支持，默认关闭
                        sequenceDiagram : true,       // 开启时序/序列图支持，默认关闭,f
						imageUpload : true,
						imageFormats : ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
						imageUploadURL : golbalIp+"/upload/article_img"
					});
					

				}

				
				
				
				
				
				
				//选择文章类型
				$("#article_type").on("change",function() { $(this).val()==3 ? $(".video_addr").removeClass("f_dn") : $(".video_addr").addClass("f_dn");});
			
				//判断是否可以直播
				$.ajax({
					url:golbalIp+"/user/my_live",
					type:"get",
					dataType:"json",
					data:{"account":JSON.parse($.cookie('bz')).account,"token":JSON.parse($.cookie('bz')).token},
					beforeSend:function() { },
					success:function(data) { 
						if(data.code==1) { 
							if(data.data.total!=0) { 
								//$(".publish_broadcast").removeClass("f_dn").find("input").removeAttr("disabled").parent("label").addClass("active");	
								var html="";
								$.each(data.data.list,function(i,item) { 
									html+='<option value="'+item.id+'">'+item.name+'</option>';
								});
								$("#live_list").html(html);
							}
						}
					},error:function() { 
						alert("网络错误，请稍后再试！");
					}
				});
				
				$("#publish_broadcast").on("click",function() { 
					$(this).attr("checked")==undefined ? $(this).attr("checked","checked") : $(this).removeAttr("checked");	
				});
				

				//判断地址栏是否带参数
				if(units.getUrlParam("id")!=null) { 
					var id=units.getUrlParam("id"),
						b_type=units.getUrlParam("type");
						$(".js_pc_public_delete,.js_pc_update_article").removeClass("f_dn");
						$(".js_pc_public_save").addClass("f_dn");
					//请求相应数据填充
						$.ajax({
							url:golbalIp+"/user/article",
							type:"get",
							dataType:"json",
							data:{id":id},
							//data:{"account":JSON.parse($.cookie('bz')).account,"token":JSON.parse($.cookie('bz')).token,"id":id},
							beforeSend:function() { }, 
							success:function(data) { 
								console.log(data);
								if(data.code==1) { 
									if(data.data.title==undefined) { 
										alert("/main/article接口无法获取‘草稿、待审核、审核通过的文章’");
									}else {
										root.updated2=data.data.updated;
										$(".for_text").hide();
										$("#b_title").val(data.data.title);
										if(data.data.img) { 
											var img=(data.data.img) ? ((data.data.img.substr(0,7).toLowerCase()=="http://" || data.data.img.substr(0,8).toLowerCase()=="https://") ? 
													data.data.img : golbalIp+data.data.img) : imgRoute+"images/placeholder_img_L04.jpg";
												$(".pc_cover_pic").find("img").attr("src",img).end().removeClass("no_pic");
												$(".pc_cover_pic_inner").attr("data-src",img);
										}
										
										//插入内容
										$("#myEditor").find("textarea").html(data.data.content);
										testEditor=editormd("myEditor", {
												toolbarIcons : function() {
									return ["bold", "del", "italic", "quote", "ucwords", "uppercase", "lowercase", "|", "h1", "h2", "h3", "h4", "h5", "h6", "|", "list-ul", "list-ol", "hr", "|","link", "reference-link", "image", "code", "preformatted-text", "table", "datetime","pagebreak", "|","goto-line", "watch","help"]},
												width:"100%",
												height:500,
												codeFold : true,
												path : 'js/editormd/lib/',
												saveHTMLToTextarea : true,    // 保存 HTML 到 Textarea
												searchReplace : true,
												//watch : false,                // 关闭实时预览
												htmlDecode : "style,script,iframe|on*",            // 开启 HTML 标签解析，为了安全性，默认不开启    
												emoji : true,
												taskList : true,
												tocm            : true,         // Using [TOCM]
												tex : true,                   // 开启科学公式TeX语言支持，默认关闭
												flowChart : true,             // 开启流程图支持，默认关闭
												sequenceDiagram : true,       // 开启时序/序列图支持，默认关闭,f
												imageUpload : true,
												imageFormats : ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
												imageUploadURL : golbalIp+"/upload/article_img"
											});
											
										

										$(".upload_cover").find("div").html("修改封面图");
										
										if(data.data.live!=0) { 
											//$("#publish_broadcast").removeAttr("disabled").attr("checked","checked");
											$("#publish_broadcast").val(data.data.live_id);	
										}
								
								
										if(data.data.comment_onoff==1) { 
											$("#open_comment").attr("checked","checked").parent(".open_comment").addClass("on");
										}else {
											$("#open_comment").removeAttr("checked").parent(".open_comment").removeClass("on");
										}
										if(data.data.qa_onoff==1) { 
											$("#qa_open_no").attr("checked","checked").parent(".qa_open_no").addClass("on");
										}else {
											$("#qa_open_no").removeAttr("checked").parent(".qa_open_no").removeClass("on");
										}
										if(data.data.buy_onoff==1) { 
											$("#open_buy_or_no").attr("checked","checked").parent(".open_buy_or_no").addClass("on");
										}else {
											$("#open_buy_or_no").removeAttr("checked").parent(".open_buy_or_no").removeClass("on");
										}
										
										
										//栏目对应
										$.each($("#column_type").find("option"),function() { if($(this).val()==data.data.cid) { $(this).attr("selected","selected");}});

										
										if(data.data.video_url) { 
											$(".video_addr").removeClass("f_dn").find("#video_addr").val(data.data.video_url);
										}
										
										var type=data.data.type-1;
										$("#article_type").find("option:eq("+type+")").attr("selected","selected").siblings("option").removeAttr("selected");
										
										if(data.data.qa_onoff) { 
											var len=data.data["q&a"].length;
											$.each(data.data["q&a"],function(i,item) { 
												if(len>1 && i>0) { $(".add_qa_btn").find("b").trigger("click");}
												$(".ques_answer_box:eq("+i+")").find(".ques_ipt").val(item.question);
												$(".ques_answer_box:eq("+i+")").find(".answer_ipt").val(item.answer);	
											});
										}
										
										if(data.data.tags[0]) { 
											$(".system_label").attr("tag",JSON.stringify(data.data.tags));
											$.each(data.data.tags,function(i,item) { 
												$(".system_label li").each(function(index,ele) { 
													if(parseInt(item.id) == parseInt($(ele).attr("val"))) $(ele).addClass("selected");
												});
											});
										}
										
										if(data.data.user_tags[0]) { 
											$.each(data.data.user_tags,function(i,item) { 
												if(i!=0) { $(".add_label_new_btn").before('<input type="text" class="f_dib f_vat ipt_label" placeholder="请填写标签" title="回车确定标签"/>');}
												$(".add_label_content").find(".ipt_label:eq("+i+")").val(item.name).addClass("on");
											});
										}
									}
								}else {
									alert(data.message);
								}
							},error:function() { 
								alert("网络错误，请稍后再试！");
							}
						});
					
						//删除文章
						root.deleteArticle=false;
						$(".js_pc_public_delete").on("click",function() { 
							if(!root.deleteArticle) { 
								root.deleteArticle=true;
								$.ajax({
									url:golbalIp+"/user/delete_article",
									type:"post",
									dataType:"json",
									data:{"account":JSON.parse($.cookie('bz')).account,"token":JSON.parse($.cookie('bz')).token,"id":id},
									beforeSend:function() { },
									success:function(data) { 
										if(data.code==1) { 
											alert("删除成功");
											window.history.back();
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
						});
						
						
						//更新文章
						units.publicArticleLock=false;
						$(".js_pc_update_article").on("click",function(e) { 
							var t=this,
								param1=$("#b_title").val(),
								param2=testEditor.getValue(),
								ques_ipt=[],
								answer_ipt=[],
								tags=[],
								user_tags=[],
								state0=false,
								state1=false,
								state2=false;
								$(".add_label_content").find(".ipt_label").each(function() { $.trim($(this).val())!=="" ? user_tags.push($(this).val()) : state0=true;});
								$(".add_qa_content").find(".ques_ipt").each(function() { $.trim($(this).val())!=="" ? ques_ipt.push($(this).val()) : state1=true;});
								$(".add_qa_content").find(".answer_ipt").each(function() { $.trim($(this).val())!=="" ? answer_ipt.push($(this).val()) : state2=true;});
								if($.trim(param1)==="") { 
									alert("请填写标题");	
									return false;
								}else if(!param2) { 
									alert("请编辑主要内容");	
									return false;
								}else if($("#article_type").val()==3 && $.trim($("#video_addr").val())=="") { 
									alert("请填写视频地址");
									return false;
								}
								$(".system_label li.selected").each(function() { tags.push($(this).attr("val"))});
							if(!units.publicArticleLock) { 
								units.publicArticleLock=true;
								$.ajax({
									url:golbalIp+"/user/update_article",
									type:"post",
									dataType:"json",
									data:{
										"account":JSON.parse($.cookie('bz')).account,
										"token":JSON.parse($.cookie('bz')).token,
										"cid":$("#column_type").val(),
										"id":id,
										"updated":1510126191,
										"type":$("#article_type").val(),
										"title":$("#b_title").val(),
										"keywords":"",
										"description":"",
										"img":$(".pc_cover_pic").attr("data-src")!=undefined ? $(".pc_cover_pic").attr("data-src") : "",
										"abstract":"",
										"content":param2,
										"live":$("#publish_broadcast").attr("checked")=="checked" ? 1 : "",
										"live_id":$("#publish_broadcast").attr("checked")=="checked" ? $("#live_list").val() : "",
										"comment_onoff": $("#open_comment").attr("checked")==="checked" ? 1 : 2,
										"buy_onoff":$("#open_buy_or_no").attr("checked")==="checked" ? 1 : 2,
										"qa_onoff":$("#qa_open_no").attr("checked")==="checked" ? ques_ipt.length!=0 ? 1 : 0 : 0,
										"tags":tags.length==0 ? "" : tags,
										"user_tags":user_tags.length==0 ? "" : user_tags,
										"skip_url":"",
										"video_url":$("#article_type").val()==3 ? $("#video_addr").val() : null,
										"question":ques_ipt.length==0 ? "" : ques_ipt,
										"answer":answer_ipt.length==0 ? "" : answer_ipt,
										"status":$(t).hasClass("js_pc_public_save") ? 0 : 1
									},
									beforeSend:function() { },
									success:function(data) { 
										console.log(data);
										if(data.code==1) { 
											if(e.originalEvent) { alert(data.message);}
										}else {
											alert(data.message);
										}
										units.publicArticleLock=false;
									},error:function() { 
										alert("网络错误，请稍后再试！");
										units.publicArticleLock=false;
									}
								});
							}
						});
						
						
						//三分钟自动触发保存
						function triggerClick() { 
							setTimeout(function() { 
								triggerClick();
								$(".js_pc_update_article").trigger("click");
							},180000);//180000
						}
						if(b_type=="cg") { 
							triggerClick();
						}

						
				}
				
				
				//textarea自适应高度
				autosize(document.getElementById('b_title'));


				//判断标签输入框是否按了回车键
				$(".add_label_content").keypress(function(event) {     
					var keynum = (event.keyCode ? event.keyCode : event.which),
						ipt_len=$(".add_label_content").find(".ipt_label").length,
						target=$(event.target);
					if(target.hasClass("ipt_label") && keynum == '13' && $.trim(target.val())!=="") { 
						var index=target.index();
							target.addClass("on").val("#"+target.val()).blur();
					}
				}).on("click",function(e) { 
					var target=$(event.target);
						if(target.hasClass("ipt_label")) { if(target.val().indexOf("#")===0) { target.removeClass("on").val(target.val().substr(1,target.val().length));}}
				});	
				//添加新标签
				$(".add_label_new_btn").on("click",function() { 
					$(this).before('<input type="text" class="f_dib f_vat ipt_label" placeholder="请填写标签" title="回车确定标签"/>')
				});
				//清除标签
				$(".cut_label_new_btn").on("click",function() { $(".ipt_label").length>1 ? $(this).prev(".add_label_new_btn").prev('.ipt_label').remove() : ""});
				
				
				
				
				//Q1和A1输入框自适应
				autosize($(".ques_ipt")[0]);
				autosize($(".answer_ipt")[0]);
				
				
				//添加Q和A
				units.index=1;
				$(".add_qa_btn").find("b").on("click",function() { 
					var p=$(this).parent();
						units.index++;
						p.before('<div class="ques_answer_box"><div class="ques_box f_cf"><span class="f_fl">Q'+units.index+':</span><div class="ques_inner_box f_pr"><textarea class="f_db ques_ipt" placeholder="请填写Q'+units.index+'" ></textarea></div></div><div class="answer_box f_cf"><span class="f_fl">A'+units.index+':</span><div class="answer_inner_box f_pr"><textarea class="f_db answer_ipt" placeholder="请填写A'+units.index+'" ></textarea></div></div></div>');
						$(".ques_ipt").each(function() { autosize(this)});
				});
				
				//复选框选择
				$(".open_comment").on("click",function() { 
					var ipt=$(this).find("input");
					ipt.attr("checked")!="checked" ? ($(".open_comment").addClass("on"),ipt.attr("checked","checked")) : ($(".open_comment").removeClass("on"),ipt.removeAttr("checked"));
				});
				$(".open_buy_or_no").on("click",function() { 
					var ipt=$(this).find("input");
					ipt.attr("checked")!="checked" ? ($(".open_buy_or_no").addClass("on"),ipt.attr("checked","checked")) : ($(".open_buy_or_no").removeClass("on"),ipt.removeAttr("checked"));
				});
				$(".qa_open_no").on("click",function() { 
					var ipt=$(this).find("input");
					ipt.attr("checked")!="checked" ? ($(".qa_open_no").addClass("on"),ipt.attr("checked","checked")) : ($(".qa_open_no").removeClass("on"),ipt.removeAttr("checked"));
				});
				
				//判断是否不显示简单教程
				//$.cookie("read_course")===undefined ? $(".simple_course_box").removeClass("f_dn") : "";
				
				//关闭简单教程，以后都不显示
				$(".close_view_course").on("click",function() { 
					$(".simple_course_box").addClass("f_dn")
					//$.removeCookie("read_course");
				});
				//知道啦
				$(".to_know_course").on("click",function() { 
					$(".view_course_box").addClass("f_dn");
					//第一步定位
					pos_judge();
					//显示第一步
					$(".view_course_step1").removeClass("f_dn");
				});
				
				//第二步
				$(".next_step1").on("click",function() { $(".view_course_step1").addClass("f_dn").next(".view_course_step2").removeClass("f_dn");});
				
				//第三步
				$(".next_step2").on("click",function() { $(".view_course_step2").addClass("f_dn").next(".view_course_step3").removeClass("f_dn");});
				
				//完成
				$(".next_step3").on("click",function() { 
					//$.cookie("read_course",1);
					$(".simple_course_box").addClass("f_dn").find(".view_course_box").removeClass("f_dn").end().find(".view_course_step3").addClass("f_dn");
				});

				//简单教程定位指示
				units.public=$(".js_pc_public_article")[0];
				units.step1=$(".view_course_step1")[0];				
				function pos_judge() { 
					var b=units.public.getBoundingClientRect().bottom,
						l=units.public.getBoundingClientRect().left;
						units.step1.style="left:"+(l-150)+"px;top:"+(b+60)+"px";
				}
								
				//简单教程定位
				$(window).on("resize",units.throttle(pos_judge,100,600));
				
				
				//上传封面图
				$("#file").on("change",function() { 
					var format=this.files[0];
						console.log(format);
					var formData = new FormData();
						formData.append('file',$('#file')[0].files[0]);
						formData.append("account",JSON.parse($.cookie('bz')).account);
						formData.append("token",JSON.parse($.cookie('bz')).token);
						$.ajax({
							url: golbalIp+"/user/uploadImg",
							type: 'post',
							dataType:"json",
							cache: false,
							data: formData,
							processData: false,
							contentType: false
						}).done(function(res) {
							if(res.code==1) { 
								var img=res.data;
									img=(img.substr(0,7).toLowerCase()=="http://" || img.substr(0,8).toLowerCase()=="https://") ? img : golbalIp+img;
								
								$(".pc_cover_pic_inner").find("img").attr("src",img);
								$(".pc_cover_pic").removeClass("no_pic").attr("data-src",img);
								$(".pc_cover_pic_inner").attr("data-src",img);
								$(".upload_cover").find("div").html("修改封面图");
							}else {
								alert(res.message);	
							}
						}).fail(function(res) {
							alert(res.message);
						}); 	
				});
			
			
				//发布文章
				units.publicArticleLock=false;
				var firstTime=true;
				$(".js_pc_public_article,.js_pc_public_save").on("click",function() { 
					var t=this,
						param1=$("#b_title").val(),
						param2=testEditor.getValue(),
						ques_ipt=[],
						answer_ipt=[],
						tags=[],
						user_tags=[],
						state0=false,
						state1=false,
						state2=false;
						
						$(".add_label_content").find(".ipt_label").each(function() { $.trim($(this).val())!=="" ? user_tags.push($(this).val()) : state0=true;});
						$(".add_qa_content").find(".ques_ipt").each(function() { $.trim($(this).val())!=="" ? ques_ipt.push($(this).val()) : state1=true;});
						$(".add_qa_content").find(".answer_ipt").each(function() { $.trim($(this).val())!=="" ? answer_ipt.push($(this).val()) : state2=true;});
						if(!$(".pc_cover_pic_inner").attr("data-src")) { 
							alert("请先上传封面图");
							return false;
						}else if($.trim(param1)==="") { 
							alert("请填写标题");	
							return false;
						}else if(!param2) { 
							alert("请编辑主要内容");	
							return false;
						}else if($("#article_type").val()==3 && $.trim($("#video_addr").val())=="") { 
							alert("请填写视频地址");
							return false;
						}
						$(".system_label li.selected").each(function() { tags.push($(this).attr("val"))});
					if(!units.publicArticleLock) { 
						units.publicArticleLock=true;
						$.ajax({
							url:golbalIp+"/user/create_article",
							type:"post",
							dataType:"json",
							data:{
								"account":JSON.parse($.cookie('bz')).account,
								"token":JSON.parse($.cookie('bz')).token,
								"cid":$("#column_type").val(),
								"type":$("#article_type").val(),
								"title":$("#b_title").val(),
								"keywords":"",
								"live":$("#publish_broadcast").attr("checked")=="checked" ? 1 : "",
								"live_id":$("#publish_broadcast").attr("checked")=="checked" ? $("#live_list").val() : "",
								"description":"",
								"img":$(".pc_cover_pic").attr("data-src")!=undefined ? $(".pc_cover_pic").attr("data-src") : "",
								"abstract":"",
								"content":param2,
								"comment_onoff": $("#open_comment").attr("checked")==="checked" ? 1 : 2,
								"buy_onoff":$("#open_buy_or_no").attr("checked")==="checked" ? 1 : 2,
								"qa_onoff":$("#qa_open_no").attr("checked")==="checked" ? ques_ipt.length!=0 ? 1 : 0 : 0,
								"tags":tags.length==0 ? "" : tags,
								"user_tags":user_tags.length==0 ? "" : user_tags,
								"video_url":$("#article_type").val()==3 ? $("#video_addr").val() : null,
								"skip_url":"",
								"question":ques_ipt.length==0 ? "" : ques_ipt,
								"answer":answer_ipt.length==0 ? "" : answer_ipt,
								"status":$(t).hasClass("js_pc_public_save") ? 0 : 1
							},
							beforeSend:function() { },
							success:function(data) { 
								console.log(data);
								if(data.code==1) { 
									alert(data.message);
									if($(t).hasClass("js_pc_public_save") && units.getUrlParam("id")==null) { 
										window.location.href="pc_public.php?id="+data.data.id;
									}
								}else {
									alert(data.message);
								}
								units.publicArticleLock=false;
							},error:function() { 
								alert("网络错误，请稍后再试！");
								units.publicArticleLock=false;
							}
						});
					}
				});
				
				
				//预览编辑内容
/*				$(".js_pc_public_preview").on("click",function() { 
					if($(".pc_cover_pic_inner").attr("data-src")==undefined) { 
						alert("请先上传封面图");
					}else if($.trim($("#b_title").val())=="") { 
						alert("请先编辑标题");
					}else if($.trim(testEditor.getHTML())=="") { 
						alert("请先编辑主内容");
					}else {
					var w = window.open('', '_blank', ''),
						d = w.document;
						d.open();
						d.write('<!DOCTYPE html><html><head><meta charset="utf-8"/><title>文章详情</title><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" /><meta name="apple-mobile-web-app-capable" content="yes" /><meta name="apple-mobile-web-app-status-bar-style" content="black" /><meta name="msapplication-tap-highlight" content="no" /><meta name="format-detection" content="telephone=no, email=no" /><meta http-equiv="Cache-Control" content="no-transform" /><meta http-equiv="Cache-Control" content="no-siteapp" /><meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" /><meta http-equiv="Pragma" content="no-cache" /><meta http-equiv="Expires" content="0" /><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/><link rel="shortcut icon" href="./images/favicon.ico?v=1.0" type="image/x-icon" /><link rel="stylesheet" href="css/common.css?v=1.5" /></head><body> 		            	<div class="header f_pr">        	<div class="header_inner f_cf f_pr">            	<h1 class="logo f_fl"><a href="index.php" class="f_full f_db f_two">知客网</a></h1><div class="center_title f_tac f_fl"></div><div class="nav_search f_fl"><div class="search_box f_fr">                    	<form action="search_result.php" class="f_full f_pr">                        	<label class="for_text" for="keyword">想要找点什么</label><input type="text" class="keyword placeholder f_fl" id="keyword"/><input type="button" class="search_btn f_fr" value="搜索"/></form></div>                	<ul class="f_fl"></ul></div><div class="l_r f_pa">                	<div class="no_login "><a href="javascript:;" class="js_login_pop f_dib">登录</a><i class="f_dib"></i><a href="javascript:;" class="js_register_pop  f_dib">注册</a></div><div class="logined f_dn">                    	<div class="f_dib f_vat name_man_head">                    		<div class="man_head f_pr f_dib"><img src="images/weixin.png" class="f_vart"/><div class="head_mask f_pa"></div><div class="message_info f_pa"></div></div>                        	<span class="f_dib f_toe name f_vat">xxxxxxxx</span><span class="f_dn f_toe name f_vat my_home_page_a" data-type="pc_home.php">我的主页</span><div class="pc_dropDown f_pa f_dn">                            	<div class="pc_dropDown_inner"><a href="pc_home.php">个人中心</a><a href="pc_message.php">消息通知<i class="f_dib message_num">0</i></a><a href="pc_public.php">发表文章</a><a href="pc_my_hall.php">我的名人堂</a><a href="javascript:;" class="js_logout">退出</a></div></div></div>                    	<a href="javascript:;" class="js_logout f_dib logout">退出</a></div></div><div class="mobile_nav f_pa f_dn"><div class="mobile_ico f_pa"></div><div class="mobile_mask f_pa"></div></div></div></div><div class="main_content f_pr " data-type="article_page">        	<div class="main_contnet_inner f_pr ">                        	            	<div class="cover_nickName_head">                	<div class="cover_unit"><img src="'+$(".pc_cover_pic_inner").attr("data-src")+'"  class="f_vat" width="100%"/></div><div class="head_name">                    	<div class="head_unit f_ofh"><img src="images/head_sculpture.png" width="100%" class="f_vat"/></div>                    	<div class="nickName_unit f_toe f_tac"></div></div></div><div class="article_detail">                                	<div class="article_detail_unit">                    	<div class="title f_tac" id="title" style="font-size: 48px;color: #263238;line-height: 68px;">'+$("#b_title").val()+'</div><div class="pulic_time f_tac"></div><div class="article_detail_main">'+testEditor.getHTML()+'</div></div><div class="article_tip_unit"></div><div class="buy_unit f_cf"><div class="want_buy f_pa f_two">已选</div><div class="percent_unit f_pr"><div class="percent_l f_pa" style="width:66.666666%"><b></b></div><div class="percent_r  f_pa" style="width:33.333333%"><b></b></div></div><div class="no_buy f_pa f_two">已选</div></div><div class="collect_praise_share"><div class="collect_btn f_dib f_vat"><b>0</b>收藏</div><div class="praise_btn f_dib f_vat"><b>0</b>点赞</div><div class="share_btn f_dib f_vat"><b>0</b>分享</div></div><div class="q_a_unit"><dl id="question_answer"><dt>Q&A</dt></dl></div><div class="comment_unit"><div class="edit_comment">                        	<div class="edit_comment_inner f_cf"><div class="head_eidtInput f_cf"><div class="head_unit f_ofh f_fl"><img src="images/head_sculpture.png" width="100%" class="f_vat"/></div><div class="editInput_box f_pr"><textarea id="replyContent" class="f_db" placeholder="|  我有话要说"></textarea></div></div><div class="public_comment_box"><div class="public_btn f_dib f_vat">发送</div></div></div></div><div class="comment_list_box">                                                	<dl class="comment_list"><dt>评论</dt></dl><div class="load_more_comment f_dn">查看更多评论（0）</div>                        	</div></div><div class="relative_reading_box f_dn">                    	<div class="title">相关阅读</div><dl class="relative_reading f_cf"></dl></div></div><div class="float_unit f_pf f_dn">                	<a href="" class="f_db qq_link f_two">QQ</a><a href="" class="f_db weibo_link f_two">微博</a><a href="" class="f_db weixin_link f_two">微信</a><a href="javascript:;" class="f_db toTop f_two">回到顶部</a></div>            	</div></div><div class="footer f_pr">        	<div class="footer_inner f_pr f_cf">            	<div class="link_qrcode f_cf"><dl class="f_fl"><dt>ZAEKE</dt><dd class="f_toe"><a href="">加入我们</a></dd><dd class="f_toe"><a href="">商务合作</a></dd><dd class="f_toe"><a href="">用户协议</a></dd></dl><dl class="f_fl"><dt>合作伙伴</dt><dd class="f_toe"><a href="">速致</a></dd><dd class="f_toe"><a href="">知客数码</a></dd></dl><dl class="f_fl"><dt>试用介绍</dt><dd class="f_toe"><a href="">试用方式</a></dd><dd class="f_toe"><a href="">试用流程</a></dd><dd class="f_toe"><a href="">试用须知</a></dd></dl><dl class="f_fl"><dt>友情链接</dt><dd class="f_toe"><a href="">充电头网</a></dd><dd class="f_toe"><a href="">TCL 手机铁粉俱乐部</a></dd><dd class="f_toe"><a href="">站长之家</a></dd><dd class="f_toe"><a href="">机智猫</a></dd></dl><ul class="f_fr"><li><p>知客、让数码更懂你</p></li><li><img src="images/qrcode.png" class="f_vat"/></li></ul></div><div class="web_info f_cf">                	<div class="big_logo_us_info f_fl"><div class="big_logo f_fl"></div><div class="about_us_info f_fr"><p>关于我们</p><div class="des">知客数码致力于打造数码玩家一站式完美体验的平台。我们希望能给每一位热爱数码的玩家，提供一个展示自己的平台。</div><div class="email_tel"><span class="f_dib f_vat mobile">13049894061</span><span class="f_dib f_vat email">chenwei@zaeke.com</span></div></div></div><div class="other_platform f_fr">                    	<p>其他平台账号</p><div class="other_platform_list">                    		<div class="l_qq f_dib"></div><div class="l_weixin f_dib"></div><div class="l_weibo f_dib"></div></div></div></div></div></div></body></html>');
						d.close();
					}
				});*/
				
				$(".js_pc_public_preview").on("click",function() { 
					if(units.getUrlParam("id")!=null) { 
						window.open("preview.php?id="+units.getUrlParam("id"));
					}else{
						alert("请保存再预览");
					}
				});
			
				
			})
        </script>



    </body>
    
</html>