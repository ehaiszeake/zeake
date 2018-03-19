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
    
var HOST = {
    1: {
        src: 'template/zaekev2/static/img/2016/apple-special-2016/h1.png',
        href: 'http://weibo.com/shuaiqiaoqiao?refer_flag=1001030101_',
        name: '王乔at沈阳',
        intro: '特约评论人'
    }
};
var RELATED = {
    1: {
        src: 'template/zaekev2/static/img/2016/apple-special-2016/r1.png',
        href: 'http://www.zaeke.com/forum.php?mod=viewthread&tid=93499&highlight=%E8%8B%B9%E6%9E%9C',
        title: '跳票？苹果推迟传闻中的发布会时间'
    },
    2: {
        src: 'template/zaekev2/static/img/2016/apple-special-2016/r2.jpg',
        href: 'http://www.zaeke.com/thread-92445-1-1.html',
        title: '进一步扩展产品线？苹果将推出9.7英寸iPad Pro'
    },
    3: {
        src: 'template/zaekev2/static/img/2016/apple-special-2016/r3.jpg',
        href: 'http://www.zaeke.com/article-3277-1.html',
        title: '重新回归 iPhone SE正式登场'
    },
    4: {
        src: 'template/zaekev2/static/img/2016/apple-special-2016/r4.jpg',
        href: 'http://www.zaeke.com/article-3278-1.html',
        title: 'iPad Pro 9.7：我变小了，也变强了。'
    }
};
var CONTENT = {
    1: {
        img: {
            1: 'template/zaekev2/static/img/2016/apple-special-2016/w1.png'
        },
        content: '微博活动：#知客福利# 【看知客live 竞猜苹果新品赢大奖】苹果新品发布会将于（北京时间3月22日凌晨1点）在加州库比蒂诺总部举行，届时知客live将进行现场直播。转发本微博并附上竞猜新款iPhone国行售价，将从猜中正确售价的童鞋中，抽取一名幸运儿送出1/3的购机款，助你任性买买买！详情戳图↑',
        time: '15:55'
    },
    2: {
        time: '23:56',
        content: '特约评论员已经到达Cupertino，Apple总部园区外。',
        img: {
            1: 'template/zaekev2/static/img/2016/apple-special-2016/1.jpg',
            2: 'template/zaekev2/static/img/2016/apple-special-2016/2.jpg',
            3: 'template/zaekev2/static/img/2016/apple-special-2016/3.jpg',
            4: 'template/zaekev2/static/img/2016/apple-special-2016/4.jpg'
        }
    },
    3: {
        time: '0:18',
        content: '会场外拍照留念',
        img: {
            5: 'template/zaekev2/static/img/2016/apple-special-2016/5.jpg'
        }
    },
    4: {
        time: '0:20',
        content: '倒计时，距离苹果发布会开始还有40分钟',
        img: {
            6: 'template/zaekev2/static/img/2016/apple-special-2016/6.jpg',
            7: 'template/zaekev2/static/img/2016/apple-special-2016/7.jpg'
        }
    },
    5: {
        time: '0:54',
        content: '前方特约评论员已经进入会场',
        img: {
            8: 'template/zaekev2/static/img/2016/apple-special-2016/8.jpg'
        }
    },
    6:{
        time: '1:06',
        content: 'Tim Cook表示激活的苹果设备已经到达了10亿台。同时，@TimCook 提到了对于个人设备隐私信息的看法，这也间接表达了和美国政府相关部门在是否解密售出设备信息的个人态度。',
        img: {
            9: 'template/zaekev2/static/img/2016/apple-special-2016/9.jpg',
            10: 'template/zaekev2/static/img/2016/apple-special-2016/10.jpg'
        }
    },
    7:{
        time: '1:16',
        content: '在分享了苹果对于环保、可再生能源以及可持续发展的贡献之后，话题重新回到了健康上面，此时Tim Cook重新登台',
        img: {
            11: 'template/zaekev2/static/img/2016/apple-special-2016/11.jpg'
        }  
    },
    8:{
        time: '1:23',
        content: '苹果CareKit正式登场，提供全面的健康数据平台，CareKit也将会进行开源，同时也会推出开发者套件',
        img: {
            12: 'template/zaekev2/static/img/2016/apple-special-2016/12.jpg'
        }  
    },
    9:{
        time: '1:29',
        content: '苹果本次为苹果表推出了全新的尼龙表带，搭配尼龙表带的苹果表售价为299美刀起',
        img: {
            13: 'template/zaekev2/static/img/2016/apple-special-2016/13.jpg',
            14: 'template/zaekev2/static/img/2016/apple-special-2016/14.jpg'
        }  
    },
    10:{
        time: '1:31',
        content: '苹果认为电视机的未来在于应用，而Apple TV在将来也将获得听写、Siri、iCloud图片库、Live Photos以及文件夹功能',
        img: {
            15: 'template/zaekev2/static/img/2016/apple-special-2016/15.jpg'
        }  
    },
    11:{
        time: '1:35',
        content: 'iPhone SE正式登场，苹果将其称之为“最强劲的4英寸屏幕智能手机”，内置和iPhone 6S相同的A9处理器、提供1200万像素后置相机，支持4K视频录制和最高6300万像素全景照片',
        img: {
            16: 'template/zaekev2/static/img/2016/apple-special-2016/16.jpg',
            17: 'template/zaekev2/static/img/2016/apple-special-2016/17.jpg'
        }  
    },
    12:{
        time: '1:40',
        content: 'iPhone SE内置NFC，支持Apple Pay和Touch ID，首发地区包括中国大陆，将会于5月底前上市销售，提供16GB版本以及64GB版本，售价分别为399美刀以及499美刀',
        img: {
            18: 'template/zaekev2/static/img/2016/apple-special-2016/18.jpg',
            19: 'template/zaekev2/static/img/2016/apple-special-2016/19.jpg'
        }  
    },
    13:{
        time: '1:41',
        content: '另外，苹果本次开发的iOS 9.3操作系统提供了自动屏幕白平衡功能，在夜间会自动调整为暖色调屏幕以帮助用户睡眠',
        img: {
            20: 'template/zaekev2/static/img/2016/apple-special-2016/20.jpg',
            21: 'template/zaekev2/static/img/2016/apple-special-2016/21.jpg'
        }  
    },
    14:{
        time: '1:46',
        content: '9.7英寸的iPad Pro登场',
        img: {
            22: 'template/zaekev2/static/img/2016/apple-special-2016/22.jpg'
        }  
    },
    15:{
        single:true,
        time: '1:49',
        content: '苹果宣称，9.7英寸的iPad Pro拥有平板电脑之中最亮的屏幕，屏幕亮度高达500nit'           
    },
    16:{
        single:true,
        time: '1:58',
        content: '9.7英寸的iPad Pro似乎被命名为“The New iPad Pro”，32GB/128GB/256GB版本的售价分别为599/749/899，均为Wi-Fi版本，均采用和iPad Pro相同的A9X处理器。'           
    },
    17:{
        single:true,
        time: '2:02',
        content: '12.9英寸的iPad Pro也新增了256GB内存的版本，12.9英寸的iPad Pro目前售价为799美刀起'           
    },
    18:{
        time: '2:04',
        content: '最后苹果还炫了个富：咱们的新总部将会于明年投入使用，又大又漂亮哟~',
        img: {
            23: 'template/zaekev2/static/img/2016/apple-special-2016/23.jpg'
        }
    },
    19:{
        single:true,
        time: '2:07',
        content: '本次苹果发布会正式结束，四个字总结：苹果牛逼'
    },
    20:{
        time: '2:14',
        content: 'iPhone SE的官图，我书读得少你别拿5S骗我',
        img: {
            24: 'template/zaekev2/static/img/2016/apple-special-2016/24.jpg',
            25: 'template/zaekev2/static/img/2016/apple-special-2016/25.jpg',
            26: 'template/zaekev2/static/img/2016/apple-special-2016/26.jpg',
            27: 'template/zaekev2/static/img/2016/apple-special-2016/27.jpg',
            28: 'template/zaekev2/static/img/2016/apple-special-2016/28.jpg'
        }
    }
};
var SLIDE = {}