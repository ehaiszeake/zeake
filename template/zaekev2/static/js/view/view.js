var showFlashContent = (function () {
    // 转换flash程序从这里开始
    function showFlashContent() {
        var container = document.querySelector('table.vwtb')
        var flashs = container.querySelectorAll('span')

        // 没有flash就结束
        if (flashs.length < 1) {
            return
        }

        // 保存真实的flash地址（字符串）
        var realContent = []

        // 保存页面中存在的所有flash内容
        var elems = getFlashContent()
        for (var i = 0; i < elems.length; i++) {
            var realSrc = getRealFlashSrc(elems[i])
            if (realSrc === '') {
                // flash地址不对就结束
                return
            }
            realContent.push(makeRealFlashContent(elems[i], realSrc))
        }

        // 将新建的可用的flash内容添加到原内容之上，并且清除原内容
        for (var j = 0; j < flashs.length; j++) {
            var p = setNewContent(realContent[j])
            flashs[j].parentNode.insertBefore(p, flashs[j])
            flashs[j].parentNode.removeChild(flashs[j].nextElementSibling)
            flashs[j].parentNode.removeChild(flashs[j])
        }
    }

    // 得到flash元素的字符串表示，返回一个列表
    function getFlashContent() {
        var container = document.querySelector('table.vwtb')
        var flashs = container.querySelectorAll('span')
        var result = []

        for (var i = 0; i < flashs.length; i++) {
            result.push(flashs[i].innerHTML)
        }

        return result
    }

    // 得到flash视频的真实地址（字符串）
    function getRealFlashSrc(flashElem) {
        try {
            return decodeURIComponent(flashElem.match(/flashvars=".*?"/)[0].split('file=')[1]).split('"')[0]
        } catch (error) {
            console.log('出错了，原因是：' + error)
            return ''
        }
    }

    // 得到真实的flash元素内容（字符串）
    function makeRealFlashContent(flashElem, realSrc) {
        var contentWithoutSrc = flashElem.split(/src=".*?"/).join('').split(/flashvars=".*?"/).join('')
        var contentWithSrc = contentWithoutSrc.split('>')[0] + 'src=' + realSrc + '>'
        return contentWithSrc
    }

    // 新建一个放置可用的flash内容的元素，选择的是p元素
    function setNewContent(realSrc) {
        var p = document.createElement('p')
        p.innerHTML = realSrc
        return p
    }

    return showFlashContent
}())

var mobileViewPage = (function () {
    // 手机打开文章页面时的效果
    function mobileViewPage() {
        showComment()
        showAuthor()
    }

    function showComment() {
        var comment = document.querySelector('#comment')
        var target = document.querySelector('.mn .bm.vw.bgw')

        target.appendChild(comment)

        zaeke.css.setStyle(comment.querySelector('.zch'), {
            'display': 'none'
        })

        zaeke.css.setStyle(comment, {
            'margin': '0 !important'
        })
    }

    function showAuthor() {
        var trs = document.querySelector('.d table').querySelectorAll('tr')
        var authorNode = trs[trs.length - 1]
        var author = authorNode.querySelector('td').innerText
        var emptyTr = authorNode.previousElementSibling

        var div = document.createElement('div')
        div.innerText = author
        zaeke.css.setStyle(div, {
            'boxSizing': 'border-box',
            'borderLeft': '7px solid #17bcb8',
            'padding': '3% 5%',
            'marginBottom': '20px',
            'fontStyle': 'italic',
            'color': 'gray',
            'textAlign': 'left'
        })

        trs[0].parentNode.insertBefore(div, trs[0])
        emptyTr.parentNode.removeChild(emptyTr)
        authorNode.parentNode.removeChild(authorNode)
    }

    return mobileViewPage
}())

Z(function () {
    __main()
})

function __main() {
    if (zaeke.js.isMobileDevice()) {
        mobileViewPage()
    } else {
        viewAjaxAuthorInfo()
        viewComments()
        showFlashContent()
        qa()
        scrollViewPage()
    }
}

function qa() {
    var Zqa = Z('[data-type="qa"]').first()
    var Zlist = Zqa.find('[data-type="qalist"]').first()

    var data = null
    var length = 0

    function getDataLength(data) {
        var items = []
        for (var value in data) {
            if (data.hasOwnProperty(value)) {
                items.push(data)
            }
        }
        return items.length
    }

    function renderQA(data) {
        for (var i = 0; i < getDataLength(data); i++) {
            var Zitem = Z('<div data-type="qaitem"></div>')
            var Zq = Z('<div data-type="question"></div>').html(data[i]["Q"]).css({
                'font-weight': 'bold'
            })
            var Za = Z('<div data-type="answer"></div>').html(data[i]["A"]).css({
                'margin-top': '10px'
            })

            Zitem.append(Zq, Za).css({
                padding: '10px 0',
                'border-bottom': '1px dotted gray'
            })
            Zlist.append(Zitem)
        }
        
    }

    Z.ajax({
        url: 'http://www.zaeke.com/template/zaekev2/static/js/datasource/qa.json',
        success: function (json) {
            var _qa = json.qas
            var _href = []
            _qa.forEach(function (item) {
                _href.push(item.href)
            })
            var index = _href.indexOf(window.location.href)
            if (index !== -1) {
                data = _qa[index].data
                renderQA(data)
            } else {
                Zqa.remove()
                return
            }

        },
        error: function (error) {
            console.log('出错了，问题是：' + error)
        }
    })
}

function viewAjaxAuthorInfo() {
    var uid = Z('#ct .sd .sdub').first().attr('data-uid'); // 获取文章作者的uid

    /*
     * 使用一个粗暴的方法，通过ajax获得内容页面然后抓出数据更新内容
     */
    Z.ajax({
        url: 'http://www.zaeke.com/home.php?mod=space&uid=' + uid + '&do=profile',
        success: function (data) {
            changeAuthorInfo(data);
        },
        error: function (error) {
            console.log('The failed reason is ' + error);
        }
    });

    Z.ajax({
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
        var all = Z('.all').find('a').first();
        all.attr('href', 'http://www.zaeke.com/home.php?mod=space&do=thread&view=me&type=thread&uid=' + uid);
    }

    function changeAuthorInfo(data) {
        /*
         * 用获取的数据依次更换原有的数据
         */
        var data = Z(data).find('#ct').first().find('a');
        var neededData = [];
        var oldData = Z('#ct .sd .sdub a');

        data.each(function () {
            var text = Z(this).text();

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
        var data = Z(data).find('table').find('tr:not(.th)').find('th > a');

        var items = Z('.related-articles').find('.articles-list');

        if (data.length > 3) {
            displayArticlesWithNumber(3);
        } else if (data.length > 0) {
            displayArticlesWithNumber(data.length);
        } else {
            Z('.related-articles').remove();
        }

        function displayArticlesWithNumber(number) {
            for (var i = 0; i < number; i++) {
                var info = data.eq(i);
                var item = Z('<li><a href="" target="_blank"></a></li>');
                var item_info = item.find('a');

                item_info.attr('href', info.attr('href')).text(info.text());
                items.append(item);
            }
        }
    }
}

function viewComments() {
    var ul = document.querySelector('#comment_ul');
    var lis = ul.querySelectorAll('dl');
    var lisLength = lis.length;
    var commentsPagesLength;
    var commentsPage = null;
    var target = ul.querySelector('p');
    var pageLists = null,
        pageListItem = null;
    var i, j = 0;

    // 得到要显示的评论的页数
    commentsPagesLength = howManyPageOfComments(lisLength);

    // 如果只有一页就不做进一步处理了
    if (commentsPagesLength <= 1) {
        return;
    } else {
        // 用于保存评论导航内容的容器（不是保存的评论内容，相当于底部的页码）
        pageLists = document.createElement('div');
        pageLists.setAttribute('data-type', 'viewCommentsPageList');

        for (i = 0; i < commentsPagesLength; i++) {
            // 创建保存评论内容的容器
            commentsPage = document.createElement('div');
            commentsPage.setAttribute('data-type', 'commentsPage');

            // 非第一页的容器默认不显示，用于制造一种可以“导航”的感觉
            if (i > 0) {
                commentsPage.style.display = 'none';
            }

            // 用于将原来的评论装入新的容器内，每一个容器最多装6个，从lis[j]得到，所以j不用重置
            for (; j < (i + 1) * 6; j++) {
                if (j > lisLength - 1) {
                    break;
                }
                commentsPage.appendChild(lis[j]);
            }

            ul.insertBefore(commentsPage, target);

            // 创建导航项目（1、2、3……也就是页数）
            pageListItem = document.createElement('div');
            pageListItem.setAttribute('data-type', 'viewCommentsPageListItem');
            pageListItem.innerText = i + 1;
            pageLists.appendChild(pageListItem);
        }

        ul.insertBefore(pageLists, target);
    }

    clickPageListItem();

    // 给“翻页”按钮绑定点击事件
    function clickPageListItem() {
        var items = document.querySelectorAll('[data-type=viewCommentsPageListItem]');
        var pages = document.querySelectorAll('[data-type=commentsPage]');
        var i, j, index;

        for (i = 0; i < items.length; i++) {
            if (i === 0) {
                items[0].classList.add('show');
            }

            items[i].addEventListener('click', function () {
                index = Number(this.innerText) - 1;
                for (j = 0; j < pages.length; j++) {
                    pages[j].style.display = 'none';
                    pages[index].style.display = 'block';

                    // 设置不同的样式来区别当前处于“哪一页”
                    items[j].classList.remove('show');
                    items[index].classList.add('show');
                }
            }, false);
        }
    }

    // 得到要显示的评论的页数
    function howManyPageOfComments(length) {
        if (length % 6 === 0) {
            return length / 6
        } else {
            return parseInt(length / 6, 10) + 1;
        }
    }
}

function scrollViewPage() {
    var Zcomment = Z('#comment').first();
    var targetTop = Zcomment.offset().top + Zcomment.innerHeight();
    var width = Z('.sdm.bgw.cl').width();

    var Zauthor = document.querySelector('.sdm.bgw.cl')
    var Zarticles = document.querySelector('.related-articles')
    var ls = document.querySelector('.sd').children

    var height = Zauthor.offsetHeight

    Z(window).on('scroll', function () {
        var scrollTop = window.scrollY;
        // for debug
        // console.log('scrollTop is ' + scrollTop + ', targetTop is ' + targetTop);

        if (scrollTop > (targetTop + 20)) {
            if (!Zauthor.getAttribute('data-fixed')) {
                zaeke.css.setStyle(Zauthor, {
                    'position': 'fixed',
                    'top': '20px'
                })
                Zauthor.setAttribute('data-fixed', 'true')
                zaeke.css.setStyle(Zarticles, {
                    'position': 'fixed',
                    'top': height + 20 + 'px',
                    'width': width + 'px'
                })
                for (var i = 0; i < ls.length; i++) {
                    if (ls[i] !== Zauthor && ls[i] !== Zarticles) {
                        zaeke.css.setStyle(ls[i], {
                            'display': 'none'
                        })
                    }
                }
            }
        } else {
            if (Zauthor.getAttribute('data-fixed')) {
                zaeke.css.setStyle(Zauthor, {
                    'position': 'relative',
                    'top': '0'
                })
                Zauthor.removeAttribute('data-fixed')
                zaeke.css.setStyle(Zarticles, {
                    'position': 'relative',
                    'top': '0'
                })
                for (var i = 0; i < ls.length; i++) {
                    if (ls[i] !== Zauthor && ls[i] !== Zarticles) {
                        zaeke.css.setStyle(ls[i], {
                            'display': 'block'
                        })
                    }
                }
            }
        }
    });
}
