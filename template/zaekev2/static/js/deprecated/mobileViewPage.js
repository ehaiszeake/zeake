function mobileViewPage() {
	showComment()
	showAuthor()
}

function showComment() {
	var comment = document.querySelector('#comment')
	var target = document.querySelector('.mn .bm.vw.bgw')

	target.appendChild(comment)

	zaeke.css.setStyle(comment.querySelector('.zch'), {
		'display': 'none'
	})

	zaeke.css.setStyle(comment, {
		'margin': '0 !important'
	})
}

function showAuthor() {
	var trs = document.querySelector('.d table').querySelectorAll('tr')
	var authorNode = trs[trs.length - 1]
	var author = authorNode.querySelector('td').innerText
	var emptyTr = authorNode.previousElementSibling

	var div = document.createElement('div')
	div.innerText = author
	zaeke.css.setStyle(div, {
		'boxSizing': 'border-box',
		'borderRight': '7px solid #17bcb8',
		'padding': '10px 20px',
		'marginBottom': '20px',
		'fontStyle': 'italic',
		'color': 'gray',
		'textAlign': 'right'
	})

	trs[0].parentNode.insertBefore(div, trs[0])
	emptyTr.parentNode.removeChild(emptyTr)
	authorNode.parentNode.removeChild(authorNode)
}

Z(function() {
	if (navigator.userAgent.toLowerCase().match(/mobile/)) {
		mobileViewPage()
	}
})