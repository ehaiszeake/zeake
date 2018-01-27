$(function(){
	if($.cookie('bz')===undefined || $.trim($.cookie('bz'))==="" || ((new Date().getTime()/1000-JSON.parse($.cookie('bz')).updated) > 3600)){
		alert("您未登录，或者登录超时，请重新登录！");
		$(".no_login").removeClass("f_dn").next(".logined").addClass("f_dn").find(".name:eq(0)").html("");
		$(".main_content").addClass("loading");
		$.removeCookie('bz',{ expires:365 });
		return false;
	}else {
		$(".no_login").addClass("f_dn").next(".logined").removeClass("f_dn").find(".name:eq(0)").html(JSON.parse($.cookie('bz')).account);
	}
	
	
});
