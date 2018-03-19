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
    1: {
        src: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/RELATED/1.jpg',
        href: 'http://www.zaeke.com/article-4115-1.html',
        title: '大杀器 红米Pro 配置全曝光 满满都是亮点'
    },
    2: {
       src: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/RELATED/2.png',
        href: 'http://www.zaeke.com/article-4111-1.html',
        title: '吴秀波：国民手机 红米Pro 将采用OLED屏幕'
    },
    3: {
        src: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/RELATED/3.jpg',
        href: 'http://www.zaeke.com/article-4165-1.html',
        title: '雷军：我是红米国民手机代言人'
    },
    4: {
       src: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/RELATED/4.jpg',
        href: 'http://www.zaeke.com/article-4179-1.html',
        title: '国民手机新标杆? 红米Pro亮相工信部'
    }
};
var CONTENT = {
    0: {
        time: '12:00',
        content: '此次红米手机的三位代言人：吴秀波、刘诗诗和刘浩然，他们也分别通过三道各具体色的菜为大家介绍全新的红米Pro。欢迎大家观看图文直播以及后续的详细内容，在第一时间掌握关于红米 Pro最全面的资讯。同时也欢迎大家发微博 @知客数码 参与直播互动讨论哟~',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/1.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/2.jpg'
        }
	},
    1: {
        time: '14:02',
        content: '红米手机三位代言人预热视频，集中展示配此次红米Pro的新特性并且拍照会是亮点。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/2.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/3.jpg'
        }
	},
    2: {
        time: '14:04',
        content: '雷军登台回顾了这三年来红米手机的战绩。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/5.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/6.jpg',
            2: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/7.jpg',
            3: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/8.jpg'
        }
	},
    3: {
        time: '14:07',
        content: '红米手机代言人吴秀波上台介绍这段时间使用红米Pro的感受。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/9.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/10.jpg'
        }
	},
    4: {
        time: '14:07',
        content: '雷军和吴秀波两人在上台使用红米Pro进行自拍。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/11.jpg'
        }
	},
    5: {
        time: '14:13',
        content: '红米Pro正如其名将会成为国民旗舰手机，并且将会配置价格上有新突破。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/12.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/13.jpg'
        }
	},
    6: {
        time: '14:15',
        content: '红米Pro在拍照上采用一颗1300W索尼IMX258摄像头和500W三星相机辅助景深信息。能实现硬件级的虚化效果。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/14.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/15.jpg',
            2: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/16.jpg',
            3: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/17.jpg',
            4: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/18.jpg'
        }
	},
    7: {
        time: '14:18',
        content: '现场使用红米Pro与单反相机对比。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/19.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/20.jpg'
        }
	},
    8: {
        time: '14:15',
        content: '现在放出了大量红米Pro拍照的样张。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/21.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/22.jpg',
            2: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/23.jpg',
            3: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/24.jpg',
            4: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/25.jpg',
            5: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/26.jpg'
        }
	},
    9: {
        time: '14:21',
        content: '雷军邀请刘诗诗上台现场使用红米Pro拍照，刘诗诗也表示红米Pro拍照十分好以后都不用带相机了。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/27.jpg'
        }
	},
    10: {
        time: '14:24',
        content: '雷军开始介绍红米Pro的工艺，采用金属拉丝工艺，并称能给你超乎期待的品质体验。全金属机身+拉丝工艺，高光阳极氧化工艺。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/28.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/29.jpg',
            2: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/30.jpg',
            3: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/31.jpg'
        }
	},
    11: {
        time: '14:25',
        content: '红米Pro采用前置指纹识别、2.5D玻璃、USB-C接口。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/32.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/33.jpg'
        }
	},
    12: {
        time: '14:28',
        content: '红米Pro 采用了一块5.5英寸1080P分辨率的OLED显示屏，每个像素点独立发光，黑色可以呈现更黝黑的黑色。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/34.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/35.jpg',
            2: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/36.jpg',
            3: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/37.jpg'
        }
	},
    13: {
        time: '14:30',
        content: '红米Pro采用联发科 Helio X25 十核处理器。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/38.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/39.jpg'
        }
	},
    14: {
        time: '14:32',
        content: '雷军邀请刘昊然上台现场使用红米Pro进行大型游戏的演示。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/40.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/41.jpg',
            2: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/42.jpg',
            3: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/43.jpg'
        }
	},
    15: {
        time: '14:35',
        content: '一张图红米Pro。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/44.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/45.jpg'
        }
	},
    16: {
        time: '14:38',
        content: '红米Pro售价正式公布，1499元起。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/46.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/47.jpg',
            2: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/48.jpg',
            3: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/49.jpg'
        }
	},
    17: {
        time: '14:42',
        content: '雷军正式带来小米笔记本，并确定要做高性能轻薄本。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/50.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/51.jpg',
            2: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/52.jpg',
            3: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/53.jpg'
        }
	},
    18: {
        time: '14:46',
        content: '小米笔记本Air采用全金属超轻薄，13.3"全金属机身，仅重1.28kg，最厚处14.8mm，比一分钱硬币还要薄；5.59mm超窄边框，80.1%超高屏占比；无边式保护玻璃，莫氏硬度高达7H；更惊艳的是「全高清防眩光屏幕」，全贴合技术减少眩光。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/54.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/55.jpg',
            2: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/56.jpg',
            3: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/57.jpg',
            4: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/58.jpg',
            5: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/59.jpg',
            6: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/60.jpg',
        }
	},
    19: {
        time: '14:46',
        content: '此次小米笔记本Air正面还采用了无LOGO设计，看上去更加简洁。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/61.jpg'
        }
	},
    20: {
        time: '14:48',
        content: '针对小米笔记本Air无LOGO的设计，小米还将联合当代艺术家设计众多机身贴纸和电脑包。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/62.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/63.jpg'
        }
	},
    21: {
        time: '14:48',
        content: '针对小米笔记本Air无LOGO的设计，小米还将联合当代艺术家设计众多机身贴纸和电脑包。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/62.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/63.jpg'
        }
	},
    22: {
        time: '14:51',
        content: '小米笔记本Air采用 Nvidia 940MX独立显卡+英特尔酷睿i5处理器，以及8GB内存+256GB SSD硬盘，配置相当的厚道。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/64.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/65.jpg',
            2: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/66.jpg',
            3: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/67.jpg',
            4: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/68.jpg',
            5: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/69.jpg',
            6: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/70.jpg',
            7: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/71.jpg'
        }
	},
    23: {
        time: '14:53',
        content: '有趣的是小米笔记本Air还支持硬盘拓展。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/72.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/73.jpg'
        }
	},
    24: {
        time: '14:57',
        content: '小米笔记本Air与全球领先的代工厂合作生产。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/74.jpg'
        }
	},
    25: {
        time: '15:03',
        content: '一张图看懂小米笔记本Air。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/75.jpg'
        }
	},
    26: {
        time: '15:06',
        content: '小米笔记本Air售价正式公布4999元起，雷军感叹为什么世界需要小米，因为这样的产品只有小米能做出来。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/76.jpg'
        }
	},
    27: {
        time: '15:12',
        content: '令人雷军还带来了另一款小米笔记本Air 12.5寸主打轻薄。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/77.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/78.jpg'
        }
	},
    28: {
        time: '15:14',
        content: '一张图看懂小米笔记本Air 12.5寸。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/79.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/80.jpg'
        }
	},
    29: {
        time: '15:19',
        content: '小米笔记本Air 12.5寸售价正式公布3499元起，两款小米笔记本都将于8月2日开放购买。',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/80.jpg'
        }
	},
    30: {
        time: '15:21',
        content: '直播到此结束，谢谢观看。',
	},
};
var SLIDE = {
    0: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/SLIDE/1.jpg',
    1: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/SLIDE/2.jpg',
    2: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/SLIDE/3.jpg',
    3: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/SLIDE/4.jpg',
    4: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/SLIDE/5.jpg',
    5: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/SLIDE/6.jpg',
    6: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/SLIDE/7.jpg',
    7: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/SLIDE/8.jpg',
    8: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/SLIDE/9.jpg',
    9: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/SLIDE/10.jpg',
    10: 'template/zaekev2/static/img/2016/xiaomi-new-2016-07-27/SLIDE/11.jpg'

};
var START = false;