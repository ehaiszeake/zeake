Z(function() {
	scrollEventPage()
})

function scrollEventPage() {
	var Zsidebar = Z('.sidebar').first();
	var targetTop = Zsidebar.offset().top + Zsidebar.innerHeight();
	var width = Zsidebar.width();

	var Zpeople = Zsidebar.find('.peopleIntro').first();
	var Zshare = Zsidebar.find('.share').first();

	var height = Zpeople.innerHeight();

	if (Zpeople.length < 1) {
		Zpeople = Z(null)
		height = -20
	}

	Z(window).on('scroll', function() {
		var scrollTop = window.scrollY;
		// for debug
		// console.log('scrollTop is ' + scrollTop + ', targetTop is ' + targetTop);

		if (scrollTop > (targetTop + 20)) {
			if (Zshare.attr('data-fixed') === undefined) {
				Zpeople.css({
					position: 'fixed',
					top: '20px',
					width: '280px' // 不设置会出错，所以要加上
				});
				Zshare.css({
					position: 'fixed',
					top: height + 20 + 'px',
					width: width + 'px',
					/*
					 * event的板块和论坛的margin是不一样的，所以为了让板块之间产生距离要设置margin属性
					 */
					'margin-top': '20px'
				}).attr('data-fixed', 'true');
			}
		} else {
			if (Zshare.attr('data-fixed') !== undefined) {
				Zpeople.css({
					position: 'relative',
					top: 0
				});
				Zshare.css({
					position: 'relative',
					top: 0,
					'margin-top': 0
				}).removeAttr('data-fixed');
			}
		}
	});
}