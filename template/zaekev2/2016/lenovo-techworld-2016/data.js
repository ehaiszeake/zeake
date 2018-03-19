/*
 * HOST是主持人项目。数据格式：每一项只有四个属性，多了一定会出错
 * var HOST = {
 *   0: {
 *     src: '用户图片链接',
 *     href: '用户信息链接',
 *     name: '用户名称',
 *     title: '用户简介'
 *   },
 *   1: {..}
 * }
 * 
 * RELATED是相关文章。数据格式：每一项只有三个属性，多了一定会出错
 * var RELATED = {
 *   0: {
 *     src: '文章图片链接',
 *     href: '文章链接',
 *     title: '文章标题'
 *   },
 *   1: {..}
 * }
 * 
 * CONTENT主要区域的显示内容。数据格式：分为三类，每一类都有三个属性
 * 三种类型分别为：单独的一句话、带图片的信息、外链视频信息
 * 
 * var CONTENT = {
 *   0: {
 *     singie: true, // true为推荐的值，也可以用任意字符串代替
 *     time: '发布的时间',
 *     content: '发布的内容'
 *   },
 *   1: {
 *     time: 发布的时间,
 *     content: '发布的内容',
 *     img: {
 *       0: '图片链接',
 *       1: '图片链接'
 *     }
 *   },
 *   2: {
 *     video: '外链视频链接',
 *     time: '发布时间',
 *     content: '发布内容'
 *   }
 * }
 * 
 * 如果想让发布的内容置顶，只需在内容里加入top属性，比如：
 * 
 * var CONTENT = {
 *   0: {
 *     single: true,
 *     time: '12:34',
 *     content: 'top test',
 *     top: true
 *   }
 * }
 * 
 * SLIDE是顶部可选的滚动项目。数据格式，只包含图片地址
 * var SLIDE = {
 *     0: '地址',
 *     1: '地址'
 * }
 * 
 * 只需修改格式中的中文内容即可
 * 
 * 由于数据格式为JavaScript对象，所以在每一项内容之后都需要加入英文逗号（,）进行分隔，不然会对着电脑哭出来的。
 * 最后一项内容后不要加入逗号（这是由于这个语言的设计缺陷，不服去砍了Brendan Eich。
 * 冒号（:）后面所有的内容（除了single之后的）都是JavaScript字符串，可以使用单引号（''）或者双引号（""）包围起来。
 * 注意所有使用的标点符号都是英文标点，否则会对着电脑哭出来的。
 */
var HOST = {}
var RELATED = {
	0: {
		title: '模块化设计MOTO Z？配件有亮点',
		src: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/RELATED/r1.jpg',
		href: 'http://www.zaeke.com/article-3628-1.html'
	},
	1: {
		title: 'moto Z再曝光：不仅有多功能模块，还有多材质后盖',
		src: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/RELATED/r2.png',
		href: 'http://www.zaeke.com/article-3709-1.html'
	},
	2: {
		title: '大屏玩法 联想Phab2/Phab2 Plus正式发布',
		src: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/RELATED/R3.jpg',
		href: 'http://www.zaeke.com/article-3749-1.html'
	},
	3: {
		title: '这就是未来？联想展示全新柔性屏幕设备',
		src: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/RELATED/R4.jpg',
		href: 'http://www.zaeke.com/article-3746-1.html'
	},
	4: {
		title: 'Tango首秀 联想PHAB2 Pro亮相',
		src: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/RELATED/R5.jpg',
		href: 'http://www.zaeke.com/article-3747-1.html'
	},
	5: {
		title: '超薄超拓展！MOTO Z/Z Force/Z Force Droid正式发布',
		src: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/RELATED/R6.jpg',
		href: 'http://www.zaeke.com/article-3748-1.html'
	}
}
var CONTENT = {
	1: {
 		time: '00:00',
 		video: '<embed width="640" height="360" allownetworking="all" allowscriptaccess="always" src="http://staticlive.douyutv.com/common/share/play.swf?room_id=652757" quality="high" bgcolor="#000" wmode="window" allowfullscreen="true" allowFullScreenInteractive="true" type="application/x-shockwave-flash">',
 		content: '联想 TechWorld 2016',
		 top: true
	},
	2: {
		time: '12:20',
		content: 'Lenovo Tech Wolrd 发布会会场探秘-大楼远景',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/15.JPG',
			2: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/13.JPG',
			3: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/14.JPG'
		}
	},
	3: {
		time: '12:25',
		content: 'Lenovo Tech Wolrd 发布会会场探秘-入口',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/1.JPG',
			2: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/2.JPG',
			3: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/3.JPG',
			4: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/4.JPG',
			5: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/5.JPG',
			6: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/6.JPG'
		}
	},
	4: {
		time: '12:30',
		content: 'Lenovo Tech Wolrd 发布会会场探秘-内场布置',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/7.png',
			2: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/8.JPG'
		}
	},
	5: {
		time: '12:35',
		content: '小编带你领略 Lenovo Tech Wolrd 旧金山第一现场的人文风光——华人文化扎根。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/9.JPG',
			2: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/10.JPG'
		}
	},
	6: {
		time: '12:40',
		content: '小编带你领略 Lenovo Tech Wolrd 旧金山第一现场的人文风光——城市地标联合广场。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/11.JPG',
			2: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/12.JPG'
		}
	},
	7: {
		time: '12:45',
		content: '小编带你领略 Lenovo Tech Wolrd 旧金山第一现场的人文风光——当地教堂。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/16.JPG',
			2: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/17.JPG',
			3: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/18.JPG'
		}
	},
	8: {
		time: '12:50',
		content: '小编带你领略 Lenovo Tech Wolrd 旧金山第一现场的人文风光——城市地形特殊。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/19.JPG',
			2: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/20.JPG',
			3: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/21.JPG'
		}
	},
	9: {
		time: '12:55',
		content: '小编带你领略 Lenovo Tech Wolrd 旧金山第一现场的人文风光——鸽子很优先。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/22.JPG'
		}
	},
	10: {
		time: '13:00',
		content: '小编带你领略 Lenovo Tech Wolrd 旧金山第一现场的人文风光——旧金山的大学学术氛围。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-techworld-2016/23.JPG'
		}
	}
}
var SLIDE = {}
var SIDEVIDEO = {}