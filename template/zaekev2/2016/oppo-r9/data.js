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
        src: 'template/zaekev2/static/img/2016/oppo-r9/r1.jpg',
        href: 'http://www.zaeke.com/thread-93480-1-1.html',
        title: '真有黑科技？OPPO R9即将登场'
    },
    2: {
        src: 'template/zaekev2/static/img/2016/oppo-r9/r2.jpg',
        href: 'http://www.zaeke.com/thread-94249-1-1.html',
        title: '改走圆润风 OPPO R9曝光'
    },
    3: {
        src: 'template/zaekev2/static/img/2016/oppo-r9/r3.jpg',
        href: 'http://www.zaeke.com/article-3241-1.html',
        title: 'TFBOYS同款？OPPO R9/R9Plus配置全曝光'
    },
    4: {
        src: 'template/zaekev2/static/img/2016/oppo-r9/r3.jpg',
        href: 'http://www.zaeke.com/thread-97338-1-1.html',
        title: '【招募中】OPPO R9试用招募'
    },
    5: {
        src: 'template/zaekev2/static/img/2016/oppo-r9/r5.jpg',
        href: 'http://www.zaeke.com/article-3259-1.html',
        title: '与你浪漫邀约 OPPO R9 首发图赏'
    },
    6: {
        src: 'template/zaekev2/static/img/2016/oppo-r9/r6.jpg',
        href: 'http://www.zaeke.com/article-3260-1.html',
        title: '破而后立 OPPO R9首发评测'
    }
};
var CONTENT = {
    1: {
        time: '3月10日 16：01',
        content: '这一次，值得等” 9 “一点 OPPO R9即将登场',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/1.jpg',
            2: 'template/zaekev2/static/img/2016/oppo-r9/2.jpg',
            3: 'template/zaekev2/static/img/2016/oppo-r9/3.jpg',
            4: 'template/zaekev2/static/img/2016/oppo-r9/4.jpg',
            5: 'template/zaekev2/static/img/2016/oppo-r9/5.jpg',
            6: 'template/zaekev2/static/img/2016/oppo-r9/6.jpg'
        }
    },
    2:{
        time:'3月17日 14:39',
        content: '即将正式登场，快来看看这次还有什么特别。这个是李易峰、杨幂和TFBOYS同款哟.',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/7.jpg',
            2: 'template/zaekev2/static/img/2016/oppo-r9/8.jpg'
        }   
    },
    3: {
        time:'15:02',
        content: 'OPPO发布会的主题依旧美感十足，视频好看，感觉现在很多厂商发布会都是在比视频呢。',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/10.jpg',
            2: 'template/zaekev2/static/img/2016/oppo-r9/11.jpg',
            3: 'template/zaekev2/static/img/2016/oppo-r9/12.jpg',
            4: 'template/zaekev2/static/img/2016/oppo-r9/13.jpg'
        }
    },
    4: {
        time:'15:04',
        content: '表示OPPO在各大地区均有分会场进行新品发布，并且有中国移动到场支持。',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/14.jpg',
        }
    },
    5: {
        time:'15:07',
        content: '表示OPPO对消费者的核心需求足够了解，如在自拍等方面进行挖掘，满足年轻消费者的爱美。并不是仅仅通过更好的硬件达成，而是对消费者进行调查，得出更深处的需求，在软件上进行调整。',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/15.jpg',
            2: 'template/zaekev2/static/img/2016/oppo-r9/16.jpg'
        }    
    },
    6: {
        time:'15:10',
        content: '当然也别忘记续航能力的追求，并不是简单的进行大电池堆叠，而是对充电速度进行提升。“充电五分钟，通话两小时”，就是VOOC近年来发展得最好解释。',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/17.jpg',
            2: 'template/zaekev2/static/img/2016/oppo-r9/18.jpg'
        }    
    },
    7: {
        time:'15:12',
        content: 'OPPO品牌理念2.0，“美因苛求”。代表着OPPO对外外形设计与自拍的追求。',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/19.jpg',
        } 
    },
    8: {
        time:'15:12',
        content: 'OPPO已经成立了12年，都是因为对美的苛求。',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/20.jpg',
            2: 'template/zaekev2/static/img/2016/oppo-r9/21.jpg'
        } 
    },
    9: {
        time:'15:13',
        content: '表示智能手机行业竞争呈现白热化，并且表示OPPO很幸运能够活下来，其表示并不是外界单纯认为的广告与渠道，而是产品做的足够好决定的。',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/22.jpg',
            2: 'template/zaekev2/static/img/2016/oppo-r9/23.jpg',
            3: 'template/zaekev2/static/img/2016/oppo-r9/24.jpg'
        }
    },
    10: {
        time:'15:14',
        content: '将会在自拍上进行更好突破，并且自豪的称自己为自拍专家。并且@吴强Alen 表示OPPO将来影像拍摄作为公司战略方向的重要地位。',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/25.jpg',
        } 
    },
    11: {
        time:'15:15',
        content: '在细节上对美的苛求，所以在细节上的进行雕琢。也正是因为美的苛求，使得对OPPO能够进一步成长。',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/26.jpg',
            2: 'template/zaekev2/static/img/2016/oppo-r9/27.jpg'
        } 
    },
    12: {
        time:'15:20',
        content: '产品经理上台简述产品在，简单来说就是拍照好，颜值高与体验秒。而Color OS 3.0就有着轻巧清爽的特性，使得系统语言进一步提升，并且在各类细节上进行调整。',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/28.jpg',
            2: 'template/zaekev2/static/img/2016/oppo-r9/29.jpg',
            3: 'template/zaekev2/static/img/2016/oppo-r9/30.jpg',
            4: 'template/zaekev2/static/img/2016/oppo-r9/31.jpg',
            5: 'template/zaekev2/static/img/2016/oppo-r9/32.jpg'
        }
    },
    13: {
        time:'15:33',
        content: '正式登场，其在边框上更是极致，屏幕黑边与边框仅仅1.66mm。这边框大家觉得怎么？真是窄到没朋友啊！',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/35.jpg',
            2: 'template/zaekev2/static/img/2016/oppo-r9/36.jpg',
            3: 'template/zaekev2/static/img/2016/oppo-r9/37.jpg',
            4: 'template/zaekev2/static/img/2016/oppo-r9/38.jpg',
            5: 'template/zaekev2/static/img/2016/oppo-r9/39.jpg',
            6: 'template/zaekev2/static/img/2016/oppo-r9/40.jpg',
            7: 'template/zaekev2/static/img/2016/oppo-r9/41.jpg',
            8: 'template/zaekev2/static/img/2016/oppo-r9/42.jpg',
            9: 'template/zaekev2/static/img/2016/oppo-r9/43.jpg'
        }
    },
    14: {
        time:'15:35',
        content: 'Color OS 3.0在系统流畅性上有明显提升，其在系统底层进行优化，特别是在切图量上极为明显的缩减。大家看看这设计有没有似曾相识的感觉呢？',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/44.jpg',
            2: 'template/zaekev2/static/img/2016/oppo-r9/45.jpg',
            3: 'template/zaekev2/static/img/2016/oppo-r9/46.jpg',
            4: 'template/zaekev2/static/img/2016/oppo-r9/47.jpg',
            5: 'template/zaekev2/static/img/2016/oppo-r9/48.jpg'
        }
    },
    15: {
        time:'15:38',
        content: '通过定制窄边框屏幕和全新的U形规喷胶工艺，实现更为优秀的边框。其实小编觉得这个1.66mm的边框已经很赞了，比ID无边框好太多了。',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/49.jpg',
            2: 'template/zaekev2/static/img/2016/oppo-r9/50.jpg'
        }
    },
    16: {
        time:'15:40',
        content: '采用前置1600万像素与后置1300万像素，并且在调教上进心努力。这像素前置比后置还高，想想还有哪家也是这样？',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/51.jpg',
            2: 'template/zaekev2/static/img/2016/oppo-r9/52.jpg'
        }
    },
    17: {
        time:'15:42',
        content: '通过全新的摄像头以及成立自拍体验团，在硬件与软件上进行调整。这不让自拍体验团上台简述相关细节，并且采用的全新摄像头对比效果相当显著哟，还有全新的美颜4.0加持哟,友商表示不服。大家觉得这美颜效果没有吹嘘的成分，我们去微博聊聊，右边关注就好。',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/53.jpg',
            2: 'template/zaekev2/static/img/2016/oppo-r9/54.jpg',
            3: 'template/zaekev2/static/img/2016/oppo-r9/55.jpg',
            4: 'template/zaekev2/static/img/2016/oppo-r9/56.jpg',
            5: 'template/zaekev2/static/img/2016/oppo-r9/57.jpg',
            6: 'template/zaekev2/static/img/2016/oppo-r9/58.jpg'
        }
    },
    18: {
        time:'15:49',
        content: '采用前置指纹识别，并且能够实现最快0.2s对识别速度，快的和没有指纹一样的爽快。问题来了，国产前置指纹机哪家快？',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/59.jpg',
            2: 'template/zaekev2/static/img/2016/oppo-r9/60.jpg'
        }
    },
    19: {
        time:'15:52',
        content: 'OPPO R9的指纹识别还支持自学习和自适应，并且支持支付宝与微信支付哟。想想现在谁家的指纹还只剩下个解锁就要打PP了，指纹支付还真的挺重要的',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/61.jpg',
            2: 'template/zaekev2/static/img/2016/oppo-r9/62.jpg',
            3: 'template/zaekev2/static/img/2016/oppo-r9/63.jpg'
        }
    },
    20: {
        time:'15:55',
        content: 'OPPO R9内置2850mAh电池，提供一整天的续航时间。并且同样支持VOOC闪充，在温度与安全上进行保护，提供更为优秀的充电体验。',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/64.jpg',
            2: 'template/zaekev2/static/img/2016/oppo-r9/65.jpg',
            3: 'template/zaekev2/static/img/2016/oppo-r9/66.jpg',
            4: 'template/zaekev2/static/img/2016/oppo-r9/67.jpg',
            5: 'template/zaekev2/static/img/2016/oppo-r9/68.jpg',
            6: 'template/zaekev2/static/img/2016/oppo-r9/69.jpg'
        }
    },
    21: {
        time:'15:56',
        content: '情理之中，OPPO R9支持全网通和4G+以及VoLTE。',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/70.jpg',
            2: 'template/zaekev2/static/img/2016/oppo-r9/71.jpg'
        }
    },
    22: {
        time:'15:57',
        content: '也别忘记很大屏幕的R9Plus，其采用前后双1600万像素，在手感表现上也有说调整，做到手感最好的大屏手机。',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/72.jpg',
            2: 'template/zaekev2/static/img/2016/oppo-r9/73.jpg',
            3: 'template/zaekev2/static/img/2016/oppo-r9/74.jpg',
            4: 'template/zaekev2/static/img/2016/oppo-r9/75.jpg'
        }
    },
    23: {
        time:'16:00',
        content: 'R9Plus内置4150mAh电池，同样支持VOOC与0.2秒指纹解锁，还有4GRAM和64G ROM。电池大了些，续航应该会更好吧，这个尺寸不知道手感怎样',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/76.jpg',
            2: 'template/zaekev2/static/img/2016/oppo-r9/77.jpg',
            3: 'template/zaekev2/static/img/2016/oppo-r9/78.jpg',
            4: 'template/zaekev2/static/img/2016/oppo-r9/79.jpg',
            5: 'template/zaekev2/static/img/2016/oppo-r9/80.jpg',
            6: 'template/zaekev2/static/img/2016/oppo-r9/81.jpg'
        }
    },
    24: {
        time:'16:04',
        content: '在售价方面，OPPO R9为2799元，OPPO R9 Plus为3299元，将3月24日与4月12号全渠道发售,大家对这个价格还满意么',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/82.jpg',
            2: 'template/zaekev2/static/img/2016/oppo-r9/83.jpg'
        }
    },
    25: {
        time:'16:05',
        content: '本次直播到此结束，关于新品OPPO R9的评测与图赏已推送至知客数码网站首页，欢迎阅读，在此感谢观看。',
        img: {
            1: 'template/zaekev2/static/img/2016/oppo-r9/100.jpg',
            2: 'template/zaekev2/static/img/2016/oppo-r9/101.jpg'     
        }
    }         
};
var SLIDE = {}