Z(function () {
    var URLS_TRANSFER = {
        'http://www.zaeke.com/thread-147604-1-2.html': 'http://www.zaeke.com/article-3799-1.html',
        'http://www.zaeke.com/thread-147769-1-1.html': 'http://www.zaeke.com/article-3801-1.html',
        'http://www.zaeke.com/thread-147649-1-1.html': 'http://www.zaeke.com/article-3800-1.html',
        'http://www.zaeke.com/thread-147573-1-1.html': 'http://www.zaeke.com/article-3797-1.html',
        'http://www.zaeke.com/thread-147796-1-1.html': 'http://www.zaeke.com/article-3802-1.html'
    };

    function transfer() {
        var type = document.querySelector('.ts a').innerText;
        if (type === '[资讯]') {
            if (window.location.href in URLS_TRANSFER) {
                window.location.href = URLS_TRANSFER[window.location.href];
            }
        }
    }

    transfer();
});