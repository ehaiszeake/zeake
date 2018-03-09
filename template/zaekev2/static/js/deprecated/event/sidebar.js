// HOST
;(function($) {
	/*
	 * 根据模板文件里的HOST对象来决定直播人员的信息
	 * 默认的肯定会有知客数码live，后面有再加
	 */
	if (HOST === null) {
		$('#event .peopleIntro').remove();
		return;
	} else if (zaeke.js.isAnEmptyObject(HOST)) {
		return;
	}

	var $ul = $('#event .peoplelist ul').first();
	var $li = $('<li><img src="" width="100" height="100"><p class="introName"></p><p class="introInfo"></p><p><a href="" target="_blank">关注ta</a></p></li></ul>');

	var items = [];

	for (var item in HOST) {
		if (HOST.hasOwnProperty(item)) {
			items.push(item);
		}
	}

	items.forEach(function(value, index, array) {
		var person = $li.clone();
		// 一串DOM结构渲染结构内容
		person.find('img').first().attr('src', HOST[value]['src']).next()
			.text(HOST[value]['name']).next().text(HOST[value]['intro']).next()
			.find('a').first().attr('href', HOST[value]['href']);
		$ul.append(person);
	});
}(jQuery));

// RELATED
;(function($) {
    /*
     * 根据模板文件里的RELATED对象来决定增加的相关文章的数量
     * 这是目前我想到的方法了，以后有更好的会进行更新
     * 把现有的页面结构拆开分成不同的模板，然后分别进行。而目前只能使用更新模板内容
     * 真心无力啊……
     */
    if (zaeke.js.isAnEmptyObject(RELATED) || typeof RELATED === 'undefined') {
        var related = $('.sidebar .related');
        related.remove();
        return;
    }

    var ul = $('.sidebar .related .newslist ul').first();
    var li = $('<li></li>');
    var img = $('<img src="" width="72" height="72">');
    var a = $('<a href="" target="_blank"></a>');
    li.append(img).append(a);

    var items = [];
    for (item in RELATED) {
        if (RELATED.hasOwnProperty(item)) {
            items.push(item);
        }
    }

    items.reverse();

    items.forEach(function(value, index, array) {
        var article = li.clone();
        article.find('img').attr('src', RELATED[value]['src']);
        article.find('a').attr('href', RELATED[value]['href'])
            .text(RELATED[value]['title']);
        ul.append(article);
    });
}(jQuery));

// VIDEO
;(function() {
    /*
     * 根据提供的侧边栏视频嵌入代码放入发布会的视频
     * 老板的需求，不要问为什么
     */
    var video = document.querySelector("#sidebarVideo");
    var target = null;
    if (typeof SIDEVIDEO === 'undefined' || zaeke.js.isAnEmptyObject(SIDEVIDEO)) {
        video.parentNode.removeChild(video);
    } else {
        target = Z(SIDEVIDEO['video']).css({
            width: '280px',
            height: '233px',
        });
        video.querySelectorAll('div')[1].appendChild(target.get(0));
    }
}(jQuery));