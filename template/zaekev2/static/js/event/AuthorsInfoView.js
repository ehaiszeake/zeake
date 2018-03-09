/**
 * 名人堂作者页面文章
 * usage: new LegendArticle().render({})
 * 不建议使用
 */
function LegendArticle() {
    this.elem = this.init()
}

LegendArticle.prototype.init = function () {
    var article = document.createElement('section')
    article.classList.add('legendArticleInfo')

    var content = document.createElement('div')
    content.classList.add('legendArticleInfoContent')
    
    var title = document.createElement('h1')
    title.classList.add('legendArticleInfoTitle')
    var time = document.createElement('p')
    time.classList.add('legendArticleInfoTime')

    var line = document.createElement('div')
    line.classList.add('line')
    line.appendChild(document.createElement('div'))

    var description = document.createElement('p')
    description.classList.add('legendArticleInfoDescription')

    var btn = document.createElement('a')
    btn.setAttribute('target', '_blank')
    btn.classList.add('legendArticleInfoDetail')
    btn.innerText = '查看全文'

    var img = document.createElement('div')
    img.classList.add('legendArticleImg')
    var image = document.createElement('div')
    image.classList.add('legendArticleImgFile')

    content.appendChild(title)
    content.appendChild(time)
    content.appendChild(line)
    content.appendChild(description)
    content.appendChild(btn)
    img.appendChild(image)

    article.appendChild(img)
    article.appendChild(content)

    return article
}

/**
 * 这是给内容页面用的
 * args: {
 *   title: string,
 *   time: string,
 *   description: string,
 *   href: string,
 *   figure: image
 * }
 */
LegendArticle.prototype.render = function (args, isRightStyle) {
    var title = this.elem.querySelector('.legendArticleInfoTitle')
    var time = this.elem.querySelector('.legendArticleInfoTime')
    var description = this.elem.querySelector('.legendArticleInfoDescription')
    var btn = this.elem.querySelector('.legendArticleInfoDetail')
    var image = this.elem.querySelector('.legendArticleImgFile')
    
    if (args.hasOwnProperty('title')) {
        title.innerHTML = args['title']
    } else {
        title.innerHTML = '&nbsp;'
    }

    if (args.hasOwnProperty('time')) {
        time.innerText = args['time']
    } else {
        time.innerHTML = '&nbsp;'
    }

    if (args.hasOwnProperty('description')) {
        description.innerText = args['description']
    } else {
        description.innerHTML = '&nbsp;'
    }

    if (args.hasOwnProperty('href')) {
        btn.setAttribute('href', args['href'])
    } else {
        btn.setAttribute('href', '#')
    }

    if (args.hasOwnProperty('figure')) {
        image.setAttribute('style', 'background-image: url(' + args['figure'] + ')')
        if (zaeke.js.isMobileDevice()) {
            image.style.height = window.innerWidth * 218 / 660 + 'px'
        }
    } else {
        image.setAttribute('style', 'bacground-image: url()')
    }

    if (isRightStyle) {
        this.elem.classList.add('articleStyleRight')
    }

    return this
}

/**
 * 名人堂集合页面的文章
 * usage: new LegendHubArticle().render(args)
 * 不建议使用
 */
function LegendHubArticle() {
    this.elem = this.init()
}

LegendHubArticle.prototype.init = function () {
    var article = document.createElement('section')
    article.classList.add('legendHubArticle')

    var figure = document.createElement('div')
    figure.classList.add('legendHubArticleFigure')
    var figureImage = document.createElement('img')
    figureImage.setAttribute('width', 660)
    figureImage.setAttribute('height', 218)
    figure.appendChild(figureImage)

    var content = document.createElement('div')
    content.classList.add('legendHubArticleContent')

    var header = document.createElement('div')
    header.classList.add('legendHubArticleHeader')

    var headerImg = document.createElement('a')
    headerImg.setAttribute('target', '_blank')
    headerImg.innerHTML = '<div class="legendHubArticleImg"><img src=""></div>'
    var name = document.createElement('a')
    name.setAttribute('target', '_blank')
    name.innerHTML = '<p class="legendHubArticleName"></p>'
    var time = document.createElement('p')
    time.classList.add('legendHubArticleTime')
    header.appendChild(headerImg)
    header.appendChild(name)
    header.appendChild(time)

    var title = document.createElement('div')
    title.classList.add('legendHubArticleTitle')
    var description = document.createElement('div')
    description.classList.add('legendHubArticleDescription')
    var detail = document.createElement('a')
    detail.setAttribute('target', '_blank')
    detail.classList.add('legendArticleInfoDetail')
    detail.innerText = '查看全文'

    content.appendChild(header)
    content.appendChild(title)
    content.appendChild(description)
    content.appendChild(detail)

    article.appendChild(figure)
    article.appendChild(content)

    return article
}

/**
 * 这里是给集合页的内容用的
 * args: {
 *   figure: image, // 文章插图
 *   href: string, // 原文地址
 *   authorHref: string // 作者页面地址
 *   authorImage: image, // 作者头像
 *   name: string,
 *   time: string,
 *   title: string,
 *   description: string
 * }
 */
LegendHubArticle.prototype.render = function (args) {
    var figure = this.elem.querySelector('.legendHubArticleFigure')
    var figureImage = figure.querySelector('img')
    var detail = this.elem.querySelector('.legendArticleInfoDetail')
    var headerImg = this.elem.querySelectorAll('.legendHubArticleHeader a')[0]
    var name = headerImg.nextElementSibling || this.elem.querySelectorAll('.legendHubArticleHeader a')[1]
    var time = this.elem.querySelector('.legendHubArticleTime')
    var title = this.elem.querySelector('.legendHubArticleTitle')
    var description = this.elem.querySelector('.legendHubArticleDescription')

    if (args.hasOwnProperty('figure')) {
        figureImage.setAttribute('src', args['figure'])
    } else {
        figure.setAttribute('src', '')
    }

    if (args.hasOwnProperty('href')) {
        detail.setAttribute('href', args['href'])
    }

    if (args.hasOwnProperty('authorHref')) {
        headerImg.setAttribute('href', args['authorHref'])
        name.setAttribute('href', args['authorHref'])
    }

    if (args.hasOwnProperty('authorImage')) {
        headerImg.querySelector('img').setAttribute('src', args['authorImage'])
    } else {
        headerImg.querySelector('img').setAttribute('src', '')
    }

    if (args.hasOwnProperty('name')) {
        name.querySelector('p').innerText = args['name']
    }

    if (args.hasOwnProperty('time')) {
        time.innerText = '测评 | ' + args['time']
    }

    if (args.hasOwnProperty('title')) {
        title.innerHTML = args['title']
    }

    if (args.hasOwnProperty('description')) {
        description.innerText = args['description']
    }

    return this
}

/**
 * create seperator line in design component
 * usage: new LegendSeperatorLine()
 */
function LegendSeperatorLine() {
    this.elem = this.init()
}

LegendSeperatorLine.prototype.init = function () {
    var line = document.createElement('div')
    line.classList.add('seperatorLine')
    return line
}

/**
 * 渲染顶部作者区域内容
 * usage: new LegendTopContent().render({})
 */
function LegendTopContent() {
    this.elem = this.init()
}

LegendTopContent.prototype.init = function () {
    return {
        img: document.querySelector('.legendImg img'),
        name: document.querySelector('.legendName'),
        description: document.querySelector('.legendDescription'),
        toutiao: document.querySelector('.toutiao'),
        weibo: document.querySelector('.weibo'),
        blur: document.querySelector('.legendBanner')
    }
}

/**
 * render top content part, for better visual feeling
 * 
 * args: {
 *   img: image,
 *   name: string,
 *   description: string,
 *   toutiao: href,
 *   weibo: href,
 *   blur: image
 * }
 */
LegendTopContent.prototype.render = function (args) {
    if (args.hasOwnProperty('img')) {
        this.elem.img.setAttribute('src', args['img'])
    } else {
        this.elem.img.setAttribute('src', '')
    }

    if (args.hasOwnProperty('name')) {
        this.elem.name.innerText = args['name']
    } else {
        this.elem.name.innerText = '知客'
    }

    if (args.hasOwnProperty('description')) {
        this.elem.description.innerText = args['description']
    } else {
        this.elem.description.innerText = '知客名人堂'
    }

    if (this.checkValidValue(args, 'toutiao')) {
        this.elem.toutiao.setAttribute('href', args['toutiao'])
    } else {
        this.elem.toutiao.setAttribute('href', 'javascript:void(0);')
        this.elem.toutiao.style.cursor = 'not-allowed'
    }

    if (this.checkValidValue(args, 'weibo')) {
        this.elem.weibo.setAttribute('href', args['weibo'])
    } else {
        this.elem.weibo.setAttribute('href', 'javascript:void(0);')
        this.elem.weibo.style.cursor = 'not-allowed'
    }

    if (this.checkValidValue(args, 'blur')) {
        this.elem.blur.style.backgroundImage = 'url(' + args['blur'] + ')'
    } else {
        this.elem.blur.style.backgroundImage = 'url("http://www.zaeke.com/template/zaekev2/static/img/banner.jpeg")'
    }

    return this
}

/**
 * 检查参数的值是否符合要求
 */
LegendTopContent.prototype.checkValidValue = function (args, value) {
    if (args.hasOwnProperty(value) && args[value] !== "") {
        return true
    } else {
        return false
    }
}

/**
 * main function to create legend content
 * usage: new LegendContentMaker().render([{}, {}, ...], isInHub)
 */
function LegendContentMaker() {
    this.wrapper = document.querySelector('.legendArticleWrapper')
    this.isInHub = false
}

LegendContentMaker.prototype.render = function (items, isInHub) {
    this.isInHub = isInHub
    var source = this.confirmLayoutSource(items.length) // 项目的排列方式
    if (source.numberOfSlide === 0) {
        this.singlePageLayout(items, this.wrapper)
    } else if (source.numberOfSlide === 1 && source.numberOfRetain === 0) {
        this.singlePageLayout(items, this.wrapper)
    } else {
        this.multiplePagesLayout(items, this.wrapper, source)
    }
}

/**
 * 单页面内容布局
 */
LegendContentMaker.prototype.singlePageLayout = function (items, container) {
    var length = items.length
    var line = new LegendSeperatorLine().elem
    if (!this.isInHub) {
        for (var i = 0; i < length; i++) {
            container.appendChild(new LegendArticle().render(items[i], i % 2 === 0).elem)
            if (i != length - 1) {
                container.appendChild(line.cloneNode(true))
            }
        }
    } else {
        for (var i = 0; i < length; i++) {
            container.appendChild(new LegendHubArticle().render(items[i]).elem)
        }
    }
}

/**
 * 多页面内容布局
 */
LegendContentMaker.prototype.multiplePagesLayout = function (items, container, layout) {
    var slides = []
    var slide = document.createElement('div')
    slide.classList.add('legendArticleSlide')

    for (var i = 0; i < layout.numberOfSlide; i++) {
        var div = document.createElement('div')
        div.classList.add('legendArticleSlidePage')
        slides.push(div)
    }

    for (var j = 0; j < slides.length; j++) {
        this.singlePageLayout(items.splice(0, 10), slides[j])
        slide.appendChild(slides[j])
    }

    container.appendChild(slide)

    this.makeSlideNavigator(slides, this.wrapper)
}

/**
 * 创建用于翻页的翻页栏
 */
LegendContentMaker.prototype.makeSlideNavigator = function (source, wrapper) {
    var divs = document.querySelectorAll('.legendArticleSlide > div')
    var length = source.length
    var navigator = document.createElement('div')
    navigator.classList.add('legendSlideNavigator')

    var prev = document.createElement('div')
    prev.innerText = '<'
    prev.classList.add('legendSlideNavigatorItemPrev')
    var next = document.createElement('div')
    next.innerText = '>'
    next.classList.add('legendSlideNavigatorItemNext')

    // 为了隐藏选项的容器
    var shadow = document.createElement('div')
    shadow.innerText = '···'
    shadow.classList.add('legendSlideNavigatorShadow')

    navigator.appendChild(prev)

    for (var i = 0; i < length; i++) {
        // 初始化隐藏第一页之后的内容
        if (i > 0) {
            divs[i].style.display = 'none'
        }
        var navItem = document.createElement('div')
        if (i == 0) {
            navItem.classList.add('show')
        }
        navItem.classList.add('legendSlideNavigatorItem')
        navItem.innerText = i + 1

        if (i > 4) {
            navItem.style.display = 'none'
        }
        navigator.appendChild(navItem)
    }
    navigator.appendChild(next)

    wrapper.appendChild(navigator)
    this.bindEvents()
}

/**
 * 翻页栏的点击事件绑定函数
 */
LegendContentMaker.prototype.bindEvents = function () {
    var pages = this.wrapper.querySelectorAll('.legendArticleSlidePage')
    var items = this.wrapper.querySelectorAll('.legendSlideNavigatorItem')
    var prev = this.wrapper.querySelector('.legendSlideNavigatorItemPrev')
    var next = this.wrapper.querySelector('.legendSlideNavigatorItemNext')
    var self = this

    // 为了阅读方便做的一个回调函数
    function fallBackToTopForReading() {
        var target = document.querySelector('#legendArticle')
        if (target && typeof jQuery !== 'undefined') {
            var top = jQuery(target).offset().top
            window.scrollTo(0, top)
        }
    }

    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function () {
            var index = Number(this.innerText) - 1
            for (var j = 0; j < items.length; j++) {
                pages[j].style.display = 'none'
            }
            pages[index].style.display = 'block'
            self.relayoutNavigatorItems(index)
            fallBackToTopForReading()
        }, false)
    }

    /**
     * 向前翻页键
     */
    prev.addEventListener('click', function () {
        var index = self.getCurrentPageNumber()
        for (var i = 0; i < pages.length; i++) {
            pages[i].style.display = 'none'
        }
        if (index > 0) {
            pages[index - 1].style.display = 'block'
            self.relayoutNavigatorItems(index - 1)
        } else {
            pages[0].style.display = 'block'
        }
        fallBackToTopForReading()
    }, false)

    /**
     * 向后翻页键
     */
    next.addEventListener('click', function () {
        var index = self.getCurrentPageNumber()
        var length = pages.length
        for (var i = 0; i < length; i++) {
            pages[i].style.display = 'none'
        }
        if (index < length - 1) {
            pages[index + 1].style.display = 'block'
            self.relayoutNavigatorItems(index + 1)
        } else {
            pages[length - 1].style.display = 'block'
        }
        fallBackToTopForReading()
    }, false)

}

/**
 * 重新排列导航栏项目
 */
LegendContentMaker.prototype.relayoutNavigatorItems = function (index) {
    var allItems = this.wrapper.querySelectorAll('.legendSlideNavigatorItem')
    var length = allItems.length

    for (var i = 0; i < allItems.length; i++) {
        allItems[i].style.display = 'none'
        allItems[i].classList.remove('show')
    }

    if (index <= 2) {
        for (var i = 0; i <= 4; i++) {
            if (allItems[i]) {
                allItems[i].style.display = 'inline-block'
            }
        }
    } else if (index < length - 2) {
        for (var i = index - 2; i <= index + 2; i++) {
            if (allItems[i]) {
                allItems[i].style.display = 'inline-block'
            }
        }
    } else {
        for (var i = 0; i < 5; i++) {
            if (allItems[length - 1 - i]) {
                allItems[length - 1 - i].style.display = 'inline-block'
            }
        }
    }

    allItems[index].classList.add('show')
}

/**
 * 得到当前显示页面的index值
 */
LegendContentMaker.prototype.getCurrentPageNumber = function () {
    var items = this.wrapper.querySelectorAll('.legendSlideNavigatorItem')
    var index = 0
    for (var i = 0; i < items.length; i++) {
        if (items[i].classList.contains('show')) {
            index = Number(items[i].innerText) - 1
            break
        }
    }
    return index
}

/**
 * 决定页面如何布局的函数，返回值
 * {
 *   numberOfSlide: number // 页面的总数
 *   numberOfRetain: number // 最后一页剩下的元素个数
 * }
 */
LegendContentMaker.prototype.confirmLayoutSource = function (num) {
    var numberOfSlide = 0
    var numberOfRetain = 0

    var typeNumber = 10 // max number per page

    numberOfSlide = Math.floor(num / typeNumber)
    numberOfRetain = num % typeNumber

    if (numberOfSlide === 0) {
        return {
            numberOfSlide: 0,
            numberOfRetain: num
        }
    } else if (numberOfSlide > 0 && numberOfRetain === 0) {
        return {
            numberOfSlide: numberOfSlide,
            numberOfRetain: 0
        }
    } else {
        return {
            numberOfSlide: numberOfSlide + 1,
            numberOfRetain: numberOfRetain
        }
    }
}