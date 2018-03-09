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
		src: 'template/zaekev2/static/img/2016/meizu-mx6-2016/RELATED/1.jpg',
		href: 'http://www.zaeke.com/article-3997-1.html',
		title: '沿用PRO系列外观 魅族MX6不完美？'
	},
	1: {
		src: 'template/zaekev2/static/img/2016/meizu-mx6-2016/RELATED/2.jpg',
		href: 'http://www.zaeke.com/article-4016-1.html',
		title: '不完美的Pro6 Max曝光 梦想旗舰就长这样了'
	},
	2: {
		src: 'template/zaekev2/static/img/2016/meizu-mx6-2016/RELATED/3.jpg',
		href: 'http://www.zaeke.com/article-4017-1.html',
		title: '魅族MX6戴套现身 2299你会买吗？'
	},
	3: {
		src: 'template/zaekev2/static/img/2016/meizu-mx6-2016/RELATED/4.jpg',
		href: 'http://www.zaeke.com/article-4105-1.html',
		title: '新MX新梦想 魅族MX6正式发布'
	},
	4: {
		src: 'template/zaekev2/static/img/2016/meizu-mx6-2016/RELATED/5.png',
		href: 'http://www.zaeke.com/article-4106-1.html',
		title: '魅族LOOP JACKET环窗智能保护套/BTS-30蓝牙音箱亮相'
	}
};
var CONTENT = {
	0: {
        time: '12:00',
        content: '魅族科技已定于7月19日正式发布新品发布会，推出全新的梦想系列旗舰机型 MX 6。本次的邀请函别出心裁的运用了魅族经典的MP3播放器 M3配合一首《我依然奔跑在路上》，似乎魅族将要和我们述说一段情怀与梦想的故事。届时欢迎大家观看图文直播以及后续的详细内容，在第一时间掌握关于魅族 MX6 的新鲜资讯，真机上手体验。同时也欢迎大家发微博 @知客数码 参与直播互动讨论哟~',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/1.jpg',
            2: 'template/zaekev2/static/img/2016/meizu-mx6-2016/2.jpg',
            3: 'template/zaekev2/static/img/2016/meizu-mx6-2016/3.jpg',
            4: 'template/zaekev2/static/img/2016/meizu-mx6-2016/4.jpg'
        }
    },
	1: {
        time: '13:35',
        content: '小编已到达本次#魅族MX6#新品发布会的现场。我曾经跨过山和大海，也穿过人山人海。今天演唱会的嘉宾将会是朴树喔。',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/5.jpg',
            2: 'template/zaekev2/static/img/2016/meizu-mx6-2016/6.jpg',
            3: 'template/zaekev2/static/img/2016/meizu-mx6-2016/7.jpg',
            4: 'template/zaekev2/static/img/2016/meizu-mx6-2016/8.png'
        }
    },
	2: {
        time: '13:35',
        content: '现场偶遇一大波颜值超高的美女主播们。',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/11.jpg',
            2: 'template/zaekev2/static/img/2016/meizu-mx6-2016/9.jpg',
			3: 'template/zaekev2/static/img/2016/meizu-mx6-2016/10.jpg',
            4: 'template/zaekev2/static/img/2016/meizu-mx6-2016/12.jpg'
        }
    },
	3: {
        time: '14:31',
        content: '暖场表演，朴树上台献唱————“好好地”以及“平凡之路”',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/15.jpg',
            2: 'template/zaekev2/static/img/2016/meizu-mx6-2016/16.jpg',
			4: 'template/zaekev2/static/img/2016/meizu-mx6-2016/13.jpg',
            5: 'template/zaekev2/static/img/2016/meizu-mx6-2016/14.jpg',
        }
    },
	4: {
        time: '14:46',
        content: '魅族科技总裁白永祥上台开始介绍这款令人激动人心的产品。',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/17.jpg',
            2: 'template/zaekev2/static/img/2016/meizu-mx6-2016/18.jpg'
        }
    },
	5: {
        time: '14:48',
        content: '白永祥表示魅族在这么多年中发布的多款MX系列手机带领着手机行业的潮流。',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/19.jpg',
            2: 'template/zaekev2/static/img/2016/meizu-mx6-2016/20.jpg',
			3: 'template/zaekev2/static/img/2016/meizu-mx6-2016/21.jpg',
            4: 'template/zaekev2/static/img/2016/meizu-mx6-2016/22.jpg',
        }
    },
	6: {
        time: '14:50',
        content: '全新的MX6在外观设计上沿用了许多Pro 6的设计。',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/23.jpg'
			}
    },
	7: {
        time: '14:52',
        content: 'MX6与Pro 6一样保持了目前魅族最薄的机身设计只有 7.25 mn。',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/24.jpg',
			2: 'template/zaekev2/static/img/2016/meizu-mx6-2016/25.jpg'
			}
    },
	8: {
        time: '14:54',
        content: '从 MX2 的 New Mode2 到过去一直坚持的 15:9 窄边框，每一代 MX 都有业界领先的好屏幕。',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/26.jpg',
			2: 'template/zaekev2/static/img/2016/meizu-mx6-2016/27.jpg',
			3: 'template/zaekev2/static/img/2016/meizu-mx6-2016/28.jpg',
			4: 'template/zaekev2/static/img/2016/meizu-mx6-2016/29.jpg'
			}
    },
	9: {
        time: '14:56',
        content: '夏普独家供应 Full Incell 负液晶 TDDI 屏，更聪明的光感调节，更智慧的护眼模式。',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/30.jpg',
			2: 'template/zaekev2/static/img/2016/meizu-mx6-2016/31.jpg',
			3: 'template/zaekev2/static/img/2016/meizu-mx6-2016/32.jpg',
			4: 'template/zaekev2/static/img/2016/meizu-mx6-2016/33.jpg'
			}
    },
	10: {
        time: '14:59',
        content: 'MX6支持全网通两卡槽盲插，无需插拔切换主副卡，VoLTE 更清晰的视频通话。同时新增 ET 技术。',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/34.jpg',
			2: 'template/zaekev2/static/img/2016/meizu-mx6-2016/35.jpg',
			3: 'template/zaekev2/static/img/2016/meizu-mx6-2016/36.jpg'
			}
    },
	11: {
        time: '15:01',
        content: 'MX 6搭载了十核 64 位处理器，配合 4G 运存及 32G 闪存，3060mAh 电池轻松满足一整天使用。',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/37.jpg',
			2: 'template/zaekev2/static/img/2016/meizu-mx6-2016/38.jpg',
			3: 'template/zaekev2/static/img/2016/meizu-mx6-2016/39.jpg',
			4: 'template/zaekev2/static/img/2016/meizu-mx6-2016/40.jpg'
			}
    },
	12: {
        time: '15:04',
        content: '全新文件系统，读写速度飙升，使用更流畅。',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/41.jpg',
			2: 'template/zaekev2/static/img/2016/meizu-mx6-2016/42.jpg'
			}
    },
	13: {
        time: '15:05',
        content: '一张图看懂MX 6配置。',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/43.jpg'
			}
    },
	14: {
        time: '15:07',
        content: '此次微信支付还会随着flyme OS的更新，在支持mTouch功能的魅族手机中全面覆盖。',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/44.jpg',
			2: 'template/zaekev2/static/img/2016/meizu-mx6-2016/45.jpg'
			}
    },
	15: {
        time: '15:09',
        content: '白永祥表示 MX 系列在拍照的路上一直走在前列。',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/46.jpg',
			2: 'template/zaekev2/static/img/2016/meizu-mx6-2016/47.jpg',
			3: 'template/zaekev2/static/img/2016/meizu-mx6-2016/48.jpg',
			4: 'template/zaekev2/static/img/2016/meizu-mx6-2016/49.jpg'
			}
    },
	16: {
        time: '15:12',
        content: 'MX 6此次采用了顶级定制 CMOS 索尼 IMX386 传感器，1200W像素，单个像素大至 1.25 μm，大光圈 f2.0。',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/50.jpg',
			2: 'template/zaekev2/static/img/2016/meizu-mx6-2016/51.jpg',
			3: 'template/zaekev2/static/img/2016/meizu-mx6-2016/52.jpg',
			4: 'template/zaekev2/static/img/2016/meizu-mx6-2016/53.jpg'
			}
    },
	17: {
        time: '15:14',
        content: '魅族自建的专业相机实验室，新的白平衡与噪点算法，全新升级的 ISP ，相位对焦以及十核处理器的支持，成就 319ms 拍照速度，84.21% 成片率。',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/54.jpg',
			2: 'template/zaekev2/static/img/2016/meizu-mx6-2016/55.jpg'
			}
    },
	18: {
        time: '15:17',
        content: '一张图看懂 MX 6拍照功能。',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/56.jpg',
			2: 'template/zaekev2/static/img/2016/meizu-mx6-2016/57.jpg'
			}
    },
	19: {
        time: '15:18',
        content: '白永祥表示MX 6：没有广告，只有口碑。',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/58.jpg',
			2: 'template/zaekev2/static/img/2016/meizu-mx6-2016/59.jpg'
			}
    },
	20: {
        time: '15:19',
        content: '此次MX 6上采用最新的 mCharge 在12V 2A 高功率快速充电加持下，实测数据 10 分钟可充 25%，完全充电只需 75 分钟。',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/60.jpg',
			2: 'template/zaekev2/static/img/2016/meizu-mx6-2016/61.jpg',
			3: 'template/zaekev2/static/img/2016/meizu-mx6-2016/62.jpg'
			}
    },
	21: {
        time: '15:20',
        content: '一张图看懂MX 6硬件配置。',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/63.jpg'
			}
    },
	22: {
        time: '15:22',
        content: '李楠上台带来了MX 6的保护套，采用Loop Jacket环形开窗设计，自定义表盘展示，直接操作音乐、电话等功能；接收微信、QQ等消息推送。',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/64.jpg',
			2: 'template/zaekev2/static/img/2016/meizu-mx6-2016/65.jpg',
			3: 'template/zaekev2/static/img/2016/meizu-mx6-2016/66.jpg',
			4: 'template/zaekev2/static/img/2016/meizu-mx6-2016/67.jpg'
			}
    },
	23: {
        time: '15:29',
        content: '李楠还在带来了 LifeMe BTS30 蓝牙音箱，三千元蓝牙音箱扬声器用料，3D 音效技术达到「高音甜，中音准，低音沉，总之一个词，通透。」 10 米有效传输距离，7 小时强劲续航，￥399。与 #魅族MX6# 搭配购买 339 元。',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/68.jpg',
			2: 'template/zaekev2/static/img/2016/meizu-mx6-2016/69.jpg',
			3: 'template/zaekev2/static/img/2016/meizu-mx6-2016/70.jpg',
			4: 'template/zaekev2/static/img/2016/meizu-mx6-2016/71.jpg'
			}
    },
	24: {
        time: '15:33',
        content: '售价正式公布，魅族MX 6的售价为1999元，将于今天下午4点开始预约，7月30日现货开售。',
        img: {
            1: 'template/zaekev2/static/img/2016/meizu-mx6-2016/72.jpg'
			}
    },
	25: {
        time: '15:34',
        content: '魅族MX 6发布会到此结束，谢谢观看。',
    },
};
var SLIDE = {
            2: 'template/zaekev2/static/img/2016/meizu-mx6-2016/SLIDE/1.jpg',
			3: 'template/zaekev2/static/img/2016/meizu-mx6-2016/SLIDE/2.jpg',
            4: 'template/zaekev2/static/img/2016/meizu-mx6-2016/SLIDE/3.jpg',
			5: 'template/zaekev2/static/img/2016/meizu-mx6-2016/SLIDE/4.jpg',
            6: 'template/zaekev2/static/img/2016/meizu-mx6-2016/SLIDE/5.jpg',
			7: 'template/zaekev2/static/img/2016/meizu-mx6-2016/SLIDE/6.jpg',
            8: 'template/zaekev2/static/img/2016/meizu-mx6-2016/SLIDE/7.jpg',
			9: 'template/zaekev2/static/img/2016/meizu-mx6-2016/SLIDE/8.jpg'
}

var START = false;