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
    1: {
            src: 'template/zaekev2/static/img/2016/sony-expo-2016/RELATED/1.jpg',
            href: 'http://www.zaeke.com/thread-99453-1-1.html',
            title: '合久必分 索尼宣布将逐渐调整公司架构'
    },
    2: {
            src: 'template/zaekev2/static/img/2016/sony-expo-2016/RELATED/2.png',
            href: 'http://www.zaeke.com/thread-99120-1-1.html',
            title: '索尼：全新的SIE成立，还要为智能手机做游戏哟'
    },
    3: {
            src: 'template/zaekev2/static/img/2016/sony-expo-2016/RELATED/3.png',
            href: 'http://www.zaeke.com/thread-97901-1-1.html',
            title: '支持4K输出 索尼或推PS4.5'
    },
    4: {
            src: 'template/zaekev2/static/img/2016/sony-expo-2016/RELATED/4.jpg',
            href: 'http://www.zaeke.com/thread-97254-1-1.html',
            title: '最低折合2600元 索尼PlayStation VR售价公布'
    },
    5: {
            src: 'template/zaekev2/static/img/2016/sony-expo-2016/RELATED/5.jpg',
            href: 'http://www.zaeke.com/thread-100842-1-1.html',
            title: 'Sony Expo 2016魅力赏：心动时刻，索尼与你'
    },
    6: {
        src: 'template/zaekev2/static/img/2016/sony-expo-2016/RELATED/6.jpg',
        href: 'http://www.zaeke.com/thread-100947-1-1.html',
        title: 'Walkman与索尼个人音频：继续前行的历史与未来'
    }
}
var CONTENT = {
    1: {
        time: '9:28',
        content: '2016年SONY EXPO正式开始咯，2014年少不了，然而更为，精品精致。',
        img: {
            1: 'template/zaekev2/static/img/2016/sony-expo-2016/1.jpg'
        }
    },
    2: {
        time: '9:29',
        content: 'Xperia eye可用于自拍快门和拍摄360度全景图。目前展示的概念展示机型做工颇为精致。',
        img: {
            2: 'template/zaekev2/static/img/2016/sony-expo-2016/2.jpg',
            3: 'template/zaekev2/static/img/2016/sony-expo-2016/3.jpg',
            4: 'template/zaekev2/static/img/2016/sony-expo-2016/4.jpg',
            5: 'template/zaekev2/static/img/2016/sony-expo-2016/5.jpg',
            6: 'template/zaekev2/static/img/2016/sony-expo-2016/6.jpg',
            7: 'template/zaekev2/static/img/2016/sony-expo-2016/7.jpg',
            8: 'template/zaekev2/static/img/2016/sony-expo-2016/8.jpg'
        }
    },
    3: {
        time: '9:32',
        content: '索尼h.ear系列音频设备，主打的色彩都是相当亮骚，并且提供Hi-Res、降噪、防水等多种特性功能选择。',
        img: {
            9: 'template/zaekev2/static/img/2016/sony-expo-2016/9.jpg',
            10: 'template/zaekev2/static/img/2016/sony-expo-2016/10.jpg',
            11: 'template/zaekev2/static/img/2016/sony-expo-2016/11.jpg'
        }
    },
    4: {
        time: '9:32',
        content: 'PS4各种周年庆祝版本哟，这种信仰硬盘盖吸引你了么？反正当年的20周年版本没抽中',
        img: {
            12: 'template/zaekev2/static/img/2016/sony-expo-2016/12.jpg',
            13: 'template/zaekev2/static/img/2016/sony-expo-2016/13.jpg',
            14: 'template/zaekev2/static/img/2016/sony-expo-2016/14.jpg'
        }
    },
    5: {
        time: '9:35',
        content: '充满着情怀与历史感的PS-HX500也有现场展出哟，不仅仅是黑胶唱片，更能够将进行抓轨等操作哟。',
        img: {
            15: 'template/zaekev2/static/img/2016/sony-expo-2016/15.jpg',
            16: 'template/zaekev2/static/img/2016/sony-expo-2016/16.jpg',
            17: 'template/zaekev2/static/img/2016/sony-expo-2016/17.jpg'
        }
    },
    6: {
        time: '9:40',
        content: '现场索尼BRAVIA展示其电视技术的优势表现，如4K HDR带来高清体验同时带来更为明亮的对比和更多的暗部细节与色彩表现。动态背光系统可以搭配HDR表现出更为优秀的画面。此外还能够通过内置芯片X1对HDR型号进行再提升。',
        img: {
            18: 'template/zaekev2/static/img/2016/sony-expo-2016/18.jpg',
            19: 'template/zaekev2/static/img/2016/sony-expo-2016/19.jpg',
            20: 'template/zaekev2/static/img/2016/sony-expo-2016/20.jpg'
        }
    },
    7: {
        time: '9:48',
        content: '也别忘记索尼家的酷拍系列，为热爱运动的你提供更为炫酷与很多可能的展示形式。',
        img: {
            21: 'template/zaekev2/static/img/2016/sony-expo-2016/21.jpg',
            22: 'template/zaekev2/static/img/2016/sony-expo-2016/22.jpg',
            23: 'template/zaekev2/static/img/2016/sony-expo-2016/23.jpg'
        }
    },
    8: {
        time: '9:57',
        content: 'Sony Expo 2016索尼魅力赏即将正式开始，再一次充值信仰与看到姨夫了哟。',
        img: {
            24: 'template/zaekev2/static/img/2016/sony-expo-2016/24.jpg'
        }
    },
    9: {
        time: '10:12',
        content: '索尼中国董事长栗田伸树上台开场讲述索尼魅力赏，依然是表达索尼对于中国的重视，其可是索尼的三大市场哟。',
        img: {
            25: 'template/zaekev2/static/img/2016/sony-expo-2016/25.jpg',
            26: 'template/zaekev2/static/img/2016/sony-expo-2016/26.jpg'
        }
    },
    10: {
        time: '10:14',
        content: '一张图看懂索尼中国的成长历程。现在的年轻人更多是知道黑卡、walkman和PS4吧？其中PS4进入中国市场更是一个标志。',
        img: {
            27: 'template/zaekev2/static/img/2016/sony-expo-2016/27.jpg',
            28: 'template/zaekev2/static/img/2016/sony-expo-2016/28.jpg'
        }
    },
    11: {
        time: '10:15',
        content: '栗田伸树再三表示，这都是“索尼与你”一起营造的。',
        img: {
            29: 'template/zaekev2/static/img/2016/sony-expo-2016/29.jpg'
        }
    },
    12: {
        time: '10:19',
        content: '广大索粉所热爱的平井一夫和索尼消费电子营销部总裁高桥洋上台，讲述下领导层的变更以及再次表现对中国市场的关注重视。',
        img: {
            30: 'template/zaekev2/static/img/2016/sony-expo-2016/30.jpg',
            31: 'template/zaekev2/static/img/2016/sony-expo-2016/31.jpg'
        }
    },
    13: {
        time: '10:25',
        content: '高桥洋即将担任索尼中国总裁，其曾经在中国学习并且在亚太地区多个国家担任索尼相关职位。其表示中国消费者的消费理念正在进行改变，索尼将会更多的推出更为高端的技术产品与更为舒适的体验服务。',
        img: {
            32: 'template/zaekev2/static/img/2016/sony-expo-2016/32.jpg',
            33: 'template/zaekev2/static/img/2016/sony-expo-2016/33.jpg',
            34: 'template/zaekev2/static/img/2016/sony-expo-2016/34.jpg'
        }
    },
    14: {
        time: '10:37',
        content: '高桥洋上台讲述索尼中国的walkman，BRAVIA以及微单相机产品和智能设备在未来的进化方向，其中Smart-B Trainer将于今年下半年登录中国。此外在中国将继续发力专业类产品，如4K激光家用投影机旗舰型号，AR增强现实的M!TENE等。',
        img: {
            35: 'template/zaekev2/static/img/2016/sony-expo-2016/35.jpg',
            36: 'template/zaekev2/static/img/2016/sony-expo-2016/36.jpg',
            37: 'template/zaekev2/static/img/2016/sony-expo-2016/37.jpg',
            38: 'template/zaekev2/static/img/2016/sony-expo-2016/38.jpg',
            39: 'template/zaekev2/static/img/2016/sony-expo-2016/39.jpg'
        }
    },
    15: {
        time: '10:39',
        content: '索尼中国的市场策略将会面向追求高品质生活人群和时尚年轻人群，并且充分与顾客沟通互动。',
        img: {
            40: 'template/zaekev2/static/img/2016/sony-expo-2016/40.jpg'
        }
    },
    16: {
        time: '10:39',
        content: '不仅仅是电子产品，索尼的娱乐内容在中国也获得相当好的成绩，其中索尼电影与索尼PS估摸是最为让人熟悉的。',
        img: {
            41: 'template/zaekev2/static/img/2016/sony-expo-2016/41.jpg'
        }
    },
    17: {
        time: '10:45',
        content: '一张图看懂索尼。',
        img: {
            42: 'template/zaekev2/static/img/2016/sony-expo-2016/42.jpg'
        }
    },
    18: {
        time: '10:53',
        content: '平井一夫表示索尼将会推出更多黑科技产品，其中FES WATCH这块整体墨水屏将会在国内上市，而KOOV或许让不少陌生，其实可以看成高智能的LEGO。',
        img: {
            43: 'template/zaekev2/static/img/2016/sony-expo-2016/43.jpg'
        }
    },
    19: {
        time: '10:42',
        content: '索尼相机所提供的4K视频解决方案，能够广泛的应用在无人机以及电影拍摄等专业用途上。',
        img: {
            44: 'template/zaekev2/static/img/2016/sony-expo-2016/44.jpg',
            45: 'template/zaekev2/static/img/2016/sony-expo-2016/45.jpg',
            46: 'template/zaekev2/static/img/2016/sony-expo-2016/46.jpg',
            47: 'template/zaekev2/static/img/2016/sony-expo-2016/47.jpg'
        }
    },
    20: {
        time: '11:09',
        content: '索尼相机所提供的4K视频解决方案，能够广泛的应用在无人机以及电影拍摄等专业用途上。',
        img: {
            48: 'template/zaekev2/static/img/2016/sony-expo-2016/48.jpg',
            49: 'template/zaekev2/static/img/2016/sony-expo-2016/49.jpg',
            50: 'template/zaekev2/static/img/2016/sony-expo-2016/50.jpg',
            51: 'template/zaekev2/static/img/2016/sony-expo-2016/51.jpg'
        }
    },
    21: {
        time: '13:00',
        content: '索尼音频工程师现场讲解关于walkman音频部分，包括耳机、播放器以及CD等产品，关于这方面的技术介绍。',
        img: {
            52: 'template/zaekev2/static/img/2016/sony-expo-2016/52.jpg',
            53: 'template/zaekev2/static/img/2016/sony-expo-2016/53.jpg'
        }
    },
    22: {
        time: '13:03',
        content: '现场带来了索尼第一台MDR系列开创者MDR-3。并且经过多年发展，其载体与格式经过多次进化与提升，当然在耳机上也有更多形式表现。',
        img: {
            54: 'template/zaekev2/static/img/2016/sony-expo-2016/54.jpg',
            55: 'template/zaekev2/static/img/2016/sony-expo-2016/55.jpg',
            56: 'template/zaekev2/static/img/2016/sony-expo-2016/56.jpg',
            57: 'template/zaekev2/static/img/2016/sony-expo-2016/57.jpg'
        }
    },
    23: {
        time: '13:08',
        content: '耳机音频工程师讲解h.ear产品的技术进化过程，在更为先进与强大的单元支持下，实现更为优秀的听感表现。',
        img: {
            58: 'template/zaekev2/static/img/2016/sony-expo-2016/58.jpg',
            59: 'template/zaekev2/static/img/2016/sony-expo-2016/59.jpg',
            60: 'template/zaekev2/static/img/2016/sony-expo-2016/60.jpg'
        }
    },
    24: {
        time: '13:11',
        content: '尼耳机音频工程师讲述耳机方面的技术进化。不仅仅是采用更为先进的振膜与单元，还与自家的索尼音乐展开合作，以提高软件与硬件的音质表现。',
        img: {
            61: 'template/zaekev2/static/img/2016/sony-expo-2016/61.jpg',
            62: 'template/zaekev2/static/img/2016/sony-expo-2016/62.jpg'
        }
    },
    25: {
        time: '13:14',
        content: '索尼耳机音频工程师讲述耳机方面的技术进化。不仅仅是采用更为先进的振膜与单元，还与自家的索尼音乐展开合作，以提高软件与硬件的音质表现。',
        img: {
            63: 'template/zaekev2/static/img/2016/sony-expo-2016/63.jpg'
        }
    },
    26: {
        time: '13:17',
        content: '佐藤浩郎讲述储存形walkman的进化，其到现在已经能够提供多种使用形态与适应不同场景，并且还带来更好的音质进化。',
        img: {
            64: 'template/zaekev2/static/img/2016/sony-expo-2016/64.jpg',
            65: 'template/zaekev2/static/img/2016/sony-expo-2016/65.jpg',
            66: 'template/zaekev2/static/img/2016/sony-expo-2016/66.jpg'
        }
    },
    26: {
        time: '13:26',
        content: '作为ZX系列的小型化与精细化尝试，ZX100有着相当多的先进技术与工艺尝试。如强化的GND以及低导电率的基材，并且还有低阻抗化的传导螺丝，也有来自ZX1/ZX2的技术传承。',
        img: {
            67: 'template/zaekev2/static/img/2016/sony-expo-2016/67.jpg',
            68: 'template/zaekev2/static/img/2016/sony-expo-2016/68.jpg',
            69: 'template/zaekev2/static/img/2016/sony-expo-2016/69.jpg',
            70: 'template/zaekev2/static/img/2016/sony-expo-2016/70.jpg'
        }
    }
}
var SLIDE = {}