$(function(){
	//live_comment();
});

function live_comment(){
	$.ajax({
		url : golbalIp+"/main/live_comment",
		type:"post",dataType:"json",
		data:{skipnum:0,length:100},
		success:function(data){
			
		}
	});
}
