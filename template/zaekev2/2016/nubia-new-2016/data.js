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
        src: 'template/zaekev2/static/img/2016/nubia-new-2016/RELATED/1.jpg',
        href: 'http://www.zaeke.com/article-3407-1.html',
        title: '努比亚Z11 mini评测：可能是小屏爱好者的最佳选择'
        },
    1: {
        src: 'template/zaekev2/static/img/2016/nubia-new-2016/RELATED/2.jpg',
        href: 'http://www.zaeke.com/article-3406-1.html',
        title: '一抹黑夜星芒 努比亚Z11 mini图赏'
    },
    2: {
        src: 'template/zaekev2/static/img/2016/nubia-new-2016/RELATED/3.jpg',
        href: 'http://www.zaeke.com/article-3408-1.html',
        title: '小世界大精彩 努比亚Z11 mini正式发布'
    }
}
var CONTENT = {
    0: {
        time: '',
        content: 'Live',
        video: '<iframe width="100%" height="460px" src="http://vku.youku.com/live/share?id=276" frameborder="0" allowfullscreen="true"></iframe>',
        top: true
    },
    1: {
        time: ' 14：47',
        content: '努比亚2016新品发布会即将开始，这次的主题是小世界，大精彩。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/1.jpg',
            2: 'template/zaekev2/static/img/2016/nubia-new-2016/2.jpg',
            3: 'template/zaekev2/static/img/2016/nubia-new-2016/3.jpg'
        }
    },
    2: {
        time: ' 15：06',
        content: '努比亚CEO@倪飞说：小屏幕的需求越来越少，但小屏幕的用户必须受到最重。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/4.jpg',
            2: 'template/zaekev2/static/img/2016/nubia-new-2016/5.jpg'
        }
    },
    3: {
        time: ' 15：10',
        content: '倪飞表示小屏幕的单手操作性和握持舒适性是大屏手机说不能提供的,看来今天的Z11 mini会有一个不错的单手握持体验。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/6.jpg',
            2: 'template/zaekev2/static/img/2016/nubia-new-2016/7.jpg'
        }
    },
    4: {
        time: ' 15：12',
        content: '努比亚Z11mini采用对称设计双面玻璃，双2.5D曲线MD工艺。去年的Z9上就已经使用了这样的双面玻璃，大家喜欢玻璃质感吗？',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/8.jpg',
            2: 'template/zaekev2/static/img/2016/nubia-new-2016/9.jpg',
            3: 'template/zaekev2/static/img/2016/nubia-new-2016/10.jpg',
            4: 'template/zaekev2/static/img/2016/nubia-new-2016/11.jpg'
        }
    },
    5: {
        time: ' 15：15',
        content: '努比亚Z11mini的指纹识别模块选择在机身的背面,这样的方式较为主流，比起上一代指纹机Z9Max精英版上的那块侧面指纹是要好上不少。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/12.jpg',
        }
    },
    6: {
        time: ' 15：17',
        content: '努比亚Z11mini 提供三种颜色需要并提供多种材质后盖。喜欢吗？',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/13.jpg',
            2: 'template/zaekev2/static/img/2016/nubia-new-2016/14.jpg',
            3: 'template/zaekev2/static/img/2016/nubia-new-2016/15.jpg'
        }
    },
    7: {
        time: ' 15：19',
        content: '倪飞表示小屏幕并不是性价比或廉价的代名词，小屏幕手机也能做到很好。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/16.jpg',
            2: 'template/zaekev2/static/img/2016/nubia-new-2016/17.jpg',
            3: 'template/zaekev2/static/img/2016/nubia-new-2016/18.jpg'
        }
    },
    8: {
        time: ' 15：21',
        content: '努比亚Z11mini 后置镜头1600万像素采用索尼IMX298传感器，配备蓝宝石保护玻璃和6P镜头模组。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/19.jpg',
            2: 'template/zaekev2/static/img/2016/nubia-new-2016/20.jpg',
            3: 'template/zaekev2/static/img/2016/nubia-new-2016/21.jpg'
        }
    },
    9: {
        time: ' 15：26',
        content: '努比亚Z11mini 支持PDAF相位对焦，较上一代性能提升100%，努比亚手机的拍照并拥有3D降噪、手持防抖等多项专利技术的真正黑科技。期待成像表现。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/22.jpg',
            2: 'template/zaekev2/static/img/2016/nubia-new-2016/23.jpg'
        }
    },
    10: {
        time: ' 15：31',
        content: '努比亚Z11mini 采用前置800万像素的摄像头，并且有着1.4μ传感器和80°的广角，配备前置补光灯在任何环境下自拍都没问题。对于爱自拍的男女老少福利来了。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/24.jpg',
        }
    },
    11: {
        time: ' 15：35',
        content: '努比亚Z11mini采用5寸1920*1080的屏幕，搭载高通骁龙617，3G DDR3的内存和64G的海量储存空间。这个容量起的配置还是挺有诚意的。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/25.jpg',
            2: 'template/zaekev2/static/img/2016/nubia-new-2016/26.jpg',
            3: 'template/zaekev2/static/img/2016/nubia-new-2016/27.jpg',
            4: 'template/zaekev2/static/img/2016/nubia-new-2016/28.jpg'
        }
    },
    12: {
        time: ' 15：38',
        content: '努比亚Z11mini 采用全网通2.1支持4G+ 双卡双待盲插采用与或卡托设计，最大支持200G的拓展。看来4G+要全面普及了。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/29.jpg',
            2: 'template/zaekev2/static/img/2016/nubia-new-2016/30.jpg'
        }
    },
    13: {
        time: ' 15：39',
        content: '努比亚Z11mini 还支持VOLte和高清视频通话。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/31.jpg',
        }
    },
    14: {
        time: ' 15：40',
        content: '努比亚Z11mini 采用双频Wi-Fi提供畅快完美的网络体验。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/32.jpg',
        }
    },
    15: {
        time: ' 15：42',
        content: '努比亚Z11mini 2800mAh的高密度电池，能在小巧的机身内提供更加强大的续航。小屏幕带来的优势便是续航的提升，5寸的机身挺讨喜的。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/33.jpg',
        }
    },
    16: {
        time: ' 15：46',
        content: '比亚Z11mini 旗舰提供相同的体验，摄影更强大、储存更海量、网络更快捷、够沟通更清晰。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/34.jpg',
            2: 'template/zaekev2/static/img/2016/nubia-new-2016/35.jpg'
        }
    },
    17: {
        time: ' 15：48',
        content: '努比亚Z11mini 针对小屏幕推出了nubia UI3.9.6版本，针对用户需求进行了五大改变（如图）。包括更简洁的设计，更持久的续航，更流畅的体验，更便携的分享和更出色的相机。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/36.jpg',
            2: 'template/zaekev2/static/img/2016/nubia-new-2016/37.jpg'
        }
    },
    18: {
        time: ' 15：53',
        content: '努比亚Z11mini 的指纹识别模块还支持1安全支付功能。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/38.jpg',
        }
    },
    19: {
        time: ' 15：54',
        content: '努比亚Z11mini 还支持屏幕录制的功能，能更好的分享和后期制作视频。并且可以录入环境声音。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/39.jpg',
        }
    },
    20: {
        time: ' 15：57',
        content: 'nubia 将采用小版本每月更新大版本每个季度更新来提高更新效率，并公布了现有机型的升级计划。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/40.jpg',
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/41.jpg'
        }
    },
    21: {
        time: ' 15：59',
        content: '作为手机中的“单反”努比亚精心挑选每颗摄像头，配备优秀的屏幕强大的画面表现和丰富的模式。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/42.jpg',
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/43.jpg'
        }
    },
    22: {
        time: ' 16：03',
        content: '努比亚Z11mini 拥有多项手机拍照“黑科技”LTD，3D降噪。手持防抖等。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/44.jpg',
            2: 'template/zaekev2/static/img/2016/nubia-new-2016/45.jpg',
            3: 'template/zaekev2/static/img/2016/nubia-new-2016/46.jpg',
            4: 'template/zaekev2/static/img/2016/nubia-new-2016/47.jpg',
            5: 'template/zaekev2/static/img/2016/nubia-new-2016/48.jpg',
            6: 'template/zaekev2/static/img/2016/nubia-new-2016/49.jpg'
        }
    },
    23: {
        time: ' 16：04',
        content: '努比亚Z11mini 除了提供前置补光灯外还在算法上提供了更加自然柔和的效果。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/50.jpg',
            2: 'template/zaekev2/static/img/2016/nubia-new-2016/51.jpg',
            3: 'template/zaekev2/static/img/2016/nubia-new-2016/52.jpg'
        }
    },
    24: {
        time: ' 16：07',
        content: 'nubia UI3.9.6 版本还带来了全新的NeoVision 5.8摄影系统，对焦速度提升100%并提供更加简洁的画面。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/53.jpg',
            2: 'template/zaekev2/static/img/2016/nubia-new-2016/54.jpg'
        }
    },
    25: {
        time: ' 16：09',
        content: '全新的NeoVision 5.8摄影系统，除了对焦测光分离外，还提供手动曝光调节。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/55.jpg',
            2: 'template/zaekev2/static/img/2016/nubia-new-2016/56.jpg'
        }
    },
    26: {
        time: ' 16：10',
        content: '努比亚Z11mini 得益于3D降噪算法，低光下可达12800ISO能保证拍照体验和更好的画质。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/57.jpg',
            2: 'template/zaekev2/static/img/2016/nubia-new-2016/58.jpg',
            3: 'template/zaekev2/static/img/2016/nubia-new-2016/59.jpg'
        }
    },
    27: {
        time: ' 16：13',
        content: '全新的NeoVision 5.8摄影系统的延时摄影和全景拍摄都经过调整和优化，更用户通过更好的体验。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/60.jpg',
            2: 'template/zaekev2/static/img/2016/nubia-new-2016/61.jpg'
        }
    },
    28: {
        time: ' 16：15',
        content: '全新的NeoVision 5.8摄影系统的还提供专业的RAW格式支持，同时为降低用户使用门槛提供丰富的趣味功能。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/62.jpg',
            2: 'template/zaekev2/static/img/2016/nubia-new-2016/63.jpg'
        }
    },
    29: {
        time: ' 16：18',
        content: '努比亚神秘特邀嘉宾@江一燕 上台分享关于自己的摄影体会心得。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/64.jpg',
        }
    },
    30: {
        time: ' 16：28',
        content: '与努比亚Z11mini 一同登场的还有努比亚律音耳机，采用更具质感的工艺、更具出色的设计，提供更加优秀的音质表现。大家喜欢吗？',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/65.jpg',
            2: 'template/zaekev2/static/img/2016/nubia-new-2016/66.jpg'
        }
    },
    31: {
        time: ' 16：29',
        content: '一张图看懂 努比亚Z11mini,骁龙617处理器，全网通2.1，5英寸1080P屏幕，3GB RAM+64GB ROM，支持指纹识别，全新nubia UI 。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/67.jpg',
        }
    },
    32: {
        time: ' 16：31',
        content: '努比亚Z11mini 只有一个版本3G+64G的组合，售价为1499元，今天17点起开始在京东和努比亚官网预约，4月25日正式开卖 。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/68.jpg',
        }
    },
    33: {
        time: ' 16：32',
        content: '本次努比亚2016新品发布会到此结束，感谢大家观看，新机nubia Z11 mini的评测图赏已推送至首页，欢迎阅读~ 。',
        img: {
            1: 'template/zaekev2/static/img/2016/nubia-new-2016/70.jpg',
            2: 'template/zaekev2/static/img/2016/nubia-new-2016/71.jpg'
        }
    },
};
var SLIDE = {
    0: 'template/zaekev2/static/img/2016/nubia-new-2016/SLIDE/1.jpg',
    1: 'template/zaekev2/static/img/2016/nubia-new-2016/SLIDE/2.jpg',
    2: 'template/zaekev2/static/img/2016/nubia-new-2016/SLIDE/3.jpg',
    3: 'template/zaekev2/static/img/2016/nubia-new-2016/SLIDE/4.jpg',
    4: 'template/zaekev2/static/img/2016/nubia-new-2016/SLIDE/5.jpg',
    5: 'template/zaekev2/static/img/2016/nubia-new-2016/SLIDE/7.jpg',
    6: 'template/zaekev2/static/img/2016/nubia-new-2016/SLIDE/8.jpg',
    7: 'template/zaekev2/static/img/2016/nubia-new-2016/SLIDE/9.jpg',
    8: 'template/zaekev2/static/img/2016/nubia-new-2016/SLIDE/10.jpg',
    9: 'template/zaekev2/static/img/2016/nubia-new-2016/SLIDE/11.jpg',
};