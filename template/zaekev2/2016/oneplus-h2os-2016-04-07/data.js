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
        src: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/RELATED/r1.jpg',
        href: 'http://www.zaeke.com/thread-103644-1-1.html',
        title: '终于来了 氢OS1.4正式发布'
    }
}
var CONTENT = {
    1: {
        time: '13:02',
        content: '一加科技在3月28日宣布将于4月7日在北京举行“氢听会”活动，届时一加科技CEO刘作虎以及氢OS主创团队将会与用户进行一场面对面的深度沟通。同时在本次沟通会上，一加还将会发布全新的基于Android 6.0操作系统的氢OS 1.4。轻且有趣的氢OS究竟表现如何，让我们拭目以待。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/1.jpg'
        }
    },
    2: {
        time: '14：00',
        content: '一加氢OS成长礼“氢听会”即将开始~老司机要开车啦',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/2.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/3.jpg',
            3: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/4.jpg',
        }
    },
    3: {
        time: '14：18',
        content: '即将正式登场，氢OS一直给人简约清新的艺术风格，今天的成长礼对一加来说不一般哦。整好瓜子饮料，看看老司机从前方发回的报道吧！',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/5.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/6.jpg'
        }
    },
    4: {
        time: '14：42',
        content: '氢OS的设计理念一直是以本质和直觉为核心出发，打造的简约风格与令人惊奇的功能细节，对于这种干净的元素组合，你喜欢吗，欢迎移步社区讨论~',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/7.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/8.jpg',
            3: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/9.jpg',
            4: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/10.jpg'
        }
    },
    5: {
        time: '14：46',
        content: '这一次并不是产品发布会，而是以用户为中心的氢听会。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/11.jpg',
        }
    },
    6: {
        time: '14：48',
        content: '基于Android 6.0的氢OS V1.4即便到现在，各种功能与细节设计依然是“奇怪”的,大家觉得氢视窗的设计怎么样？',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/12.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/13.jpg',
            3: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/14.jpg',
            4: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/15.jpg',
            5: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/16.jpg',
            6: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/17.jpg'
        }
    },
    7: {
        time: '14：49',
        content: '基于Android 6.0的氢OS有省、稳、快三个特性。其中得益于Android 6.0的新特性DozeMode，在省电上有着相当大的进步。记得小编一个用一加2的朋友天天跟我吐槽续航，朋友你的春天要来了~',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/18.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/19.jpg',
            3: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/20.jpg',
            4: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/21.jpg',
        }
    },
    8: {
        time: '14：49',
        content: '新的氢OS同样在稳定性与速度上有所提升，其实还是更期待820的一加3搭配着基于Android 6.0的氢OS。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/22.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/23.jpg',
            3: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/24.jpg',
        }
    },
    9: {
        time: '14：50',
        content: '对过渡动画进行着重的打磨，在感觉上做到很快。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/25.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/26.jpg',
        }
    },
    10: {
        time: '15：01',
        content: '表示永远不会再工具应用中加入广告。并且其表示新系统并不会着重加入各类“新”功能，而是对各类原有应用做提升。如便签、紧急拨号上所做的自动计算、自动定位等细节功能。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/27.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/28.jpg',
            3: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/29.jpg',
            4: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/30.jpg',
            5: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/31.jpg',
            6: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/32.jpg',
            7: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/33.jpg',
            8: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/34.jpg'
        }
    },
    11: {
        time: '15：02',
        content: '着重的对氢视窗升级，加入的日历与便签支持，使得实用性明显上升。问题来了：大家平时使用哪家便签多dog.jpg？',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/35.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/36.jpg',
        }
    },
    12: {
        time: '15：03',
        content: '表示所有的疑问都会在氢OS 2.0上解答。此外一加手机2将会在今天能够升级到V1.4，而一加手机X与一加手机将会在Q3直接升级到2.0。好了，你还升不升？',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/37.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/38.jpg',
        }
    },
    13: {
        time: '15：07',
        content: '刘作虎表示有态度这事情上，一加是孤独的。并且其表示相当讨厌屌丝经济，手机售价是越来越便宜，可是越来越买不到好用的机器。（看着他两坐在沙发上让我想起《鲁豫有约》，觉得像的扣1）',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/39.jpg',
        }
    },
    14: {
        time: '15：08',
        content: '刘作虎还表示氢OS其实应该在一年前就做到V1.4的水平，对于一加的粉丝是有所抱歉的。其表示因为伴随一加2的上手，在时间上市仓促的，一加在后面会避免这样的问题。看来好的东西真的需要等久那么一丢丢，不过为了抢市场还是妥协了。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/40.jpg',
        }
    },
    15: {
        time: '15：11',
        content: '刘作虎还表示最初氢氧OS将会在未来合并为一，而这个统一的基础是足够好用好看，并且是基于Androi原生。而这个计划将会在下半年进行。关于氢和氧，你会怎么选？',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/41.jpg',
        }
    },
    16: {
        time: '15：18',
        content: '我们都知道，氢OS的设计与eicodesign紧密相关，eicodesign创始人表示氢OS在设计气质上是相当大胆的，并且与一加的合作是一拍即合一见钟情的。有兴趣可以去他们官网看看，会看到很多熟悉的东西哦。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/42.jpg',
        }
    },
    17: {
        time: '15：24',
        content: '刘作虎表示他自己对于中国市场的目标群体定义是没变的，就是追求品质生活得年轻人，难怪没见身边的大叔大妈用一加- -！',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/43.jpg',
        }
    },
    18: {
        time: '15：31',
        content: '桃花岛创始人张伟表示氢OS中的天气软件是最吸引他的，并且其相当喜欢与认同氢OS的魅力。（突然想起《爱情公寓》里的张伟- -！）',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/44.jpg',
        }
    },
    19: {
        time: '15：36',
        content: '刘作虎表示自己是坚定的苹果研究者，在一些理念上确实是有所吸取，但在具体的操作上并不需要学习。从Android 5.0开始，原生系统就有着很好的操作与设计，这也是氢OS坚定的理念。果然，苹果驱动着世界的进步- -！',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/45.jpg',
        }
    },
    20: {
        time: '15：43',
        content: '@fenng表示一加的用户里面有很多的原质主义者，要求的是没有广告要原生的，这些意见对氢OS的任何改动都是有明显压力的。小编在此前体验一加2的时候发现，系统除了内置的几个应用外，基本挺干净的，就是那时候烫的哟。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/46.jpg',
        }
    },
    21: {
        time: '15：44',
        content: '表示最大的尊重就是超越，原生Android系统是根本，而氢OS是对细节设计进行提升和优化。所以氢OS做的最像原生咯？',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus-h2os-2016-04-07/47.jpg',
        }
    },
    22: {
        time: '15:45',
        content: '一加氢OS“氢听会”已经结束，更多关于一加氢OS及一加3的最新动态敬请关注知客数码！也欢迎大家前来社区讨论~下期直播见，感谢大家观看。',
        single: true
    }
};
var SLIDE = {}