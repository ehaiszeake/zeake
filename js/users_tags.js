$(function(){
	user_tags();
	
	$("#system_input_text").keyup(function(){
		$("#txt_system_lbl li").unbind();
		$("#txt_system_lbl li").remove();
		if($(this).val()!=""){
			$("#txt_system_lbl").show();
			var that = this;
			$(".system_label li:not(.selected)").each(function(i,ele){
				if($(ele).text().indexOf($(that).val())>=0){
					$("#txt_system_lbl").append("<li val='"+$(ele).attr("val")+"'>"+$(ele).text().replace("-","")+"</li>");
				}
			});
			if($("#txt_system_lbl li").length==0)$("#txt_system_lbl").append("<li val=''>无相关系统标签关键词</li>");
			$("#txt_system_lbl li").click(function(){
				if($(".system_label li.selected").length >= 2 )return ;
				if($(this).attr("val")!=""){
					var that2 = this;
					$(".system_label li").each(function(i,ele){
						if($(ele).attr("val") == $(that2).attr("val")){
							$(ele).addClass("selected");
							$("#txt_system_lbl li").unbind();
							$("#txt_system_lbl li").remove();
							$("#system_input_text").val("");
							$("#txt_system_lbl").hide();
						}
					});
				}
			});
		}else{
			$("#txt_system_lbl").hide();
		}
	});
});

function user_tags(){
	$.ajax({
		url:golbalIp+"/user/tags",
		type:"get",
		dataType:"json",
		data:{account:JSON.parse($.cookie('bz')).account,token:JSON.parse($.cookie('bz')).token,skipnum:0,length:1000},
		success:function(data){
			$.each(data.data.list,function(k,v){
				$(".system_label").append("<li val='"+v.id+"'>"+v.name+"<span>-</span></li>");
			});
			$(".system_label").attr("lab",JSON.stringify(data.data.list));
//			$(".system_label li").click(function(){
//				if($(".system_label li").length > 2){
//					$(".system_label li.selected:first").removeClass("selected");
//				}
//				$(this).toggleClass("selected");
//			});
			$(".system_label li span").click(function(){$(this).parent().removeClass("selected");});
		}
		
	});
}