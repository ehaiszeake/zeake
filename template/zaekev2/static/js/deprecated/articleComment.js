zaeke['var']['EVENT_PAGE_ARTICLE_COMMENT_READY'] = null;
(function() {
	var url = ''
	if (location.href === "http://www.zaeke.com/events/test.php") {
		url = "http://www.zaeke.com/article-3559-1.html"
		zaeke['var']['EVENT_PAGE_ARTICLE_COMMENT_READY'] = false
	}

	if (zaeke['var']['EVENT_PAGE_ARTICLE_COMMENT_READY'] === false) {
		Z.ajax({
			url: url,
			success: function(data) {
				zaeke['var']['EVENT_PAGE_ARTICLE_COMMENT_READY'] = true
				articleComment(data)
			},
			error: function(e) {
				console.log('出错了，原因是：' + e)
			}
		})
	}

	function articleComment(data) {
		var elem = Z(data).find('#comment')
		Z('.sidebar').append(elem)
	}
}())