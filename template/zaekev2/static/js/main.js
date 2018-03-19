var Z = jQuery.noConflict();

var zaeke = {
	css: {
		setStyle: function(elem, styles) {
			if (elem) {
				for (var style in styles) {
					if (styles.hasOwnProperty(style)) {
						elem.style[style] = styles[style]
					}
				}
			}
		},
		getHeight: function(elem) {
			// 只有内容高度
			var s = window.getComputedStyle(elem)
			var paddingTopWidth = parseFloat(s.paddingTop)
			var paddingBottomWidth = parseFloat(s.paddingBottom)
			var borderTopWidth = parseFloat(s.borderTopWidth)
			var borderBottomWidth = parseFloat(s.borderBottomWidth)
			return elem.getBoundingClientRect().height - paddingTopWidth - paddingBottomWidth - borderTopWidth - borderBottomWidth
		},
		getInnerHeight: function(elem) {
			// 内容+内边距+边框
			return elem.getBoundingClientRect().height
		},
		getOuterHeight: function(elem) {
			// 内容高度+内边距+边框+外边距
			var height = zaeke.css.getInnerHeight(elem)
			var s = window.getComputedStyle(elem)
			var marginTopWidth = parseFloat(s.marginTop)
			var marginBottomWidth = parseFloat(s.marginBottom)
			return height + marginTopWidth + marginBottomWidth
		},
		getWidth: function(elem) {
			// 只有内容宽度
			var s = window.getComputedStyle(elem)
			var paddingLeftWidth = parseFloat(s.paddingLeft)
			var paddingRightWidth = parseFloat(s.paddingRight)
			var borderLeftWidth = parseFloat(s.borderLeftWidth)
			var borderRightWidth = parseFloat(s.borderRightWidth)
			return elem.getBoundingClientRect().width - paddingLeftWidth - paddingRightWidth - borderLeftWidth - borderRightWidth
		},
		getInnerWidth: function(elem) {
			// 内容+内边距+边框
			return elem.getBoundingClientRect().width
		},
		getOuterWidth: function(elem) {
			// 内容+内边距+边框+外边距
			var width = zaeke.css.getInnerWidth(elem)
			var s = window.getComputedStyle(elem)
			var marginLeftWidth = parseFloat(s.marginLeft)
			var marginRightWidth = parseFloat(s.marginRight)
			return width + marginLeftWidth + marginRightWidth
		},
		getPositionToClient: function(elem) {
			// 相对于视窗口的位置
			var position = elem.getBoundingClientRect()
			return {
				left: position.left,
				top: position.top
			}
		},
		getPositionToParent: function(elem) {
			// 相对于父元素的位置
			var parent = elem.parentNode
			var parentPositon = zaeke.css.getPositionToClient(parent)
			var position = zaeke.css.getPositionToClient(elem)
			return {
				left: position.left - parentPositon.left,
				top: position.top - parentPositon.top
			}
		}
	},
	js: {
		isAnEmptyObject: function(obj) {
			// 判断一个对象是否是空的
			var items = []
			for (var value in obj) {
				if (obj.hasOwnProperty(value)) {
					items.push(value)
				}
			}
			return items.length === 0 ? true : false
		},
		insertNewNodeAfterTargetNode: function(newElem, targetElem) {
			// 在目标节点之后插入新节点
			var next = targetElem.nextElementSibling
			if (next) {
				next.parentNode.insertBefore(newElem, next)
			} else {
				targetElem.parentNode.appendChild(newElem)
			}
		},
		wrapNodeWithGivenNode: function(elem, given) {
			var parent = elem.parentNode
			var newNode = elem.cloneNode(true)
			given.appendChild(newNode)
			parent.replaceChild(given, elem)
		},
		ltrim: function(str) {
			return str.replace(/^(\s)*/g, '')
		},
		rtrim: function(str) {
			return str.replace(/(\s)*$/g, '')
		},
		trim: function(str) {
			return str.replace(/^(\s)*|(\s)*$/g, '')
		},
		isMobileDevice: function () {
			return navigator.userAgent.toLowerCase().match(/mobile/) || window.innerWidth < 500
		},
		lengthOfObject: function (obj) {
			var items = []
			var items

			for (item in obj) {
				if (obj.hasOwnProperty(item)) {
					items.push(item)
				}
			}
			return items.length
		},
		indexInParentNode: function (node) {
			var children = node.parentNode.childNodes
			var index = 0
			for (var i = 0; i < children.length; i++) {
				if (children[i] == node) {
					return index
				}
				if (children[i].nodeType == 1) {
					index++
				}
			}
			return -1
		},
		isSafari: function () {
			// 个人喜好，照顾Safari浏览器的使用者的阅读体验
			return navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;
		}
	}
};

function addMobileStyle() {
	document.write('<link rel="stylesheet" type="text/css" href="template/zaekev2/static/css/mobile.css">')
}

if (zaeke.js.isMobileDevice()) {
	addMobileStyle()
} else {

}