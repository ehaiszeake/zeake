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
    1: {
        src: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/r1.png',
        href: 'http://www.zaeke.com/thread-93831-1-1.html',
        title: '全新Hi-Fi结构与曲面屏加持 vivo Xplay5正式发布'
    },
    2: {
        src: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/r2.jpg',
        href: 'http://www.zaeke.com/thread-94479-1-1.html',
        title: '理所"音"当真旗舰 vivo Xplay5开箱图赏'
    },
    3: {
        src: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/r3.jpg',
        href: 'http://www.zaeke.com/thread-95416-1-1.html',
        title: '并不是拿来主义 vivo Xplay5评测'
    }
};
var CONTENT = {
    0: {
        single: true,
        content: 'vivo Xplay5发布会即将正式开始',
        time: '18:31'
    },
    1: {
        time: '18:31',
        content: 'vivo Xplay5发布会即将正式开始',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/1.jpg',
            1: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/2.jpg'
        }
    },
    2: {
        time: '19:23',
        content: 'vivo Xplay5发布会即将正式开始，现场正在进行预热',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/3.jpg'
        }
    },
    3: {
        time: '19:36',
        content: 'vivo Xplay5发布会正式开始',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/4.jpg',
            1: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/5.jpg'
        }
    },
    4: {
        time: '19:40',
        content: '主持人何炅登台',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/6.jpg'
        }
    },
    5: {
        single: true,
        content: '主持人何炅表示“快乐”这词就是vivo Xplay5的关键词，快才够乐',
        time: '19:41'
    },
    6: {
        time: '19:48',
        content: 'vivo副总裁冯磊登场，讲述两年多时间打磨Xplay5的种种细节，而每一代Xplay都是vivo集大成者的旗舰典范。在材质，设计，拍照等方面有全方面突破。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/7.jpg',
            1: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/8.jpg'
        }
    },
    7: {
        time: '19:54',
        content: 'vivo Xplay5提供快速对焦与连拍，还有NFC和一键换机功能哟。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/9.jpg',
            1: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/10.jpg',
            2: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/11.jpg',
            3: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/12.jpg'
        }
    },
    8: {
        time: '19:58',
        content: 'vivo Xplay5正式亮相。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/13.jpg',
            1: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/14.jpg'
        }
    },
    9: {
        time: '20:01',
        content: 'vivo Xplay5采用双曲面屏幕设计，金属一体化机身，各位喜欢么？',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/15.jpg',
            1: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/16.jpg'
        }
    },
    10: {
        time: '20:05',
        content: 'vivo Xplay5采用2K分辨率的Super AMOLED屏幕，高达98%的金属机身占比，并且在细节设计上进行雕琢。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/17.jpg',
            1: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/18.jpg',
            2: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/19.jpg',
            3: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/20.jpg'
        }
    },
    11: {
        time: '20:12',
        content: 'vivo Xplay5采用高通骁龙820处理器和双卡双待设计，并且采用6G LPDDR4。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/21.jpg',
            1: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/22.jpg',
            2: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/23.jpg',
            3: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/24.jpg'
        }
    },
    12: {
        time: '20:16',
        content: 'vivo Xplay5标配128G储存空间',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/25.jpg',
            1: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/26.jpg'
        }
    },
    13: {
        time: '20:17',
        content: 'vivo Xplay5标配128G储存空间',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/27.jpg'
        }
    },
    14: {
        time: '20:17',
        content: 'vivo Xplay5内置3600mAh电池，并且支持快速充电技术，并且有着强大的安全技术保护。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/28.jpg'
        }
    },
    15: {
        time: '20:22',
        content: 'vivo Xplay5采用智慧引擎，在大内存的支持下，依然能佛对应用进行优化体验。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/29.jpg',
            1: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/30.jpg'
        }
    },
    16: {
        time: '20:22',
        content: 'vivo Xplay5能够在亮屏实现0.2s指纹解锁，在熄屏时0.4s指纹解锁。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/31.jpg'
        }
    },
    17: {
        time: '20:28',
        content: 'vivo Xplay5采用全网通，并且支持双载波聚合以及4G+。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/32.jpg'
        }
    },
    18: {
        time: '20:28',
        content: 'vivo Xplay5采用1600万像素的索尼IMX298传感器，并且支持0.4s启动速度和0.1s对焦速度。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/33.jpg',
            1: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/34.jpg'
        }
    },
    19: {
        time: '20:33',
        content: 'vivo Xplay5采用全新的Hi-Fi 3.0架构，采用双ESS9028和3个OPA1612来实现左右声道独立解码。并且在参数规格上进一步提升。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/35.jpg',
            1: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/36.jpg'
        }
    },
    20: {
        time: '20:36',
        content: '一张图看懂硬件配置',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/37.jpg'
        }
    },
    21: {
        time: '20:40',
        content: '同时vivo还发布了头戴耳机XE1000',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/38.jpg'
        }
    },
    22: {
        time: '20:43',
        content: '根据硬件配置不同，顶配版本售价为4288，低配版本为3698元。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/39.jpg',
            1: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/40.jpg',
            2: 'template/zaekev2/static/img/2016/vivo-xplay5-2016/41.jpg'
        }
    },
    23: {
        single: true,
        content: 'vivo Xplay5发布会正式结束，请期待我们后续的上手以及评测，大家再见~',
        time: '20:48'
    }
}
var SLIDE = {}