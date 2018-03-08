;(function ($) {
    $(function () {
        var $drag = $('.sd.pph .drag').first()
        var targetTop = $drag.offset().top + $drag.innerHeight()
        var width = $drag.width()
        var height = 0
        var footerOffsetTop = $('#ft').offset().top
        
        if (window.location.href === 'http://www.zaeke.com/news/') {
            $elems = $drag.find('.sidebar-module:even')
        } else {
            $elems = $drag.find('.sidebar-module:gt(0)')
        }
        
        $elems.each(function () {
            height += $(this).innerHeight()
        })
        
        $(window).on('scroll', function () {
            var scrollTop = window.scrollY
            
            if (scrollTop > targetTop) {
                if ($elems.attr('data-fixed') === undefined) {
                    $elems.css({
                        position: 'fixed',
                        'box-sizing': 'border-box',
                        width: width + 'px',
                        'margin-top': '20px',
                        'margin-bottom': '0 !important' // 这是为了去掉多余的麻烦
                    }).find('ul li:gt(2)').hide().end() // 只显示三个内容，其余的隐藏
                    .attr('data-fixed', 'true').each(function () {
                        $(this).css({
                            top: $elems.index($(this)) * ($elems.first().innerHeight() + 20) + 'px' // +20是为了弄对高度
                        })
                    })
                }
                
                /*
                * 避免滚动到最底部的时候出现元素的错位，所以要进行高度的判断
                * 判断高度的准则为滚动条的高度加上浮动元素的高度是否大于底部在文档中的垂直位置
                * 如果超过了，滚动到末端时浮动元素肯定会覆盖在底部上，显得“错位”了
                * 所以一旦超过，则隐藏浮动元素中的一部分，这样布局就不会觉得有问题了
                */
                if (height + scrollTop > footerOffsetTop) {
                    $elems.last().hide()
                } else {
                    $elems.last().show()
                }
            } else {
                if ($elems.attr('data-fixed') !== undefined) {
                    $elems.css({
                        position: 'relative',
                        top: 0,
                        'box-sizing': 'content-box',
                        width: '280px',
                        'margin-top': '0'
                    }).removeAttr('data-fixed').find('ul li:gt(2)').show()
                }
            }
        })
    })
}(jQuery));