$(function(){
	
});

function live_comment(id){
	$.ajax({
		url : golbalIp+"/main/live_comment",
		type:"get",dataType:"json",
		data:{skipnum:0,length:100,id:id},
		success:function(data){
			
			var list = data.data.list;
			if(list == null)return ;
			var img="/images/head_sculpture.png";
			
			$.each(list,function(k,v){
				var html='<dd class="f_cf">';
				html+='<div class="head f_pr f_fl"><img src="'+img+'" width="100%" class="f_vat"/></div>';
				html+='<div class="f_pr name_time_content">';
				html+='<div class="name_time">';
				html+='<div class="f_dib name f_toe f_vat  jump_personal_info" data-author_id="'+v.id+'">'+v.member.nickname+'</div>';
				html+='<div class="f_dib time">'+variable_obj.formatDate(v.created*1000)+'</div></div>';
				html+='<div class="content">'+v.content+'</div>';
				html+='</div>';
				html+='</dd>';
				$(".comment_list_"+id).append(html);
			});
			
			
			
			
		}
	});
}
