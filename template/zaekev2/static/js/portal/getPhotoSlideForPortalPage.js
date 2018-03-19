Z(function() {
	getPhotoSlide()
})

// 获取摄影频道的内容加在其他频道里
function getPhotoSlide() {
	if (!navigator.userAgent.toLowerCase().match(/mobile/)) {
		Z.ajax({
			url: 'http://www.zaeke.com/photo/',
			success: function(data) {
				addPhotoSlide(data)
			},
			error: function(e) {
				console.log('出错了，原因是：' + e)
			}
		})
	}
}

// 将获取到的内容添加到页面中
function addPhotoSlide(data) {
	data = Z(data).find('#photo li > a')

	var div = document.createElement('div')
	div.setAttribute('id', 'd')

	var container = document.createElement('div')
	container.classList.add('sidebar-module')

	var title = document.createElement('div')
	title.classList.add('blocktitle')
	title.classList.add('title')
	var span = document.createElement('span')
	span.innerText = '知客摄影'
	title.appendChild(span)

	container.appendChild(title)
	container.appendChild(div)

	zaeke.css.setStyle(div, {
		'width': '280px',
		'height': '280px',
		'position': 'relative'
	})
	data.each(function() {
		// 给内容添加样式
		setPhotoSlideStyle(this)
			// 给内容绑定对应的事件
		bindPhotoSlideEvents(this)
		div.appendChild(this)
	})
	document.querySelector('.sd.pph').appendChild(container)
		// 实现轮播效果
	Z('#d').slidesjs({
		width: 300,
		height: 300,
		navigation: {
			active: true,
			effect: 'slide'
		},
		play: {
			effect: 'slide',
			auto: true,
			pauseOnHover: true,
			restartDelay: 2500,
			interval: 3000
		},
		pagination: false
	})

	fix()

	function fix() {
		// 样式修改
		div.style.overflow = 'initial'
		var previous = div.querySelector('.slidesjs-previous')
		var next = div.querySelector('.slidesjs-next')

		previous.innerText = '<'
		next.innerText = '>'

		zaeke.css.setStyle(previous, {
			'position': 'absolute',
			'left': '-20px',
			'top': '0',
			'zIndex': '10',
			'width': '20px',
			'height': '280px',
			'lineHeight': '280px',
			'textAlign': 'center',
			'backgroundColor': 'rgba(0,0,0,0.2)',
			'color': 'black',
			'textDecoration': 'none',
			'borderRadius': '0 0 0 4px'
		})

		zaeke.css.setStyle(next, {
			'position': 'absolute',
			'right': '-20px',
			'top': '0',
			'zIndex': '10',
			'width': '20px',
			'height': '280px',
			'lineHeight': '280px',
			'textAlign': 'center',
			'backgroundColor': 'rgba(0,0,0,0.2)',
			'color': 'black',
			'textDecoration': 'none',
			'borderRadius': '0 0 4px 0'
		})
		container.style.paddingBottom = '0'
	}
}

// 给内容添加样式（一次性函数）
function setPhotoSlideStyle(elem) {
	zaeke.css.setStyle(elem, {
		'width': '280px',
		'height': '280px',
		'position': 'relative',
		'display': 'inline-block'
	})
	zaeke.css.setStyle(elem.querySelector('.picinfo'), {
		'position': 'absolute',
		'top': '0',
		'left': '0',
		'width': '280px',
		'height': '280px',
		'backgroundColor': 'rgba(0,0,0,0.8)',
		'color': 'white',
		'opacity': '0',
		'textAlign': 'center',
		'fontSize': '14px',
		'transition': 'opacity 0.7s'
	})
	zaeke.css.setStyle(elem.querySelectorAll('.picinfo p')[0], {
		'padding': '40px 20px 20px 20px'
	})
	zaeke.css.setStyle(elem.querySelectorAll('.picinfo p')[1], {
		'padding': '20px'
	})
}

// 鼠标移入移出事件绑定函数
function bindPhotoSlideEvents(elem) {
	elem.onmouseover = function() {
		zaeke.css.setStyle(elem.querySelector('.picinfo'), {
			'opacity': '1'
		})
	}
	elem.onmouseout = function() {
		zaeke.css.setStyle(elem.querySelector('.picinfo'), {
			'opacity': '0'
		})
	}
}