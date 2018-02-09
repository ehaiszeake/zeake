$(function(){
	user_tags();
});

function user_tags(){
	$.ajax({
		url:golbalIp+"/user/tags",
		type:"get",
		dataType:"json",
		data:{account:JSON.parse($.cookie('bz')).account,token:JSON.parse($.cookie('bz')).token,skipnum:0,length:1000},
		success:function(data){
			$.each(data.data.list,function(k,v){
				$(".system_label").append("<li val='"+v.id+"'>"+v.name+"</li>");
			});
			$(".system_label").attr("lab",JSON.stringify(data.data.list));
			$(".system_label li").click(function(){
				if($(".system_label li").length > 2){
					$(".system_label li.selected:first").removeClass("selected");
				}
				$(this).toggleClass("selected");
			});
		}
		
	});
}