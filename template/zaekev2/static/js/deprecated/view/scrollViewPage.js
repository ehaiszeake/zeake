;
(function($) {
    var $comment = $('#comment').first();
    var targetTop = $comment.offset().top + $comment.innerHeight();
    var width = $('.sdm.bgw.cl').width();

    var $author = $('.sdm.bgw.cl').first();
    var $articles = $('.related-articles').first();

    var height = $author.innerHeight();

    $(window).on('scroll', function() {
        var scrollTop = window.scrollY;
        // for debug
        // console.log('scrollTop is ' + scrollTop + ', targetTop is ' + targetTop);

        if (scrollTop > (targetTop + 20)) {
            if ($author.attr('data-fixed') === undefined) {
                $author.css({
                    position: 'fixed',
                    top: '20px',
                }).attr('data-fixed', 'true');
                $articles.css({
                    position: 'fixed',
                    top: height + 20 + 'px',
                    width: width + 'px',
                });
            }
        } else {
            if ($author.attr('data-fixed') !== undefined) {
                $author.css({
                    position: 'relative',
                    top: 0
                }).removeAttr('data-fixed');
                $articles.css({
                    position: 'relative',
                    top: 0
                });
            }
        }
    });
}(jQuery));