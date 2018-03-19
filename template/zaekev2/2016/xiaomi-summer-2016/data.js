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
    0: {
         src: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/RELATED/R1.png',
         href: 'http://www.zaeke.com/article-4392-1.html',
         title: '小米定于8月25日召开发布会，中移动也有份？'
       },
    1: {
         src: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/RELATED/R1.png',
         href: 'http://www.zaeke.com/article-4385-1.html',
         title: '小米5寸新机曝光，会是红米4么？'
       },
    2: {
         src: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/RELATED/R1.png',
         href: 'http://www.zaeke.com/article-4459-1.html',
         title: '今天要发布的红米Note 4，应该是红米Pro的套娃'
       },
    3: {
         src: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/RELATED/20.jpg',
         href: 'http://www.zaeke.com/article-4461-1.html',
         title: '红米Note 4正式亮相，这就是新国民千元旗舰'
       },
    4: {
         src: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/RELATED/1z.jpg',
         href: 'http://www.zaeke.com/article-4469-1.html',
         title: '红米Note 4上手评：这才是应该是“国民手机”'
       }
}
var CONTENT = {
    0: {
        time: '10:30',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/1.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/2.jpg'
        },
        content: '雷军上台回顾了此前发布的国民手机红米 Pro，并宣布红米手机销量突破1.1亿台'
    },
    2: {
        time: '10:32',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/3.jpg'
        },
        content: '红米手机目前细分为经典系列红米、大屏系列红米Note、旗舰系列红米Pro。'
    },
     3: {
        time: '10:35',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/4.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/5.jpg',
            2: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/6.jpg',
            3: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/7.jpg'
        },
        content: '雷军强调红米手机的销量增长离不开与中国移动的合作。'
    },
    4: {
        time: '10:36',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/8.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/9.jpg'
        },
        content: '本次发布会的主角将会是小米与中国移动再次联手推出的红米 Note4。'
    },
    5: {
        time: '10:38',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/10.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/11.jpg'
        },
        content: '本次上台介绍新品的是小米联合创始人林斌，其回顾了此前推出的千元旗舰红米Note3。'
    },
    6: {
        time: '10:40',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/12.jpg'
        },
        content: '林斌表示红米Note3重新定义了千元旗舰，而红米Note将全面提升。'
    },
    7: {
        time: '10:42',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/13.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/14.jpg'
        },
        content: '红米Note4 正式登场采用前面板2.5D玻璃覆盖、金属一体机身纳米注塑天线和后置指纹。'
    },
    8: {
        time: '10:43',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/15.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/16.jpg'
        },
        content: '红米Note4 拥有灰、银、金三种配色供消费者选择。'
    },
    9: {
        time: '10:45',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/17.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/18.jpg'
        },
        content: '林斌表示红米Note4 采用的金属一体机身和纳米注塑天线带和苹果使用的是一样的。'
    },
    10: {
        time: '10:46',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/19.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/20.jpg',
            2: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/21.jpg',
            3: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/22.jpg'
        },
        content: '红米Note4真机上手。'
    },
    11: {
        time: '10:48',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/23.jpg'
        },
        content: '红米Note4采用中线对称的设计强调对称简单纯粹的美感。'
    },
    12: {
        time: '10:50',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/24.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/25.jpg'
        },
        content: '红米Note4 会成为千元级的新标杆吗？。'
    },
    13: {
        time: '10:51',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/26.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/27.jpg'
        },
        content: '红米Note4 内置2.1GHz的联发科Helio X20十核心处理器。'
    },
    14: {
        time: '10:53',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/28.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/29.jpg',
            2: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/30.jpg'
        },
        content: '红米Note4 内置4100毫安时电池，重度使用可以坚持一天。'
    },
    15: {
        time: '10:53',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/31.jpg'
        },
        content: '红米Note4支持4G+、双卡双待、全网通以及VoLTE。'
    },
    16: {
        time: '10:53',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/32.jpg'
        },
        content: '红米Note4采用5.5英寸全高清分辨率IPS屏幕。'
    },
    17: {
        time: '10:53',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/33.jpg'
        },
        content: '红米Note4支持可拓展内存，最大支持128GB的SD卡。'
    },
    18: {
        time: '10:53',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/34.jpg'
        },
        content: '红米Note4配备1300万像素三星\OV传感器，支持相位对焦。'
    },
    19: {
        time: '10:53',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/35.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/36.jpg'
        },
        content: '红米Note4运行miui 8用户界面，支持全局系统分身等MIUI 8功能。'
    },
    20: {
        time: '10:53',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/37.jpg'
        },
        content: '一张图看懂红米Note4。'
    },
    21: {
        time: '10:53',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/38.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/39.jpg',
            2: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/40.jpg'
        },
        content: '红米Note4提供2GB RAM+16GB ROM以及3GB RAM+64GB ROM双版本，售价分别为899元和1199元。'
    },
    22: {
        time: '10:53',
        img: {
            0: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/41.jpg',
            1: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/42.jpg',
            2: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/43.jpg',
            3: 'template/zaekev2/static/img/2016/xiaomi-summer-2016/44.jpg'
        },
        content: '红米Note4将于8月26日现货开卖，在小米商城、小米之家以及中国移动网上商城等点上渠道同步销售。'
    },
    23: {
        singie: true,
        time: '10:53',
        content: '本次发布会到此结束，请继续关注我们的后续上手以及评测哟。'
    }
}
var SLIDE = {}