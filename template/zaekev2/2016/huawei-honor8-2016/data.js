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
		src: 'template/zaekev2/static/img/2016/huawei-honor8-2016/RELATED/1.jpg',
		href: 'http://www.zaeke.com/article-3957-1.html',
		title: '平民版华为P9？荣耀8全曝光'
	},
	1: {
		src: 'template/zaekev2/static/img/2016/huawei-honor8-2016/RELATED/2.jpg',
		href: 'http://www.zaeke.com/thread-157886-1-1.html',
		title: '老炮加持的双摄像头 荣耀 8现身工信部'
	},
	2: {
		src: 'template/zaekev2/static/img/2016/huawei-honor8-2016/RELATED/3.jpg',
		href: 'http://www.zaeke.com/thread-157051-1-1.html',
		title: '小爷登场老炮加持 吴亦凡将担任荣耀8代言人'
	},
	3: {
		src: 'template/zaekev2/static/img/2016/huawei-honor8-2016/RELATED/4.jpg',
		href: 'http://www.zaeke.com/article-4020-1.html',
		title: '真皮腕带 华为荣耀发布畅玩手环A1 SS版'
	},
	4: {
		src: 'template/zaekev2/static/img/2016/huawei-honor8-2016/RELATED/5.png',
		href: 'http://www.zaeke.com/article-4021-1.html',
		title: '华为荣耀8正式亮相，也许是最漂亮的荣耀手机'
	}
};
var CONTENT = {
    0: {
        time: '12:00',
        content: '吴亦凡同款的 荣耀 8 即将发布，真的是美得与众不同吗？再次用上双摄像头，拍照会再次突破吗？让我们共同期待今晚的发布会吧！',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/1.jpg'
        }
	},
    1: {
        time: '18:40',
        content: '小编已到达本次美得与众不同荣耀 8的发布会现场。主打年轻消费者的荣耀，现场布置同样充满活力！',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/2.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-honor8-2016/3.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-honor8-2016/4.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-honor8-2016/5.jpg'
        }
	},
    2: {
        time: '18:45',
        content: '发布会即将开始，现在正在播放荣耀的品牌宣传片。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/6.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-honor8-2016/7.jpg'
        }
	},
    3: {
        time: '19:25',
        content: '暖场表演，现场乐队演奏。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/8.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-honor8-2016/9.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-honor8-2016/10.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-honor8-2016/11.jpg'
        }
	},
    4: {
        time: '19:43',
        content: '主持人以“什么是美为”开场，来讲述今天荣耀8的特点是美。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/12.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-honor8-2016/13.jpg'
        }
	},
    5: {
        time: '19:45',
        content: '主荣耀营销部长 王晓冬上台讲述荣耀第一次到上海的大型发布会，整个发布会充满青春热情非常符合荣耀的品牌气质',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/14.jpg'
        }
	},
    6: {
        time: '19:47',
        content: '王晓冬以“勇敢做自己”为口号，讲述了荣耀一直以来的发布历程。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/15.jpg'
        }
	},
    7: {
        time: '19:48',
        content: '王晓冬讲述荣耀在938天中做出的突破，还有首次采用双摄像头的荣耀V8。并称没有双摄像头的手机称不上旗舰，暗示荣耀8将搭载双摄像头。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/16.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-honor8-2016/17.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-honor8-2016/18.jpg'
        }
	},
    8: {
        time: '19:50',
        content: '王晓冬表示现在是消费需求升级的时代，所以品牌，产品和体验都需要升级。而荣耀的目标消费群就是年轻人。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/19.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-honor8-2016/20.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-honor8-2016/21.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-honor8-2016/22.jpg',
        }
	},
    9: {
        time: '19:55',
        content: '荣耀总裁 赵明上台讲述荣耀 8的产品理念。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/23.jpg'
        }
	},
    10: {
        time: '19:57',
        content: '荣耀 6Plus是首次采用仿生双摄像头的手机，赵明再一起强调双摄像头在旗舰手机中的重要性。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/24.jpg'
        }
	},
    11: {
        time: '19:57',
        content: '以及荣耀7的智灵键和荣耀V8的2K屏都代表着荣耀品牌在科技和潮流都走在前方。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/25.jpg',
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/26.jpg'
        }
	},
    12: {
        time: '20:00',
        content: '赵明表示在如今千篇一律的机型中，荣耀 8要做出美得与众不同。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/28.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-honor8-2016/29.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-honor8-2016/30.jpg',
        }
	},
    13: {
        time: '20:05',
        content: '荣耀 8将采用双玻璃机身和后置双摄像头，整体看上去就像是华为P9的双玻璃版本。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/31.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-honor8-2016/32.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-honor8-2016/33.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-honor8-2016/34.jpg',
            4: 'template/zaekev2/static/img/2016/huawei-honor8-2016/35.jpg'
        }
	},
    14: {
        time: '20:07',
        content: '赵明表示很难形容荣耀 8的没，其在一众金属机身手机中显得与众不同。是光的载体以光为设计理念，采用3D光刻的极光玻璃。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/36.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-honor8-2016/37.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-honor8-2016/38.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-honor8-2016/39.jpg',
            4: 'template/zaekev2/static/img/2016/huawei-honor8-2016/40.jpg',
        }
	},
    15: {
        time: '20:09',
        content: '荣耀8纯平潜入式双镜头，无凸起不开孔；光雾喷砂金属边框与高光切边的玻璃面板，不仅使光线完美衔接，形成无间断的光影流动，更能让你拥有细腻圆润的手感。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/41.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-honor8-2016/42.jpg'
        }
	},
    16: {
        time: '20:11',
        content: '荣耀 8这次带来了独一无二的全新配色，魅海蓝、流光金、珠光白、幻夜黑、樱语粉四大配色以供消费者选择。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/43.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-honor8-2016/44.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-honor8-2016/45.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-honor8-2016/46.jpg',
            4: 'template/zaekev2/static/img/2016/huawei-honor8-2016/47.jpg',
        }
	},
    17: {
        time: '20:13',
        content: '随着荣耀 8同时推出的还有流光PC保护壳，能提供很好的保护效果并保持美观。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/48.jpg'
        }
	},
    18: {
        time: '20:16',
        content: '与荣耀 8一同推出的还有备受好评的荣耀畅玩手环A1 手环 SS版。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/49.jpg'
        }
	},
    19: {
        time: '20:17',
        content: '荣耀 8采用了纯净的白色包装盒，称之为“极光印记”。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/50.jpg'
        }
	},
    20: {
        time: '20:19',
        content: '荣耀 8采用索尼IMX286以及黑白双摄像的组合，拥有反差+深度+激光，3种方式混合对焦。双镜走天下。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/51.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-honor8-2016/52.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-honor8-2016/53.jpg'
        }
	},
    21: {
        time: '20:23',
        content: '荣耀 8的前置800W高清摄像头、1.4um像素尺寸拥有暗光丽影、3D自拍等功能”。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/54.jpg'
        }
	},
    22: {
        time: '20:32',
        content: '荣耀 8采用5.2英寸的屏幕从现场来看，其黑幕屏边框极窄。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/55.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-honor8-2016/56.jpg'
        }
	},
    23: {
        time: '20:35',
        content: '荣耀 8将采用海思麒麟950 处理器和i5协处理器，拥有4GB+64GB以及3GB+32GB，全系标配NFC功能。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/57.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-honor8-2016/58.jpg',
        }
	},
    24: {
        time: '20:39',
        content: '荣耀 8此次在后置指纹识别模块中还整合了“智灵键”，只要轻按智灵键就可以语音操控出行、查看航班信息、搜索美食酒店。。 ',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/59.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-honor8-2016/60.jpg',
        }
	},
    25: {
        time: '20:42',
        content: '荣耀 8采用最新版的EUI，并拥有3000mAh容量电池，并支持9V/2A快充。一天一次让你丢掉移动电源。 ',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/61.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-honor8-2016/62.jpg',
        }
	},
    26: {
        time: '20:47',
        content: '荣耀 8在天际通，全网通支持双卡双待。 ',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/64.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-honor8-2016/65.jpg',
        }
	},
    27: {
        time: '20:50',
        content: '荣耀8支持移动、联通、电信三大运营商4G网络，双卡双待双通，可多卡盲插。天际通覆盖全球60个国家和地区，海外出差境外旅游说走就走，WLAN+3.0双频自动切换，随时随地保证流畅的上网体验！ ',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/64.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-honor8-2016/65.jpg',
        }
	},
    28: {
        time: '20:52',
        content: '这一次我们带来荣耀8双面玻璃险，给美双面保护，让你尊享30天双面玻璃保险特权，在追求美的路上，多一份对用户的贴心和对品质的保障。并通过了美国UI110铂金级认证，荣耀制造，从未止步！ ',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/66.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-honor8-2016/67.jpg',
        }
	},
    29: {
        time: '20:53',
        content: '一张图看懂荣耀 8 ',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/68.jpg'
        }
	},
    30: {
        time: '20:54',
        content: '荣耀8分为3个版本，1999元的运营商/全网通版搭载3GB RAM+32GB ROM，提供白色、金色以及黑色机身；2299元的全网通版提供4GB RAM+32GB ROM，提供白色、金色、蓝色以及黑色机身；2499元的全网通版提供4GB RAM+64GB ROM，提供白色、金色、蓝色、黑色以及粉色机身。将于7月11日~7月18日开始预约，7月19日首销。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/69.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-honor8-2016/70.jpg',
        }
	},
    31: {
        time: '20:55',
        content: '荣耀 8与荣耀 V8将组成双旗舰，并宣布吴亦凡将出任荣耀中国区代言人。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/71.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-honor8-2016/72.jpg',
        }
	},
    32: {
        time: '20:57',
        content: '荣耀不凡荣耀电力卡和荣耀极光派对，将让用户近距离接触吴亦凡。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-honor8-2016/73.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-honor8-2016/74.jpg',
        }
	},
    33: {
        time: '21:00',
        content: '本次发布会到此结束。',
	},
};
var SLIDE = {}