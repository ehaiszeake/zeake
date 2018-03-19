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
        src: 'template/zaekev2/static/img/2016/leshi-new-2016/RELATED/r1.jpg',
        href: 'http://www.zaeke.com/thread-104053-1-1.html',
        title: '二代目“旗舰杀手” 乐视超级手机2代曝光'
    },
    1: {
        src: 'template/zaekev2/static/img/2016/leshi-new-2016/RELATED/r2.jpg',
        href: 'http://www.zaeke.com/article-3410-1.html',
        title: '欢迎来到数字时代 乐视数线控耳机图赏'
    },
    2: {
        src: 'template/zaekev2/static/img/2016/leshi-new-2016/RELATED/r3.jpg',
        href: 'http://www.zaeke.com/article-3411-1.html',
        title: '无边框下的实力与创新 乐Max 2&乐2图赏'
    },
    3: {
        src: 'template/zaekev2/static/img/2016/leshi-new-2016/RELATED/r4.jpg',
        href: 'http://www.zaeke.com/thread-108543-1-1.html',
        title: '配置强劲 乐视发布乐2/乐2 Pro/乐Max 2'
    }
}
var CONTENT = {
    1: {
        time: '13:40',
        content: '已到达乐视超级生态新品发布会现场。',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/1.jpg',
            1: 'template/zaekev2/static/img/2016/leshi-new-2016/2.jpg'
        }
    },
    2: {
        time: '14:22',
        content: '乐视超级生态发布会即将开始，这次除了发布早已曝光的超级手机乐2以及乐Max2外，乐视还将发布乐视超级汽车。',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/3.jpg'
        }
    },
    3: {
        time: '14:35',
        content: '乐视CEO 贾跃亭的闪亮登场，超级生态发布会正式开始。',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/4.jpg',
            1: 'template/zaekev2/static/img/2016/leshi-new-2016/5.jpg'
        }
    },
    4: {
        time: '14:40',
        content: '贾跃亭表示4·14，世界上首个内容生态电商节实现了当天20亿的出货量。',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/6.jpg'
        }
    },
    5: {
        time: '14:44',
        content: '乐视希望成为一个生态平台的伙伴，并找到自己的地位与价值。',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/7.jpg',
            1: 'template/zaekev2/static/img/2016/leshi-new-2016/8.jpg',
            2: 'template/zaekev2/static/img/2016/leshi-new-2016/9.jpg'
        }
    },
    6: {
        time: '14:48',
        content: '乐视目前原有的七个子生态外，乐视还正在孵化VR和AR设备，并将大举进入ET世代。',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/10.jpg',
            1: 'template/zaekev2/static/img/2016/leshi-new-2016/11.jpg',
            2: 'template/zaekev2/static/img/2016/leshi-new-2016/12.jpg',
            3: 'template/zaekev2/static/img/2016/leshi-new-2016/13.jpg'
        }
    },
    7: {
        time: '14:52',
        content: '乐视生态中最为重要的是eUI，作为整个核心中枢不断创新突破。',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/14.jpg',
            1: 'template/zaekev2/static/img/2016/leshi-new-2016/15.jpg'
        }
    },
    8: {
        time: '14:54',
        content: 'eUI能够提供提供一个屏幕九场直播或是一场比赛九路视角，很明显后者更有用些。',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/16.jpg',
            1: 'template/zaekev2/static/img/2016/leshi-new-2016/17.jpg'
        }
    },
    9: {
        time: '14:57',
        content: 'eUI还提供超级语音，并表示一切缺少生态服务支撑的语音，都是伪智能。',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/18.jpg',
            1: 'template/zaekev2/static/img/2016/leshi-new-2016/19.jpg'
        }
    },
    10: {
        time: '14:59',
        content: '贾跃亭表示乐视的生态市闭环连锁的，使其的一个特性能在多种设备上体现。相较其他生态有着独特的优势。',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/20.jpg',
            1: 'template/zaekev2/static/img/2016/leshi-new-2016/21.jpg'
        }
    },
    11: {
        time: '15:02',
        content: '乐视超级电视4将进入Mstar6A938和高通骁龙810时代，并将画质提升为 4K HDR。',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/22.jpg',
            1: 'template/zaekev2/static/img/2016/leshi-new-2016/23.jpg',
            2: 'template/zaekev2/static/img/2016/leshi-new-2016/24.jpg',
            3: 'template/zaekev2/static/img/2016/leshi-new-2016/25.jpg'
        }
    },
    12: {
        time: '15:05',
        content: '乐视发布两款超级电视新品，分别是超4 X50和X50 Pro，机身的厚度为 9.9mm 。',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/26.jpg',
            1: 'template/zaekev2/static/img/2016/leshi-new-2016/27.jpg',
            2: 'template/zaekev2/static/img/2016/leshi-new-2016/28.jpg',
            3: 'template/zaekev2/static/img/2016/leshi-new-2016/29.jpg'
        }
    },
    13: {
        time: '15:09',
        content: '统一中国控股CEO上台与贾跃亭一起品尝统一绿茶新品，并发布统一新品「春茶」限量版，并于4月26日在乐视商城开放购买。',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/30.jpg',
            1: 'template/zaekev2/static/img/2016/leshi-new-2016/31.jpg',
            2: 'template/zaekev2/static/img/2016/leshi-new-2016/32.jpg',
            3: 'template/zaekev2/static/img/2016/leshi-new-2016/33.jpg'
        }
    },
    14: {
        time: '15:13',
        content: '乐视发布全新的全程数字化无损音频标注——CDLA，并表示第二代超级手机将全面采用Type-C数字耳机接口。',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/34.jpg',
            1: 'template/zaekev2/static/img/2016/leshi-new-2016/35.jpg',
            2: 'template/zaekev2/static/img/2016/leshi-new-2016/36.jpg',
            3: 'template/zaekev2/static/img/2016/leshi-new-2016/37.jpg'
        }
    },
    15: {
        time: '15:16',
        content: '半壁江山汪峰老师上台表示将与乐视展开深度合作，并在Fiil新品中推出支持CDLA标准的耳机。 ',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/38.jpg',
            1: 'template/zaekev2/static/img/2016/leshi-new-2016/39.jpg'
            }
    },
    16: {
        time: '15:22',
        content: '贾跃亭点艹iPhone SE，并列出后苹果时代的七大硬伤 ',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/40.jpg',
            1: 'template/zaekev2/static/img/2016/leshi-new-2016/41.jpg'
            }
    },
    17: {
        time: '15:25',
        content: '正式发布旗舰杀手乐2，将搭载联发科Helio X20十核处理器，3GB RAM+32GB ROM的组合，屏幕部分是in-cell蓝光幕最低1nit。摄像头采用后置1600万像素支持相位对焦，前置摄像头800万传感器面积达1.4μm。 ',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/42.jpg',
            1: 'template/zaekev2/static/img/2016/leshi-new-2016/43.jpg',
            2: 'template/zaekev2/static/img/2016/leshi-new-2016/44.jpg',
            3: 'template/zaekev2/static/img/2016/leshi-new-2016/45.jpg',
            4: 'template/zaekev2/static/img/2016/leshi-new-2016/46.jpg',
            5: 'template/zaekev2/static/img/2016/leshi-new-2016/47.jpg',
            6: 'template/zaekev2/static/img/2016/leshi-new-2016/48.jpg',
            7: 'template/zaekev2/static/img/2016/leshi-new-2016/49.jpg'
            }
    },
    18: {
        time: '15:37',
        content: '紧接着推出的是乐2Pro，乐视称之为旗舰杀手之超必杀。将搭载联发科Helio X25十核处理器，4GB RAM+32GB ROM的组合。摄像头采用2100万像素索尼IMX230拥有1/2.4英寸传感器，外观方面采用ID无边框3.0的设计语言。 ',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/50.jpg',
            1: 'template/zaekev2/static/img/2016/leshi-new-2016/51.jpg',
            2: 'template/zaekev2/static/img/2016/leshi-new-2016/52.jpg',
            3: 'template/zaekev2/static/img/2016/leshi-new-2016/53.jpg',
            4: 'template/zaekev2/static/img/2016/leshi-new-2016/54.jpg',
            5: 'template/zaekev2/static/img/2016/leshi-new-2016/55.jpg',
            6: 'template/zaekev2/static/img/2016/leshi-new-2016/56.jpg',
            7: 'template/zaekev2/static/img/2016/leshi-new-2016/57.jpg'
            }
    },
    19: {
        time: '15:48',
        content: '压轴登场的是乐2Max，采用高通骁龙820处理器，6GB RAM+64GB ROM的“双六”组合。屏幕采用5.7英寸的2K屏幕，是VR的完美拍档。全球通+全网通加持，摄像头方面后置采用2100万像支持相位对焦和OIS光学防抖6P镜头。是全球首款支持超声波金属指纹识别技术的手机。外观方面采用ID无边框3.0的设计语言。 ',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/58.jpg',
            1: 'template/zaekev2/static/img/2016/leshi-new-2016/59.jpg',
            2: 'template/zaekev2/static/img/2016/leshi-new-2016/60.jpg',
            3: 'template/zaekev2/static/img/2016/leshi-new-2016/61.jpg',
            4: 'template/zaekev2/static/img/2016/leshi-new-2016/62.jpg',
            5: 'template/zaekev2/static/img/2016/leshi-new-2016/63.jpg',
            6: 'template/zaekev2/static/img/2016/leshi-new-2016/64.jpg',
            7: 'template/zaekev2/static/img/2016/leshi-new-2016/65.jpg',
            8: 'template/zaekev2/static/img/2016/leshi-new-2016/67.jpg'
            }
    },
    20: {
        time: '15:54',
        content: '一张图看懂乐Max 2 ',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/68.jpg'
            }
    },
    21: {
        time: '16:03',
        content: '歌手沙宝亮上台展示CDLA数字现场表现效果，同时体验乐视VR所带来的前所未有的视觉体验。',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/69.jpg',
            1: 'template/zaekev2/static/img/2016/leshi-new-2016/70.jpg',
            2: 'template/zaekev2/static/img/2016/leshi-new-2016/71.jpg',
            3: 'template/zaekev2/static/img/2016/leshi-new-2016/72.jpg'
        }
    },
    22: {
        time: '16:16',
        content: '乐视超级汽车即将正式登场',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/73.jpg'
            }
    },
    23: {
        time: '16:22',
        content: '乐视超级汽车负责人丁磊上台介绍LE SEE超级汽车。',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/74.jpg',
            1: 'template/zaekev2/static/img/2016/leshi-new-2016/75.jpg',
            2: 'template/zaekev2/static/img/2016/leshi-new-2016/76.jpg',
            3: 'template/zaekev2/static/img/2016/leshi-new-2016/77.jpg'
        }
    },
    24: {
        time: '16:29',
        content: '现场展示出乐视超级汽车 LE SEE 的效果图',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/78.jpg',
            1: 'template/zaekev2/static/img/2016/leshi-new-2016/79.jpg',
            2: 'template/zaekev2/static/img/2016/leshi-new-2016/80.jpg',
            3: 'template/zaekev2/static/img/2016/leshi-new-2016/81.jpg'
        }
    },
    25: {
        time: '16:40',
        content: '贾跃亭现场演示使用乐视超级手机语音召唤乐视超级汽车，并演示其自动驾驶功能。',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/82.jpg',
            1: 'template/zaekev2/static/img/2016/leshi-new-2016/83.jpg',
            2: 'template/zaekev2/static/img/2016/leshi-new-2016/84.jpg',
            3: 'template/zaekev2/static/img/2016/leshi-new-2016/85.jpg',
            4: 'template/zaekev2/static/img/2016/leshi-new-2016/86.jpg',
            5: 'template/zaekev2/static/img/2016/leshi-new-2016/87.jpg'
        }
    },
    26: {
        time: '17:05',
        content: '乐视继续坚持硬件福利时代，最后公布了乐视超级手机二代的售价：乐2售价1099元、乐2Pro售价1499元，乐2Max售价位2099元起，其中双6版本为2499元。将于4月20日14:00开启预约，26日10:00正式发售',
        img: {
            0: 'template/zaekev2/static/img/2016/leshi-new-2016/88.jpg',
            1: 'template/zaekev2/static/img/2016/leshi-new-2016/89.jpg',
            2: 'template/zaekev2/static/img/2016/leshi-new-2016/90.jpg',
            3: 'template/zaekev2/static/img/2016/leshi-new-2016/91.jpg',
            4: 'template/zaekev2/static/img/2016/leshi-new-2016/92.jpg',
            5: 'template/zaekev2/static/img/2016/leshi-new-2016/93.jpg'
        }
    },
    27: {
        time: '17:12',
        content: '无破界不生态，乐视超级生态新品发布会到此结束，感谢大家的观看。',
        single: true
    }
}
var SLIDE = {};