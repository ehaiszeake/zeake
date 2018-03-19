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
 * SIDEVIDEO是老板要求的侧边栏视频项目，不是很懂老板
 * var SIDEVIDEO = {
 *     video: '视频嵌入代码'    
 * }
 * 
 * 只需修改格式中的中文内容即可
 * 
 * 由于数据格式为JavaScript对象，所以在每一项内容之后都需要加入英文逗号（,）进行分隔，不然会对着电脑哭出来的。
 * 最后一项内容后不要加入逗号（这是由于这个语言的设计缺陷，不服去砍了Brendan Eich。
 * 冒号（:）后面所有的内容（除了single之后的）都是JavaScript字符串，可以使用单引号（''）或者双引号（""）包围起来。
 * 注意所有使用的标点符号都是英文标点，否则会对着电脑哭出来的。
 */

var HOST = {};
var RELATED = {
	0: {
		src: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/RELATED/1.jpg',
		href: 'http://www.zaeke.com/thread-123863-1-1.html',
		title: '窄边框大电池 努比亚Z11 Max定于6月7日发布',
	},
	1: {
		src: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/RELATED/2.jpg',
		href: 'http://www.zaeke.com/article-3601-1.html',
		title: '窄边框还是三段式？nubia Z11 Max三色渲染图亮相'
	},
	2: {
		src: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/RELATED/3.jpg',
		href: 'http://www.zaeke.com/article-3735-1.html',
		title: '大屏长续航 努比亚Z11 Max正式发布'
	},
	3: {
		src: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/RELATED/4.jpg',
		href: 'http://www.zaeke.com/article-3733-1.html',
		title: '大不同的惊喜 努比亚 Z11 Max图赏'
	},
	4: {
		src: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/RELATED/5.jpg',
		href: 'http://www.zaeke.com/article-3734-1.html',
		title: '努比亚Z11 Max上手：这个大屏真的可以一手玩转'
	}
};
var CONTENT = {
	1: {
		time: '16:00',
		content: '努比亚Z11 Max将于今晚7点正式发布，这是继Z11 mini之后Z11系类的第二款作品，据说Z11 Max的屏占比很高，依然主打窄边框，配备一块6英寸的屏幕，按照发布会邀请函传达的信息来看，nubia Z11 Max将会带来新鲜的亮点，欢迎大家届时观看知客的图文直播，及第一手的独家内容哦。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/1.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/2.jpg'
		}
	},
	2: {
		time: '12:00',
		content: '',
		video: '<embed src="http://player.youku.com/player.php/sid/XMTU5OTY2NDQwOA==/v.swf" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>',
		top: true
	},
   3: {
		time: '19:05',
		content: '“ 大·不同 ” nubia Z11 Max 发布会即将开始，努比亚说今天要玩把大的，C罗会现身吗？',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/3.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/4.jpg'
		}
	},
	4: {
		time: '19:25',
		content: 'nubia Z11 Max 发布会的现场劲歌热舞，充分体现了nubia青春活力，富有动感的品牌调性。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/5.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/6.jpg',
			3: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/7.jpg',
			4: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/8.jpg'
		}
	},
	5: {
		time: '19:31',
		content: 'nubia品牌总经理倪飞上台，以今日高考的话题带入到今天的发布会。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/9.jpg'
		}
	},
	6: {
		time: '19:35',
		content: '倪飞还介绍了nubia的新同事C罗，其刚刚带领球队获得了欧冠冠军。由于C罗目前在法国北站欧洲杯无法亲临现场，但他录制了一段视频向大家问好。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/10.jpg'
		}
	},
	7: {
		time: '19:41',
		content: '倪飞首先介绍了 nubia Z11 Max 的大·不同，采用6英寸Super AMOLED屏幕能够提供100%的色彩饱和度和2000000：1的对比度。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/11.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/12.jpg'
		}
	},
	8: {
		time: '19:45',
		content: 'nubia Z11 Max 搭载高通骁龙652处理器，拥有4GB高速内存和64GB海量内存。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/13.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/14.jpg',
			3: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/15.jpg'
		}
	},
	9: {
		time: '19:47',
		content: 'nubia Z11 Max 延续着nubia标志性的全网通功能，其能提供4G+以及双卡双待盲插功能。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/16.jpg'
		}
	},
	10: {
		time: '19:49',
		content: 'nubia Z11 Max 延续着nubia标志性的拍摄能力，如各类的黑科技如3D降噪、手持防抖、DTI、LTN等。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/17.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/18.jpg',
			3: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/19.jpg'
		}
	},
	11: {
		time: '19:49',
		content: '一张图看懂nubia Z11 Max的拍照黑科技',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/20.jpg'
		}
	},
	12: {
		time: '19:50',
		content: 'nubia Z11 Max 采用前置800W像素的摄像头，并提供智能补光功能使得自拍更有效果。同时其支持全局视频美颜功能，能够在微信视频VOLTE视频时拥有更好的效果。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/21.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/22.jpg'
		}
	},
	13: {
		time: '19:52',
		content: 'nubia Z11 Max 在Hi-Fi音质上也有大幅度的提升。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/24.jpg'
		}
	},
	14: {
		time: '19:53',
		content: '一张图看懂nubia Z11 Max',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/23.jpg'
		}
	},
	15: {
		time: '19:53',
		content: '与硬件配置的提升相比，nubia Z11 Max采用nubia分屏技术2.0，有着更好更便捷入口以及分屏效果。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/25.jpg'
		}
	},
	16: {
		time: '19:54',
		content: 'nubia Z11 Max支持应用分身功能，能够使用双分屏双应用，同时打开多个相同的应用。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/26.jpg'
		}
	},
	17: {
		time: '19:55',
		content: 'nubia Z11 Max还加入了超级截图功能，拥有长截图、自由截图、录屏等功能。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/27.jpg'
		}
	},
	18: {
		time: '19:56',
		content: 'nubia Z11 Max采用nubia UI 3.9,9版本，倪飞表示nubia UI4.0已在路上敬请期待。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/28.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/29.jpg'
		}
	},
	19: {
		time: '19:58',
		content: 'nubia Z11 Max的特性就是续航，倪飞表示传统的方法会使机身加重以及表厚。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/30.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/31.jpg',
			3: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/32.jpg'
		}
	},
	20: {
		time: '19:59',
		content: 'nubia认为优秀的长续航手机表现是要这样的，你觉得呢？',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/33.jpg'
		}
	},
	21: {
		time: '20:00',
		content: 'nubia Z11 Max搭载全新的NeoPower技术，通过116项特性来实现开源节流，提供不一样的强大续航表现。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/34.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/35.jpg'
		}
	},
	22: {
		time: '20:02',
		content: 'nubia Z11 Max采用高能量密度电池，比iPhone 6S pLus大点点但容量大很多。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/36.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/37.jpg'
		}
	},
	23: {
		time: '20:03',
		content: 'nubia Z11 Max 针对用户常用的十项功能进行了针对性的优化。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/38.jpg'
		}
	},
	24: {
		time: '20:04',
		content: '有趣的事，倪飞表示其将iPhone 6SPuls更换成nubia Z11 Max的4000mAh后，nubia Z11 Max在十项测试中有八项超越了iPhone。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/39.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/40.jpg'
		}
	},
	25: {
		time: '20:05',
		content: 'nubia Z11 Max 拥有优秀的续航能力，杜绝一天一充。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/41.jpg'
		}
	},
	26: {
		time: '20:06',
		content: 'nubia Z11 Max采用了nubia快充3.0 支持USB Type-C以及8V/2A的功率支持。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/42.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/43.jpg',
			3: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/44.jpg',
		}
	},
	27: {
		time: '20:07',
		content: '大屏幕也要有美感，nubia Z11 Max 采用6英寸的屏幕有着23.27的屏占比和1.32MM的边框相比iPhone要优秀得多。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/45.jpg'
		}
	},
	28: {
		time: '20:08',
		content: 'nubia Z11 Max采用6系航空铝材打造的金属一体化机身，使得整体质感有了提升。大屏幕也要有还手感。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/46.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/47.jpg'
		}
	},
	29: {
		time: '20:10',
		content: 'nubia Z11 Max不仅拥有强大的拍摄硬件同时搭载了全新的NeoVision 5.9能够拍摄出漂亮的夕阳照片和微距影像。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/48.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/49.jpg',
			3: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/50.jpg'
		}
	},
	30: {
		time: '20:12',
		content: '全新的NeoVision 5.9能够使用户摆脱各类繁琐的三脚架和辅助工具，用手机就能拍出有趣的高质量的照片。nubia Z11 Max带来全新的手持防抖全景拍摄能够轻松的拍出更加生动的照片。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/51.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/52.jpg',
			3: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/53.jpg',
			4: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/54.jpg'
		}
	},
	31: {
		time: '20:14',
		content: 'nubia Z11 Max加入全局视频童话美颜功能，能够兼容各种视频通话工具展现出更好的视频通话效果。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/55.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/56.jpg'
		}
	},
	32: {
		time: '20:16',
		content: 'nubia Z11 Max还加入视频滤镜功能，如黑白、电影等为视频拍摄提供更多乐趣。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/57.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/58.jpg'
		}
	},
	33: {
		time: '20:18',
		content: 'nubia Z11 Max拥有四个大·不同，大屏幕·大不同、美感·大不同、续航·大不同、影像·大不同，重新定义了此类产品。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/59.jpg'
		}
	},
	34: {
		time: '20:21',
		content: 'nubia Z11 Max还将赠送一年的PPTV会员内容服务。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/60.jpg'
		}
	},
	35: {
		time: '20:30',
		content: 'nubia Z11 Max支持全网通2.1、4G+、VoLTE高清语音以及双卡双待功能，运行基于Android 5.1的nubia UI 3.9.9，支持边框手势功能。全金属机身提供金色、银色以及锖色，售价则为1999元，将会于6月7日开始预约，6月16日于努比亚官网、苏宁易购以及天猫努比亚旗舰店首发开卖。购买努比亚Z11 Max智能手机还赠送一年的PPTV会员。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/61.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/62.jpg'
		}
	},
	36: {
		time: '20:35',
		content: '除了标准版的Z11 Max之外，本次努比亚还推出了联合著名足球运动员C罗所推出C罗·典藏版努比亚Z11 Max以及Z11 mini，二者在机身后背有C罗平面形象以及签名，这一版本预售时间和普通版相同。',
		img: {
			1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/63.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/64.jpg'
		}
	},
	37: {
		time: '20:37',
		content: '本次发布会到此结束，感谢观看。',
		single: true
	},
};
var SLIDE = {
	0: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/SLIDE/1.jpg',
    1: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/SLIDE/2.jpg',
    2: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/SLIDE/3.jpg',
    3: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/SLIDE/4.jpg',
    4: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/SLIDE/5.jpg',
    5: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/SLIDE/6.jpg',
	6: 'template/zaekev2/static/img/2016/nubia-z11-max-2016/SLIDE/7.jpg'
}