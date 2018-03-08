function hightlightIcon() {
    "use strict"

    var list = document.querySelector('#thread_types');

    if (!list) {
        return;
    }

    var items = list.querySelectorAll('a');
    var url = window.location.href;

    for (var i = 0; i < items.length; i += 1) {
        if (url === items[i].getAttribute('href')) {
            items[i].firstElementChild.style.backgroundPosition = '0 66px';
        }
    }
}

function hideEventList() {
    var list = document.querySelector('#threadlisttableid').querySelectorAll('tr th.common')
    if (list) {
        for (var i = 0; i < list.length; i++) {
            if (list[i].querySelector('em').innerText.indexOf('专题') !== -1) {
                var p = list[i].parentNode.parentNode
                p.parentNode.removeChild(p)
            }
        }
    }
}

Z(function () {
    hightlightIcon();
    hideEventList()
});