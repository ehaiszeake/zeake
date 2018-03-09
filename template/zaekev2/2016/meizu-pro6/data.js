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
        src: 'template/zaekev2/static/img/2016/meizu-pro6/RELATED/r1.jpg',
        href: 'http://www.zaeke.com/article-3378-1.html',
        title: '魅族PRO 6：5.2英寸并支持3D按压功能'
    },
    1: {
        src: 'template/zaekev2/static/img/2016/meizu-pro6/RELATED/r2.jpg',
        href: 'http://www.zaeke.com/article-3373-1.html',
        title: '这跑分感人？！ 魅族PRO 6再曝光'    
    },
    2: {
        src: 'template/zaekev2/static/img/2016/meizu-pro6/RELATED/r3.jpg',
        href: 'http://www.zaeke.com/article-3380-1.html',
        title: 'Hi-Fi、扬声器、拍照与设计一个不落 魅族PRO 6正式发布'
    }
}
var CONTENT = {
    1: {
        time: '13：00',
        content: '从oppomart的相关网页可知，PRO 6 将采用一块1920*1080的5.2英寸屏幕，并且支持3D按压功能，配置以实现不同应用的快捷操作。',
        img: { 
        0:'template/zaekev2/static/img/2016/meizu-pro6/1.png'
        }
    },
    2: {
        time: '13：30',
        content: '魅族 PRO6 即将正式登场了哟，大家期待他的金属机身还是后置闪光灯？传闻已久的压力触控技术是否也一起亮相呢？',
        img: { 
        0:'template/zaekev2/static/img/2016/meizu-pro6/2.jpg'
        }
    },
    3: {
        time: '13：55',
        content: '知客小编已到达这次魅族 PRO6 发布会的现场，场地的这气势挺带感的呀。',
        img: { 
        0:'template/zaekev2/static/img/2016/meizu-pro6/3.jpg',
        1:'template/zaekev2/static/img/2016/meizu-pro6/4.jpg',
        2:'template/zaekev2/static/img/2016/meizu-pro6/5.jpg'
        }
    },
    4: {
        time: '14：55',
        content: '面对目前智能手机的屏幕尺寸两极分化严重，其中小于5.5英寸的用户是庞大的。魅族不敢轻易说完美，PRO 6要用全新与针对的设计，设计出一款小屏幕的旗舰手机。PRO 6是将科技与艺术融合的产品。',
        img: { 
        0:'template/zaekev2/static/img/2016/meizu-pro6/6.jpg',
        1:'template/zaekev2/static/img/2016/meizu-pro6/7.jpg',
        2:'template/zaekev2/static/img/2016/meizu-pro6/8.jpg',
        3:'template/zaekev2/static/img/2016/meizu-pro6/9.jpg'
        }
    },
    5: {
        time: '15：05',
        content: '魅族 PRO6 采用金属机身并通过喷砂处理，在全新的星空黑下十分带感。7.25mm的轻薄机身，配备2.5D玻璃，并且加入斜面边实现更为圆润的手感表现。纳米注塑天线面积相较iPhone 6s少48%，实现98%的机身金属比。',
        img: { 
        0:'template/zaekev2/static/img/2016/meizu-pro6/10.jpg',
        1:'template/zaekev2/static/img/2016/meizu-pro6/11.jpg',
        2:'template/zaekev2/static/img/2016/meizu-pro6/12.jpg',
        3:'template/zaekev2/static/img/2016/meizu-pro6/13.jpg',
        4:'template/zaekev2/static/img/2016/meizu-pro6/14.jpg',
        5:'template/zaekev2/static/img/2016/meizu-pro6/15.jpg',
        6:'template/zaekev2/static/img/2016/meizu-pro6/16.jpg'
        }
    },
    6: {
        time: '15：12',
        content: '魅族 PRO6 屏幕方面采用1920*1080的5.2英寸Super AMOLED屏幕，提供最高450nit亮度而最低3mit亮度能保护用户在夜间时的阅读。屏幕边框与黑边控制的相当优秀，70.8mm的机身宽度相较不少小屏幕尺寸机型都要优秀。',
        img: { 
        0:'template/zaekev2/static/img/2016/meizu-pro6/17.jpg',
        1:'template/zaekev2/static/img/2016/meizu-pro6/18.jpg',
        2:'template/zaekev2/static/img/2016/meizu-pro6/19.jpg',
        3:'template/zaekev2/static/img/2016/meizu-pro6/20.jpg'
        }
    },
    7: {
        time: '15：17',
        content: '魅族 PRO6 带来了全新的 mCharge 3.0 快速充电，支持最高24W能够在10分钟充电到26%，在60分钟充电完成。同时在数据线、接口、主板进行硬件级支持保护确保用户安全。',
        img: { 
        0:'template/zaekev2/static/img/2016/meizu-pro6/21.jpg',
        1:'template/zaekev2/static/img/2016/meizu-pro6/22.jpg',
        2:'template/zaekev2/static/img/2016/meizu-pro6/23.jpg',
        3:'template/zaekev2/static/img/2016/meizu-pro6/24.jpg'
        }
    },
    8: {
        time: '15：22',
        content: '魅族 PRO6 采用Tpye-C并支持USB 3.1速度支持，储存芯片为eMMC 5.1规格配合，联发科Helio X25处理器，三丛十核心架构实现性能与功耗的平衡。支持6模18频的全网通网络，支持VoLTE和Cat.6，双卡双待并支持热插拔。',
        img: { 
        0:'template/zaekev2/static/img/2016/meizu-pro6/25.jpg',
        1:'template/zaekev2/static/img/2016/meizu-pro6/26.jpg',
        2:'template/zaekev2/static/img/2016/meizu-pro6/27.jpg',
        3:'template/zaekev2/static/img/2016/meizu-pro6/28.jpg',
        4:'template/zaekev2/static/img/2016/meizu-pro6/29.jpg',
        5:'template/zaekev2/static/img/2016/meizu-pro6/30.jpg'
        }
    },
    9: {
        time: '15：27',
        content: '魅族 PRO6 的相机部分通过定制的后置摄像头模组，将后置摄像头突出程度明显压缩较前代减少14%。后置摄像头为2116万像素的索尼IMX230传感器，并且采用颗LED的环状闪光灯，在相位对焦以及红外对焦相互配合下实现0.07S的对焦速度。',
        img: { 
        0:'template/zaekev2/static/img/2016/meizu-pro6/31.jpg',
        1:'template/zaekev2/static/img/2016/meizu-pro6/32.jpg',
        2:'template/zaekev2/static/img/2016/meizu-pro6/33.jpg',
        3:'template/zaekev2/static/img/2016/meizu-pro6/34.jpg',
        4:'template/zaekev2/static/img/2016/meizu-pro6/35.jpg',
        5:'template/zaekev2/static/img/2016/meizu-pro6/36.jpg'
        }
    },
    10: {
        time: '15：33',
        content: '魅族 PRO6 音质方面，采用全新的Hi-Fi Lite，使用Cirrus Logic一体解码耳放芯片。还支持名mSound扬声器解决方案，提供更为优秀的扬声器体验同时能够实现高清录音。',
        img: { 
        0:'template/zaekev2/static/img/2016/meizu-pro6/37.jpg',
        1:'template/zaekev2/static/img/2016/meizu-pro6/38.jpg',
        2:'template/zaekev2/static/img/2016/meizu-pro6/39.jpg',
        3:'template/zaekev2/static/img/2016/meizu-pro6/40.jpg'
        }
    },
    11: {
        time: '15：40',
        content: '魅族 PRO6 支持名为3D Press的压力感应功能，支持3级压力感应。并且Flyeme OS针对3D Press实现很多针对性设计，并且提供SDK以满足开发者需求。',
        img: { 
        0:'template/zaekev2/static/img/2016/meizu-pro6/41.jpg',
        1:'template/zaekev2/static/img/2016/meizu-pro6/42.jpg',
        2:'template/zaekev2/static/img/2016/meizu-pro6/43.jpg',
        3:'template/zaekev2/static/img/2016/meizu-pro6/44.jpg'
        }
    },
    12: {
        time: '15：47',
        content: '魅族 PRO6 在使用体验上是优秀的，当然这些都是Flyme OS的支持。加入漫游服务，在价格上更为优秀。',
        img: { 
        0:'template/zaekev2/static/img/2016/meizu-pro6/45.jpg',
        1:'template/zaekev2/static/img/2016/meizu-pro6/46.jpg',
        2:'template/zaekev2/static/img/2016/meizu-pro6/47.jpg',
        3:'template/zaekev2/static/img/2016/meizu-pro6/48.jpg'
        }
    },
    13: {
        time: '15：54',
        content: '此次发布会还带来了@魅族互娱 联合日本级的游戏厂商为魅族 PRO6 引入的首款游戏是正版授权的EVA改编手游哟！',
        img: { 
        0:'template/zaekev2/static/img/2016/meizu-pro6/49.jpg',
        1:'template/zaekev2/static/img/2016/meizu-pro6/50.jpg',
        2:'template/zaekev2/static/img/2016/meizu-pro6/51.jpg',
        3:'template/zaekev2/static/img/2016/meizu-pro6/52.jpg'
        }
    },
    14: {
        time: '16：00',
        content: '魅族副总裁李楠公布mCycle回收计划到现在已经回收40000手机与给出15000000补贴，并且减少4万平方公里。并公布将支持更多的手机囊括了几乎在场所有人使用的手机品牌。',
        img: { 
        0:'template/zaekev2/static/img/2016/meizu-pro6/53.jpg',
        1:'template/zaekev2/static/img/2016/meizu-pro6/54.jpg'
        }
    },
    15: {
        time: '16：07',
        content: '此次发布会还为魅族 PRO6 带来了魅族VIP服务，除了周全服务外，还有免费的上门维修服务。同时实现线下维修免排队和远程服务将提供线下体验',
        img: { 
        0:'template/zaekev2/static/img/2016/meizu-pro6/55.jpg',
        1:'template/zaekev2/static/img/2016/meizu-pro6/56.jpg',
        2:'template/zaekev2/static/img/2016/meizu-pro6/57.jpg',
        3:'template/zaekev2/static/img/2016/meizu-pro6/58.jpg'
        }
    },
    16: {
        time: '16：13',
        content: '此次发布会魅族与顺丰推出mArrive服务，提供最快8小时到货时间哟。',
        img: { 
        0:'template/zaekev2/static/img/2016/meizu-pro6/59.jpg',
        1:'template/zaekev2/static/img/2016/meizu-pro6/60.jpg',
        2:'template/zaekev2/static/img/2016/meizu-pro6/61.jpg',
        3:'template/zaekev2/static/img/2016/meizu-pro6/62.jpg'
        }
    },
    17: {
        time: '16：16',
        content: '魅族 PRO6 售价正式公布32G为2499元，64G为2799元。',
        img: { 
        0:'template/zaekev2/static/img/2016/meizu-pro6/63.jpg'
        }
    },
    18: {
        single: true,
        content: '直播到此结束，谢谢观看。',
        time: '16: 21'
    }
}
var SLIDE = {}