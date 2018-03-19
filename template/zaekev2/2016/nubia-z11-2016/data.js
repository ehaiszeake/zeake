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
		src: 'template/zaekev2/static/img/2016/nubia-z11-2016/1.jpg',
		href: 'http://www.zaeke.com/article-3763-1.html',
		title: '下一代无边框 努比亚Z11将于6月28日正式发布'
	},
	1: {
		src: 'template/zaekev2/static/img/2016/nubia-z11-2016/RELATED/2.jpg',
		href: 'http://www.zaeke.com/article-3853-1.html',
		title: '金属机身获无边框加持 nubia Z11曝光'
	},
	2: {
		src: 'template/zaekev2/static/img/2016/nubia-z11-2016/RELATED/3.jpg',
		href: 'http://www.zaeke.com/article-3887-1.html',
		title: '天上的星星 努比亚Z11发布会邀请函分享'
	},
	3: {
		src: 'template/zaekev2/static/img/2016/nubia-z11-2016/RELATED/4.jpg',
		href: 'http://www.zaeke.com/article-3907-1.html',
		title: '再进化的无边框 nubia Z11正式发布'
	},
	4: {
		src: 'template/zaekev2/static/img/2016/nubia-z11-2016/RELATED/5.jpg',
		href: 'http://www.zaeke.com/article-3910-1.html',
		title: '发烧级音质 努比亚圈铁耳机正式亮相'
	},
	5: {
		src: 'template/zaekev2/static/img/2016/nubia-z11-2016/RELATED/6.jpg',
		href: 'http://www.zaeke.com/article-3909-1.html',
		title: '无边·无忌 nubia Z11首发图赏'
	},
	6: {
		src: 'template/zaekev2/static/img/2016/nubia-z11-2016/RELATED/7.jpg',
		href: 'http://www.zaeke.com/article-3908-1.html',
		title: 'nubia Z11上手：无边框美学的进化重生'
	},
};
var CONTENT = {
    0: {
        time: '09:51',
        content: '努比亚旗下全新的旗舰手机努比亚Z11将于6月28日正式发布。根据目前已知的信息来看，努比亚Z11将会采用高通骁龙820处理器等旗舰级别的配置，并且也将会延续努比亚Z9上无边框之外形设计。届时欢迎大家观看图文直播以及后续的详细内容，在第一时间掌握关于努比亚Z11最全面的资讯。同时也欢迎大家发微博 @知客数码 参与直播互动讨论哟~',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/1.jpg'
        }
    },
	1: {
        time: '12:00',
        content: '知客小编收到来自@nubia智能手机 的 Z11 发布会邀请函 。作为一家一直以来强调自家手机拍照功能的厂家，本次努比亚更是将一个望远镜当做努比亚Z11发布会的邀请函发出，这是否暗示着努比亚Z11在拍照功能上又会有所突破呢？',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/2.jpg',
			1: 'template/zaekev2/static/img/2016/nubia-z11-2016/3.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-2016/4.jpg',
			3: 'template/zaekev2/static/img/2016/nubia-z11-2016/5.jpg',
			4: 'template/zaekev2/static/img/2016/nubia-z11-2016/6.jpg',
			5: 'template/zaekev2/static/img/2016/nubia-z11-2016/7.jpg'
        }
    },
	2: {
        time: '15:00',
        content: 'nubia智能手机 #突破边界# 新品发布会现场火热筹备ing',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/8.jpg',
			1: 'template/zaekev2/static/img/2016/nubia-z11-2016/9.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-2016/10.jpg',
			3: 'template/zaekev2/static/img/2016/nubia-z11-2016/11.jpg'
        }
    },
	3: {
        time: '18:30',
        content: '#突破边界# nubia Z11 无边框手机发布会即将开始。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/13.jpg',
			1: 'template/zaekev2/static/img/2016/nubia-z11-2016/14.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-2016/15.jpg',
			3: 'template/zaekev2/static/img/2016/nubia-z11-2016/16.jpg'
        }
    },
	4: {
        time: '19:00',
        content: '发布会正式开始，同样是总经理倪飞上台，其表示却别于市面上的“无边框”手机，nubia Z9才是真正的无边框手机，而Z11也将延续。。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/17.jpg'
        }
    },
	5: {
        time: '19:05',
        content: '无边框手机的出现如nubiaZ9以及Z11都是由想象力驱动的。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/18.jpg',
			1: 'template/zaekev2/static/img/2016/nubia-z11-2016/19.jpg'
        }
    },
	6: {
        time: '19:07',
        content: '倪飞表示想象力的具体表现就是专利，对于nubia一家仅成立三年的企业拥有诸多专利引领着行业进步。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/20.jpg',
			1: 'template/zaekev2/static/img/2016/nubia-z11-2016/21.jpg'
        }
    },
	7: {
        time: '19:10',
        content: '倪飞表示nubia的想象力就是手机行业前进的原动力。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/22.jpg',
			1: 'template/zaekev2/static/img/2016/nubia-z11-2016/23.jpg'
        }
    },
	8: {
        time: '19:14',
        content: '在nubia Z9上所首次出现的FiT 1.0的基础上nubia Z11带来全新的FiT 2.0。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/24.jpg',
			1: 'template/zaekev2/static/img/2016/nubia-z11-2016/25.jpg'
        }
    },
	9: {
        time: '19:17',
        content: 'FiT 2.0只是nubia想象力的一部分，此次nubia还带来了全新的nubia UI 4.0 在各方的都全面提升。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/26.jpg',
			1: 'template/zaekev2/static/img/2016/nubia-z11-2016/27.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-2016/28.jpg',
			3: 'template/zaekev2/static/img/2016/nubia-z11-2016/29.jpg',
        }
    },
	10: {
        time: '19:19',
        content: '在更为好看的基础上nubia UI 4.0还在实用性上有了质的飞越。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/30.jpg',
			1: 'template/zaekev2/static/img/2016/nubia-z11-2016/31.jpg'
        }
    },
	11: {
        time: '19:21',
        content: 'nubia UI 从3.0到4.0有着极大的突破，如动画、视觉、交互上都有提升。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/32.jpg',
			1: 'template/zaekev2/static/img/2016/nubia-z11-2016/33.jpg'
        }
    },
	12: {
        time: '19:23',
        content: 'nubia UI 4.0将从今年7月份开始向nubia旗下手机推送。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/34.jpg'
        }
    },
	13: {
        time: '19:25',
        content: '此外续航也是nubia一直坚持的，在兼顾美感与轻薄的基础上提升强大的续航。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/35.jpg',
			1: 'template/zaekev2/static/img/2016/nubia-z11-2016/36.jpg'
        }
    },
	14: {
        time: '19:27',
        content: 'nubia Z11针对用户使用场景进行了十项的改进优化，致力为用户提供更好的体验。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/37.jpg',
			1: 'template/zaekev2/static/img/2016/nubia-z11-2016/38.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-2016/39.jpg',
			3: 'template/zaekev2/static/img/2016/nubia-z11-2016/40.jpg',
        }
    },
	15: {
        time: '19:28',
        content: 'Z11还拥有nubia快充3.0支持Type-C正反盲插。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/41.jpg',
			1: 'template/zaekev2/static/img/2016/nubia-z11-2016/42.jpg'
        }
    },
	16: {
        time: '19:30',
        content: 'Z11在NeoPower的支持下重度用户使用1.37天，普通用户2.17天。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/43.jpg'
        }
    },
	17: {
        time: '19:34',
        content: 'nubia Z11配置方面搭载高通骁龙820，拥有全网通3.0以及双通道高速WiFi，存储方面配备了6GB内存、128的储存空间。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/44.jpg',
			1: 'template/zaekev2/static/img/2016/nubia-z11-2016/45.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-2016/46.jpg',
			3: 'template/zaekev2/static/img/2016/nubia-z11-2016/47.jpg',
        }
    },
	18: {
        time: '19:37',
        content: 'nubia Z11对指纹识别进行优化达到0.1S极速唤醒，5.5全高清大屏、800W前置摄像头。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/48.jpg',
			1: 'template/zaekev2/static/img/2016/nubia-z11-2016/49.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-2016/50.jpg'
        }
    },
	19: {
        time: '19:39',
        content: 'nubia Z11在音乐变现上也有重大突破拥有Hi-Fi以及杜比全景声。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/51.jpg',
			1: 'template/zaekev2/static/img/2016/nubia-z11-2016/52.jpg'
        }
    },
	20: {
        time: '19:43',
        content: 'nubia Z11得益于无边框之美成为5.5寸手机中最小的。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/53.jpg'
        }
    },
	21: {
        time: '19:45',
        content: 'nubia Z11的外观设计上采用了双2.5D弧面以及航空机金属机身设计。。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/54.jpg',
			1: 'template/zaekev2/static/img/2016/nubia-z11-2016/55.jpg'
        }
    },
	22: {
        time: '19:47',
        content: 'nubia邀请了中国科学院国家天文台恒星首席科学家 邓李才博士上台分享使用nubia手机拍摄星空的心得。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/56.jpg'
        }
    },
	23: {
        time: '19:49',
        content: '倪飞与邓博士一同发布了nubia Z11无边框手机。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/57.jpg'
        }
    },
	24: {
        time: '19:52',
        content: '接着介绍 nubia 强大影像功能，以及 nubia 诸多的摄影专利功能。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/58.jpg',
			1: 'template/zaekev2/static/img/2016/nubia-z11-2016/59.jpg'
        }
    },
	25: {
        time: '19:54',
        content: '此次 nubia 还带来了全新的摄影引擎 — NeoVision 6.0。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/60.jpg'
        }
    },
	26: {
        time: '19:55',
        content: '一张图看懂 nubia 的强大摄像功能。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/61.jpg'
        }
    },
	27: {
        time: '19:57',
        content: 'nubia Z11 还带来了手持长曝光，拥有电子光圈 2.0，支持72秒曝光。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/62.jpg',
			1: 'template/zaekev2/static/img/2016/nubia-z11-2016/63.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-2016/64.jpg'
        }
    },
	28: {
        time: '20:02',
        content: 'nubia Z11还将拥有一系列的专属服务。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/65.jpg',
			1: 'template/zaekev2/static/img/2016/nubia-z11-2016/66.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-2016/67.jpg'
        }
    },
	29: {
        time: '20:02',
        content: 'nubia Z11还将拥有一系列的专属服务。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/65.jpg',
			1: 'template/zaekev2/static/img/2016/nubia-z11-2016/66.jpg',
			2: 'template/zaekev2/static/img/2016/nubia-z11-2016/67.jpg'
        }
    },
	30: {
        time: '20:05',
        content: '一张图看懂 nubia Z11尊享版配置。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/68.jpg'
        }
    },
	31: {
        time: '20:09',
        content: 'nubia Z11提供标准版和尊享版双版本，标准版提供4GB RAM+64GB ROM，售价2499元；尊享版提供6GB RAM+128GB ROM，售价3499元，全部版本均支持最多200GB的SD卡拓展存储。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/69.jpg',
			1: 'template/zaekev2/static/img/2016/nubia-z11-2016/70.jpg'
        }
    },
	32: {
        time: '20:13',
        content: 'nubia Z11提供另外还有曜石金特别配色的nubia Z11C罗限量典藏版，价钱尚未公布。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/71.jpg',
			1: 'template/zaekev2/static/img/2016/nubia-z11-2016/72.jpg'
        }
    },
	33: {
        time: '20:14',
        content: 'nubia 还针对Z9推出回馈技术，老用户购置新旗舰Z11可减1000元。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/73.jpg'
        }
    },
	34: {
        time: '20:16',
        content: '发布会的最后还将带来全新 nubia 圈铁耳机，拥有专业发烧级音质。',
        img: {
            0: 'template/zaekev2/static/img/2016/nubia-z11-2016/74.jpg',
			1: 'template/zaekev2/static/img/2016/nubia-z11-2016/75.jpg'
        }
    },
	35: {
        single: true,
        content: '直播到此结束，谢谢观看。',
        time: '20: 21'
    }
};
var SLIDE = {
	        0: 'template/zaekev2/static/img/2016/nubia-z11-2016/SLIDE/1.jpg', 
            1: 'template/zaekev2/static/img/2016/nubia-z11-2016/SLIDE/2.jpg', 
			2: 'template/zaekev2/static/img/2016/nubia-z11-2016/SLIDE/3.jpg', 
			3: 'template/zaekev2/static/img/2016/nubia-z11-2016/SLIDE/4.jpg', 
			4: 'template/zaekev2/static/img/2016/nubia-z11-2016/SLIDE/5.jpg' 
};