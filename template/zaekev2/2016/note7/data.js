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
    1: {
		src: 'template/zaekev2/static/img/2016/note7/RELATED/3.jpg',
		href: 'http://www.zaeke.com/article-4355-1.html',
		title: '三星Galaxy Note 7将会在2个月内获得Android 7.0更新'
	},
    2: {
		src: 'template/zaekev2/static/img/2016/note7/RELATED/2.jpg',
		href: 'http://www.zaeke.com/article-4250-1.html',
		title: '三星Galaxy Note 7国行过审，正面无LOGO'
	},
    3: {
		src: 'template/zaekev2/static/img/2016/note7/RELATED/1.jpg',
		href: 'http://www.zaeke.com/article-4371-1.html',
		title: '尽管和S7 edge规格没啥大区别，但Note 7并不愁卖'
	},
    4: {
		src: 'template/zaekev2/static/img/2016/note7/RELATED/4.jpg',
		href: 'http://www.zaeke.com/article-4414-1.html',
		title: '三星Galaxy Note7上手评：不是大屏就是Note，不是曲面就成Edge'
	},
}
var CONTENT = {
    0: {
        time: '12:00',
        content: '三星#GalaxyNote7#中国区发布会将于下午5点开始。细腻圆滑的对称四曲面设计，行云流水的S Pen书写，暗黑科技的虹膜识别，盖乐世Note7邀您共享科技盛宴。更多震撼，7待与您相约发布会，惊喜揭晓。届时欢迎大家观看图文直播以及后续的详细内容，在第一时间掌握最全面的资讯。同时也欢迎大家发微博 @知客数码 参与直播互动讨论哟~',
        img: {
            0: 'template/zaekev2/static/img/2016/note7/1.jpg',
            1: 'template/zaekev2/static/img/2016/note7/2.jpg'
        }
    },
    1: {
        time: '17:05',
        content: '发布会预热表演，现场采用了全息投影效果震撼。',
        img: {
            0: 'template/zaekev2/static/img/2016/note7/3.jpg',
            1: 'template/zaekev2/static/img/2016/note7/4.jpg'
        }
    },
    2: {
        time: '17:08',
        content: '现场通过舞蹈和现场效果展示出Galaxy Note7的特性。',
        img: {
            0: 'template/zaekev2/static/img/2016/note7/5.jpg',
            1: 'template/zaekev2/static/img/2016/note7/6.jpg'
        }
    },
    3: {
        time: '17:10',
        content: '三星移动总裁高东真上台。',
        img: {
            0: 'template/zaekev2/static/img/2016/note7/7.jpg'
        }
    },
    4: {
        time: '17:12',
        content: '高东真表示三星非常乐于倾听中国消费者的声音。',
        img: {
            0: 'template/zaekev2/static/img/2016/note7/8.jpg',
            1: 'template/zaekev2/static/img/2016/note7/9.jpg'
        }
    },
    5: {
        time: '17:14',
        content: '高东真表示全新的Gxlxay Note7在各方面提升都十分符合中国消费者的特性。',
        img: {
            0: 'template/zaekev2/static/img/2016/note7/10.jpg',
            1: 'template/zaekev2/static/img/2016/note7/11.jpg',
            2: 'template/zaekev2/static/img/2016/note7/12.jpg',
            3: 'template/zaekev2/static/img/2016/note7/13.jpg'
        }
    },
    6: {
        time: '17:17',
        content: 'Gxlxay C系列正式专为中国市场推出的产品。',
        img: {
            0: 'template/zaekev2/static/img/2016/note7/14.jpg',
            1: 'template/zaekev2/static/img/2016/note7/15.jpg'
        }
    },
    7: {
        time: '17:19',
        content: '今天的主角三星Galaxy Note7国行版正式登场，国行拥有黑色、银色、蓝色可供选择。',
        img: {
            0: 'template/zaekev2/static/img/2016/note7/16.jpg'
        }
    },
    8: {
        time: '17:21',
        content: '三星电子大中华区产品战略部总监束灿 束灿 上台介绍 Galaxy Note7。',
        img: {
            0: 'template/zaekev2/static/img/2016/note7/17.jpg'
        }
    },
    9: {
        time: '17:23',
        content: 'Galaxy Note7采用了高难度的曲面屏，在玻璃屏幕的边缘增加曲面设计，不仅需要坚固的屏幕材质 还需要成熟的玻璃热加工技术 。',
        img: {
            0: 'template/zaekev2/static/img/2016/note7/18.jpg',
            1: 'template/zaekev2/static/img/2016/note7/19.jpg'
        }
    },
    10: {
        time: '17:24',
        content: '全新的S-Pen采用更细的比较以及更高的压感。',
        img: {
            0: 'template/zaekev2/static/img/2016/note7/20.jpg',
            1: 'template/zaekev2/static/img/2016/note7/21.jpg'
        }
    },
    11: {
        time: '17:26',
        content: 'Gxlxay Note7最为重要特性的S-Pen，三星请来了中央美院的教授上台讲述其使用经历。',
        img: {
            0: 'template/zaekev2/static/img/2016/note7/22.jpg'
        }
    },
    12: {
        time: '17:29',
        content: 'Gxlxay Note7 S-Pen绘画作品。',
        img: {
            0: 'template/zaekev2/static/img/2016/note7/23.jpg',
            1: 'template/zaekev2/static/img/2016/note7/24.jpg',
            2: 'template/zaekev2/static/img/2016/note7/25.jpg',
            3: 'template/zaekev2/static/img/2016/note7/26.jpg'
        }
    },
    13: {
        time: '17:34',
        content: '并不是所有的大屏手机都叫Note，Gxlxay Note7中S-Pen软硬件结合体验得到质的飞跃。',
        img: {
            0: 'template/zaekev2/static/img/2016/note7/27.jpg',
            1: 'template/zaekev2/static/img/2016/note7/28.jpg'
        }
    },
    14: {
        time: '17:35',
        content: '此次三星在 Gxlxay Note7 加入独有的 mDNle 芯片实现了手机视频HDR功能。',
        img: {
            0: 'template/zaekev2/static/img/2016/note7/29.jpg',
            1: 'template/zaekev2/static/img/2016/note7/30.jpg'
        }
    },
    15: {
        time: '17:38',
        content: '作为 Gxlxay Note7 最大的卖点当然是虹膜识别功能。',
        img: {
            0: 'template/zaekev2/static/img/2016/note7/31.jpg',
            1: 'template/zaekev2/static/img/2016/note7/32.jpg'
        }
    },
    16: {
        time: '17:42',
        content: '三星请来《奇葩说》议长——马东上台解说虹膜识别功能。',
        img: {
            0: 'template/zaekev2/static/img/2016/note7/33.jpg',
            1: 'template/zaekev2/static/img/2016/note7/34.jpg'
        }
    },
    17: {
        time: '17:45',
        content: '现场演示 Gxlxay Note7 的防水特性。',
        img: {
            0: 'template/zaekev2/static/img/2016/note7/35.jpg',
            1: 'template/zaekev2/static/img/2016/note7/36.jpg'
        }
    },
    18: {
        time: '17:52',
        content: '除了 Gxlxay Note7 三星此次还带来了其VR设备 Gaer 360。',
        img: {
            0: 'template/zaekev2/static/img/2016/note7/37.jpg',
            1: 'template/zaekev2/static/img/2016/note7/38.jpg'
        }
    },
    19: {
        time: '17:54',
        content: '三星的 Gaer VR也正式登陆中国市场。',
        img: {
            0: 'template/zaekev2/static/img/2016/note7/39.jpg'
        }
    },
    20: {
        time: '17:57',
        content: '此次三星还未 Gxlxay Note7 推出了众多周边设备。',
        img: {
            0: 'template/zaekev2/static/img/2016/note7/40.jpg',
            1: 'template/zaekev2/static/img/2016/note7/41.jpg',
            2: 'template/zaekev2/static/img/2016/note7/42.jpg',
            3: 'template/zaekev2/static/img/2016/note7/43.jpg'
        }
    },
}
var SLIDE = {
    0: 'template/zaekev2/static/img/2016/note7/SLIDE/1.jpg', 
    1: 'template/zaekev2/static/img/2016/note7/SLIDE/2.jpg', 
	2: 'template/zaekev2/static/img/2016/note7/SLIDE/3.jpg', 
	3: 'template/zaekev2/static/img/2016/note7/SLIDE/4.jpg', 
	4: 'template/zaekev2/static/img/2016/note7/SLIDE/5.jpg',
    5: 'template/zaekev2/static/img/2016/note7/SLIDE/6.jpg', 
    6: 'template/zaekev2/static/img/2016/note7/SLIDE/7.jpg', 
	7: 'template/zaekev2/static/img/2016/note7/SLIDE/8.jpg', 
	8: 'template/zaekev2/static/img/2016/note7/SLIDE/9.jpg', 
	9: 'template/zaekev2/static/img/2016/note7/SLIDE/10.jpg',
    10: 'template/zaekev2/static/img/2016/note7/SLIDE/11.jpg', 
	11: 'template/zaekev2/static/img/2016/note7/SLIDE/12.jpg'
}

var START = true;