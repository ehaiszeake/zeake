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

var HOST = {};
var RELATED = {
	0: {
		href: 'http://www.zaeke.com/forum.php?mod=viewthread&tid=120668',
		src: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/RELATED/r1.jpg',
		title: '骁龙820的惊喜价？联想ZUK Z2曝光'
	},
	1: {
		href: 'http://www.zaeke.com/forum.php?mod=viewthread&tid=123760&highlight=zuk',
		src: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/RELATED/r2.jpg',
		title: '小屏超旗舰？ZUK Z2即将发布'
	},
	2: {
		href: 'http://www.zaeke.com/thread-125837-1-1.html',
		src: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/RELATED/r3.jpg',
		title: '5寸屏+骁龙820 ZUK Z2亮相工信部'
	}
};
var CONTENT = {
	0: {
		time: '12:00',
		content: 'ZUK Z2 新品发布会邀请函，热血沸腾的“就要痛快“口号的包装以及已有”小屏超旗舰“的手机模型。ZUK Z2 将采用5寸屏搭载高通骁龙820，并在发布当天现货开售。最后的悬念售价将在5月31日揭晓，知客live 也将全程直播 欢迎围观',
		img: {
			0: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/1.jpg',
			1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/2.jpg',
			2: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/3.jpg',
			3: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/4.jpg'
		}
	},
	1: {
		time: '13:15',
		content: '老法师已经抵达ZUK Z2发布会现场，今天的小屏超旗舰发布会将于13点30左右正式开始，据悉今天的价格有惊喜。',
		img: {
			0: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/5.jpg',
			1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/6.jpg',
			2: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/8.jpg',
			3: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/9.jpg'
		}
	},
	2: {
		time: '13:50',
		content: '联想集团高级副总裁，移动业务联席总裁陈旭东先生登台。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/11.jpg',
			2: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/12.jpg',
			3: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/13.jpg',
			4: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/14.jpg',
			5: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/15.jpg',
			6: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/16.jpg'
		}
	},
	3: {
		time: '13:52',
		content: 'Z2 PRO在发布之后受到热烈追捧,陈旭东先生公布Z2 Pro旗舰版价格售价2299元，惊喜么',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/17.jpg',
			2: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/18.jpg',
			3: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/19.jpg'
	}
},
4: {
		time: '13:54',
		content: '陈旭东认为2016年是手机市场的生死年，手机产品技术创新遇到瓶颈导致增长放缓。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/20.jpg',
			2: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/21.jpg',
			3: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/22.jpg'
	}
},
5: {
		time: '13:56',
		content: '陈旭东表示，当下手机厂商分为三大模式，传统，互联网以及生态模式，联想会在将来进行线上线下全方位的销售。TECHWORLD上联想也即将发布"颠覆认知"的手机产品。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/23.jpg',
	}
},
6: {
		time: '14:00',
		content: '常程上台介绍Z2，常程表示，小屏旗舰非常难做，而ZUK对于平台的挑剔超过其他所有厂家，ZUK只生产旗舰手机，ZUK Z2自然也会继续采用骁龙820平台。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/24.jpg',
			2: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/25.jpg',
			3: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/26.jpg',
			
	}
},
7: {
		time: '14:05',
		content: 'ZUK的"永不卡顿"更新至2.0，彻底阻止应用后台自启，是目前为止唯一能够阻止家族自启、跨家族自启和生态链自启的系统，流畅度方面提升3倍。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/27.jpg',
			2: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/28.jpg',
			3: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/29.jpg',
			4: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/30.jpg',
			5: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/31.jpg',
			6: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/32.jpg'
			
	}
},
8: {
		time: '14:10',
		content: 'ZUK Z2机身宽度为68.88mm，方便用户单手操作。ZUK认为，手机屏幕过小会影响输入体验，所以选择了现有的尺寸设计，大家喜欢5英寸吗？',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/33.jpg',
			2: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/34.jpg',
			3: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/35.jpg',
			4: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/36.jpg',
			5: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/37.jpg'
			
	}
},
9: {
		time: '14:15',
		content: 'Z2采用铝钛合金骨架，便于散热并且保证高强度，另外白色款还有涂层以保证机身不变黄，提供黑白两色可选。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/38.jpg',
			2: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/39.jpg',
			3: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/40.jpg',
			4: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/41.jpg'
			
	}
},
10: {
		time: '14:18',
		content: 'Z2配备U-Touch 2.0指纹识别，集成了指纹自学习功能，越用识别率越高，与此同时Z2也支持湿手指纹解锁，U-Touch 2.0继续支持各种手势操控功能，是目前市面上单一按钮功能最多的手机。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/42.jpg',
			2: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/43.jpg',
			3: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/44.jpg',
			4: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/45.jpg',
			5: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/46.jpg',
			6: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/47.jpg',
			7: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/48.jpg',
			
	}
},
11: {
		time: '14:24',
		content: '据调查，23.3%的安卓用户表示手机严重发热，ZUK Z2拥有“发热先知”功能，原理是通过发热行为检测和分析，对手机的发热预先管理和控制。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/49.jpg',
			2: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/50.jpg',
			3: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/51.jpg',
			4: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/52.jpg',
			5: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/53.jpg'
	}
},
12: {
		time: '14:28',
		content: 'ZUK Z2配备3500毫安时电池并支持快速充电,并且电池容量甚至比ZUK Z2 PRO还大，快速充电功能一小时可以充电80%，同时通过特殊设计在快充前提下保证电池寿命。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/54.jpg',
			2: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/55.jpg',
			3: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/56.jpg'
	}
},
13: {
		time: '14:35',
		content: 'ZUI 2.0带有自适应瞬时无损变频引擎2.0，对应用性能需求进行预测，以节省功耗。并且同Z2 Pro一样内置运动软件，功耗仅为第三方软件的四十分之一，可以根据运动姿态自适应上报频率，结合SPU等等，可以支撑用户跑4个全程马拉松。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/57.jpg',
			2: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/58.jpg',
			3: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/60.jpg',
			4: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/60.jpg'
	}
},
14: {
		time: '14:40',
		content: 'ZUK Z2搭载后置1300万，前置800万像素，支持分性别美颜，支持960fps慢动作视频拍摄。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/61.jpg',
			2: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/62.jpg',
			3: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/63.jpg',
			4: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/64.jpg'
	}
},
15: {
		time: '14:45',
		content: 'ZUI 2.0支持多功能锁屏，方便用户日常使用，可以用于滴滴打车和，抢红包和显示航班信息等等。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/65.jpg',
			2: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/66.jpg',
			3: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/67.jpg'
			
	}
},
16: {
		time: '14:47',
		content: 'ZUK Z2的锁屏也会提供自定义，将来Z2 PRO和Z1也会通过升级获得,并且支持更换天气情景闹钟铃声。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/68.jpg',
			2: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/69.jpg'
			
	}
},
17: {
		time: '14:50',
		content: 'ZUK还是首个在高通平台之中集成防伪基站功能，将来ZUK承诺全系升级到ZUI 2.0以及ANDROID N，将来也会适配众多第三方ROM。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/72.jpg',
			2: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/73.jpg',
			3: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/75.jpg',
			4: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/76.jpg'
			
	}
},
18: {
		time: '14:55',
		content: 'Z2系列智能手机还会提供游戏以及娱乐特权，最多每个月可以返还价值68元的虚拟币。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/77.jpg',
			2: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/78.jpg',
			3: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/79.jpg',
			4: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/80.jpg',
			5: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/81.jpg'
			
	}
},
19: {
		time: '15:00',
		content: '除了手机之外，本次ZUK还带来了健康大数据,带来了ZUK的首款体质分析仪、蓝牙心率耳机、运动臂包智能皮套还有圈铁耳机。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/82.jpg',
			2: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/83.jpg',
			3: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/84.jpg',
			4: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/85.jpg',
			5: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/86.jpg',
			6: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/87.jpg',
			7: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/88.jpg'
	}
},
20: {
		time: '15:07',
		content: 'Z2是全球第一只支持TYPE-C无线充电的手机，并且依旧支持和iCloud同步。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/89.jpg',
			2: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/90.jpg',
			3: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/91.jpg',
			4: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/92.jpg'
			
	}
},
21: {
		time: '15:08',
		content: 'Z2支持一键超频，骁龙820最高主频可达2.3GHz。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/93.jpg',
			2: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/94.jpg'
	}
},
22: {
		time: '15:10',
		content: 'ZUK Z2价格公布，4GB RAM+64GB ROM版本售价1799元。将于今天开始预约，6月7日上午10点在ZUK官网、天猫、苏宁旗舰店同步发售。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/95.jpg',
			2: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/96.jpg'
	}
},
23: {
		time: '15:13',
		content: '本次发布会到此结束，感谢大家观看。现场真机图稍后奉上，也请大家留意近期关于ZUK Z2的上手体验和图赏。',
		img: {
			1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/97.jpg',
			2: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/98.jpg'
	}
},
};
var SLIDE = {
	0: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/SLIDE/1.jpg',
	1: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/SLIDE/2.jpg',
	2: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/SLIDE/3.jpg',
	3: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/SLIDE/4.jpg',
	4: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/SLIDE/5.jpg',
	5: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/SLIDE/6.jpg',
	6: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/SLIDE/7.jpg',
	7: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/SLIDE/8.jpg',
	8: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/SLIDE/9.jpg',
	9: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/SLIDE/10.jpg',
	10: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/SLIDE/11.jpg',
	11: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/SLIDE/12.jpg',
	12: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/SLIDE/13.jpg',
	13: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/SLIDE/14.jpg',
	14: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/SLIDE/15.jpg',
	15: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/SLIDE/16.jpg',
	16: 'template/zaekev2/static/img/2016/lenovo-zuk-new-2016/SLIDE/17.jpg'
	
 
}