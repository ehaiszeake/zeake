(function () {
    // 名人堂作者
    var legends = [
        {
            name: 'fengweiwen',
            fullName: '冯伟文',
            authorHref: 'http://www.zaeke.com/legend/fengweiwen.php',
            authorImage: 'http://tva2.sinaimg.cn/crop.0.0.180.180.180/62482243jw1e8qgp5bmzyj2050050aa8.jpg'
        },
        {
            name: 'the3rdear',
            fullName: '三耳工作室',
            authorHref: 'http://www.zaeke.com/legend/the3rdear.php',
            authorImage: 'http://img.zaeke.com/portal/201609/28/160653iccwwm99fvken0yp.png'
        },
        {
            name: 'ice',
            fullName: '冰冰Orz',
            authorHref: 'http://www.zaeke.com/legend/ice.php',
            authorImage: 'http://img.zaeke.com/portal/201701/06/160818ucolnfso2nlttlge.png'
        },
        {
            name: 'zack',
            fullName: 'Zack',
            authorHref: 'http://www.zaeke.com/legend/zack.php',
            authorImage: 'http://img.zaeke.com/portal/201701/06/170657yalelt9x97nuwzl6.jpg'
        }
    ]
    var articles = [] // 保存ajax获取的全部文章信息    

    window.addEventListener('load', function () {
        bind()
        render()
        mobile()
    }, false)

    function bind() {
        var start = document.querySelector('.legendHubStart')
        if (start && typeof jQuery !== 'undefined') {
            start.addEventListener('click', function () {
                var target = document.querySelector('#legendArticle')
                var top = jQuery(target).offset().top
                jQuery('html, body').animate({
                    scrollTop: top
                }, 400)
            }, false)
        }
    }

    function render() {
        // previous way
        // if (typeof jQuery !== 'undefined') {
        //     jQuery.ajax({
        //         url: 'http://www.zaeke.com/template/zaekev2/static/js/datasource/hubArticles.json',
        //         success: function (data) {
        //             new LegendContentMaker().render(data.articles, true)
        //         }
        //     })
        // }
        ajaxGetArticles()

        // js单线程真的是有点烦啊，可能是我自己水平不够吧
        setTimeout(function () {
            legends.forEach(function (value, index, array) {
                articles = articles.concat(legends[index].articles)
            })
            // 排序文章
            articles.sort(function (a, b) {
                return new Date(b.time).getTime() - new Date(a.time).getTime()
            })
            new LegendContentMaker().render(articles, true)
        }, 600)
    }

    // ajax获取不同作者文章的信息
    function ajaxGetArticles() {
        // try new way (automatic)
        legends.forEach(function (value, index, array) {
            var legend = legends[index]
            jQuery.ajax({
                url: 'http://www.zaeke.com/template/zaekev2/static/js/datasource/' + legend.name + '.json',
                success: function (data) {
                    var temp = data.articles
                    // 给获得的json加上需要的信息以在作者集合页面显示
                    temp.forEach(function (value, index, array) {
                        temp[index].name = legend.fullName
                        temp[index].authorHref = legend.authorHref
                        temp[index].authorImage = legend.authorImage
                    })
                    legend.articles = temp
                }
            })
        })
    }

    function mobile() {
        if (zaeke.js.isMobileDevice()) {
            var hd = document.querySelector('#hd')
            var topHeight = zaeke.css.getHeight(hd)

            var hub = document.querySelector('#legendHub')
            zaeke.css.setStyle(hub, {
                'position': 'relative',
                'top': topHeight + 'px',
                'height': window.innerHeight - topHeight + 'px'
            })
        }
    }
}())