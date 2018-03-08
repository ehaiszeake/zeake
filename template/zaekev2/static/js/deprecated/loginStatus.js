// 将用户头像显示在右上角。如果用户为登陆，显示登陆按钮
function showLoginStatus() {
	var userStatus = document.querySelector('#um a')
		// hack
	userStatus.style.position = 'absolute'
	userStatus.dataset.type = 'loginStatus'

	var target = document.querySelector('#hd h2.z')
	target.appendChild(userStatus)

	initLoginStyle()
}

// 初始化头像样式
function initLoginStyle() {
	var userStatus = document.querySelector('[data-type=loginStatus]')
	var outerElem = document.querySelector('#hd')
	var height = outerElem.getClientRects()[0].height
	console.log(height)
	var userImage = userStatus.querySelector('img')

	zaeke.css.setStyle(userStatus, {
		'position': 'absolute',
		'top': '0',
		'right': '0',
		'width': height + 'px',
		'height': height + 'px',
		'lineHeight': height - 10 + 'px', // 5是padding的大小
		'color': 'white',
		'fontWeight': '200',
		'boxSizing': 'border-box',
		'padding': '5px'
	})

	if (userImage) {
		zaeke.css.setStyle(userImage, {
			'width': '100%',
			'height': 'auto',
			'border': 'none',
			'background': 'none',
			'padding': '0',
			'top': '0',
			'borderRadius': '50%'
		})
	}
}

// 出错了之后的设置样式方法
function rightInitStyle() {
	// 能力有限，目前（2016.05.19）做不了
}

// 当设备屏幕水平时重新设置头像的大小
function resizeLoginStatus() {
	var userStatus = document.querySelector('[data-type=loginStatus]')
	if (!userStatus) {
		userStatus = document.querySelector('#um a')
	}

	var height = document.querySelector('#hd').getClientRects()[0].height

	zaeke.css.setStyle(userStatus, {
		'width': height + 'px',
		'height': height + 'px',
		'lineHeight': height - 20 + 'px',
		'padding': '10px',
		'fontSize': '18px'
	})
}

// 当设备从水平变为垂直时重新设置头像的大小
function resetLoginStatus() {
	var userStatus = document.querySelector('[data-type=loginStatus]')
	if (!userStatus) {
		userStatus = document.querySelector('#um a')
	}

	var height = document.querySelector('#hd').getClientRects()[0].height

	zaeke.css.setStyle(userStatus, {
		'fontSize': '14px',
		'width': height + 'px',
		'height': height + 'px',
		'lineHeight': height - 10 + 'px',
		'padding': '5px'
	})
}

Z(function() {
	// iPad打开桌面端页面就行
	if (navigator.userAgent.toLowerCase().match(/mobile/)) {
		if (!navigator.userAgent.toLowerCase().match(/ipad/)) {
			showLoginStatus()
		}
	}

	// 由于目前的手机浏览器没有实现screen.orientation.onchange，而且我没找到方法检测设备的旋转，所以就不做了
})