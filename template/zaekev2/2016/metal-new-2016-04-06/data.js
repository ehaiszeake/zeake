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
        src: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/RELATED/r1.jpg',
        href: 'http://www.zaeke.com/article-3348-1.html',
        title: '新“青年良品” 魅蓝 note3正式发布'
    },
    1: {
        src: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/RELATED/r2.jpg',
        href: 'http://www.zaeke.com/thread-103335-1-1.html',
        title: '轻装上阵 魅族EP51蓝牙运动耳机登场'
    },
    2: {
        src: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/RELATED/r3.jpg',
        href: 'http://www.zaeke.com/thread-103396-1-1.html',
        title: '漂亮与持久 魅族魅蓝note 3初见面'
    },
    3: {
        src: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/RELATED/r4.jpg',
        href: 'http://www.zaeke.com/article-3347-1.html',
        title: '最佳运动伴侣？魅族EP51味赏'
    }
}
var CONTENT = {
    1: {
        time: '12:55',
        content: '魅族将于2016年4月6日举行发布会，发布旗下全新产品魅蓝note 3，这也是魅族2016年发布的首款智能手机新品。据信魅蓝note 3将会内置联发科Helio P10八核心处理器，支持全网通并且主打轻薄机身和持久续航，在千元机多强争霸的市场之中魅蓝note 3又会给我们什么惊喜呢？让我们静待发布吧。',
        img: {
            1: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/1.jpg'
        }
    },
    2: {
        time: '14:20',
        content: '即将正式登场了哟。',
        img: {
            1: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/2.jpg'
        }
    },
    3: {
        time: '14:30',
        content: '从曝光的消息来看，其将内置3500mAh电池，全金属机身以及Helio P10处理器，在续航表现上将会有相当给力的表现。除外延续魅族的外形设计，或许还有点让人意外的地方。',
        img: {
            1: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/3.jpg'
        }
    },
    4: {
        time: '15:13',
        content: '羽泉上台演唱，魅族演唱会开始了。',
        img: {
            1: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/4.jpg',
            2: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/5.jpg'
        }
    },
    5: {
        time: '15:20',
        content: '再来一首，“我好想有，一台魅蓝手机，环游世界。”',
        img: {
            1: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/6.jpg'
        }
    },
    6: {
        time: '15:28',
        content: '魅族魅蓝系列到现在已经有2000万台销量的优秀成绩，并且获得广泛的认可，其中设计就是最大的优势。',
        img: {
            1: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/7.jpg',
            2: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/8.jpg',
            3: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/9.jpg',
            4: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/10.jpg',
            5: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/11.jpg'
        }
    },
    7: {
        time: '15:30',
        content: '长的好看才是最关键的，魅蓝系列就是要好看，所以魅蓝Note 3配备2.5D玻璃。并且前置摄像头与传感器对称。全金属机身下的高光与细节处理。',
        img: {
            1: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/12.jpg',
            2: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/13.jpg',
            3: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/14.jpg',
            4: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/15.jpg'
        }
    },
    8: {
        time: '15:31',
        content: '宣称提供同价位的最佳设计，提供黑金银三种颜色选择。',
        img: {
            1: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/16.jpg',
            2: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/17.jpg'
        }
    },
    9: {
        time: '15:33',
        content: '采用1050P的5.5英寸LTPS屏幕，全贴合工艺和最大450nut屏幕亮度。',
        img: {
            1: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/18.jpg',
            2: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/19.jpg',
            3: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/20.jpg',
            4: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/21.jpg'
        }
    },
    10: {
        time: '15:37',
        content: '指纹依然放置在正面，并且现场点艸别厂商“抄袭”。此外着重表示正面指纹要做好相当的难。当然更为先进的mTouch 2.1提供最快0.2s识别速度和更多功能。',
        img: {
            1: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/22.jpg',
            2: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/23.jpg',
            3: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/24.jpg',
            4: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/25.jpg',
            5: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/26.jpg',
            6: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/27.jpg',
            7: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/28.jpg'
        }
    },
    11: {
        time: '15:40',
        content: '将提供全网通网络支持，支持6模18频，采用双卡双待与盲插支持。自然支持VoLTE是没啥疑问的，除外才有双频Wi-Fi。',
        img: {
            1: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/29.jpg',
            2: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/30.jpg',
            3: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/31.jpg',
            4: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/32.jpg'
        }
    },
    12: {
        time: '15:42',
        content: '搭载1.8GHz的真八核联发科Helio P10处理器，提供足够的性能和续航表现。',
        img: {
            1: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/33.jpg',
            2: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/34.jpg'
        }
    },
    13: {
        time: '15:44',
        content: '还采用2G RAM和16G ROM以及3G RAM和32G ROM选择，并且储存芯片都采用eMMC 5.1提供更快的速度，并且支持128G储存卡拓展。',
        img: {
            1: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/35.jpg',
            2: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/36.jpg',
            3: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/37.jpg'
        }
    },
    14: {
        time: '15:47',
        content: '居然大胆的表示，不要相信官方样张。这样的底气是来自其所采用的前置500万与后置1300万像素，并且支持PDAF对焦。',
        img: {
            1: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/38.jpg',
            2: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/39.jpg',
            3: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/40.jpg'
        }
    },
    15: {
        time: '15:49',
        content: '一张图看懂有多窵。',
        img: {
            1: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/41.jpg',
            2: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/42.jpg'
        }
    },
    16: {
        time: '15:52',
        content: '最大的惊喜就是采用4100mAh电池，提供16天待机时间与连续播放17个小时视频。并且机身厚度控制相比起红米Note 3要再薄0.5mm。',
        img: {
            1: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/43.jpg',
            2: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/44.jpg',
            3: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/45.jpg',
            4: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/46.jpg',
            5: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/47.jpg',
            6: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/48.jpg',
            7: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/49.jpg'
        }
    },
    17: {
        time: '16:00',
        content: '目前已经有100多款产品接入，进一步构建生态圈。现场登场的就有bong 2P手环、全新的蓝牙运动耳机EP21。',
        img: {
            1: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/50.jpg',
            2: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/51.jpg',
            3: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/52.jpg',
            4: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/53.jpg',
            5: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/54.jpg',
            6: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/55.jpg'
        }
    },
    18: {
        time: '16:04',
        content: '售价分别为799与999，今天开启预约全渠道。',
        img: {
            1: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/56.jpg',
            2: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/57.jpg'
        }
    },
    19: {
        time: '16:09',
        single: true,
        content: '魅蓝新品发布会到此结束。'
    }
};
var SLIDE = {
    0: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/SLIDE/1.jpg',
    1: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/SLIDE/2.jpg',
    2: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/SLIDE/3.jpg',
    3: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/SLIDE/4.jpg',
    4: 'template/zaekev2/static/img/2016/metal-new-2016-04-06/SLIDE/5.jpg'
}