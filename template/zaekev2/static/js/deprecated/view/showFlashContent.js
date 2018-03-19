// 得到flash元素的字符串表示，返回一个列表
function getFlashContent() {
	var container = document.querySelector('table.vwtb')
	var flashs = container.querySelectorAll('span')
	var result = []

	for (var i = 0; i < flashs.length; i++) {
		result.push(flashs[i].innerHTML)
	}

	return result
}

// 得到flash视频的真实地址（字符串）
function getRealFlashSrc(flashElem) {
	try {
		return decodeURIComponent(flashElem.match(/flashvars=".*?"/)[0].split('file=')[1]).split('"')[0]
	} catch (error) {
		console.log('出错了，原因是：' + error)
		return ''
	}
}

// 得到真实的flash元素内容（字符串）
function makeRealFlashContent(flashElem, realSrc) {
	var contentWithoutSrc = flashElem.split(/src=".*?"/).join('').split(/flashvars=".*?"/).join('')
	var contentWithSrc = contentWithoutSrc.split('>')[0] + 'src=' + realSrc + '>'
	return contentWithSrc
}

// 新建一个放置可用的flash内容的元素，选择的是p元素
function setNewContent(realSrc) {
	var p = document.createElement('p')
	p.innerHTML = realSrc
	return p
}

// 程序从这里开始
function start() {
	var container = document.querySelector('table.vwtb')
	var flashs = container.querySelectorAll('span')

	// 没有flash就结束
	if (flashs.length < 1) {
		return
	}

	// 保存真实的flash地址（字符串）
	var realContent = []

	// 保存页面中存在的所有flash内容
	var elems = getFlashContent()
	for (var i = 0; i < elems.length; i++) {
		var realSrc = getRealFlashSrc(elems[i])
		if (realSrc === '') {
			// flash地址不对就结束
			return
		}
		realContent.push(makeRealFlashContent(elems[i], realSrc))
	}

	// 将新建的可用的flash内容添加到原内容之上，并且清除原内容
	for (var j = 0; j < flashs.length; j++) {
		var p = setNewContent(realContent[j])
		flashs[j].parentNode.insertBefore(p, flashs[j])
		flashs[j].parentNode.removeChild(flashs[j].nextElementSibling)
		flashs[j].parentNode.removeChild(flashs[j])
	}
}

Z(function() {
	start()
})