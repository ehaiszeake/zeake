(function ($) {
    var uid = $('#ct .sd .sdub').first().attr('data-uid'); // 获取文章作者的uid

    /*
     * 使用一个粗暴的方法，通过ajax获得内容页面然后抓出数据更新内容
     */
    $.ajax({
        url: 'http://www.zaeke.com/home.php?mod=space&uid=' + uid + '&do=profile',
        success: function (data) {
            changeAuthorInfo(data);
        },
        error: function (error) {
            console.log('The failed reason is ' + error);
        }
    });

    $.ajax({
        url: 'http://www.zaeke.com/home.php?mod=space&do=thread&view=me&type=thread&uid=' + uid, 
        success: function (data) {
            try {
                showAuthorOtherArticles(data);
                showAuthorAllArticlesWithAuthorUid(uid);
            } catch (error) {
                console.log('出现错误，原因是：' + error);
            }
        },
        error: function (error) {
            console.log('The failed reason is ' + error);
        }
    });

    function showAuthorAllArticlesWithAuthorUid(uid) {
        var all = $('.all').find('a').first();
        all.attr('href', 'http://www.zaeke.com/home.php?mod=space&do=thread&view=me&type=thread&uid=' + uid);
    }

    function changeAuthorInfo(data) {
        /*
         * 用获取的数据依次更换原有的数据
         */
        var data = $(data).find('#ct').first().find('a');
        var neededData = [];
        var oldData = $('#ct .sd .sdub a');

        data.each(function () {
            var text = $(this).text();

            if (text.indexOf('主题') !== -1) {
                neededData.push(text);
            } else if (text.indexOf('回帖') !== -1) {
                neededData.push(text);
            } else if (text.indexOf('好友') !== -1) {
                neededData.push(text);
            }
        });

        neededData.reverse();

        for (var i = 0; i < oldData.length; i++) {
            oldData.eq(i).text(neededData[i].match(/\d+/)[0]);
        }
    }

    function showAuthorOtherArticles(data) {
        var data = $(data).find('table').find('tr:not(.th)').find('th > a');

        var items = $('.related-articles').find('.articles-list');

        if (data.length > 3) {
            displayArticlesWithNumber(3);
        } else if (data.length > 0) {
            displayArticlesWithNumber(data.length);
        } else {
            $('.related-articles').remove();
        }

        function displayArticlesWithNumber(number) {
            for (var i = 0; i < number; i++) {
                var info = data.eq(i);
                var item = $('<li><a href="" target="_blank"></a></li>');
                var item_info = item.find('a');
                
                item_info.attr('href', info.attr('href')).text(info.text());
                items.append(item);
            }
        }
    }
}(jQuery));