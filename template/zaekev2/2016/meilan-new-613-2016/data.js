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
        src: 'template/zaekev2/static/img/2016/meilan-new-613-2016/RELATED/1.jpg',
        href: 'http://www.zaeke.com/article-3670-1.html',
        title: '送完车子送房子？魅蓝新品即将登场',
    },
    1: {
        src: 'template/zaekev2/static/img/2016/meilan-new-613-2016/RELATED/2.jpg',
        href: 'http://www.zaeke.com/article-3667-1.html',
        title: '亚洲新天王李荣浩将助阵魅蓝新品发布会'
    },
    2: {
        src: 'template/zaekev2/static/img/2016/meilan-new-613-2016/RELATED/3.jpg',
        href: 'http://www.zaeke.com/article-3767-1.html',
        title: '魅族魅蓝3s登场：这次的金属机器有着不一样'
    },
    3: {
        src: 'template/zaekev2/static/img/2016/meilan-new-613-2016/RELATED/4.jpg',
        href: 'http://www.zaeke.com/article-3768-1.html',
        title: '魅族路由器极速版、EP51白色版登场'
    }
};
var CONTENT = {
    1: {
        time: '16:00',
        content: '魅族魅蓝新品发布会将于本月的13号在北京举行，这次邀请函十分特殊，一只小小的钥匙和底部印有一句“想想还是小的好”，提前预约有机会获得小户型一套。继上一次的魅蓝3和PRO 6之后，魅蓝的新品也将继续小屏之旅，并且李荣浩将会出席“演唱会”献唱，大家对魅蓝新品有什么期待或是猜测呢，欢迎各位在知客社区和微博参与讨论哦。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/1.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/2.jpg'
        }
    },
    2: {
        time: '13:23',
        content: '小编已经到达本次魅蓝新品的发（yan）布(chang)会的会场北京·中国电影导演中心，话说此次演唱的嘉宾是李荣浩呦。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/3.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/4.jpg'
        }
    },
    3: {
        time: '14:00',
        content: '亚洲新天王——李荣浩登台献唱《自拍》和《李白》为魅蓝新品发布会预热',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/5.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/6.jpg',
            3: 'template/zaekev2/static/img/2016/meilan-new-613-2016/7.jpg',
            4: 'template/zaekev2/static/img/2016/meilan-new-613-2016/8.jpg'
        }
    },
    4: {
        time: '14:10',
        content: '现场放出预热视频，突出质感与美感。这一次的青年良品依然是好看。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/9.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/10.jpg',
            3: 'template/zaekev2/static/img/2016/meilan-new-613-2016/11.jpg',
            4: 'template/zaekev2/static/img/2016/meilan-new-613-2016/12.jpg'
        }
    },
    5: {
        time: '14:12',
        content: '魅族总裁白永秀上台，发布会正式开始。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/13.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/14.jpg'
        }
    },
    6: {
        time: '14:14',
        content: '白永祥表示魅蓝3获得得评价非常高，而颜值加速度就说明了一切。这场发布会是熟悉的新产品，很好的继承魅蓝3的颜值加速度。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/15.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/16.jpg'
        }
    },
    7: {
        time: '14:15',
        content: '魅蓝3s依然拥有与魅蓝3相同的极佳的手感。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/17.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/18.jpg'
        }
    },
    8: {
        time: '14:16',
        content: '白永祥表示魅蓝3所采用的2.5D玻璃对于该价位的机器成本是有压力的，但这样所换来的颜值是值得的。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/19.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/20.jpg'
        }
    },
    9: {
        time: '14:17',
        content: '除了颜值外魅蓝3s还继承了魅蓝3强劲的性能。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/21.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/22.jpg',
            3: 'template/zaekev2/static/img/2016/meilan-new-613-2016/23.jpg'
        }
    },
    10: {
        time: '14:19',
        content: '魅蓝3s同样拥有出色的相机，100W后置摄像头，500W前置摄像头，F/2.0的光圈和0.2s的相位对焦。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/24.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/25.jpg'
        }
    },
    11: {
        time: '14:21',
        content: '魅蓝3s在保持魅蓝3的机身厚度和重量的前提下，在电池容量提升到3020mAh。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/26.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/27.jpg',
            3: 'template/zaekev2/static/img/2016/meilan-new-613-2016/28.jpg',
            4: 'template/zaekev2/static/img/2016/meilan-new-613-2016/29.jpg'
        }
    },
    12: {
        time: '14:23',
        content: '魅蓝3s最大的变化是采用全金属机身，延续着同样的CMC和喷砂处理使得整体质感有着很大的提升。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/30.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/31.jpg',
            3: 'template/zaekev2/static/img/2016/meilan-new-613-2016/32.jpg',
            4: 'template/zaekev2/static/img/2016/meilan-new-613-2016/33.jpg'
        }
    },
    13: {
        time: '14:25',
        content: '魅蓝3s除了白、灰、银外，还加入了优秀的玫瑰金配色。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/34.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/35.jpg'
        }
    },
    14: {
        time: '14:26',
        content: '魅蓝3s采用新全网通功能，支持6模18频运营商随意切换。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/36.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/37.jpg'
        }
    },
    15: {
        time: '14:28',
        content: '并且魅蓝3s还拥有双频Wi-Fi和VoLTE，在百元机上十分难得。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/38.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/39.jpg'
        }
    },
    16: {
        time: '14:30',
        content: '魅蓝3s还加入了mTouch 2.1的指纹识别模块。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/40.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/41.jpg'
        }
    },
    17: {
        time: '14:32',
        content: '得益于mTouch 2.1的加入，魅蓝3s还支持mPay能进行支付宝和魅族自家应用的指纹支付操作。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/42.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/43.jpg'
        }
    },
    18: {
        time: '14:35',
        content: '李楠上台发布了魅族路由器极速版，其采用的双天线设计实际是四天线。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/44.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/45.jpg'
        }
    },
    19: {
        time: '14:37',
        content: '魅族路由器极速版能覆盖200㎡的范围，支持802.11ac相较普通路由器有着传输速度3倍提升。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/46.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/47.jpg'
        }
    },
    20: {
        time: '14:40',
        content: '魅族路由器极速版还支持移动电源供电，使用魅族移动电源10000mAh供电能工作18小时。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/48.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/49.jpg'
        }
    },
    21: {
        time: '14:42',
        content: '魅族路由器极速版还支持大量插件以及两步上网连接等便捷操作。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/50.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/51.jpg'
        }
    },
    22: {
        time: '14:43',
        content: '魅族路由器极速版售价199元，与魅蓝3s一同购买仅需159元。将于6月20日在京东以及魅族商城开卖。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/52.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/53.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/54.jpg'
        }
    },
    23: {
        time: '14:45',
        content: '魅族运动蓝牙耳机EP-51，上市至今已卖出10W条并成功登上了京东蓝牙耳机榜第一名。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/55.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/56.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/57.jpg'
        }
    },
    24: {
        time: '14:47',
        content: '魅族运动蓝牙耳机EP-51将推出白色版本，并采用特别的防污材质打造。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/58.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/59.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/60.jpg'
        }
    },
    25: {
        time: '14:50',
        content: '魅蓝3s售价方面，2G RAM+16 ROM版为699元，3G RAM+32G ROM版为899元。将于6月18日在天猫、京东、苏宁以及线下实体店开卖。。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-613-2016/61.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-613-2016/62.jpg'
        }
    },
};
var SLIDE = {
    1:'template/zaekev2/static/img/2016/meilan-new-613-2016/SLIDE/1.jpg',
    2:'template/zaekev2/static/img/2016/meilan-new-613-2016/SLIDE/2.jpg',
    3:'template/zaekev2/static/img/2016/meilan-new-613-2016/SLIDE/3.jpg',
    4:'template/zaekev2/static/img/2016/meilan-new-613-2016/SLIDE/4.jpg',
    5:'template/zaekev2/static/img/2016/meilan-new-613-2016/SLIDE/5.jpg',
    6:'template/zaekev2/static/img/2016/meilan-new-613-2016/SLIDE/6.jpg',
    7:'template/zaekev2/static/img/2016/meilan-new-613-2016/SLIDE/7.jpg',
    8:'template/zaekev2/static/img/2016/meilan-new-613-2016/SLIDE/8.jpg',
}