var liveStart = (function () 
{
    function start()
    {
        // live从这里开始
        bindLiveEvents()
        judgeAuthorCorrect()
        deleteSignature();
        deleteContentAuthorInfo();
        deletePostButton()
        makeLiveSubject();
        makeLiveContents(document.querySelector('#postlist'));
        deleteDownloadImageText();
        restyle()
    }

    function restyle()
    {
        // 设置样式，电脑端和手机端是不一样的
        if (!navigator.userAgent.toLowerCase().match(/mobile/g))
        {
            // 电脑端样式
            var subject = document.querySelector('[data-type="liveSubject"]')
            zaeke.css.setStyle(subject, {
                'width': '700px',
                'margin': '30px auto',
                'border': '1px solid #ccc',
                'backgroundColor': 'white'
            })
            zaeke.css.setStyle(subject.querySelector('[data-type="innerLiveSubject"]'), {
                'margin': '20px',
                'fontSize': '18px',
                'padding': '20px 40px',
                'border': '1px solid #ccc'
            })
            zaeke.css.setStyle(subject.querySelector('[data-type="sContent"]'), {
                'margin': '20px 0'
            })

            var postlist = document.querySelector('#postlist')
            zaeke.css.setStyle(postlist, {
                'width': '700px',
                'margin': 'auto',
                'border': 'none',
                'backgroundColor': 'transparent'
            })

            var lists = document.querySelectorAll('#postlist > div')
            for (var i = 0; i < lists.length - 1; i++)
            {
                zaeke.css.setStyle(lists[i], {
                    'boxSizing': 'border-box',
                    'border': '1px solid #ccc',
                    'marginBottom': '20px',
                    'backgroundColor': 'white',
                    'padding': '20px',
                    'position': 'relative'
                })

                var time = lists[i].querySelector('[data-type="tZone"]')
                zaeke.css.setStyle(time,  {
                    'position': 'absolute',
                    'left': '-100px',
                    'top': '0',
                    'border': '1px solid #ccc',
                    'padding': '20px 10px',
                    'backgroundColor': 'white'
                })

                var bar = lists[i].querySelector('[data-type="authorBar"]')
                zaeke.css.setStyle(bar, {
                    'marginBottom': '20px'
                })

                var img = bar.querySelector('.avtm')
                zaeke.css.setStyle(img.querySelector('img'), {
                    'width': '60px',
                    'height': '60px',
                    'borderRadius': '50%'
                })

                zaeke.css.setStyle(img.nextElementSibling, {
                    'fontSize': '20px',
                    'position': 'relative',
                    'left': '20px',
                    'top': '-20px'
                })
            }

            zaeke.css.setStyle(lists[lists.length - 1], {
                'display': 'none'
            })

            var nextButton = document.querySelector('.pgbtn')
            if (nextButton)
            {
                // 下一页按钮样式
                zaeke.css.setStyle(nextButton, {
                    'width': '700px',
                    'margin': 'auto'
                })
            }
        }
        else
        {

        }
    }

    function deleteSignature()
    {
        // 删除内容里面的签名内容
        var signs = document.querySelectorAll('.plc.plm');
        if (signs.length < 0)
        {
            return;
        }
        for (var i = 0; i < signs.length; i++)
        {
            signs[i].style.display = 'none'
        }
    }

    function deleteContentAuthorInfo()
    {
        // 删除内容里面顶部的无用信息
        var info = document.querySelectorAll('.plc .pi');
        if (info.length < 0)
        {
            return;
        }
        for (var i = 0; i < info.length; i++)
        {
            info[i].style.display = 'none'
        }
    }

    function makeLiveSubject()
    {
        // 根据标题内容新建主题
        // 主题是在内容上方的，会凸显出来
        var title = document.querySelector('#thread_subject');
        if (!title)
        {
            return;
        }
        title = title.innerText;
        var subject = document.createElement('div');
        subject.dataset.type = 'liveSubject';

        var inner = document.createElement('div')
        inner.dataset.type = 'innerLiveSubject'
        subject.appendChild(inner)

        var sTitle = document.createElement('div');
        sTitle.dataset.type = 'sTitle';
        sTitle.innerText = '主题内容：';

        var sContent = document.createElement('div');
        sContent.dataset.type = 'sContent';
        sContent.innerText = title;

        var sInfo = document.createElement('div');
        sInfo.dataset.type = 'sInfo';
        var viewCounts = document.querySelector('.hm.ptn .xi1').innerText;
        sInfo.innerText = '阅读量：' + viewCounts;

        inner.appendChild(sTitle);
        inner.appendChild(sContent);
        inner.appendChild(sInfo);

        var target = document.querySelector('#postlist');
        target.parentNode.insertBefore(subject, target);
    }

    function makeLiveContents(container)
    {
        // 将之前的内容进行处理，变成想要的样子
        Z(container).find('> table').remove()
        // Z('#postlist > table').remove(); // 删除没用的东西（阅读量已经被提取了）
        var lists = container.children
        for (var i = 0; i < lists.length-1; i++)
        {
            var authorImg = lists[i].querySelector('.avatar a');
            var authorName = lists[i].querySelector('.authi a');

            var authorBar = document.createElement('div');
            authorBar.dataset.type = 'authorBar';
            authorBar.appendChild(authorImg);
            authorBar.appendChild(authorName);

            var target = lists[i].querySelector('.t_fsz');
            target.parentNode.insertBefore(authorBar, target);

            var time = lists[i].querySelector('.plc .pi .pti .authi em span').getAttribute('title').split(' ')[1];
            var tZone = document.createElement('div');
            tZone.dataset.type = 'tZone';
            tZone.innerText = time;

            target = lists[i].querySelector('table');
            target.parentNode.insertBefore(tZone, target);

            var left = lists[i].querySelectorAll('.pls');
            for (var j = 0; j < left.length; j++)
            {
                left[j].style.display = 'none'
            }
        }
    }

    function deleteDownloadImageText()
    {
        // 删除图片附件上面的文字信息，比如“下载”什么的
        var texts = document.querySelectorAll('p.mbn');
        if (texts.length < 0)
        {
            return;
        }
        for (var i = 0; i < texts.length; i++)
        {
            texts[i].parentNode.removeChild(texts[i]);
        }
    }

    function bindLiveEvents()
    {
        // 按下“发表回复”按钮之后延时0.5s刷新页面
        // 劫持了原来的onsubmit加了一点东西
        var p = document.querySelector('#fastpostform')
        if (p)
        {
            p.onsubmit = function ()
            {
                fastpostvalidate(this)
                setTimeout(function ()
                {
                    window.location.reload()
                }, 500)
            }
        }
        var nextButton = document.querySelector('.pgbtn')
        if (nextButton)
        {
            // 点按“下一页”的时候使用ajax获取内容，然后动态添加到原有的页面中
            nextButton.onclick = function ()
            {
                Z.ajax({
                    url: nextButton.querySelector('a').getAttribute('href'),
                    success: function (data)
                    {
                        // TODO: wtf?!
                    },
                    error: function (error)
                    {
                        console.log('出错了，原因是：' + error)
                    }
                })
                return false
            }
        }
    }

    function deletePostButton()
    {
        // 删除底部的“发帖”，“回复”等内容
        var button = document.querySelector('.pgs.mtm.mbm.cl')
        if (!button)
        {
            return
        }
        else
        {
            button.style.display = 'none'
        }
    }

    function judgeAuthorCorrect()
    {
        // 确保只有官方团队可以进行发帖处理和操作内容（废话，直播欸）
        var elem = document.querySelector('#liveAuthor')
        var info = elem.getAttribute('data-group')
        if (info !== '知客官方团队')
        {
            var post = document.querySelector('#f_pst')
            post.parentNode.removeChild(post)

            var operators = document.querySelectorAll('.po.hin')
            for (var i = 0; i < operators.length; i++)
            {
                operators[i].parentNode.removeChild(operators[i])
            }
        }
        elem.parentNode.removeChild(elem)
    }

    return start
}());