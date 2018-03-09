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
		src: 'template/zaekev2/static/img/2016/huawei-matebook-2016/RELATED/1.jpg',
		href: 'http://www.zaeke.com/article-3633-1.html',
		title: '商务新格调 华为国内发布MateBook',
	},
	1: {
		src: 'template/zaekev2/static/img/2016/huawei-matebook-2016/RELATED/2.jpg',
		href: 'http://www.zaeke.com/article-3631-1.html',
		title: '后起之秀 华为MateBook图赏'
	}
}

var CONTENT = {
	0: {
		video: '<embed id="em" src="http://wscdn.miaopai.com/splayer2.1.5.swf?scid=CR4w1lYCKxMWagkpsZNliw__&amp;token=&amp;autopause=false&amp;fromweibo=false" type="application/x-shockwave-flash" autostart="false" width="100%" height="100%" quality="high" allowfullscreen="true" wmode="transparent" allowscriptaccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer">',
		time: '15:00',
		content: 'Huawei MateBook (Product Video)',
		top: true
	},

	1: {
		time: '12:00',
		content: '华为将于今天19:00整举办旗下首款2合1笔记本电脑MateBook的国内发布会，此前在巴塞罗那MWC大会上已经展示过该款产品，华为MateBook的做工和配置都十分吸引人，配备12英寸2160*1440分辨率的屏幕，搭载酷睿M3/M5/M7处理器。国外定价为699美元起，据说本次国内发布的售价会有惊喜。喜欢2合1办公笔记本电脑的朋友不妨看看，也欢迎大家在微博留言进行讨论。',
		img: {
			1: 'template/zaekev2/static/img/2016/huawei-matebook-2016/1.jpg',
			2: 'template/zaekev2/static/img/2016/huawei-matebook-2016/2.jpg'
		}
	},
	2: {
		time: '18:50',
		content: '华为MateBook的发布会选址在北京凤凰媒体中心，小编已抵达现场，华为今晚的“本该如此”发布会将开启时尚新商务。进场啦~',
		img: {
			1: 'template/zaekev2/static/img/2016/huawei-matebook-2016/3.jpg',
			2: 'template/zaekev2/static/img/2016/huawei-matebook-2016/4.jpg',
			3: 'template/zaekev2/static/img/2016/huawei-matebook-2016/5.jpg',
			4: 'template/zaekev2/static/img/2016/huawei-matebook-2016/6.jpg'
		}
	},
	3: {
		time: '19:18',
		content: '已进场，现场工作人员已准备就绪，发布会将于19点30分开始。',
		img: {
			1: 'template/zaekev2/static/img/2016/huawei-matebook-2016/7.jpg',
		}
	},
	4: {
		time: '19:38',
		content: '华为MateBook发布会正式开始，本次发布会的主持人是著名主持人撒贝宁。',
		img: {
			1: 'template/zaekev2/static/img/2016/huawei-matebook-2016/8.jpg',
			2: 'template/zaekev2/static/img/2016/huawei-matebook-2016/9.jpg',
			3: 'template/zaekev2/static/img/2016/huawei-matebook-2016/10.jpg',
			4: 'template/zaekev2/static/img/2016/huawei-matebook-2016/11.jpg'
		}
	},
	5: {
		time: '19:45',
		content: '撒贝宁以其幽默风趣的主持风格为大家分享华为电子产品对人们生活的发展，还讲述了球星梅西的故事。',
		img: {
			1: 'template/zaekev2/static/img/2016/huawei-matebook-2016/12.jpg',
		}
	},
	6: {
		time: '19:48',
		content: '华为移动宽带与家庭产品线总裁上台万飚上台演讲。',
		img: {
			1: 'template/zaekev2/static/img/2016/huawei-matebook-2016/13.jpg',
			2: 'template/zaekev2/static/img/2016/huawei-matebook-2016/14.jpg',
			3: 'template/zaekev2/static/img/2016/huawei-matebook-2016/15.jpg',
			4: 'template/zaekev2/static/img/2016/huawei-matebook-2016/16.jpg',
			5: 'template/zaekev2/static/img/2016/huawei-matebook-2016/17.jpg',
			6: 'template/zaekev2/static/img/2016/huawei-matebook-2016/18.jpg'
		}
	},
	7: {
		time: '19:55',
		content: '万飚分享华为MateBook的设计细节，包括对圆润边框、流线型弧面和铝合金机身。',
		img: {
			1: 'template/zaekev2/static/img/2016/huawei-matebook-2016/19.jpg',
			2: 'template/zaekev2/static/img/2016/huawei-matebook-2016/20.jpg',
			3: 'template/zaekev2/static/img/2016/huawei-matebook-2016/22.jpg',
			4: 'template/zaekev2/static/img/2016/huawei-matebook-2016/23.jpg'
		}
	},
	8: {
		time: '19:55',
		content: 'MateBook支持笔记本和平板随意切换，并且配备类皮质的文件夹式键盘，风格时尚，有人喜欢吗？。',
		img: {
			1: 'template/zaekev2/static/img/2016/huawei-matebook-2016/24.jpg',
			2: 'template/zaekev2/static/img/2016/huawei-matebook-2016/25.jpg',
			3: 'template/zaekev2/static/img/2016/huawei-matebook-2016/26.jpg'
		}
	},
	9: {
		time: '19:04',
		content: 'MateBook配有一块12英寸2160*1440分辨率的屏幕，并且拥有10mm的窄边框，支持护眼模式。',
		img: {
			1: 'template/zaekev2/static/img/2016/huawei-matebook-2016/27.jpg',
			2: 'template/zaekev2/static/img/2016/huawei-matebook-2016/28.jpg',
			3: 'template/zaekev2/static/img/2016/huawei-matebook-2016/29.jpg',
			4: 'template/zaekev2/static/img/2016/huawei-matebook-2016/30.jpg'
		}
	},
	10: {
		time: '20:15',
		content: 'MateBook的重量仅有640g，内置4430mAh高密度电池，能轻松满足一天办公所需。处理器方面搭载智能酷睿m处理器，双核m3、m5、m7，其中m7最高频率可达到3.1GHz，理论性能优秀。',
		img: {
			1: 'template/zaekev2/static/img/2016/huawei-matebook-2016/31.jpg',
			2: 'template/zaekev2/static/img/2016/huawei-matebook-2016/32.jpg',
			3: 'template/zaekev2/static/img/2016/huawei-matebook-2016/33.jpg',
			4: 'template/zaekev2/static/img/2016/huawei-matebook-2016/34.jpg',
			5: 'template/zaekev2/static/img/2016/huawei-matebook-2016/35.jpg',
			6: 'template/zaekev2/static/img/2016/huawei-matebook-2016/36.jpg',
			7: 'template/zaekev2/static/img/2016/huawei-matebook-2016/37.jpg',
			8: 'template/zaekev2/static/img/2016/huawei-matebook-2016/38.jpg',
			9: 'template/zaekev2/static/img/2016/huawei-matebook-2016/39.jpg'
		}
	},
	11: {
		time: '20:17',
		content: '微软高管上台不忘卖一波windows的广告。',
		img: {
			1: 'template/zaekev2/static/img/2016/huawei-matebook-2016/40.jpg',
		}
	},
	12: {
		time: '20:23',
		content: '开始讲MateBook的键盘，具备防泼溅设计。',
		img: {
			1: 'template/zaekev2/static/img/2016/huawei-matebook-2016/41.jpg',
			2: 'template/zaekev2/static/img/2016/huawei-matebook-2016/42.jpg'
		}
	},
	13: {
		time: '20:25',
		content: 'MateBook搭载杜比音效双扬声器，适合用来进行视频会议。',
		img: {
			1: 'template/zaekev2/static/img/2016/huawei-matebook-2016/43.jpg',
			2: 'template/zaekev2/static/img/2016/huawei-matebook-2016/44.jpg'
		}
	},
	14: {
		time: '20:34',
		content: 'MateDock多功能拓展坞的接口丰富，适用于绝大多数PC端使用习惯，支持MateTrans一键上网和文件共享。',
		img: {
			1: 'template/zaekev2/static/img/2016/huawei-matebook-2016/45.jpg',
			2: 'template/zaekev2/static/img/2016/huawei-matebook-2016/46.jpg',
			3: 'template/zaekev2/static/img/2016/huawei-matebook-2016/47.jpg'
		}
	},
	15: {
		time: '20:40',
		content: 'MateDock价格公布，酷睿M3版本4998元，酷睿M5版本6688元，酷睿M5（8GB）版本7388，酷睿M7版9688元。配件方面2合1键盘688元，MatePen 488元，MateDock 588元，价格还满意么？',
		img: {
			1: 'template/zaekev2/static/img/2016/huawei-matebook-2016/48.jpg',
			2: 'template/zaekev2/static/img/2016/huawei-matebook-2016/49.jpg'
		}
	},
	16: {
		time: '20:43',
		content: 'MateBook将于今晚在华为商城、天猫商城、京东商城、苏宁易购等线上平台开始预售，5月31日正式开售。',
		img: {
			1: 'template/zaekev2/static/img/2016/huawei-matebook-2016/50.jpg',
		}
	},
	17: {
		time: '20:43',
		content: 'MateBook发布会到此结束，感谢大家观看，该机的图赏文已推送知客首页，欢迎阅读。',
		img: {
			1: 'template/zaekev2/static/img/2016/huawei-matebook-2016/51.jpg',
			2: 'template/zaekev2/static/img/2016/huawei-matebook-2016/52.jpg',
			3: 'template/zaekev2/static/img/2016/huawei-matebook-2016/53.jpg',
			4: 'template/zaekev2/static/img/2016/huawei-matebook-2016/54.jpg',
		}
	},
}
var SLIDE = {};
var SIDEVIDEO = {}