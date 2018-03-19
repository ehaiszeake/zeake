// 页面中内容顶部的图片轮播内容
// with jQuery
function PhotoSlide() {
    this.slide = this.init()
    this.style()
    this.bindEvents()
    this.status = true
    this.timer = null
    this.autoStart()
}

PhotoSlide.prototype.init = function() {
    var slide = document.querySelector('#photoSlide')
    var cover = slide.querySelector('div')
    var ul = cover.querySelector('ul')
    var li = document.createElement('li')
    var img = document.createElement('img')
    li.appendChild(img)

    for (var a in SLIDE) {
        if (SLIDE.hasOwnProperty(a)) {
            var item = li.cloneNode(true)
            item.querySelector('img').setAttribute('src', SLIDE[a])
            ul.appendChild(item)
        }
    }

    return slide
}

PhotoSlide.prototype.style = function() {
    // 垃圾代码，我自己都看不下去……
    var ul = this.slide.querySelector('ul')
    ul.innerHTML = ul.innerHTML + ul.innerHTML
    var len = ul.querySelectorAll('img').length
    var width = Z(ul.querySelector('li')).innerWidth()
    ul.style.width = width * len + 'px'
}

PhotoSlide.prototype.bindEvents = function() {
    var self = this
    var ul = this.slide.querySelector('ul')
    ul.addEventListener('mouseover', function() {
        self.stop()
    })
    ul.addEventListener('mouseout', function() {
        self.status = true
        self.start()
    })
}

PhotoSlide.prototype.stop = function() {
    clearInterval(this.timer)
    this.status = false
}

PhotoSlide.prototype.start = function() {
    var self = this
    clearInterval(this.timer)
    var elem = Z(self.slide).find('ul')
    this.timer = setInterval(function() {
        var left = elem.position().left
        if ((-left) > (elem.width() / 2)) {
            elem.css({
                'left': 0
            })
            left = 0
        }
        elem.css({
            'left': left - 1
        })
    }, 17)
}

PhotoSlide.prototype.autoStart = function() {
    if (this.status) {
        this.start()
    }
}