if (!navigator.userAgent.toLowerCase().match(/mobile/)) {
  // 添加“加载中”遮罩层
    var width = window.innerWidth
    var height = window.innerHeight
    function randomLoadingString() {
        var words = ['加载中', '我们正在处理一些事情', '坐下来放松', '请稍等', '']
        return '<div id="loadingCover" style="position: fixed; top: 0; left: 0; width:' + width + 'px; height: ' + height + 'px; background-color: #ccc; z-index: 9999; text-align: center; line-height:' + height + 'px' + '; font-size: 30px;">' + words[Math.floor(Math.random() * words.length)] + '</div>'
    }
    document.write(randomLoadingString())
}

Z(function() {
    var newThread = (function () {
        function start() {
            // 新的论坛页面布局从这里开始
            makeSkeleton()
            deleteMultiplePageButtons()
            _clearTags()
            var cover = document.querySelector('#loadingCover')
            if (cover) {
                setTimeout(function () {
                cover.parentNode.removeChild(cover)
                }, 800)
            }
        }

        function _clearTags() {
            // 去掉重复的文章tag，清晰一点
            var tagsNode = document.querySelector('.ptg.mbm.mtn')
            if (!tagsNode) {
                return
            }
            var d = document.querySelector('.mn .d .pvi')
            zaeke.js.insertNewNodeAfterTargetNode(tagsNode, d)
            var tags = tagsNode.querySelectorAll('a')
            if (tags.length <= 1) {
                return
            }
            var all = []
            var noRepeat = []

            ;(function() {
                for (var i = 0; i < tags.length; i++) {
                    all.push(tags[i].innerText)
                }
            }())

            ;(function() {
                for (var i = 0; i < all.length; i++) {
                    if (noRepeat.indexOf(all[i]) === -1) {
                        noRepeat.push(all[i])
                    }
                }
            }())

            ;(function() {
                for (var i = 0; i < tags.length; i++) {
                    if (noRepeat.indexOf(tags[i].innerText) !== -1) {
                        var index = noRepeat.indexOf(tags[i].innerText)
                        noRepeat.splice(index, 1)
                    } else {
                        var comma = tags[i].previousSibling
                        comma.parentNode.removeChild(comma)
                        tags[i].parentNode.removeChild(tags[i])
                    }
                }
            }())
        }

        function makeSkeleton() {
            // 构建mn，ssd那样的骨架结构，用于显示不同的板块内容
            var style = document.createElement('style')
            style.innerText = '#skeleton::after{height: 0;visibility:hidden;display:block;content:".";clear:both;}#skeleton>.mn{float:left;width:660px!important;}#skeleton>.sd{float:right;width:320px;}#postlist,.pgs.mtm.mbm.cl,#f_pst form td.pls,.xi2.mbm.pbm.bbs{display:none;}#f_pst{width:660px;}#modmenu{padding:10px;box-sizing:border-box;margin:10px 0;background-color:white;border-radius:5px;}.h.hm{position:relative;}.h.hm a{position:absolute;right:0;bottom:0;padding:10px 0;}.mtw.mbw{padding:20px;border-radius:5px;box-shadow:0 0 10px #ccc;width:320px;box-sizing:border-box;background-color:white;}.pgbtn a{width:660px;padding:0;}.xl2 li{width:100%;}#pl_top td{background-color:transparent;border:none;}#comment_ul .mbm+dd{margin-left:0;}'
            
            var skeleton = document.createElement('div')
            skeleton.setAttribute('id', 'skeleton')
            skeleton.appendChild(style)
            var target = document.querySelector('#postlist')
            var mn = document.createElement('div')
            mn.classList.add('mn')
            var sd = document.createElement('div')
            sd.classList.add('sd', 'pph')
            skeleton.appendChild(mn)
            skeleton.appendChild(sd)
            target.parentNode.insertBefore(skeleton, target)
            makeAuthorInfo(sd)
            makeArticle(mn)
            makeComments(mn)
            makeOperationFunctions()
            makeRelatedThreads(sd)
            _bind()
        }

        function makeAuthorInfo(elem) {
            // 仿制文章页面的样式来做帖子作者信息
            // 会涉及到很多DOM操作，代码好难看啊
            var bgw = document.createElement('div')
            bgw.classList.add('sdm', 'bgw', 'cl')
            var sdu = document.createElement('div')
            sdu.classList.add('sdu')
            bgw.appendChild(sdu)

            var a = document.createElement('div')
            a.classList.add('z', 'sdua')
            var b = document.createElement('div')
            b.classList.add('z', 'sdub')
            sdu.appendChild(a)
            sdu.appendChild(b)

            var href = document.createElement('a')
            href.setAttribute('href', document.querySelector('#postlist > div td.pls .authi a').getAttribute('href'))
            href.setAttribute('target', '_blank')
            var img = document.createElement('img')
            img.setAttribute('src', document.querySelector('.avatar .avtm img').getAttribute('src'))
            href.appendChild(img)
            var title = document.createElement('strong')
            title.innerText = document.querySelector('.pls.favatar em a').innerText
            a.appendChild(href)
            a.appendChild(title)

            var name = document.createElement('div')
            name.classList.add('sdauthor')
            name.innerText = document.querySelector('.pls.favatar .authi a').innerText
            b.appendChild(name)

            var ul = document.createElement('ul')
            ul.classList.add('sdstat')
            var numbers = document.querySelectorAll('.tns.xg2 a.xi2')
            var l1 = document.createElement('li')
            l1.appendChild(numbers[0].cloneNode(true))
            var s1 = document.createElement('span')
            s1.innerText = '主题'
            l1.appendChild(s1)
            var l2 = document.createElement('li')
            l2.appendChild(numbers[1].cloneNode(true))
            var s2 = document.createElement('span')
            s2.innerText = '帖子'
            l2.appendChild(s2)
            var l3 = document.createElement('li')
            l3.classList.add('lastnode')
            l3.appendChild(numbers[2].cloneNode(true))
            if (l3.querySelector('a span')) {
                // 有可能a里面嵌套了span，所以注意这种情况
                l3.querySelector('a').innerHTML = l3.querySelector('a span').innerText
            }
            var s3 = document.createElement('span')
            s3.innerText = '积分'
            l3.appendChild(s3)
            ul.appendChild(l1)
            ul.appendChild(l2)
            ul.appendChild(l3)
            b.appendChild(ul)

            elem.appendChild(bgw)
        }

        function makeArticle(elem) {
            // 仿制文章页面的样式来做帖子作者信息
            // 会涉及到很多DOM操作，代码好难看啊
            var bgw = document.createElement('div')
            bgw.classList.add('bm', 'vw', 'bgw')

            var title = document.createElement('div')
            title.classList.add('h', 'hm')
            var h1 = document.createElement('h1')
            h1.classList.add('ph')
            h1.innerText = document.querySelector('#thread_subject').innerText
            title.appendChild(h1)
            var copy = document.querySelector('.vwthd .xg1 a').cloneNode(true)
            title.appendChild(copy)
            bgw.appendChild(title)

            var d = document.createElement('div')
            d.classList.add('d')
            var pvi = document.createElement('div')
            pvi.classList.add('pvi', 'cl')
            var z = document.createElement('span')
            z.classList.add('z', 'viewnum')
            var y = document.createElement('span')
            y.classList.add('y', 'commentnum')
            var numbers = document.querySelectorAll('.pls.ptn.pbn .xi1')
            if (numbers.length > 0) {
                // 避免第二页没有阅读量和回复数出现问题
                z.innerText = numbers[0].innerText
                y.innerText = numbers[1].innerText
                pvi.appendChild(z)
                pvi.appendChild(y)
            }
            d.appendChild(pvi)

            var content = document.createElement('div')
            var time = document.createElement('div')
            time.appendChild(document.querySelector('#postlist > div td.plc .authi em').cloneNode(true))
            content.appendChild(time)
            content.appendChild(document.querySelector('.pct').cloneNode(true))
            d.appendChild(content)

            bgw.appendChild(d)

            elem.appendChild(bgw)
        }

        function makeComments(elem, source) {
            // source默认为undefined，这是在第一次加载的时候用的
            // 之后通过ajax更新内容的情况下就会传入对应的数据来源了

            // 仿制文章页面的侧边评论样式来做帖子的回帖内容
            // 会涉及到很多DOM操作，代码好难看啊
            var container = document.createElement('div')
            container.setAttribute('id', 'comment')
            container.classList.add('zc', 'bgw', 'mtw', 'cl')
            var comments = document.createElement('div')
            comments.setAttribute('id', 'comment_ul')
            container.appendChild(comments)

            if (source === undefined) {
                var pl_top = document.querySelector('#pl_top')
                if (pl_top) {
                    // 帖子可以有一个“置顶说明”的功能，将这个功能放在帖子最顶端
                    var mn = document.querySelector('.mn')
                    mn.parentNode.insertBefore(pl_top, mn)
                }
                var elems = document.querySelectorAll('#postlist > div')
            } else {
                var elems = Z(source).find('> div')
            }
            // var elems = source.querySelectorAll('#postlist > div')
            // 第一个是帖子内容，最后一个是发帖的补位，所以要保证有回帖内容至少得有3个以上的大小
            if (elems.length < 3) {
                return;
            } else {
                // 这些数组用于保存需要的信息内容（有的里面是DOM节点，有的只是字符串信息）
                var names = [];
                var imgs = [];
                var postTimes = [];
                var positions = [];
                var contents = []
                
                if (source === undefined) {
                    // i=1是因为elem[0]是文章内容，不能加入评论区。elems.length-1是因为最后一个是系统的补位div，也不能加入评论区。
                    var i = 1;
                } else {
                    // i=0是因为这已经到了第二页之后了，elem[0]不再是文章内容而是回复内容，所以需要加入。
                    var i = 0;
                }
                var _length = elems.length - 1;
                for (; i < _length; i++) {
                    // 通过循环获取到需要的信息并保存
                    var n = elems[i].querySelector('.pls.favatar .pi .authi a')
                    if (!n) {
                        // 为了帖子里面的回复，竟然会有是“知客网友”，幸亏找出来了……
                        n = elems[i].querySelector('.pls.favatar .pi a')
                        n.querySelector('em').parentNode.removeChild(n.querySelector('em'))
                    }
                    names.push(n.cloneNode(true))
                    var m = elems[i].querySelector('.pls.favatar .avatar .avtm')
                    if (!m) {
                        // 同上，“知客网友”是没有头像的，所以要给他加上一个默认的头像
                        m = document.createElement('a')
                        m.classList.add('avtm')
                        var mImg = document.createElement('img')
                        mImg.setAttribute('src', 'http://www.zaeke.com/uc_server/avatar.php?uid=263423&size=small')
                        m.appendChild(mImg)
                    }
                    imgs.push(m.cloneNode(true))
                    // 解决发帖时间长了之后DOM结构变化的问题
                    var time = elems[i].querySelector('.plc .pi .pti .authi em span')
                    if (!time) {
                        time = elems[i].querySelector('.plc .pi .pti .authi em')
                    }
                    postTimes.push(time.cloneNode(true))
                    positions.push(elems[i].querySelector('.plc .pi strong a').innerText)
                    contents.push(elems[i].querySelector('.plc .pct').cloneNode(true))
                }

                for (var i = 0; i < names.length; i++) {
                    // 信息的个数和需要渲染的元素个数是一一对应的，遍历信息添加元素内容即可
                    var dl = document.createElement('dl')
                    dl.classList.add('ptm', 'pbm', 'bbda', 'cl')
                    var dt = document.createElement('dt')
                    dt.classList.add('mbm')
                    dl.appendChild(dt)

                    var span = document.createElement('span')
                    span.classList.add('y', 'xw0', 'xi2')
                    span.innerText = positions[i]
                    dt.appendChild(span)
                    dt.appendChild(imgs[i])
                    dt.appendChild(names[i])
                    postTimes[i].classList.add('xg1', 'xw0')
                    dt.appendChild(postTimes[i])

                    var dd = document.createElement('dd')
                    dd.appendChild(contents[i])
                    dl.appendChild(dd)

                    comments.appendChild(dl)
                }

                // 将新创建的元素内容加入原有的骨架（Skeleton）中
                // 注：不同的方式添加的位置和父元素也不一样，需要进行一下判断
                if (source === undefined) {
                    elem.appendChild(container)
                } else {
                    elem.appendChild(comments)
                }
            }
        }

        function makeOperationFunctions() {
            // 让原来的“推送”，“编辑”等功能按钮也能使用
            var operators = document.querySelectorAll('#postlist .po.hin')
            if (operators.length < 0) {
                return;
            }
            var elems = document.querySelectorAll('#skeleton .mn .pct')
            if (elems.length < 0) {
                return;
            }
            for (var i = 0; i < elems.length; i++) {
                var c = operators[i].cloneNode(true)
                var add = c.querySelector('.replyadd')
                var substract = c.querySelector('.replysubtract')
                if (add) {
                    add.parentNode.removeChild(add)
                }
                if (substract) {
                    substract.parentNode.removeChild(substract)
                }
                elems[i].appendChild(c)
            }
        }

        function makeOperationFunctionsAgain() {
            // 每一次都要重新添加操作按钮，不过这也是没办法的

            // 操作按钮原型
            var operator = document.querySelector('#comment_ul .po.hin')
            var elems = document.querySelectorAll('#comment_ul dl .pct')

            for (var i = 0; i < elems.length; i++) {
                if (!elems[i].querySelector('.po.hin')) {
                    var c = operator.cloneNode(true)
                    // 考虑到“此帖仅作者可见的情况”
                    if (!elems[i].querySelector('.pcb .t_fsz')) {
                        break
                    }
                    var num = elems[i].querySelector('.pcb .t_fsz').nextElementSibling.getAttribute('id').split('_')[1]
                    var fastre = c.querySelector('.fastre')
                    var editp = c.querySelector('.editp')     
                    // 每一个用户权限都不一样，有的没有“编辑”按钮。所以在修改之前要先判断一下
                    if (fastre) {
                        fastre.setAttribute('href', fastre.getAttribute('href').replace(/repquote=\d*/, 'repquote=' + num))
                    }
                    if (editp) {
                        editp.setAttribute('href', editp.getAttribute('href').replace(/pid=\d*/, 'pid=' + num))
                    }
                    
                    // 修复“管理”面板的问题
                    var label = c.querySelector('label')
                    if (label) {
                        // 拼接出来的for和id字符串，供diszuc使用的（应该）
                        var newLabelText = label.getAttribute('for').replace(/\d+/, num)
                        label.setAttribute('for', newLabelText)
                        var _input = label.querySelector('input')
                        _input.setAttribute('id', newLabelText)
                        _input.setAttribute('onclick', _input.getAttribute('onclick').replace(/\d+/, num))
                        _input.setAttribute('value', num)
                    }
                    elems[i].appendChild(c)
                }
            }
        }

        function makeRelatedThreads(elem) {
            // 如果帖子有“相关帖子”部分的话，将其加到右边栏中
            var related = document.querySelector('.mtw.mbw')
            if (related) {
                var items = related.querySelectorAll('li')
                if (items.length > 6) {
                    for (var i = 6; i < items.length; i++) {
                        items[i].parentNode.removeChild(items[i])
                    }
                }
                elem.appendChild(related)
            }
        }

        function deleteMultiplePageButtons() {
            // 去掉（或者隐藏）底部的翻页按钮，如果它们存在的话
            var parts = document.querySelector('.pgs.mtm.mbm.cl')
            if (!parts) {
                parts.parentNode.removeChild(parts)
            }
        }

        function _getMaxPageNumber() {
            // 获得这一个帖子总共有多少页的回帖
            try {
                var maxPage = document.querySelector('.pgs.mtm.mbm.cl').querySelector('label').querySelector('span').innerText
            } catch (error) {
                return 1
            }
            return Number(maxPage.match(/\d+/)[0])
        }

        function _getNextPageNumber(href){
            // 通过解析url得到下一页的标识数字
            return Number(href.split(/\-/g)[2])
        }

        function makeNewHref(href, num) {
            href = href.replace(/\-\d{1,5}\-/, '-' + num + '-') // 五位数的回帖，应该不会达到吧
            return href
        }

        function _bind() {
            function _tool(elem) {
                // 将复用的部分抽出来了一个单独的函数，用于再不影响原有回复的基础上刷新页面
                showWindow('reply', elem.href)
                var timer = setInterval(function () {
                    var form = document.querySelector('#postform')
                    if (form) {
                        clearInterval(timer)
                        _resetOnsubmit(form)
                    }
                }, 100)
                function _resetOnsubmit(elem) {
                    elem.onsubmit = function () {
                        elem.message.value = parseurl(elem.message.value)
                        ajaxpost('postform', 'return_reply', 'return_reply', 'onerror')
                        var timer = setInterval(function () {
                            var form = document.querySelector('#postform')
                            if (!form) {
                                clearInterval(timer)
                                window.location.reload(true)
                            }
                        }, 500)
                    }
                }
            }
            // 底部的页码按钮的点击事件
            var next = document.querySelector('.pgbtn a')
            var maxPageNumber = _getMaxPageNumber()
            if (next) {
                next.onclick = function () {
                    var nextPageNumber = _getNextPageNumber(this.getAttribute('href'))
                    this.innerText = '请稍等'
                    if (nextPageNumber <= maxPageNumber) {
                        Z.ajax({
                            type: 'get',
                            cache: false,
                            url: this.getAttribute('href'),
                            success: function (data) {
                                next.innerText = '下一页'
                                // 关键的数据来源
                                // 来源的方式是截取字符串然后转化为DOM结构
                                var source = data.match(/<div\sid="postlist"([^\>]|\>)*?<form\smethod="post/)[0].split(/<form\smethod="post/)[0]
                                makeComments(document.querySelector('#skeleton .mn #comment'), source)
                                makeOperationFunctionsAgain()

                                nextPageNumber += 1
                                if (nextPageNumber > maxPageNumber) {
                                    next.parentNode.removeChild(next)
                                } else {
                                    next.setAttribute('href', makeNewHref(next.getAttribute('href'), nextPageNumber))
                                }
                            },
                            error: function (error) {
                                console.log('出错了，原因是：' + error)
                            }
                        })
                    } else {
                        this.parentNode.removeChild(this)
                    }
                    return false
                }
            }

            // 每一层“回复”按钮的点击事件，要让之后弹出来的表单返回true
            var fastres = document.querySelectorAll('.fastre')
            if (fastres.length > 0) {
                for (var i = 0; i < fastres.length; i++) {
                    fastres[i].onclick = function () {
                        _tool(this)
                    }
                }
            }

            // 右侧固定位置的“快速回复”按钮的点击事件
            var replyfast = document.querySelector('#scrolltop a.replyfast')
            if (replyfast) {
                replyfast.onclick = function () {
                    _tool(this)
                }
            }

            // 底部“发表回复”按钮点击事件
            var fastpostform = document.querySelector('#fastpostform')
            if (fastpostform) {
                fastpostform.onsubmit = function () {
                    fastpostvalidate(this)
                    setTimeout(function () {
                        window.location.reload()
                    }, 1000)
                }
            }

            _bindWindowScroll()

            function _bindWindowScroll() {
                // 页面滚动的右侧“悬浮”效果
                var author = document.querySelector('.sdm.bgw.cl')
                var related = document.querySelector('.mtw.mbw')
                var height = 0;
                var targetTop = 0
                var maxTop = document.querySelector('#ft').offsetTop
                if (author) {
                    targetTop = author.offsetTop
                    height += author.offsetHeight
                }
                if (related) {
                    var _style = window.getComputedStyle(related)
                    height += (related.offsetHeight + parseFloat(_style.marginTop) + parseFloat(_style.marginBottom))
                }

                Z(window).on('scroll', function () {
                    var scrollTop = window.scrollY
                    if (scrollTop > (targetTop + 20)) {
                        if (author.getAttribute('data-fixed') === null) {
                            zaeke.css.setStyle(author, {
                                'position': 'fixed',
                                'top': '20px'
                            })
                            author.setAttribute('data-fixed', 'true')
                            if (related) {
                                zaeke.css.setStyle(related, {
                                    'position': 'fixed',
                                    'top': author.offsetHeight + 20 + 'px'
                                })
                            }
                            if (scrollTop + height > maxTop - 100) {
                                zaeke.css.setStyle(related, {
                                    'display': 'none'
                                })
                            } else {
                                zaeke.css.setStyle(related, {
                                    'display': 'block'
                                })
                            }
                        }
                    } else {
                        if (author.getAttribute('data-fixed') !== null) {
                            zaeke.css.setStyle(author, {
                                'position': 'relative',
                                'top': '0'
                            })
                            author.removeAttribute('data-fixed')
                            if (related) {
                                zaeke.css.setStyle(related, {
                                    'position': 'relative',
                                    'top': '0'
                                })
                            }
                        }
                    }
                })
            }
        }
        return start
    }());

    var liveStart = (function () {
        // 初始化工作
        var init = (function () {
            var initSkeleton = (function () {
                // 初始化内容框架
                function initSkeleton() {
                    // 顶部banner
                    var banner = document.createElement('div')
                    banner.setAttribute('id', 'zhuanti-banner')
                    initBanner(banner)

                    var event = document.createElement('div')
                    event.setAttribute('id', 'event')
                    
                    var sidebar = document.createElement('div')
                    sidebar.classList.add('sidebar')

                    var content = document.createElement('div')
                    content.classList.add('content')

                    event.appendChild(sidebar)
                    event.appendChild(content)

                    initSidebar(sidebar)
                    initContent(content)

                    var postlist = document.querySelector('#postlist')
                    postlist.parentNode.insertBefore(event, postlist)
                    var wp = document.querySelector('#wp .wp')
                    wp.appendChild(banner)
                } // no bug here

                // 初始化banner
                function initBanner(elem) {
                    var content = document.createElement('div')
                    content.setAttribute('id', 'zhuanti-banner-content')
                    var img = document.createElement('img')
                    var imgFile = document.querySelector('#postlist > div .plc .pct img')
                    img.setAttribute('src', imgFile.getAttribute('zoomfile'))
                    content.appendChild(img)

                    var text = document.querySelector('#postlist > div .plc .pcb td')
                    var time = ''
                    if (text) {
                        time = text.textContent.match(/\d*\/\d*\/\d*\s\d*:\d*:\d*/g)[0]
                    } else {
                        time = new Date().toDateString()
                    }
                    elem.setAttribute('data-startTime', time)

                    var mark = document.createElement('div')
                    mark.classList.add('mark')

                    elem.appendChild(content)
                    elem.appendChild(mark)
                } // no bug here

                // 初始化侧边栏
                function initSidebar(elem) {
                    // 侧边栏直播人员块
                    function initSidebarHost() {
                        var author = document.createElement('div')
                        author.classList.add('peopleIntro', 'sidebar-module', 'block', 'move-span')
                        author.setAttribute('style', 'margin-bottom: 20px !important;')

                        var title = document.createElement('div')
                        title.classList.add('title')
                        var span = document.createElement('span')
                        span.classList.add('titletext')
                        span.innerText = '直播人员'
                        title.appendChild(span)

                        var d = document.createElement('div')
                        var peopleList = document.createElement('div')
                        peopleList.classList.add('peoplelist')
                        var ul = document.createElement('ul')
                        var li = document.createElement('li')
                        var img = document.createElement('img')

                        // var imgName = document.querySelector('#postlist > div .pls.favatar .pi .authi a').innerText
                        // var imgPic = document.querySelector('#postlist > div .pls.favatar div.avatar a.avtm img').getAttribute('src')
                        img.setAttribute('src', 'http://www.zaeke.com/template/zaekev2/static/img/live.png')
                        img.setAttribute('width', '100')
                        img.setAttribute('height', '100')
                        img.setAttribute('alt', '知客数码live')

                        var p1 = document.createElement('p')
                        p1.classList.add('introName')
                        p1.innerText = '知客数码live'

                        var p2 = document.createElement('p')
                        p2.classList.add('introInfo')
                        p2.innerText = '知客数码live官方微博'

                        var p3 = document.createElement('p')
                        var a = document.createElement('a')
                        a.setAttribute('href', 'http://weibo.com/u/5612967473?refer_flag=1001030102_&is_hot=1')
                        a.setAttribute('target', '_blank')
                        a.innerText = '关注ta'
                        p3.appendChild(a)

                        li.appendChild(img)
                        li.appendChild(p1)
                        li.appendChild(p2)
                        li.appendChild(p3)

                        ul.appendChild(li)
                        peopleList.appendChild(ul)
                        d.appendChild(peopleList)

                        author.appendChild(title)
                        author.appendChild(d)

                        // 加载需要的js文件
                        var script = document.createElement('script')
                        script.setAttribute('src', 'template/zaekev2/static/js/event/autoRefresh.js')

                        author.appendChild(script)

                        return author
                    }

                    // 侧边栏定时刷新
                    function initSideBarTimer() {
                        var script = document.createElement('script')
                        script.setAttribute('src', 'http://www.zaeke.com/template/zaekev2/static/js/event/autoRefresh.js')
                        return script
                    }

                    // 侧边栏分享块
                    function initSidebarShare() {
                        var share = document.createElement('div')
                        share.classList.add('share')

                        var a1 = document.createElement('a')
                        a1.setAttribute('href', 'http://weibo.com/zhikeshuma?refer_flag=1001030101_&is_hot=1')
                        a1.setAttribute('target', '_blank')
                        var img1 = document.createElement('img')
                        img1.setAttribute('src', 'http://www.zaeke.com/template/zaekev2/static/img/live.png')
                        img1.setAttribute('alt', '知客数码')
                        var p1 = document.createElement('p')
                        p1.innerText = '知客数码'
                        a1.appendChild(img1)
                        a1.appendChild(p1)

                        var a2 = document.createElement('a')
                        a2.setAttribute('href', 'javascript:void(0);')
                        var img2 = document.createElement('img')
                        img2.setAttribute('src', 'http://www.zaeke.com/template/zaekev2/static/img/wechat.png')
                        img2.setAttribute('alt', '知客数码微信公众号')
                        img2.setAttribute('id', 'wechatIcon')
                        var p2 = document.createElement('p')
                        p2.innerText = '关注“知客数码”'
                        a2.appendChild(img2)
                        a2.appendChild(p2)

                        // var script = document.createElement('script')
                        // script.setAttribute('src', 'http://www.zaeke.com/template/zaekev2/static/js/event/wechatcode.js')

                        share.appendChild(a1)
                        share.appendChild(a2)
                        // share.appendChild(script)

                        return share
                    }

                    // 侧边栏相关文章（老板需求）
                    function initSidebarRelate() {
                        var relate = document.querySelector('.mtw.mbw');
                        if (relate) {
                            var copy = relate.cloneNode(true);
                            var li = copy.querySelectorAll('ul li');
                            if (li.length > 6) {
                                for (var i = 6; i < li.length; i++) {
                                    li[i].parentNode.removeChild(li[i]);
                                }
                            }
                            return copy;
                        } else {
                            var d = document.createElement('div');
                            d.classList.add('mtw', 'mbw');

                            var h = document.createElement('h3');
                            h.classList.add('pbm', 'mbm', 'bbda');
                            h.innerText = '相关帖子';

                            var ul = document.createElement('ul');
                            ul.classList.add('xl', 'xl2', 'cl');

                            d.appendChild(h);
                            d.appendChild(ul);

                            return d;
                        }
                    }

                    var host = initSidebarHost()
                    // 引入Timer的js文件(deprecated)
                    // host.appendChild(initSideBarTimer())
                    elem.appendChild(host)
                    elem.appendChild(initSidebarShare())
                    elem.appendChild(initSidebarRelate());
                } // no bug here

                // 初始化内容区域
                function initContent(elem) {
                    var allData = (function () {
                        var data = {}
                        var divs = document.querySelectorAll('#postlist > div')
                        var length = divs.length - 1 // 最后一个占位的div是访问不了的，所以不用减去
                        
                        if (length <= 1) {
                            console.log('只有一个banner')
                        }

                        for (var i = 1; i < length; i++) {
                            data[i] = {}
                            var time = divs[i].querySelector('.plc .pi .pti .authi em span')
                            // 时间长了DOM结构会变化
                            if (!time) {
                                time = divs[i].querySelector('.plc .pi .pti .authi em').innerText.split(' ')[2]
                            } else {
                                time = time.getAttribute('title').split(' ')[1]
                            }

                            // time format
                            time = time.split(':')
                            time.pop()
                            time = time.join(':')
                            data[i]['time'] = time

                            var pct = divs[i].querySelector('.pct')
                            var _imgs = pct.querySelectorAll('img')
                            var imgs = []
                            for (var j = 0; j < _imgs.length; j++) {
                                if (_imgs[j].getAttribute('zoomfile')) {
                                    imgs.push(_imgs[j])
                                }
                            }
                            if (imgs.length < 1) {
                                // 判断有没有视频文件beta
                                if (pct.querySelector('.blockcode')) {
                                    var codeElem = pct.querySelector('.blockcode');
                                    var code = codeElem.querySelector('li').innerHTML;
                                    code = code.replace(/&lt;/, '<');
                                    code = code.replace(/&gt;/, '>');
                                    data[i]['video'] = code;
                                    codeElem.parentNode.removeChild(codeElem);
                                } else {
                                    data[i]['single'] = true
                                }
                            } else {
                                data[i]['img'] = {}
                                for (var j = 0; j < imgs.length; j++) {
                                    data[i]['img'][j] = imgs[j].getAttribute('zoomfile')
                                }
                            }

                            var text = pct.querySelector('td')
                            // hack?...
                            var _tip = text.querySelectorAll('.aimg_tip')
                            if (_tip) {
                                for (var j = 0; j < _tip.length; j++) {
                                    _tip[j].parentNode.removeChild(_tip[j])
                                }
                            }

                            if (text.childElementCount > 1) {
                                var _l = text.childElementCount;
                                for (var index = 0; index < _l - 1; index++) {
                                    // Element.children是动态变化的，坑
                                    text.removeChild(text.children[0]);
                                }
                            }

                            data[i]['content'] = text.innerText;
                        }
                        return data
                    }())
                    var render = (function () {
                        function render(obj) {
                            var temp = ''
                            if (obj.hasOwnProperty('single')) {
                                temp = renderSingle(obj)
                            } else if (obj.hasOwnProperty('video')) {
                                temp = renderVideo(obj)
                            } else {
                                temp = renderPhotos(obj)
                            }
                            return temp
                        }

                        function renderSingle(obj) {
                            return '<div class="single"><div class="time"><div class="timeContent">' + obj['time'] + '</div></div><div class="point"></div><div class="notes"><div class="notesContent">' + obj['content'] + '</div></div></div>'
                        }

                        function renderVideo(obj) {
                            return '<div class="post"><div class="time"><div class="timeContent">' + obj['time'] + '</div></div><div class="point"></div><a href="javascript:void(0);"><div data-type="videoContent">' + obj['video'] + '</div><div class="postinfo"><div class="postinfoContent">' + obj['content'] + '</div></div></a></div>'
                        }

                        function renderPhotos(obj) {
                            var photosTemp = ''
                            var img // 迭代变量
                            var length = zaeke.js.lengthOfObject(obj['img'])
                            var collapse // 按钮

                            if (length === 0) {
                                // 防止编辑们弄错了格式，明明是单独一句话的变成了带图片的内容。
                                return renderSingle(obj);
                            }

                            for (img in obj['img']) {
                                photosTemp += '<img src="' + obj['img'][img] + '">'
                            }

                            if (length > 2) {
                                collapse = '<div data-type="collapse">更多图片</div>';
                                photosTemp += collapse;
                            }

                            return '<div class="post"><div class="time"><div class="timeContent">' + obj['time'] + '</div></div><div class="point"></div><a href="javascript:void(0);">' + photosTemp + '<div class="postinfo"><div class="postinfoContent">' + obj['content'] + '</div></div></a></div>'
                        }

                        return render
                    }())
                    for (var data in allData) {
                        var temp = render(allData[data])
                        elem.innerHTML += temp
                    }
                }

                return initSkeleton
            }()) /* 这里可能会有bug，不过还没发现 */

            var initBind = (function () {
                function bind() {
                    bindWechatIcon()
                    bindContentPhotos()
                    bindScrollLivePage()
                    fix();
                }

                // 初始化的修复工作
                // 主要是让超过两张图片的post隐藏多余的图片，并且绑定“更多图片”按钮事件
                function fix() {
                    var posts = document.querySelectorAll('.post');
                    for (var i = 0; i < posts.length; i++) {
                        var imgs = posts[i].querySelectorAll('img');
                        if (imgs.length > 2) {
                            var container = document.createElement('div');
                            container.setAttribute('data-type', 'container');

                            container.style.height = 0;
                            container.style.overflow = 'hidden';
                            container.style.transition = 'height 0.5s';

                            for (var j = 0; j < imgs.length; j++) {
                                if (j > 1) {
                                    container.appendChild(imgs[j]);
                                }
                            }

                            var collapse = posts[i].querySelector('[data-type=collapse]');
                            collapse.parentNode.insertBefore(container, collapse);
                            posts[i].setAttribute('data-collapse', true);
                        }
                    }

                    // bind event function
                    ;(function () {
                        var items = document.querySelectorAll('[data-type=collapse]');
                        for (var i = 0; i < items.length; i++) {
                            items[i].addEventListener('click', function () {
                                var parent = this.parentNode.parentNode;
                                var container = this.previousElementSibling;
                                var length = container.querySelectorAll('img').length;

                                if (parent.getAttribute('data-collapse') === 'true') {
                                    // 动态判断区域的高度
                                    if (zaeke.js.isMobileDevice()) {
                                        container.style.height = judgeLine(length, 1) * (window.innerWidth * 0.94 * 0.96 * 225 / 300) + 20 + 'px';
                                    } else {
                                        container.style.height = judgeLine(length, 2) * 245 + 'px';
                                    }
                                    this.innerText = '收起';
                                    parent.setAttribute('data-collapse', 'false');
                                } else {
                                    container.style.height = 0;
                                    this.innerText = '更多图片';
                                    parent.setAttribute('data-collapse', 'true');
                                }
                            }, false);
                        }

                        // judge function
                        function judgeLine(total, perLine) {
                            if (total % perLine === 0) {
                                return total / perLine;
                            } else {
                                return parseInt(total / perLine) + 1;
                            }
                        }
                    }());
                }

                // 绑定微信图标的鼠标移入移除事件
                function bindWechatIcon() {
                    var icon = document.querySelector('#wechatIcon')
                    icon.addEventListener('mouseover', function () {
                        var code = document.querySelector('.wechat-code')
                        if (code) {
                            return
                        }
                        // code是最外面的那层
                        code = document.createElement('div')
                        code.classList.add('wechat-code')
                        var position = icon.getBoundingClientRect()
                        zaeke.css.setStyle(code, {
                            left: position.left - icon.offsetWidth / 4 + 'px',
                            top: position.top + icon.offsetHeight + 40 + 'px',
                            width: '150px',
                            height: '150px',
                            opacity: 0,
                            zIndex: 100,
                            position: 'fixed'
                        })

                        // 二维码图片文件
                        var img = document.createElement('img')
                        img.setAttribute('src', 'template/zaekev2/static/img/wechatCode.png')
                        img.setAttribute('alt', '知客数码微信公众号二维码')
                        img.setAttribute('style', 'width: 100%;')

                        // 顶端三角形
                        var triangle = document.createElement('div')
                        triangle.classList.add('triangle')
                        zaeke.css.setStyle(triangle, {
                            position: 'absolute',
                            top: '-40px',
                            left: '55px',
                            width: 0,
                            height: 0,
                            boxSizing: 'border-box',
                            border: '20px solid transparent',
                            borderBottom: '20px solid white'
                        })

                        code.appendChild(triangle)
                        code.appendChild(img)

                        document.body.appendChild(code)

                        Z(code).animate({
                            opacity: 1,
                            top: '+=20px'
                        })
                    }, false)
                    icon.addEventListener('mouseout', function () {
                        var code = document.querySelector('.wechat-code')
                        if (code) {
                            Z(code).animate({
                                opacity: 0,
                                top: '-=20px'
                            }, function () {
                                code.parentNode.removeChild(code)
                            })
                        }
                    }, false)
                } // no bug here

                // 绑定内容内图片的点击事件
                function bindContentPhotos() {
                    if (zaeke.js.isMobileDevice()) {
                        return
                    }
                    var imgs = document.querySelector('#event .content').querySelectorAll('img')
                    
                    // 为每一张图片绑定点击事件，触发scale函数
                    for (var i = 0; i < imgs.length; i++) {
                        imgs[i].addEventListener('click', function () {
                            var index = zaeke.js.indexInParentNode(this)
                            if (this.parentNode.nodeName !== 'A') {
                                index += 2
                            }
                            if (window.innerWidth > 1000) {
                                scale(this, index)
                            }
                        }, false)
                    }

                    function scale(elem, index) {
                        // index是图片的索引值。知客网站依赖的轮播插件需要图片的索引值来进行图片的位置处理
                        var parent = elem.parentNode;
                        if (parent.nodeName.toLowerCase() === 'div') {
                            parent = parent.parentNode;
                        }
                        var imgs = parent.querySelectorAll('img')
                        var info = ''
                        var res = elem.parentNode.querySelector('.postinfoContent')
                        if (res) {
                            info = res.innerText
                        } else {
                            info = elem.parentNode.parentNode.querySelector('.postinfoContent').innerText
                        }

                        // 图片显示区域
                        var imgScale = document.createElement('div')
                        imgScale.setAttribute('id', 'img_scale')
                        imgScale.setAttribute('style', 'left:' + (window.innerWidth - 1000) / 2 + 'px; top:' + (window.innerHeight - 600) / 2 + 'px')

                        // 放置所有图片的地方
                        var imgsFile = document.createElement('div')
                        imgsFile.classList.add('imgs_file')
                        imgsFile.setAttribute('style', 'width: 800px; height: 600px;')

                        // 将图片文件放置于imgsFile中
                        for (var i = 0; i < imgs.length; i++) {
                            var temp = imgs[i].cloneNode(true)
                            temp.setAttribute('style', 'width: 100%; height: 100%;')
                            imgsFile.appendChild(temp)
                        }

                        // render slide
                        if (imgs.length > 1) {
                            Z(imgsFile).slidesjs({
                                width: 800,
                                height: 600,
                                start: index + 1,
                                pagination: false,
                                navigation: {
                                    active: true,
                                    effect: 'fade'
                                },
                                effect: {
                                    fade: {
                                        speed: 200,
                                    }
                                }
                            })
                        }

                        // 图片所携带的文字信息
                        var imgInfo = document.createElement('div')
                        imgInfo.classList.add('img_scale_info')
                        imgInfo.innerText = info

                        // 右上角的“关闭”按钮
                        var closeButton = document.createElement('div')
                        closeButton.classList.add('close_button')
                        closeButton.addEventListener('click', function () {
                            var imgScale = document.querySelector('#img_scale')
                            if (imgScale) {
                                imgScale.parentNode.removeChild(imgScale)
                                var cover = document.querySelector('[data-type=imageScaleCover]')
                                cover.parentNode.removeChild(cover)
                            } else {
                                console.log('hehe')
                            }
                        }, false)

                        imgScale.appendChild(imgsFile)
                        imgScale.appendChild(imgInfo)
                        imgScale.appendChild(closeButton)

                        // add cover
                        var cover = document.createElement('div')
                        cover.setAttribute('data-type', 'imageScaleCover')
                        cover.addEventListener('click', function () {
                            this.parentNode.removeChild(this)
                            var imgScale = document.querySelector('#img_scale')
                            imgScale.parentNode.removeChild(imgScale)
                        }, false)

                        document.body.appendChild(cover)
                        document.body.appendChild(imgScale);

                        // hack
                        // Slidesjs first image's display on Chrome & Safari is "none", on Edge is "block", I don't know why.
                        (function () {
                            var hackElements = document.querySelectorAll('.slidesjs-slide');
                            for (var i = 0; i < hackElements.length; i++) {
                                if (hackElements[i].getAttribute('slidesjs-index') == index) {
                                    hackElements[i].style.display = 'block';
                                }
                            }
                        }());
                    }
                } // after hack, no bug here

                // 页面的滚动事件
                function bindScrollLivePage() {
                    var sidebar = document.querySelector('.sidebar')
                    var wp = document.querySelector('#ct')
                    var targetTop = ct.offsetTop + sidebar.offsetHeight
                    var width = sidebar.offsetWidth

                    var people = sidebar.querySelector('.peopleIntro')
                    var share = sidebar.querySelector('.share')
                    var height = 0

                    if (people) {
                        height = people.offsetHeight
                    } else {
                        height = -20
                    }

                    window.addEventListener('scroll', function () {
                        var scrollTop = window.scrollY

                        if (scrollTop > (targetTop + 20)) {
                            if (!share.getAttribute('data-fixed')) {
                                    zaeke.css.setStyle(people, {
                                    'position': 'fixed',
                                    'top': '20px',
                                    'width': '280px'
                                })
                                zaeke.css.setStyle(share, {
                                    'position': 'fixed',
                                    'top': height + 20 + 'px',
                                    'width': width + 'px',
                                    'marginTop': '20px'
                                })
                                share.setAttribute('data-fixed', true)
                            }
                        } else {
                            if (share.getAttribute('data-fixed')) {
                                zaeke.css.setStyle(people, {
                                    'position': 'relative',
                                    'top': 0
                                })
                                zaeke.css.setStyle(share, {
                                    'position': 'relative',
                                    'top': 0,
                                    'marginTop': 0
                                })
                                share.removeAttribute('data-fixed')
                            }
                        }
                    }, false)
                }
                return bind
            }());
            function init() {
                // 加入内嵌样式，简化代码
                var wp = document.querySelector('#wp')
                var style = document.createElement('link')
                style.setAttribute('rel', 'stylesheet')
                style.setAttribute('type', 'text/css')
                style.setAttribute('href', 'http://www.zaeke.com/template/zaekev2/static/css/live.css')
                wp.parentNode.insertBefore(style, wp)

                initSkeleton()
                initBind()
            }
            return init
        }());

        // 加载完页面结构并且初始化之后，再设置底部的Ajax获取“数据”
        var setAjaxEvent = (function () {
            function setAjaxEvent() {
                var next = document.querySelector('.pgbtn a');
                var maxPageNumber = getMaxPageNumber();
                if (next) {
                    next.innerText = '查看更多';
                    next.addEventListener('click', function (e) {
                        var nextPageNumber = getNextPageNumber(this.getAttribute('href'));
                        this.innerText = '请稍等';
                        if (nextPageNumber <= maxPageNumber) {
                            jQuery.ajax({
                                type: 'get',
                                cache: false,
                                url: this.getAttribute('href'),
                                success: function (data) {
                                    next.innerText = '查看更多';
                                    var source = data.match(/<div\sid="postlist"([^\>]|\>)*?<form\smethod="post/)[0].split(/<form\smethod="post/)[0];
                                    updateContent(source);

                                    nextPageNumber += 1
                                    if (nextPageNumber > maxPageNumber) {
                                        next.parentNode.removeChild(next);
                                    } else {
                                        next.setAttribute('href', makeNewHref(next.getAttribute('href'), nextPageNumber));
                                    }
                                },
                                error: function (error) {
                                    console.log('Ajax出错了，原因是：' + error);
                                }
                            });
                        } else {
                            this.parentNode.removeChild(this);
                        }

                        // prevent default action
                        e.preventDefault();
                    }, false);
                }
            }

            function getMaxPageNumber() {
                try {
                    var number = document.querySelector('.pgs.mtm.mbm.cl label span').innerText;
                } catch (error) {
                    return 1;
                }
                return Number(number.match(/\d+/)[0]);
            }

            function getNextPageNumber(href) {
                return Number(href.split(/\-/g)[2]);
            }

            function makeNewHref(href, num) {
                href = href.replace(/\-\d{1,5}\-/, '-' + num + '-');
                return href;
            }

            // 绑定内容内图片的点击事件
            function bindContentPhotos(elem) {
                if (zaeke.js.isMobileDevice()) {
                    return
                }
                var imgs = elem.find('img')
                
                // 为每一张图片绑定点击事件，触发scale函数
                for (var i = 0; i < imgs.length; i++) {
                    imgs[i].addEventListener('click', function () {
                        var index = zaeke.js.indexInParentNode(this)
                        if (this.parentNode.nodeName !== 'A') {
                            index += 2
                        }
                        if (window.innerWidth > 1000) {
                            scale(this, index)
                        }
                    }, false)
                }

                function scale(elem, index) {
                    // index是图片的索引值。知客网站依赖的轮播插件需要图片的索引值来进行图片的位置处理
                    var parent = elem.parentNode;
                    if (parent.nodeName.toLowerCase() === 'div') {
                        parent = parent.parentNode;
                    }
                    var imgs = parent.querySelectorAll('img')
                    var info = ''
                    var res = elem.parentNode.querySelector('.postinfoContent')
                    if (res) {
                        info = res.innerText
                    } else {
                        info = elem.parentNode.parentNode.querySelector('.postinfoContent').innerText
                    }

                    // 图片显示区域
                    var imgScale = document.createElement('div')
                    imgScale.setAttribute('id', 'img_scale')
                    imgScale.setAttribute('style', 'left:' + (window.innerWidth - 1000) / 2 + 'px; top:' + (window.innerHeight - 600) / 2 + 'px')

                    // 放置所有图片的地方
                    var imgsFile = document.createElement('div')
                    imgsFile.classList.add('imgs_file')
                    imgsFile.setAttribute('style', 'width: 800px; height: 600px;')

                    // 将图片文件放置于imgsFile中
                    for (var i = 0; i < imgs.length; i++) {
                        var temp = imgs[i].cloneNode(true)
                        temp.setAttribute('style', 'width: 100%; height: 100%;')
                        imgsFile.appendChild(temp)
                    }

                    // render slide
                    if (imgs.length > 1) {
                        Z(imgsFile).slidesjs({
                            width: 800,
                            height: 600,
                            start: index + 1,
                            pagination: false,
                            navigation: {
                                active: true,
                                effect: 'fade'
                            },
                            effect: {
                                fade: {
                                    speed: 200,
                                }
                            }
                        })
                    }

                    // 图片所携带的文字信息
                    var imgInfo = document.createElement('div')
                    imgInfo.classList.add('img_scale_info')
                    imgInfo.innerText = info

                    // 右上角的“关闭”按钮
                    var closeButton = document.createElement('div')
                    closeButton.classList.add('close_button')
                    closeButton.addEventListener('click', function () {
                        var imgScale = document.querySelector('#img_scale')
                        if (imgScale) {
                            imgScale.parentNode.removeChild(imgScale)
                            var cover = document.querySelector('[data-type=imageScaleCover]')
                            cover.parentNode.removeChild(cover)
                        } else {
                            console.log('hehe')
                        }
                    }, false)

                    imgScale.appendChild(imgsFile)
                    imgScale.appendChild(imgInfo)
                    imgScale.appendChild(closeButton)

                    // add cover
                    var cover = document.createElement('div')
                    cover.setAttribute('data-type', 'imageScaleCover')
                    cover.addEventListener('click', function () {
                        this.parentNode.removeChild(this)
                        var imgScale = document.querySelector('#img_scale')
                        imgScale.parentNode.removeChild(imgScale)
                    }, false)

                    document.body.appendChild(cover)
                    document.body.appendChild(imgScale);

                    // hack
                    // Slidesjs first image's display on Chrome & Safari is "none", on Edge is "block", I don't know why.
                    (function () {
                        var hackElements = document.querySelectorAll('.slidesjs-slide');
                        for (var i = 0; i < hackElements.length; i++) {
                            if (hackElements[i].getAttribute('slidesjs-index') == index) {
                                hackElements[i].style.display = 'block';
                            }
                        }
                    }());
                }
            } // after hack, no bug here

            function fix(elem) {
                var posts = elem;
                for (var i = 0; i < posts.length; i++) {
                    var imgs = posts.eq(i).find('img');
                    if (posts.eq(i).find('[data-type="collapse"]').length > 0) {
                        var container = document.createElement('div');
                        container.setAttribute('data-type', 'container');

                        container.style.height = 0;
                        container.style.overflow = 'hidden';
                        container.style.transition = 'height 0.5s';

                        for (var j = 0; j < imgs.length; j++) {
                            if (j > 1) {
                                container.appendChild(imgs.eq(j).get(0));
                            }
                        }

                        var collapse = posts.eq(i).find('[data-type="collapse"]').first().get(0);
                        collapse.parentNode.insertBefore(container, collapse);
                        posts.eq(i).attr('data-collapse', true);
                    }
                }

                // bind event function
                function __fix() {
                    var items = posts.find('[data-type="collapse"]');
                    for (var i = 0; i < items.length; i++) {
                        items.eq(i).get(0).addEventListener('click', function () {
                            var parent = this.parentNode.parentNode;
                            var container = this.previousElementSibling;
                            var length = container.querySelectorAll('img').length;

                            if (parent.getAttribute('data-collapse') === 'true') {
                                // 动态判断区域的高度
                                if (zaeke.js.isMobileDevice()) {
                                    container.style.height = judgeLine(length, 1) * (window.innerWidth * 0.94 * 0.96 * 225 / 300) + 20 + 'px';
                                } else {
                                    container.style.height = judgeLine(length, 2) * 245 + 'px';
                                }
                                this.innerText = '收起';
                                parent.setAttribute('data-collapse', 'false');
                            } else {
                                container.style.height = 0;
                                this.innerText = '更多图片';
                                parent.setAttribute('data-collapse', 'true');
                            }
                        }, false);
                    }

                    // judge function
                    function judgeLine(total, perLine) {
                        if (total % perLine === 0) {
                            return total / perLine;
                        } else {
                            return parseInt(total / perLine) + 1;
                        }
                    }
                }

                __fix()
            } // need fix, no bug here

            // 拿到页面之后解析DOM，更新页面内容
            function updateContent(source) {
                var datas = (function () {
                    source = jQuery(source);
                    var data = {};
                    var elems = source.find('> div');
                    var length = elems.length - 1;

                    if (length < 1) {
                        console.log('没有内容');
                        return
                    }

                    for (var i = 0; i < length; i++) {
                        data[i] = {};
                        var time = elems.eq(i).find('.plc .pi .pti .authi em span');
                        if (time.length < 1) {
                            time = elems.eq(i).find('.plc .pi .pti .authi em').text().split(' ')[2];
                        } else {
                            time = time.attr('title').split(' ')[1];
                        }

                        // time format
                        time = time.split(':');
                        time.pop();
                        time = time.join(':');
                        data[i]['time'] = time;

                        var pct = elems.eq(i).find('.pct').first();
                        var _imgs = pct.find('img')
                        var imgs = []
                        for (var j = 0; j < _imgs.length; j++) {
                            if (_imgs.eq(j).attr('zoomfile')) {
                                imgs.push(_imgs.eq(j).get(0))
                            }
                        }
                        if (imgs.length < 1) {
                            data[i]['single'] = true;
                        } else {
                            data[i]['img'] = {};
                            for (var j = 0; j < imgs.length; j++) {
                                data[i]['img'][j] = imgs[j].getAttribute('zoomfile');
                            }
                        }

                        var text = pct.find('td').first();
                        // hack?...
                        var _tip = text.find('.aimg_tip')
                        if (_tip.length > 0) {
                            for (var j = 0; j < _tip.length; j++) {
                                _tip[j].remove()
                            }
                        }

                        if (text.get(0).childElementCount > 1) {
                            var _l = text.childElementCount
                            for (var index = 0; index < _l - 1; index++) {
                                text.get(0).removeChild(text.children[0])
                            }
                        }
                        data[i]['content'] = text.get(0).innerText
                    }
                    return data;
                }());
                var render = (function () {
                    function render(obj) {
                        var temp = ''
                        if (obj.hasOwnProperty('single')) {
                            temp = renderSingle(obj)
                        } else if (obj.hasOwnProperty('video')) {
                            temp = renderVideo(obj)
                        } else {
                            temp = renderPhotos(obj)
                        }
                        return temp
                    }

                    function renderSingle(obj) {
                        return '<div class="single"><div class="time"><div class="timeContent">' + obj['time'] + '</div></div><div class="point"></div><div class="notes"><div class="notesContent">' + obj['content'] + '</div></div></div>'
                    }

                    function renderVideo(obj) {
                        return '<div class="post"><div class="time"><div class="timeContent">' + obj['time'] + '</div></div><div class="point"></div><a href="#"><div data-type="videoContent">' + obj['video'] + '</div><div class="postinfo"><div class="postinfoContent">' + obj['content'] + '</div></div></a></div>'
                    }

                    function renderPhotos(obj) {
                        var photosTemp = ''
                        var img // 迭代变量
                        var length = zaeke.js.lengthOfObject(obj['img'])
                        var collapse // 按钮

                        if (length === 0) {
                            // 防止编辑们弄错了格式，明明是单独一句话的变成了带图片的内容。
                            return renderSingle(obj);
                        }

                        for (img in obj['img']) {
                            photosTemp += '<img src="' + obj['img'][img] + '">'
                        }

                        if (length > 2) {
                            collapse = '<div data-type="collapse">更多图片</div>';
                            photosTemp += collapse;
                        }

                        return '<div class="post"><div class="time"><div class="timeContent">' + obj['time'] + '</div></div><div class="point"></div><a href="javascript:void(0);">' + photosTemp + '<div class="postinfo"><div class="postinfoContent">' + obj['content'] + '</div></div></a></div>'
                    }

                    return render
                }());
                var content = jQuery('#event .content').first();
                var _content = ''
                for (var data in datas) {
                    var temp = render(datas[data]);
                    _content += temp
                }
                var elem = jQuery(_content)
                content.append(elem)
                bindContentPhotos(elem)
                fix(elem)
            }

            return setAjaxEvent
        }());

        function start() {
            init()
            var cover = document.querySelector('#loadingCover')
            if (cover) {
                setTimeout(function () {
                    cover.parentNode.removeChild(cover);
                    // 直播开始的时间判断
                    // 输入内容时页面不刷新
                    (function () {
                        var startTime = document.querySelector('#zhuanti-banner').getAttribute('data-startTime')

                        var start = new Date(startTime)
                        var end = new Date(start.getTime() + 2 * 60 * 60 * 1000)
                        var now = new Date()

                        var timer = new AutoRefresh(jQuery('.peopleIntro').first())

                        // 在start和end之间的时间内开始自动刷新
                        if (now.getTime() >= start.getTime() && now.getTime() < end.getTime()) {
                            timer.start()
                        } else {
                            timer.stop()
                        }

                        // 光标在里面的时候自动停止自动刷新
                        var input = document.querySelector('#f_pst')
                        if (input) {
                            input = input.querySelector('textarea')
                            input.addEventListener('focus', function () {
                                timer.stop()
                            }, false)
                        }
                    }());
                }, 800)
            }
            setAjaxEvent();

            // 如果不是官方团队则删除掉回复功能
            // 以及添加一个只有管理团队才能看到的按钮，用于后期的改动
            var author = document.querySelector('#liveAuthor').getAttribute('data-group')
            if (author !== '知客官方团队') {
                var postlist = document.querySelector('#postlist')
                var post = document.querySelector('#f_pst')
                var reply = document.querySelector('.pgs.mtm.mbm.cl')
                var form = document.querySelector('#modactions')
                // 新发现的#pgt，这个也要去掉才行
                var pgt = document.querySelector('#pgt');

                postlist.parentNode.removeChild(postlist)
                post.parentNode.removeChild(post)
                reply.parentNode.removeChild(reply)
                if (form) {
                    form.parentNode.removeChild(form)
                }
                if (pgt) {
                    pgt.parentNode.removeChild(pgt);
                }
            } else {
                var button = document.createElement('div')
                button.dataset.type = 'administratorEditButton'
                button.innerText = '编辑'

                // 这是原本的内容
                var postlist = document.querySelector('#postlist')
                postlist.parentNode.insertBefore(button, postlist)

                // 这是modmenu，帖子的管理栏
                var modmenuBar = document.querySelector('#modmenu')

                button.addEventListener('click', function () {
                    var stype = window.getComputedStyle(postlist)
                    var menuStyle = window.getComputedStyle(modmenuBar)

                    if (stype.display === 'none') {
                        postlist.style.display = 'block'
                    } else {
                        postlist.style.display = 'none'
                    }

                    if (menuStyle.display === 'none') {
                        modmenuBar.style.display = 'block'
                    } else {
                        modmenuBar.style.display = 'none'
                    }
                }, false)

                // 注意提示事项
                var tips = document.createElement('div')
                tips.dataset.type = 'administratorTipsLabel'
                tips.textContent = '结束之后请点击“编辑”->“关闭”->“关闭主题”'
                button.parentNode.insertBefore(tips, button)
            }
        }

        return start
    }());


    // 通过移动设备访问时就不必进行样式的修改了
    var threadType = document.querySelector('.ts a')
    if (!threadType || document.querySelector('.ts a').innerText.search('专题') === -1) {
        if (!navigator.userAgent.toLowerCase().match(/mobile/g)) {
            newThread()
        } else {
            m()
        }
    } else {
        liveStart()
    }

    // 手机端页面要求的显示内容
    function m() {
        // 在帖子里面显示发帖人，发帖时间和帖子阅读量     
        Z('#postlist > div:first td.plc:first').prepend(Z('.hm.ptn').first().css({
            'text-align': 'left'
        }).find('span').css({
            'display': 'initial'
        }).end()).prepend(Z('.pi .authi').eq(1).find('em').first()).prepend(Z('.pi .authi').first().find('a').css({
            'font-weight': '500',
            'margin-right': '20px'
        }))

        // 评论区显示用户名称
        Z('#postlist > div td.pls .pls.favatar .pi .authi').each(function() {
            Z(this).prependTo(Z(this).parent().parent().parent().next())
        })

        // 去除每一位用户的签名档
        Z('#postlist > div td.pls').parent().next().hide()

        // 每个评论要明显区分开
        Z('#postlist > div:not(:last)').css({
            'padding': '5% 0',
            'border-bottom': '1px dashed gray'
        })
    }
});