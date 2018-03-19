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
var RELATED = {};
var CONTENT = {
    1: {
		time: '14:40',
		content: '前方小编已经到达现场，360手机品牌战略暨暑季Campaign发布会将在15点30分左右开始。这次360将会有哪些创新、颠覆性的新战略出现呢，欢迎大家一起在社区与微博参与讨论，知客也将进行全程直播，为你带来第一手的新鲜资讯。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/1.jpg',
			2: 'template/zaekev2/static/img/2016/360-613-2016/2.jpg'
		}
	},
    2: {
		time: '15:00',
		content: '360手机品牌战略暨暑季Campaign发布会即将开始，现场在播放预热视频，主题依旧是“畅快的N次方”。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/3.jpg',
			2: 'template/zaekev2/static/img/2016/360-613-2016/4.jpg'
		}
	},
    3: {
		time: '15:30',
		content: '发布会正式开始，主持人依次介绍现场来宾。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/5.jpg',
		}
	},
    4: {
		time: '15:35',
		content: '360董事长周鸿祎登台致辞。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/6.jpg',
		}
	},
    5: {
		time: '15:42',
		content: '经过一段时间的发展，360手机逐渐拥有了自己的软硬件团队。并且更为重要的是，360也拥有了一批自己的忠实粉丝。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/7.jpg',
		}
	},
    6: {
		time: '15:48',
		content: '周鸿祎表示，360手机已经成为独立的公司，并且拥有独立资金和发展空间。今后360手机将会成为唯一品牌，旗下将会推出F系列、N系列、Q系列手机等。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/8.jpg',
		}
	},
    7: {
		time: '15:52',
		content: '360手机在发展过程之中，经历了各种尝试，如此的产品举动也一度迷惑了消费者。所以周鸿祎认为，360手机最重要的是和别人“不一样”，包括此前采用的黑白双摄像头，周鸿祎表示360手机只为那些认可360的用户而设计。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/9.jpg',
		}
	},
    8: {
		time: '15:56',
		content: '360手机CMO胡红莲女士登台，阐述360手机的产品理念。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/10.jpg',
            2: 'template/zaekev2/static/img/2016/360-613-2016/11.jpg'
		}
	},
    9: {
		time: '15:59',
		content: '根据360方面的数据，Android平台上累积截获了339.6万个恶意程序样本，累积拦截6.2亿次钓鱼网站，累积标记骚扰电话数量达到5995万。360认为Android目前的安全现状不容乐观。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/12.jpg',
		}
	},
    10: {
		time: '16:02',
		content: '胡红莲女士表示在PC时代，人们习惯安装安全软件，而在智能手机时代，用户们却习惯让自己的手机“裸奔”。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/13.jpg',
            2: 'template/zaekev2/static/img/2016/360-613-2016/14.jpg'
		}
	},
    11: {
		time: '16:06',
		content: '作为360在安全方面长时间积累的体现，360OS以及360手机以安全为其最大特性。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/15.jpg',
            2: 'template/zaekev2/static/img/2016/360-613-2016/16.jpg',
            3: 'template/zaekev2/static/img/2016/360-613-2016/17.jpg'
		}
	},
    12: {
		time: '16:09',
		content: '360在每一款手机上市之后，都对用户进行了跟踪、调研以及改进。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/18.jpg',
            2: 'template/zaekev2/static/img/2016/360-613-2016/19.jpg'
		}
	},
    13: {
		time: '16:11',
		content: '360手机以及360OS倡导“安全，无畏”的产品理念,并且表示360手机一直在“安全无谓”的道路上行进。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/20.jpg',
            2: 'template/zaekev2/static/img/2016/360-613-2016/21.jpg',
            3: 'template/zaekev2/static/img/2016/360-613-2016/22.jpg'
		}
    },
    14: {
		time: '16:14',
		content: '胡红莲女士表示，目前360已经是全球领先的移动互联网安全方案提供商。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/23.jpg',
		}
    },
    15: {
		time: '16:17',
		content: '360品牌的个性可以总结为真我，友好，行动以及独创。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/24.jpg',
            2: 'template/zaekev2/static/img/2016/360-613-2016/25.jpg'
		}
    },
    16: {
		time: '16:21',
		content: '周鸿祎表示，当前智能手机已经占据了日常生活的绝大部分，而手机用户们更多是需要一种"安全感"，360意在为用户赋予新的安全感。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/26.jpg',
		}
    },
    17: {
		time: '16:38',
		content: '在周鸿祎诠释完360手机的品牌涵义之后，360手机总裁祝芳浩登台演讲。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/27.jpg',
		}
    },
    18: {
		time: '16:40',
		content: '在360投身手机行业的405天以来，360共计发布了8款智能手机，今后360主打的F N Q三个系列分别对应舒适，畅快以及科技型产品。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/28.jpg',
            2: 'template/zaekev2/static/img/2016/360-613-2016/29.jpg',
            3: 'template/zaekev2/static/img/2016/360-613-2016/30.jpg'
		}
    },
    19: {
		time: '16:44',
		content: '360表示，在今后360手机要靠实力吃饭，截至6月10日360 F4智能手机销量已经突破165万台。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/32.jpg',
            2: 'template/zaekev2/static/img/2016/360-613-2016/31.jpg'
		}
    },
    20: {
		time: '16:46',
		content: '祝芳浩分享N4从生产设计到制造的故事，包括使用了强劲的4+32组合，10核处理器，截至6月10日，360 N4智能手机销量也已经突破51万台。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/33.jpg',
            2: 'template/zaekev2/static/img/2016/360-613-2016/34.jpg'
		}
    },
    21: {
		time: '16:50',
		content: '在接下来，360手机也将会继续提高产能，以保证粉丝们能够顺利地买到自己的心仪手机。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/35.jpg',
            2: 'template/zaekev2/static/img/2016/360-613-2016/36.jpg'
		}
    },
    22: {
		time: '16:52',
		content: '更加让360意外的是，360智能手机甚至有18%的用户来自苹果。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/37.jpg',
            2: 'template/zaekev2/static/img/2016/360-613-2016/38.jpg'
		}
    },
    23: {
		time: '16:54',
		content: '360 N4拥有4GB内存和32GB闪存，是千元机之中唯一拥有十核心处理器以及大内存的产品以及快速充电的产品。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/39.jpg',
            2: 'template/zaekev2/static/img/2016/360-613-2016/40.jpg',
            3: 'template/zaekev2/static/img/2016/360-613-2016/41.jpg',
            4: 'template/zaekev2/static/img/2016/360-613-2016/42.jpg'
		}
    },
     24: {
		time: '16:59',
		content: '祝芳浩承诺，在今后的360手机之中会全部标配指纹，VOLTE以及快速充电,大家觉得如何？',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/43.jpg',
            2: 'template/zaekev2/static/img/2016/360-613-2016/44.jpg'
		}
    },
    25: {
		time: '17:01',
		content: '今天，360N4以及F4全网通版本都将正式上市，售价799元，N4全网通售价999元，将于今天下午4点30分正式开卖。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/45.jpg',
            2: 'template/zaekev2/static/img/2016/360-613-2016/46.jpg',
            3: 'template/zaekev2/static/img/2016/360-613-2016/47.jpg',
            4: 'template/zaekev2/static/img/2016/360-613-2016/48.jpg'
		}
    },
    26: {
		time: '17:06',
		content: '今天，360手机也同步开启时间长达4个月的让利促销活动，其总让利额度达到1亿元。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/49.jpg',
            2: 'template/zaekev2/static/img/2016/360-613-2016/50.jpg',
            3: 'template/zaekev2/static/img/2016/360-613-2016/51.jpg',
            4: 'template/zaekev2/static/img/2016/360-613-2016/52.jpg',
		}
    },
    27: {
		time: '17:08',
		content: '在618电商之中，360手机旗下各款产品均有不同程度的优惠，360手机也希望借此冲击国内互联网品牌前三名。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/53.jpg',
            2: 'template/zaekev2/static/img/2016/360-613-2016/54.jpg',
            3: 'template/zaekev2/static/img/2016/360-613-2016/55.jpg',
            4: 'template/zaekev2/static/img/2016/360-613-2016/56.jpg',
		}
    },
    28: {
		time: '17:09',
		content: '在今年7月，360手机还将开启“青春梦想计划”。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/57.jpg',
            2: 'template/zaekev2/static/img/2016/360-613-2016/58.jpg'
		}
    },
    29: {
		time: '17:11',
		content: '今年8月，360手机将会开展“畅快跑”活动，在黑龙江、黄河、长江以及珠江流域城市举办活动。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/59.jpg',
            2: 'template/zaekev2/static/img/2016/360-613-2016/60.jpg'
		}
    },
    30: {
		time: '17:14',
		content: '今年9月，360手机将会开展“无畏创新”基金，总额达到2000万元，帮助在校学生进行IOT相关的创业+就业/孵化。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/61.jpg',
            2: 'template/zaekev2/static/img/2016/360-613-2016/62.jpg'
		}
    },
    31: {
		time: '17:18',
		content: '最后是360手机成立一周年的切蛋糕仪式,发布会到此全部结束，感谢大家观看。',
		img: {
			1: 'template/zaekev2/static/img/2016/360-613-2016/63.jpg',
            2: 'template/zaekev2/static/img/2016/360-613-2016/64.jpg',
            3: 'template/zaekev2/static/img/2016/360-613-2016/65.jpg',
            4: 'template/zaekev2/static/img/2016/360-613-2016/66.jpg'
            
		}
    },
};
var SLIDE = {}