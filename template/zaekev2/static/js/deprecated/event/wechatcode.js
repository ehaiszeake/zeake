;(function($) {
    var link = $('.sidebar .share img').last();
    link.on('mouseover', function(event) {
        var e = event || window.event;
        var elem = $(this).parent().parent(); // elem = $('.share');
        var sidebar = $('.sidebar').first();

        var code = $('<div class="wechat-code"></div>').css({
            position: 'fixed',
            /*
             * left的值有点hard code的感觉，因为我懒得算
             * 为了解决code固定之后因为滚动条所产生的高度问题，要减掉滚动条的高度
             */
            left: $(this).offset().left - $(this).width() / 4 + 'px',
            top: elem.offset().top - (document.body.scrollTop) + elem.innerHeight() + 20 + 'px',
            width: '150px',
            height: '150px',
            opacity: 0,
            'z-index': 100
        });
        var img = $('<img src="template/zaekev2/static/img/wechatCode.png" alt="知客数码微信公众号二维码">').css({
            width: '100%'
        });
        var triangle = $('<div class="triangle"></div>').css({
            position: 'absolute',
            top: '-40px', // hard code
            left: '55px', // hard code
            width: 0,
            height: 0,
            'box-sizing': 'border-box',
            border: '20px solid transparent',
            'border-bottom': '20px solid white'
        });

        code.append(triangle).append(img);
        elem.after(code);
        code.animate({
            opacity: 1,
            top: '+=20px'
        });
    }).on('mouseout', function() {
        $('.wechat-code').animate({
            opacity: 0,
            top: '-=20px'
        }, function() {
            $(this).remove();
        });
    });
}(jQuery));