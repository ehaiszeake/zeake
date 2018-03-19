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
        src: 'template/zaekev2/static/img/2016/meilan-new-2016/RELATED/r1.jpg',
        href: 'http://www.zaeke.com/thread-106035-1-1.html',
        title: '根本停不下来 魅蓝3工信部亮相',
    },
    1: {
        src: 'template/zaekev2/static/img/2016/meilan-new-2016/RELATED/r2.png',
        href: 'http://www.zaeke.com/article-3436-1.html',
        title: '百元级也有漂亮和速度 魅族魅蓝3正式发布'
    }
}
var CONTENT = {
    1: {
        time: '14:04',
        content: '「颜值加速度」魅蓝3新品发布会即将开始，话说@王尼玛 今天要公开身份，大家对那张脸期待吗~ ',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-2016/1.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-2016/2.jpg',
            3: 'template/zaekev2/static/img/2016/meilan-new-2016/3.jpg'
        }
    },
    2: {
        time: '14:15',
        content: '小编已到达魅蓝新品发布会会场，「颜值加速度」魅蓝新品发布会现场充满着年轻气息。 ',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-2016/4.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-2016/5.jpg',
            3: 'template/zaekev2/static/img/2016/meilan-new-2016/6.jpg',
            4: 'template/zaekev2/static/img/2016/meilan-new-2016/7.jpg',
        }
    },
    3: {
        time: '14:35',
        content: '现场表演嘉宾——国民少女组合SNH48。现场粉丝活动活跃，洋溢着青春的活力。 ',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-2016/8.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-2016/9.jpg',
            3: 'template/zaekev2/static/img/2016/meilan-new-2016/10.jpg',
            4: 'template/zaekev2/static/img/2016/meilan-new-2016/11.jpg',
        }
    },
    4: {
        time: '14:46',
        content: '现场视频展示魅蓝3将采用塑料机身和多彩配色 ，多彩的机身让青年良品变得极具时尚气息。 ',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-2016/12.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-2016/13.jpg',
            3: 'template/zaekev2/static/img/2016/meilan-new-2016/14.jpg',
            4: 'template/zaekev2/static/img/2016/meilan-new-2016/15.jpg',
            5: 'template/zaekev2/static/img/2016/meilan-new-2016/16.jpg',
            6: 'template/zaekev2/static/img/2016/meilan-new-2016/17.jpg',
        }
    },
    5: {
        time: '14:48',
        content: '魅族总裁白永祥上台表示：一月见三次，你们还爱我吗，那就是真爱。 ',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-2016/18.jpg',
        }
    },
    6: {
        time: '14:49',
        content: '白永祥现场重新回顾魅蓝note3的众多特性。 ',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-2016/19.jpg',
        }
    },
    7: {
        time: '14:50',
        content: '白永祥表示：消费者对魅族手机是非常热爱的，但同时非常抱歉2、3月的缺货。 ',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-2016/20.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-2016/21.jpg',
        }
    },
    8: {
        time: '14:53',
        content: '现场展示多款国外经典的聚碳酸酯产品，包括博朗闹钟、任天堂Gameboy游戏机、巴慕达BALMUDA电风扇、LAMY的圆珠笔。 ',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-2016/22.jpg',
        }
    },
    9: {
        time: '14:58',
        content: '魅蓝3手机采用订制化的聚碳酸酯后盖，正面2.5D 玻璃，这样的设计喜欢吗？ ',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-2016/23.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-2016/24.jpg',
            3: 'template/zaekev2/static/img/2016/meilan-new-2016/25.jpg',
            4: 'template/zaekev2/static/img/2016/meilan-new-2016/26.jpg',
        }
    },
    10: {
        time: '15:03',
        content: '魅蓝3手机采用双卡双待支持盲插， 全频道全网通支持VoLTE。 ',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-2016/27.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-2016/28.jpg',
        }
    },
    11: {
        time: '15:05',
        content: '魅蓝3手机采用8核64位处理器，搭配3GB的内存。相较上一代提升50%，相当良心。 ',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-2016/29.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-2016/30.jpg',
            3: 'template/zaekev2/static/img/2016/meilan-new-2016/31.jpg',
            4: 'template/zaekev2/static/img/2016/meilan-new-2016/32.jpg',
            5: 'template/zaekev2/static/img/2016/meilan-new-2016/33.jpg',
            6: 'template/zaekev2/static/img/2016/meilan-new-2016/34.jpg',
        }
    },
    12: {
        time: '15:09',
        content: '魅蓝3手机拥有2800mAh的电池，在YunOS优化下系统流畅续航也更强。 ',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-2016/35.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-2016/36.jpg',
        }
    },
    13: {
        time: '15:10',
        content: '魅蓝手机采用前置500W + 后置 1300W的组合，支持相位对焦。 ',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-2016/37.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-2016/38.jpg',
        }
    },
    14: {
        time: '15:11',
        content: '一张图看懂魅蓝3。 聚碳酸酯工艺、2.5D弧面玻璃、全新的全网通、1300W相位对焦相机、8核64位处理器、仅次于魅蓝note3第二好的续航。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-2016/39.jpg',
        }
    },
    15: {
        time: '15:12',
        content: ' @王尼玛 @张全蛋 上台，欢迎大家收看暴走大事件~',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-2016/40.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-2016/41.jpg',
        }
    },
    16: {
        time: '15:15',
        content: ' @王尼玛 现场调侃魅族的更新周期和友商的各种嘈点。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-2016/42.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-2016/43.jpg',
        }
    },
    17: {
        time: '15:21',
        content: '  魅蓝3双版本，2GB RAM 16GB ROM售价599，3GB RAM 32GB ROM售价799。今天下午四点中开始接受预约，4月29日上午十点正式开售。这个价格大家觉得如何？',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-2016/44.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-2016/45.jpg',
            3: 'template/zaekev2/static/img/2016/meilan-new-2016/46.jpg',
            4: 'template/zaekev2/static/img/2016/meilan-new-2016/47.jpg',
        }
    },
    18: {
        time: '15:21',
        content: '  本次魅蓝3新品发布会到此结束，感谢大家观看，关于新品的上手体验及更多内容敬请关注知客数码微博及微信订阅号，我们下个直播见。',
        single: true
    },
    19: {
        time: '15:21',
        content: '  现场真机图，点击更多图片哦。',
        img: {
            1: 'template/zaekev2/static/img/2016/meilan-new-2016/48.jpg',
            2: 'template/zaekev2/static/img/2016/meilan-new-2016/49.jpg',
            3: 'template/zaekev2/static/img/2016/meilan-new-2016/50.jpg',
            4: 'template/zaekev2/static/img/2016/meilan-new-2016/51.jpg',
            5: 'template/zaekev2/static/img/2016/meilan-new-2016/52.jpg',
            6: 'template/zaekev2/static/img/2016/meilan-new-2016/53.jpg',
            7: 'template/zaekev2/static/img/2016/meilan-new-2016/54.jpg',
            8: 'template/zaekev2/static/img/2016/meilan-new-2016/55.jpg',
            9: 'template/zaekev2/static/img/2016/meilan-new-2016/56.jpg',
            10: 'template/zaekev2/static/img/2016/meilan-new-2016/57.jpg',
            11: 'template/zaekev2/static/img/2016/meilan-new-2016/58.jpg',
            12: 'template/zaekev2/static/img/2016/meilan-new-2016/59.jpg',
            13: 'template/zaekev2/static/img/2016/meilan-new-2016/60.jpg',
            14: 'template/zaekev2/static/img/2016/meilan-new-2016/61.jpg',
        }
    },
};
var SLIDE = {
    0: 'template/zaekev2/static/img/2016/meilan-new-2016/slide/1.jpg',
    1: 'template/zaekev2/static/img/2016/meilan-new-2016/slide/2.jpg',
    2: 'template/zaekev2/static/img/2016/meilan-new-2016/slide/3.jpg',
    3: 'template/zaekev2/static/img/2016/meilan-new-2016/slide/4.jpg',
    4: 'template/zaekev2/static/img/2016/meilan-new-2016/slide/5.jpg',
    5: 'template/zaekev2/static/img/2016/meilan-new-2016/slide/6.jpg',
    6: 'template/zaekev2/static/img/2016/meilan-new-2016/slide/7.jpg',
    7: 'template/zaekev2/static/img/2016/meilan-new-2016/slide/8.jpg',
};
var SIDEVIDEO = {
    video: '<embed src="http://player.youku.com/player.php/sid/XMTUzMzQ4MTMzMg==/v.swf" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>'
}