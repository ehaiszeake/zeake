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
        src: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/RELATED/1.jpg',
        href: 'http://www.zaeke.com/article-4167-1.html',
        title: '能背起来的梦想 魅族推 MX6 定制背包'
    },
    1: {
      src: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/RELATED/2.jpg',
      href: 'http://www.zaeke.com/article-4190-1.html',
      title: '魅族新款智能手表曝光，预计售价300元左右' 
    },
    2: {
      src: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/RELATED/3.jpg',
      href: 'http://www.zaeke.com/article-4220-1.html',
      title: 'E系列首作！魅族将于8月10日举行发布会' 
    },
    3: {
      src: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/RELATED/4.jpg',
      href: 'http://www.zaeke.com/article-4306-1.html',
      title: '魅蓝E正式发布，一台1299元的金属旗舰' 
    },
};
var CONTENT = {
    0: {
        time: '00:00',
        img: {
            0: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/1.jpg',
            1: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/2.jpg'
        },
        content: '正如魅族一贯的做法，其悄然的宣布将于8月10日举行新品发布会，从相关的邀请函来看，主角将会是近期传闻已久的E系列。只不过从目前的任何信息来看，都没有办法确定E系列是以什么方向设计。而继魅蓝系列的性价比、MX系列的均衡表现以及Pro系列的旗舰级别，E系列是在其中亦或者是传闻中的万元级产品？只能留到8月10日，届时欢迎大家观看图文直播以及后续的详细内容，在第一时间掌握关于新机最全面的资讯。同时也欢迎大家发微博 @知客数码 参与直播互动讨论哟~'
    },
    1: {
        time: '13:30',
        img: {
            0: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/3.jpg',
            1: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/4.jpg'
        },
        content: '小编以到达本次魅蓝 E 新品发布会的现场国家会议中心。'
    },
    2: {
        time: '14:36',
        img: {
            0: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/5.jpg',
            1: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/6.jpg'
        },
        content: '魅族演唱会正式开始，金玟岐登台演唱。'
    }, 
    3: {
        time: '14:39',
        img: {
            0: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/7.jpg',
            1: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/8.jpg'
        },
        content: '发布会正式开始，魅族副总裁李楠登场。'
    },  
    4: {
        time: '14:42',
        img: {
            0: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/9.jpg',
            1: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/10.jpg'
        },
        content: '李楠表示当下年轻人对于智能手机的要求也有所升级，所以魅族便推出的魅蓝E这台为年轻人打造的高端手机。'
    }, 
    5: {
        time: '14:44',
        img: {
            0: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/11.jpg',
            1: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/12.jpg',
            2: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/13.jpg',
            3: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/14.jpg',
        },
        content: '李楠表示：为了照顾年轻人的审美，魅蓝E带来了冰川蓝和玫瑰金这两款年轻人最喜欢的机身配色。'
    }, 
    6: {
        time: '14:46',
        img: {
            0: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/15.jpg',
            1: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/16.jpg'
        },
        content: '魅蓝E是魅蓝系列首款真·全金属手机，全部都是旗舰机的产品制造工艺。'
    }, 
    7: {
        time: '14:50',
        img: {
            0: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/17.jpg',
            1: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/18.jpg',
            2: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/19.jpg',
            3: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/20.jpg',
        },
        content: '魅蓝E拥有全金属机身、纳米注塑天线条以及CNC高光边等旗舰手机工艺。现场李楠还拿出华为Mate 8出来对比。'
    }, 
    8: {
        time: '14:51',
        img: {
            0: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/21.jpg',
            1: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/22.jpg'
        },
        content: '魅蓝E配备一块5.5英寸的全高清分辨率IPS LCD显示屏，最大亮度450nit。'
    }, 
    9: {
        time: '14:52',
        img: {
            0: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/23.jpg',
            1: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/24.jpg',
            2: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/25.jpg',
            3: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/26.jpg'
        },
        content: '魅蓝E还拥有mTouch指纹识别按钮，支持支付宝和微信指纹支付。'
    }, 
    10: {
        time: '14:54',
        img: {
            0: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/27.jpg',
            1: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/28.jpg',
            2: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/29.jpg',
            3: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/30.jpg'
        },
        content: '魅蓝E后置采用索尼IMX258图像传感器，提供1300万的总像素数量以及最快0.2秒的相位对焦功能，同时还拥有F/2.2光圈。'
    }, 
    11: {
        time: '14:56',
        img: {
            0: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/31.jpg',
            1: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/32.jpg'
        },
        content: '魅族本次还为魅蓝E找来摄影室罗杰·拜伦为其背书。'
    }, 
    12: {
        time: '14:57',
        img: {
            0: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/33.jpg',
            1: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/34.jpg',
            2: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/35.jpg',
            3: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/36.jpg'
        },
        content: '魅蓝E支持全网通、4G+、VoLTE，并且还是全球第一台中国移动4G+的定制智能手机。'
    }, 
    13: {
        time: '14:58',
        img: {
            0: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/37.jpg',
            1: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/38.jpg'
        },
        content: '魅蓝E配备八核心处理器、3GB RAM以及32GB ROM。'
    }, 
    14: {
        time: '14:59',
        img: {
            0: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/39.jpg',
            1: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/40.jpg',
            2: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/41.jpg',
            3: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/42.jpg'
        },
        content: '魅蓝E内置3100毫安时电池，最长连续续航10小时；支持mCharge快速充电，半小时充电50%。'
    }, 
    15: {
        time: '15:00',
        img: {
            0: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/43.jpg',
            1: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/44.jpg'
        },
        content: '魅族表示，魅蓝E充电5分钟可以通话30分钟、自拍20张、听歌1小时、视频10分钟、上网十分钟并且还能够运行NBA游戏。'
    }, 
    16: {
        time: '15:01',
        img: {
            0: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/45.jpg',
            1: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/46.jpg'
        },
        content: '魅蓝E是全球首款支持智能汽车的智能手机。'
    }, 
    17: {
        time: '15:01',
        img: {
            0: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/48.jpg'
        },
        content: '一张图看懂 魅蓝E。'
    }, 
    18: {
        time: '15:03',
        img: {
            0: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/47.jpg',
            1: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/49.jpg'
        },
        content: '魅蓝E售价未1299元，8月14日开卖。'
    },
    19: {
        time: '15:05',
        content: '发布会到此结束，谢谢观看。'
    }, 
};
var SLIDE = {
            0: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/SLIDE/1.JPG',
            1: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/SLIDE/2.jpg',
            2: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/SLIDE/3.jpg',
            3: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/SLIDE/4.JPG',
            4: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/SLIDE/5.JPG',
            5: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/SLIDE/6.jpg',
            6: 'template/zaekev2/static/img/2016/meizu-e-2016-08-10/SLIDE/7.jpg',

};
var START = false;