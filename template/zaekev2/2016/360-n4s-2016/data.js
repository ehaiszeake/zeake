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
    0: {
        time: '16:25',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/1.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/2.jpg',
            2: 'template/zaekev2/static/img/2016/360-n4s-2016/3.jpg',
            3: 'template/zaekev2/static/img/2016/360-n4s-2016/4.jpg'
        },
        content: '小编已到达本次 360 手机 N4S 暨 360OS2.0#发布会的现场，本次发布会在美美的广州塔中心气派非凡。'
    },
    1: {
        time: '16:58',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/5.jpg'
        },
        content: '中国电信集团电子渠道运营中心的吴岳强总经理也来到了现场。'
    },
    2: {
        time: '17:02',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/6.jpg'
        },
        content: '360董事长周鸿祎上台发言首先感谢了此次2016年天翼智能终端交易博览会，同时表示互联网对于现今智能手机的影响。'
    },
    3: {
        time: '17:17',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/7.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/8.jpg'
        },
        content: '周鸿祎同中国电信、京东以及其他的负责人上台开启了N4S的销售仪式'
    },
    4: {
        time: '17:20',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/9.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/10.jpg'
        },
        content: '360手机总裁祝芳浩上台分享此前发布的360 N4，其表示360手机在京东的好评率达到98%'
    },
    5: {
        time: '17:22',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/11.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/12.jpg',
            2: 'template/zaekev2/static/img/2016/360-n4s-2016/13.jpg'
        },
        content: '祝芳浩以“什么样的手机是好用的手机？”为开始介绍了全新的360 N4S'
    },
    6: {
        time: '17:24',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/14.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/15.jpg',
            2: 'template/zaekev2/static/img/2016/360-n4s-2016/16.jpg',
            3: 'template/zaekev2/static/img/2016/360-n4s-2016/17.jpg'
        },
        content: '360 N4S采用5.5吋的in-cell屏幕，分辨率为1920*1080，带来更加细腻动人的画质，并采用2.5D玻璃覆盖'
    },
    7: {
        time: '17:27',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/18.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/19.jpg'
        },
        content: '360N4S采用了全新的隐藏式触摸按键设计'
    },
    8: {
        time: '17:29',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/20.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/21.jpg',
            2: 'template/zaekev2/static/img/2016/360-n4s-2016/22.jpg'
        },
        content: '360 N4S拥有98%的金属占比、纳米注塑，并且使用了6000系列的铝合金。给用户提供了“如丝般”的触感，手感和美学兼备'
    },
    9: {
        time: '17:31',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/23.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/24.jpg'
        },
        content: '360 N4S的机身是“看起来优雅，摸起来舒服”'
    },
    10: {
        time: '17:34',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/25.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/26.jpg'
        },
        content: '360 N4S提供了众多的指纹便捷功能，并且提供了红外遥控功能'
    },
    11: {
        time: '17:35',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/27.jpg'
        },
        content: '一张图看懂什么360N4S为什么是好用的手机'
    },
    12: {
        time: '17:37',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/28.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/29.jpg',
            2: 'template/zaekev2/static/img/2016/360-n4s-2016/30.jpg'
        },
        content: 'N4S拥有全网通以及VOLTE'
    },
    13: {
        time: '17:40',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/31.jpg'
        },
        content: '在配置上360 N4S采用了联发科Hero X20处理器，跑分优化在鲁大师排行榜上排名第一'
    },
    14: {
        time: '17:42',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/32.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/33.jpg'
        },
        content: '360 N4S的后置摄像头采用了三星的1600万像素ISOCELL摄像头，并配置了双色温闪光灯'
    },
    15: {
        time: '17:44',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/34.jpg'
        },
        content: '“在一个完美主义者的眼里这是一个怎样的世界？”'
    },
    16: {
        time: '17:46',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/35.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/36.jpg',
            2: 'template/zaekev2/static/img/2016/360-n4s-2016/37.jpg',
            3: 'template/zaekev2/static/img/2016/360-n4s-2016/38.jpg'
        },
        content: '祝芳浩表示在这个“粪粪不平”的时代，他们把360 N4S的摄像头给做平了。此次360 N4S的前置摄像头达到了800万像素，并拥有了前置柔光灯'
    },
    17: {
        time: '17:49',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/39.jpg'
        },
        content: '一张图看懂360N4S的拍照功能'
    },
    18: {
        time: '17:50',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/40.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/41.jpg'
        },
        content: '360 N4S拥有一颗协处理器来运行一些比较简单的任务，这使得它的功耗降低了21%'
    },
    19: {
        time: '17:51',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/42.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/43.jpg',
            2: 'template/zaekev2/static/img/2016/360-n4s-2016/44.jpg'
        },
        content: '本次360 N4S采用了一块5000mAh的电池，祝芳浩表示使用两天完全没有问题'
    },
    20: {
        time: '17:53',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/45.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/46.jpg'
        },
        content: '祝芳浩表示“大电池不配备快充就是坑爹”，360 N4S两小时能充满其5000毫安的大电池'
    },
    21: {
        time: '17:56',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/47.jpg'
        },
        content: '一张图看懂360N4S如何畅快'
    },
    22: {
        time: '17:57',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/48.jpg'
        },
        content: '一张图看懂360N4S如何持久'
    },
    23: {
        time: '17:59',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/49.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/50.jpg'
        },
        content: '本次京东联合中国电信带来了“京翼行动”，助力中国电信和360手机开拓校园市场'
    },
    24: {
        time: '18:07',
        single: true,
        content: '祝芳浩再次上台，开始介绍360 N4S这次所搭载的系统'
    },
    25: {
        time: '18:09',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/51.jpg'
        },
        content: '祝芳浩表示360 OS拥有或许是世界上最强大的安全识别库，能给予用户强大的安全保障'
    },
    26: {
        time: '18:11',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/52.jpg'
        },
        content: '此次全新带来的360 OS2.0不仅在安全性上有所提高，而且更加美观'
    },
    27: {
        time: '18:12',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/53.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/54.jpg'
        },
        content: '360用户体验总监上台开始介绍全新的360 OS2.0'
    },
    28: {
        time: '18:13',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/55.jpg'
        },
        content: '360 OS2.0使用了较为深色的主题来显示安全隐私应用，来提高用户的识别度'
    },
    29: {
        time: '18:14',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/56.jpg'
        },
        content: '360 OS2.0添加了闹钟天气播报'
    },
    30: {
        time: '18:15',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/57.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/58.jpg'
        },
        content: '面对现如今手机千篇一律的桌面，360 OS2.0此次推出了3D智能桌面功能'
    },
    31: {
        time: '18:17',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/59.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/60.jpg'
        },
        content: '360 OS2.0拥有诸多便利的出行场景功能，能为用户提供便利的出行体验'
    },
    32: {
        time: '18:23',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/61.jpg'
        },
        content: '360 OS2.0拥有财产隔离系统2.0，拥有独立的财产内应用商店'
    },
    33: {
        time: '18:24',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/62.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/63.jpg'
        },
        content: '360 OS2.0此次新增了隐私系统2.0，拥有独立系统和私密入口。app的隐私保障得到了提高'
    },
    34: {
        time: '18:28',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/64.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/65.jpg'
        },
        content: '360 OS2.0独创的三系统最高安全保障，把原生系统、财产系统和隐私系统连接起来给用户最高的安全保障'
    },
    35: {
        time: '18:30',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/66.jpg'
        },
        content: '360 OS2.0此次还带来了加密通话，能禁止录音和自动屏蔽窃听'
    },
    36: {
        time: '18:31',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/67.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/68.jpg'
        },
        content: '360 OS2.0还添加短信“阅后自焚”功能'
    },
    37: {
        time: '18:34',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/69.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/70.jpg'
        },
        content: '360 OS2.0此次还针对时下热门的打车软件进行了安全系统的升级，可以分享司机信息'
    },
    38: {
        time: '18:38',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/71.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/72.jpg'
        },
        content: '360 OS2.0出行安全卫士还拥有一键呼叫、智能识别异常情况等功能'
    },
    39: {
        time: '18:39',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/73.jpg'
        },
        content: '一张图看懂360 OS2.0出行安全卫士'
    },
    40: {
        time: '18:41',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/74.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/75.jpg'
        },
        content: '从保护你的手机到保护你，360 OS2.0这次还带来了全新的健康卫士功能'
    },
    41: {
        time: '18:44',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/76.jpg'
        },
        content: '360通过一段视频告诉人们要戒掉“手机病”，多陪陪家人'
    },
    42: {
        time: '18:46',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/77.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/78.jpg'
        },
        content: '360 OS2.0此次针对儿童推出专属的儿童桌面'
    },
    43: {
        time: '18:50',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/79.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/80.jpg'
        },
        content: '此次360 OS2.0还增加了“一键清理”功能，针对微信软件做了特别的优化'
    },
    44: {
        time: '18:53',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/81.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/82.jpg',
            2: 'template/zaekev2/static/img/2016/360-n4s-2016/83.jpg'
        },
        content: '此次360 OS2.0还为用户带来的高达2.6T永久免费的云存储空间，以及本机的无损浏览'
    },
    45: {
        time: '18:55',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/84.jpg'
        },
        content: '一张图看懂360 OS2.0——做安全的守护者'
    },
    46: {
        time: '18:56',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/85.jpg',
            1: 'template/zaekev2/static/img/2016/360-n4s-2016/86.jpg'
        },
        content: '360 N4S售价1199元起，7月15日18：00开始预约，7月20日10：00在360手机商城、360商城和京东开始发售'
    },
    47: {
        time: '18:58',
        img: {
            0: 'template/zaekev2/static/img/2016/360-n4s-2016/87.jpg'
        },
        content: '现场还有一个周鸿祎先生的彩蛋'
    }
}
var SLIDE = {}
var START = false