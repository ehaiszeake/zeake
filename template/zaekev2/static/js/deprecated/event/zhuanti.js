function fixStyle() {
    /*
     * 保证专题集合页各项对其，及其简单的功能
     */
    var zhuanti = Z('#zhuanti').first();
    var events = zhuanti.find('a');

    events.each(function(index) {
        if (index > 0 && (index + 1) % 3 === 0) {
            Z(this).css({
                'margin-right': 0
            });
        }
    });

    zhuanti.css({
        width: '1000px'
    });
}

function loadZhuantiItmes() {
    if (typeof ITEMS === 'undefined' || zaeke.js.isAnEmptyObject(ITEMS)) {
        return;
    }

    var items = [];

    for (var item in ITEMS) {
        if (ITEMS.hasOwnProperty(item)) {
            items.push(item);
        }
    }

    items.reverse();
    var zhuanti = document.querySelector('#zhuanti');
    var item = Z('<a href="" target="_blank"><img src=""></a>');

    var source = confirmLayoutSource(items.length); // source表示专题项目的排列方式

    if (source.numberOfSlide === 0) {
        singleLayoutItems(items, zhuanti, item);
    } else if (source.numberOfSlide === 1 && source.numberOfRetain === 0) {
        singleLayoutItems(items, zhuanti, item);
    } else {
        multipleLayoutItems(items, source, item);
    }
}

function loadZhuantiSlideItems() {
    if (typeof ZHUANTI_SLIDE === 'undefined' || zaeke.js.isAnEmptyObject(ZHUANTI_SLIDE)) {
        return;
    }
    var items = [];

    for (var item in ZHUANTI_SLIDE) {
        if (ZHUANTI_SLIDE.hasOwnProperty(item)) {
            items.push(ZHUANTI_SLIDE[item]);
        }
    }

    var imgs = document.querySelectorAll('#slides img');
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].parentNode.setAttribute('href', items[i]['href']);
        imgs[i].setAttribute('src', items[i]['src']);
    }
}

function confirmLayoutSource(num) {
    var numberOfSlide;
    var numberOfRetain;

    var typeNumber = 9;

    numberOfSlide = Math.floor(num / typeNumber);
    numberOfRetain = num % typeNumber;

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

function singleLayoutItems(items, node, temp) {
    items.forEach(function(value, index, array) {
        var elem = temp.clone();
        elem.find('img').attr('src', ITEMS[value]['src'])
            .parent().attr('href', ITEMS[value]['href']);
        node.appendChild(elem.get(0));
    });
}

function multipleLayoutItems(items, layout, temp) {
    var slides = [];
    for (var i = 0; i < layout.numberOfSlide; i++) {
        var div = document.createElement('div');
        slides.push(div);
    }

    for (var j = 0; j < slides.length; j++) {
        singleLayoutItems(items.splice(0, 9), slides[j], temp)
        document.querySelector('#zhuanti').appendChild(slides[j]);
    }

    makeSlides();
}

function makeSlides() {
    var divs = document.querySelectorAll('#zhuanti > div');
    var length = divs.length;
    var navigator = document.createElement('div');
    navigator.setAttribute('data-type', 'zhuantiNavigator');

    for (var i = 0; i < length; i++) {
        if (i > 0) {
            divs[i].style.display = 'none';
        }
        var navItem = document.createElement('div');
        navItem.setAttribute('data-type', 'zhuantiNavItem');
        navItem.innerText = i + 1;
        navigator.appendChild(navItem);
    }

    navigator.querySelectorAll('div')[0].classList.add('show');
    document.querySelector('#zhuanti').appendChild(navigator);

    bindEvents();
}

function bindEvents() {
    var items = document.querySelectorAll('[data-type=zhuantiNavItem]');
    var divs = document.querySelectorAll('#zhuanti > div');

    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function() {
            var index = Number(this.innerText);
            for (var j = 0; j < divs.length - 1; j++) {
                divs[j].style.display = 'none';
                divs[index - 1].style.display = 'block';
                items[j].classList.remove('show');
                items[index - 1].classList.add('show');
            }
        }, false);
    }
}

Z(function() {
    loadZhuantiSlideItems()
    loadZhuantiItmes();
    fixStyle();
    Z('script[data-data="data"]').remove();
});