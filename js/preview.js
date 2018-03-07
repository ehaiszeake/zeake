        	$(function(){

        	    var id = units.getUrlParam('id');
        	    var buy_count = 0;
        	    var nobuy_count = 0;
                var share = 0;
                var praise = 0;
				var imgRoute="./";
				var pAry={"id":id};
					if($.cookie('bz')){pAry={"account":JSON.parse($.cookie('bz')).account,"token":JSON.parse($.cookie('bz')).token,"id":id};}
				$.ajax({
					url:golbalIp + "/user/article",
					type:"get",
					dataType:"json",
					data:pAry,
					beforeSend:function(){},
					success:function(data){
						
						if(data.data.skip_url!=null && data.data.skip_url!=""){window.location.href=data.data.skip_url;}
						
					    $("#title").html(data.data.title);
						
						$("#doc-content").find("textarea").val(data.data.content);
						editormd.markdownToHTML("doc-content", {//注意：这里是上面DIV的id
								htmlDecode: "style,script,iframe",
								emoji: true,
								taskList: true,
                        		tocm: true, 
								tex: true, // 默认不解析
								flowChart: true, // 默认不解析
								sequenceDiagram: true, // 默认不解析
								codeFold: true,
						});
						
						//遍历图片一组
						var imgList=[],temporary=[],total=[];
						$("#doc-content").find("img").each(function(i,item){var	a=$(this).parent("a");imgList.push(a[0]);});
						$.each(imgList,function(i,item){
							var t=$(this),next=t.next("a");
							if(t.index()==(next.index()-1) && temporary.length<5){
								if(temporary.length==0){
									temporary.push(this);
									temporary.push(next[0]);
									total.push(temporary);	
								}else {
									if(temporary[temporary.length-1]!=this){temporary.push(this);}
									temporary.push(next[0]);
									total[total.length-1]=temporary;
								}
							}else {
								temporary=[];
							}
						});
						$.each(total,function(i,item){
							var data=[];
							console.log(item);
							$.each(item,function(a,sub){data.push(sub.outerHTML);});
							$(item[0]).before('<div class="pic_list'+data.length+'">'+data.join("")+'</div>');
							$(item).remove();
						});
						
						
						
						
						var imgList2=[],temporary2=[],total2=[];
						$("#doc-content").find("img").each(function(i,item){imgList2.push(this);});
						$.each(imgList2,function(i,item){
							var t=$(this),next=t.next("img");
							if(t.index()==(next.index()-1) && temporary2.length<5){
								if(temporary2.length==0){
									temporary2.push(this);
									temporary2.push(next[0]);
									total2.push(temporary2);	
								}else {
									if(temporary2[temporary2.length-1]!=this){temporary2.push(this);}
									temporary2.push(next[0]);
									total2[total2.length-1]=temporary2;
								}
							}else {
								temporary2=[];
							}
						});
						$.each(total2,function(i,item){
							var data=[];
							console.log(item);
							$.each(item,function(a,sub){data.push(sub.outerHTML);});
							$(item[0]).before('<div class="pic_list'+data.length+'">'+data.join("")+'</div>');
							$(item).remove();
						});
						
						
						
						
						
						var img=(data.data.img==null || data.data.img=="")  ? imgRoute+"images/placeholder_img_L04.jpg" : 
							(data.data.img.substr(0,7).toLowerCase()=="http://" || data.data.img.substr(0,8).toLowerCase()=="https://") ? data.data.img : golbalIp+data.data.img;
						
					    $(".cover_unit").find('img').attr('src',img);
					    $(".nickName_unit").html(data.data.author).attr("data-author_id",data.data.author_id);
                        var updated = variable_obj.formatDate(data.data.created*1000);
                        $(".pulic_time").html(updated);
                        $(".article_tip_unit").html("文章仅代表作者："+data.data.author+" 个人观点，与本站立场无关");
                        buy_count = data.data.buy_count;
                        nobuy_count = data.data.nobuy_count;
						total_count=buy_count+nobuy_count;
                        $(".percent_l").find("b").html(data.data.buy_count).end().css("width",(buy_count/total_count)*100+"%");
                        $(".percent_r").find("b").html(data.data.nobuy_count).end().css("width",(nobuy_count/total_count)*100+"%");
                        praise = data.data.thumb_count;
                        $(".praise_btn").find('b').html(data.data.thumb_count);
                        $(".share_btn").find('b').html(data.data.share);
						$(".public_btn").attr("data-article_id",data.data.id);
						
						//买不买是否显示 1=>显示  
						if(data.data.buy_onoff!==1){$(".buy_unit").addClass("f_dn");}
						
						//是否显示qa
						data.data.qa_onoff==0 ? $(".q_a_unit").addClass("f_dn") : "";
						
						//评论模块是否显示 1=>显示
						if(data.data.comment_onoff!==1){$(".comment_unit").addClass("f_dn");}
						
						//是否已经点赞
						if(data.data.member_thumb_status){$(".praise_btn").addClass("on");}
						
						//是否已经收藏
						if(data.data.member_amass_status){$(".collect_btn").addClass("on");}
						
						//是否想买
						if(data.data.buy_status){
							if(data.data.buy_status==1){
								$(".want_buy").addClass("on disabled");
								$(".no_buy").addClass("disabled");
							}else if(data.data.buy_status==2){
								$(".no_buy").addClass("on disabled");
								$(".want_buy").addClass("disabled");
							}else {
								
							}
						}
						
						

						//QA列表===============================================================
						if(data.data["q&a"]!=undefined && data.data["q&a"].length>0){
                        	var str = '';
                        	$.each(data.data["q&a"],function(i,item){str += ' <dd><div class="question">Q：'+item.question+'</div> <div class="answer">A：'+item.answer+'</div> </dd>'});
                        	$("#question_answer").append(str);
						}


						if(data.data.about_articl!=undefined && data.data.about_article.length>0){
							var str2 = '';
							$.each(data.data.about_article,function(i,item){
								var updated = variable_obj.formatDate(item.updated*1000),
									img=(item.img==null || item.img=="")  ? imgRoute+"images/head_sculpture.png" : golbalIp+item.img,
									head=imgRoute+"images/head_sculpture.png";
									str2 += '<dd>';
									str2 +=	'	<div class="head_unit_name f_cf f_dn">';
									str2 += '		<div class="head_unit f_ofh f_fl"><img src="'+head+'" width="100%" class="f_vat"/></div>';
									str2 += '		<div class="name f_toe f_fl jump_personal_info"  data-author_id="'+item.author_id+'">'+item.author_id+' </div>';
									str2 += '	</div>';
									str2 +='	<div class="article_cover f_pr">';
									str2 +='		<div class="article_cover_box"><img src="'+img+'" class="f_vat placeholderImg2" width="100%"/></div>';
									str2 +='	</div>';
									str2 +='	<div class="l_title f_dn">'+item.title+'</div>';
									if(item.type!=3){
										str2 +='	<div class="article_intro"><a href="article_detail_'+item.id+'.php">'+item.abstract+'</a></div>';
									}else {
										str2 +='	<div class="article_intro"><a href="video_detail.php?id='+item.id+'">'+item.abstract+'</a></div>';
									}
									str2 +='	<div class="article_date_view_message f_cf">';
									str2 +='		<div class="date f_fl jump_personal_info"><span  data-author_id="'+item.author_id+'">'+item.author_id+'</span><i>   / '+updated+'  </i><em></em></div>';
									str2 +='		<div class="view_message f_fr">';
									str2 +='			<div class="article_collect f_dib f_vat">'+item.pv+'</div>';
									str2 +='			<div class="article_message f_dib f_vat">'+item.reply+'</div>';
									str2 +='		</div>';
									str2 +='	</div>';
									str2 +='</dd>';
							});
							$(".relative_reading").append(str2);
						}else {
							$(".relative_reading_box").addClass("f_dn");	
						}
						


                    },
					error:function(){
						alert("网络错误，请稍后再试！");
						load_data_lock=false;
					}	
				});
				

				//想买按钮=====================================================================================================
				root.wantBuyLock=false;//数据锁定
                $(".want_buy").on("click",function(){
                    var t=this;
					if($.cookie('bz')===undefined || $.trim($.cookie('bz'))==="" || ((new Date().getTime()/1000-JSON.parse($.cookie('bz')).updated) > 3600)){
						alert("您未登录或者登录超时，请重新登录后操作！");
						return false;	
					}else {
						var cookie = JSON.parse($.cookie("bz"));
						if(!root.wantBuyLock && !$(t).hasClass("disabled")){
							root.wantBuyLock=true;
							$.ajax({
								url:golbalIp + "/user/buy",
								type:"post",
								dataType:"json",
								data:{"article_id":id,"token":cookie.token,"account":cookie.account,"status":1},
								beforeSend:function(){},
								success:function(data){
								   if(data.code == 1){
										var buy=parseInt($(".percent_l").text(),10),
											total=total_count+1,
											buy=buy+1;
											$(".percent_l").find("b").html(buy).end().parent().prev(".want_buy").addClass("on disabled");
											$(".no_buy").addClass("disabled");
											$(".percent_l").css("width",(buy/total)*100+"%").next(".percent_r").css("width",((total-buy)/total)*100+"%");
								   }
								   root.wantBuyLock=false;
								},
								error:function(){
									alert("网络错误，请稍后再试！");
									root.wantBuyLock=false;
								}
							})
						}
					}
                });



				//不想买按钮=====================================================================================================
				root.noBuyLock=false;//数据锁定
                $(".no_buy").on("click",function(){
                    var t=this;
					if($.cookie('bz')===undefined || $.trim($.cookie('bz'))==="" || ((new Date().getTime()/1000-JSON.parse($.cookie('bz')).updated) > 3600)){
						alert("您未登录或者登录超时，请重新登录后操作！");
						return false;	
					}else {
						var cookie = JSON.parse($.cookie("bz"));
						if(!root.wantBuyLock && !$(t).hasClass("disabled")){
							root.wantBuyLock=true;
							$.ajax({
								url:golbalIp + "/user/buy",
								type:"post",
								dataType:"json",
								data:{"article_id":id,"token":cookie.token,"account":cookie.account,"status":2},
								beforeSend:function(){},
								success:function(data){
									if(data.code == 1){
										var no_buy=parseInt($(".percent_r").text(),10),
											total=total_count+1,
											no_buy=no_buy+1;
											$(".percent_r").find("b").html(no_buy).end().parent().next(".no_buy").addClass("on disabled");
											$(".want_buy").addClass("disabled");
											$(".percent_l").css("width",(total-no_buy/total)*100+"%").next(".percent_r").css("width",(no_buy/total)*100+"%");
									}
									root.noBuyLock=false;
								},
								error:function(){
									alert("网络错误，请稍后再试！");
									root.noBuyLock=false;
								}
							})
						}
					}
                });


				//收藏按钮=========================================================================================================
				root.collectBuyLock=false;
                $(".collect_btn").on("click",function(){
                    var t=this;
					if($.cookie('bz')===undefined || $.trim($.cookie('bz'))==="" || ((new Date().getTime()/1000-JSON.parse($.cookie('bz')).updated) > 3600)){
						alert("您未登录或者登录超时，请重新登录后操作！");
						return false;	
					}else {
						var cookie = JSON.parse($.cookie("bz"));
						if($(this).hasClass("on")){alert("你已收藏过该文章！");return false;}
						if(!root.collectBuyLock){
							root.collectBuyLock=true;
							$.ajax({
								url:golbalIp + "/user/amass",
								type:"post",
								dataType:"json",
								data:{"article_id":id,"token":cookie.token,"account":cookie.account},
								beforeSend:function(){},
								success:function(data){
									if(data.code == 1){
										alert("收藏成功!");
										var num=$(t).find("b").html();$(t).find("b").html(parseInt(num,10)+1).end().addClass("on");
									}
									root.collectBuyLock=false;
								},
								error:function(){
									alert("网络错误，请稍后再试！");
									root.collectBuyLock=false;
								}
							})
						}
					}
                });
				
				
				//点赞按钮=========================================================================================================
				root.praiseBuyLock=false;
                $(".praise_btn").on("click",function(){
                    var t=this;
					if($.cookie('bz')===undefined || $.trim($.cookie('bz'))==="" || ((new Date().getTime()/1000-JSON.parse($.cookie('bz')).updated) > 3600)){
						alert("您未登录或者登录超时，请重新登录后操作！");
						return false;	
					}else {
						var cookie = JSON.parse($.cookie("bz"));
						if($(this).hasClass("on")){alert("你已点过赞！");return false;}
						if(!root.praiseBuyLock){
							root.praiseBuyLock=true;
							$.ajax({
								url:golbalIp + "/user/thumb",
								type:"post",
								dataType:"json",
								data:{"article_id":id,"token":cookie.token,"account":cookie.account},
								beforeSend:function(){},
								success:function(data){
									if(data.code == 1){
										alert("点赞成功!");
										var num=$(t).find("b").html();$(t).find("b").html(parseInt(num,10)+1).end().addClass("on");
									}
									root.praiseBuyLock=false;
								},
								error:function(){
									alert("网络错误，请稍后再试！");
									root.praiseBuyLock=false;
								}
							})
						}
					}
                });
				
				
				//转发按钮=========================================================================================================
				root.shareLock=false;
                $(".share_btn").on("click",function(){
                    var t=this;
					if($.cookie('bz')===undefined || $.trim($.cookie('bz'))==="" || ((new Date().getTime()/1000-JSON.parse($.cookie('bz')).updated) > 3600)){
						alert("您未登录或者登录超时，请重新登录后操作！");
						return false;	
					}else {
						var cookie = JSON.parse($.cookie("bz"));
						if(!root.shareLock){
							root.shareLock=true;
							$.ajax({
								url:golbalIp + "/main/share",
								type:"get",
								dataType:"json",
								data:{"id":id,"token":cookie.token,"account":cookie.account},
								beforeSend:function(){},
								success:function(data){
									if(data.code == 1){
										alert("转发成功!");
										var num=$(t).find("b").html();$(t).find("b").html(parseInt(num,10)+1).end().addClass("on");
									}
									root.shareLock=false;
								},
								error:function(){
									alert("网络错误，请稍后再试！");
									root.shareLock=false;
								}
							})
						}
					}
                });



				//添加评论
				root.addCommentLock=false;
				function add_comment(val,article_id){
					if($.cookie('bz')===undefined || $.trim($.cookie('bz'))==="" || ((new Date().getTime()/1000-JSON.parse($.cookie('bz')).updated) > 3600)){
						alert("您未登录或者登录超时，请重新登录后操作！");
						return false;	
					}
					if(!root.addCommentLock){
						root.addCommentLock=!0;
						
						//获取个人资料
						$.ajax({
							url:golbalIp+"/user/info",
							type:"get",
							dataType:"json",
							data:{"account":JSON.parse($.cookie('bz')).account,"token":JSON.parse($.cookie('bz')).token},
							beforeSend:function(){},
							success:function(info){
								if(info.code==1){
									
									//请求成功
									var img=( info.data.img==null ||  info.data.img=="")  ? imgRoute+"images/head_sculpture.png" : golbalIp+ info.data.img;
										$.ajax({
											url:golbalIp+"/user/create_comment",
											type:"post",
											dataType:"json",
											data:{"content":val,"id":article_id,"account":JSON.parse($.cookie('bz')).account,"token":JSON.parse($.cookie('bz')).token},
											beforeSend:function(){},
											success:function(data){
												if(data.code==1){
														var html='<dd>';
															html+='<div class="head_name_time_replay f_cf">';
															html+='<div class="head_unit f_ofh f_fl"><img src="'+img+'" width="100%" class="f_vat"/></div>';
															html+='<div class="name_time f_fl"><div class="name jump_personal_info"  data-author_id="'+info.data.id+'">'+info.data.nickname+'</div><div class="time">刚刚</div></div>';
															html+='<div class="reply_btn f_fr " data-reply_id="'+data.data.id+'" data-article_id="'+article_id+'">回复</div>';
															html+='</div>';
															html+='<div class="edit_content">'+val+'</div>';
															html+='</dd>';
															$(".comment_list").find("dt").append(html).removeClass("no_data");
															$("#replyContent").val("");
												}else {
													alert(data.message);	
												}
												root.addCommentLock=!1;
											},error:function(){
												alert("网络异常，请稍后重试！");
												root.addCommentLock=!1;
											}
										});
										
								}else if(info.code==3){//未登录
									alert("登录超时，请重新登录！");	
								}else {
									alert(data.message);
								}
								root.addCommentLock=!1;
							},
							error:function(){
								alert("网络错误，请稍后再试！");
								root.addCommentLock=!1;
							}		
						})	

					}
				}	
					
				


				//回复评论
				root.replyLock=false;
				function reply_comment_list(p,ipt,val,reply_id,article_id){
					if($.cookie('bz')===undefined || $.trim($.cookie('bz'))==="" || ((new Date().getTime()/1000-JSON.parse($.cookie('bz')).updated) > 3600)){
						alert("您未登录或者登录超时，请重新登录后操作！");
						return false;	
					}
					if(!root.replyLock){
						root.replyLock=!0;
						
						//获取个人资料
						$.ajax({
							url:golbalIp+"/user/info",
							type:"get",
							dataType:"json",
							data:{"account":JSON.parse($.cookie('bz')).account,"token":JSON.parse($.cookie('bz')).token},
							beforeSend:function(){},
							success:function(info){
								if(info.code==1){
									
									//请求成功
									var img=( info.data.img==null ||  info.data.img=="")  ? imgRoute+"images/head_sculpture.png" : golbalIp+ info.data.img;
										$.ajax({
											url:golbalIp+"/user/reply_comment",
											type:"post",
											dataType:"json",
											data:{"content":val,"reply_id":reply_id,"article_id":article_id,"account":JSON.parse($.cookie('bz')).account,"token":JSON.parse($.cookie('bz')).token},
											beforeSend:function(){},
											success:function(data){
												if(data.code==1){
														var html='<li>';
															html+='<div class="head_name_time_replay f_cf">';
															html+='<div class="head_unit f_ofh f_fl"><img src="'+img+'" width="100%" class="f_vat"/></div>';
															html+='<div class="name_time f_fl"><div class="name jump_personal_info"  data-author_id="'+info.data.id+'">'+info.data.nickname+'</div><div class="time">刚刚</div></div>';
															html+='</div>';
															html+='<div class="edit_content">'+val+'</div>';
															html+='</li>';
															ipt.val("");
															p.parent(".replay_input").next(".reply_list").prepend(html).end().addClass("f_dn");
												}else {
													alert(data.message);	
												}
												root.replyLock=!1;
											},error:function(){
												alert("网络异常，请稍后重试！");
												root.replyLock=!1;
											}
										});
										
								}else if(info.code==3){//未登录
									alert("登录超时，请重新登录！");	
								}else {
									alert(data.message);
								}
								root.replyLock=!1;
							},
							error:function(){
								alert("网络错误，请稍后再试！");
								root.replyLock=!1;
							}		
						})	

					}
				}	
				
				
				
				
				//发送评论
				$(".comment_unit").on("click",function(e){
					var target=$(e.target);
						if(target.hasClass("public_btn")){
							//发布评论
							var comment=$("#replyContent").val();
								if($.trim(comment)!==""){add_comment(comment,target.attr("data-article_id"));}
						}else if(target.hasClass("reply_btn")){
							var ipt_box=target.parents("dd").find(".replay_input");
								ipt_box.toggleClass("f_dn");
						}else if(target.hasClass("replay_public_btn")){
							var ipt=target.prev(".editInput_box").find("textarea");
							//回复评论
							if($.trim(ipt.val())!==""){reply_comment_list(target,ipt,ipt.val(),target.attr("data-reply_id"),target.attr("data-article_id"))}
						}
				});
				
				
				//发表评论悬浮
				$(window).on("scroll",units.throttle(function(){
					var eleTop=$(".comment_unit")[0].getBoundingClientRect().top,t=$(this).scrollTop();
						eleTop<-100 ? $(".edit_comment").addClass("f_pf") : $(".edit_comment").removeClass("f_pf");
						if(t>200){$(".float_unit").removeClass("f_dn");}else {$(".float_unit").addClass("f_dn");}
				},100,600));
				
				
				//回到底部
				$(".toTop").on("touchstart click",function(e){
					if(e.type=="touchstart"){e.preventDefault();}
					$("html,body").animate({"scrollTop":0})
				});
				
				
				//评论列表
				root.page=0;
				root.dataNum=10;
				root.comment_listLock=!1;
				function comment_list(){
					if(!root.comment_listLock){
						root.comment_listLock=!0;
						$.ajax({
							url:golbalIp+"/main/article_comment",
							type:"get",
							dataType:"json",
							data:{"skipnum":root.page,"id":id,"length":root.dataNum/*,"account":JSON.parse($.cookie('bz')).account,"token":JSON.parse($.cookie('bz')).token*/},
							beforeSend:function(){},
							success:function(data){
								console.log(data);
								//请求成功
								if(data.code==1){
									//有数据
									if(data.data.list.length>0){
										var str="";
											$.each(data.data.list,function(i,item){
												str+='<dd>';
												str+='	<div class="head_name_time_replay f_cf">';
												str+='		<div class="head_unit f_ofh f_fl"><img src="images/head_sculpture.png" width="100%" class="f_vat"/></div>';
												str+='		<div class="name_time f_fl"><div class="name jump_personal_info" data-author_id="'+item.member_id+'">'+item.author+'</div><div class="time">'+units.getDateDiff(item.created*1000)+'</div></div>';
												str+='		<div class="reply_btn f_fr " data-reply_id="'+item.id+'" data-article_id="'+item.article_id+'">回复</div>';
												str+='	</div>';
												str+='	<div class="edit_content">'+item.content+'</div>';
												str+='	<div class="replay_input f_cf f_dn">';
												str+='		<div class="editInput_box f_pr"><textarea class="reply_comment f_db"></textarea></div>';
												str+='		<div class="replay_public_btn" data-reply_id="'+item.id+'" data-article_id="'+item.article_id+'">发送</div>';
												str+='	</div>';
												str+='	<ul class="reply_list">';
													if(item.reply_comment!=undefined){
														$.each(item.reply_comment,function(a,list){
															str+='<li>';
															str+='<div class="head_name_time_replay f_cf">';
															str+='<div class="head_unit f_ofh f_fl"><img src="images/head_sculpture.png" width="100%" class="f_vat"/></div>';
															str+='<div class="name_time f_fl"><div class="name jump_personal_info"  data-author_id="'+list.member_id+'">'+list.author+'</div><div class="time">'+units.getDateDiff(list.created*1000)+'</div></div>';
															str+='</div>';
															str+='<div class="edit_content">'+list.content+'</div>';
															str+='</li>';
														});
													}
												str+='</ul>';
												str+='</dd>';	
											});
											$(".comment_list").append(str);
									}
									//请求页码递增
										if(data.data.list.length<root.dataNum || data.data.total==root.dataNum){
											root.page=root.page;
											$(".load_more_comment").addClass("f_dn")	
										}else {
											root.page+=root.dataNum;
											var remain=data.data.total>=root.page ? data.data.total-root.page : 0;
											$(".load_more_comment").html("查看更多评论（"+remain+"）").removeClass("f_dn");
											if(remain==0){$(".load_more_comment").addClass("f_dn");}
										}

									
									//判断是否有评论
									data.data.total==0 ? $(".comment_list").addClass("no_data") : $(".comment_list").removeClass("no_data");
									
								}else if(data.code==3){
									alert("您未登录或者登录超时，请刷新页面后重新登录！");	
								}else {
									alert(data.message);	
								}
								root.comment_listLock=!1;
							},error:function(){
								alert("网络异常，请稍后重试！");
								root.comment_listLock=!1;
							}
						});
					}
				}
				//进入页面请求评论列表
				comment_list();
				
				//加载更多评论
				$(".load_more_comment").on("click",function(){comment_list();});
				
				
			})