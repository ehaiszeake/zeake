Z(function() {
	var $imgs = Z('.post img')
	var $links = Z('.post a')
	var isPhone = false;

	if (navigator.userAgent.toLowerCase().match(/phone/)) {
		isPhone = true
	}

	$imgs.on('click', function(event) {
		var index = Z(this).parent().find('img').index(this) // 获取图片索引值
		if (!isPhone || window.innerWidth > 1000) {
			scaleImg(this, index)
		}
	})

	$links.on('click', function(event) {
		var e = event || window.event

		/*
		 * 阻止链接进行跳转
		 */
		e.preventDefault()
		e.stopPropagation()
	})
})

function scaleImg(elem, index) {
	/*
	 * elem是传入的img对象，不过是没有进行包装的DOM对象，在jquery里使用需要进行一次包装
	 * index是该img在该imgs里面的索引值，用于img_scale的显示顺序
	 */
	var $imgs = Z(elem).parent().find('img')
	var info = null;
	var res = Z(elem).parent().find('.postinfoContent').text();
	if (!res) {
		info = Z(elem).parent().parent().find('.postinfoContent').text();
	} else {
		info = res;
	}

	var $img_scale = Z('<div id="img_scale"></div>') // 这是最外围的框，包裹所有子元素

	var pageWidth = Z(window).width()
	var pageHeight = Z(window).height()

	$img_scale.css({
		top: (pageHeight - 600) / 2 + 'px',
		left: (pageWidth - 1000) / 2 + 'px'
	})

	var $imgs_file = Z('<div class="imgs_file"></div>').css({
			'width': '800px',
			'height': '600px'
		}) // 这是图片集合的地方，保存着一个post里面的所有img

	$imgs.each(function() {
		$imgs_file.append(Z(this).clone().css({
			width: '100%',
			height: '100%'
		}))
	})

	if ($imgs.length > 1) {
		// slidesjs插件的一个问题，如果只有一张图片的话，那张图片的位置会往左偏。所以要进行一个图片数量的判断，大于一张图片才进行转化
		$imgs_file.slidesjs({
			width: 800,
			height: 600,
			start: index + 1, // start是从1开始算的，而jquery的index是从0开始的，所以要加1
			pagination: false,
			navigation: {
				active: true,
				effect: 'fade'
			},
			effet: {
				fade: {
					speed: 200,
					crossfade: true
				}
			}
		})
	}

	var $img_info = Z('<div class="img_scale_info"></div>') // 放置post文字信息的地方

	$img_info.text(info)

	var $close_button = Z('<div class="close_button"></div>')

	$close_button.on('click', function() {
		var img_scale = Z('#img_scale')

		if (img_scale.length) {
			img_scale.remove()
			Z('[data-type="imageScaleCover"]').remove()
		} else {
			// for debug
			console.log('hehe')
		}
	})

	$img_scale.append($imgs_file).append($img_info).append($close_button)

	// 增加遮罩层
	var cover = document.createElement('div')
	cover.setAttribute('data-type', 'imageScaleCover')
	Z(cover).on('click', function() {
		Z(this).remove()
		Z('#img_scale').remove()
	})

	document.body.appendChild(cover)
	Z('body').append($img_scale)
}