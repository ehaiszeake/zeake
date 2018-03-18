$(function(){
    // 切换
    $(".screen1 li").click(function(){
        $(".screen1 li").children().removeClass("checked")
        $(this).children().addClass("checked")
        $(".table .readnum, .comments, .star, .pushindex, .pushjingxuan, .status").css("display","block")
        $(".table .pushtime, .sortrank").css("display","none")
        $(".table .t_subtime").text("发布时间")
        $(".table .t_status").text("当前状态")
        $(".table .t_pushtime").text("推送时间")
        $(".delete").text("删除")
        if($(this).index() == 0){
            // 全部
        }else if($(this).index() == 1){
            // 待审核
            $(".table .readnum, .comments, .star, .pushindex, .pushjingxuan").css("display","none")
            $(".table .t_subtime").text("提交时间")
        }else if($(this).index() == 2){
            // 已发布
        }else if($(this).index() == 3){
            // 已推送首页
            $(".table .status, .pushjingxuan").css("display","none")
            $(".table .pushtime").css("display","block")
        }else if($(this).index() == 4){
            // 已推送精选
            $(".table .status, .pushindex").css("display","none")
            $(".table .pushtime, .sortrank").css("display","block")
        }else if($(this).index() == 5){
            // 审核不通过
            $(".table .readnum, .comments, .star, .pushindex, .pushjingxuan").css("display","none")
            $(".table .t_subtime").text("提交时间")
        }else if($(this).index() == 6){
            // 回收站
            $(".table .pushjingxuan, .pushindex").css("display","none")
            $(".table .pushtime").css("display","block")
            $(".table .t_status").text("删除前状态")
            $(".table .t_pushtime").text("删除时间")
            $(".delete").text("恢复")
        }
    })
})