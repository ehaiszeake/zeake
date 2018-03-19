Z(function () {
    /*
     * 该方法用于绘制时间轴的那一根竖线
     * 其实可以使用其他简单的方式的，不过当时脑子抽筋了就想到了这个方法，后面不想改了
     * 如果时间不够多（小于两个）时间轴不会绘制
     * 会给时间打上标识符，体现出时间的开始和结束
     * 而且为了保持时间轴的位置相对不变，针对浏览器窗口的调整做了相应的事件处理
     */
    var points = Z('.point');

    if (points.length < 2) {
        console.log('数量不够');
        return;
    }

    points.first().addClass('end').end().last().addClass('begin');

    var begin = Z('.point.begin');

    var left = begin.offset().left;
    var tops = [];

    points.each(function () {
        tops.push(Z(this).offset().top);
    });

    tops.sort(function (x, y) {
        return x - y;
    });

    // for debug
    console.log(tops);

    var line = Z('<div id="line"></div>');

    line.css({
        position: 'absolute',
        left: left + begin.width() / 2 - 1, // 1 if 2/2, 2 is line's width
        top: tops[0] + points.first().height() / 2 + 'px',
        width: '2px',
        height: tops[tops.length - 1] - tops[0] + 'px',
        backgroundColor: '#17bcb8'
    });

    Z('body').append(line);
});

window.onresize = function () {
    var left = Z('.point.begin').offset().left;
    Z('#line').css({
        left: left + Z('.begin').width() / 2 - 1 + 'px'
    });
}
