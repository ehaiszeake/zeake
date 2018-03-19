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
        src: 'template/zaekev2/static/img/2016/huawei-p9/RELATED/r1.jpg',
        href: 'http://www.zaeke.com/article-3391-1.html',
        title: '爵士也爱玩摄影 华为P9/P9 Plus国内发布'
    },
    2: {
        src: 'template/zaekev2/static/img/2016/huawei-p9/RELATED/r2.jpg',
        href: 'http://www.zaeke.com/article-3392-1.html',
        title: '不只有手机 华为发布华为手环B3、VR眼镜'
    }
}
var CONTENT = {
    1: {
        time: ' 13：57',
        content: '华为P9即将正式登场了哟，摄像头有看头。',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/3.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/4.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-p9/5.jpg'
        }
    },
    2: {
        time: ' 14：00',
        content: '华为P9发布会现场与时尚、徕卡的距离更加接近，突出与徕卡的合作设计以及黑寡妇的合作代言。总体而言，华为在国际化的方向上一路狂奔。',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/6.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/7.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-p9/8.jpg',
            4: 'template/zaekev2/static/img/2016/huawei-p9/9.jpg',
            5: 'template/zaekev2/static/img/2016/huawei-p9/10.jpg',
            6: 'template/zaekev2/static/img/2016/huawei-p9/11.jpg',
            7: 'template/zaekev2/static/img/2016/huawei-p9/12.jpg'
        }
    },
    3: {
        time: ' 14：18',
        content: '发布会有5000多人到场，其中经销商渠道是大头，并且徕卡相机全球CEO和监会主席均到场表示支持，自然令人熟悉的@余承东 同样到场。',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/13.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/14.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-p9/15.jpg',
            4: 'template/zaekev2/static/img/2016/huawei-p9/16.jpg',
            5: 'template/zaekev2/static/img/2016/huawei-p9/17.jpg',
            6: 'template/zaekev2/static/img/2016/huawei-p9/18.jpg',
            7: 'template/zaekev2/static/img/2016/huawei-p9/19.jpg'
        }
    },
    4: {
        time: ' 14：19',
        content: '华为P9代言人Herry Cavill到现场表示支持，这位可是不少女性用户的男神们哟。有多少人喜欢他的电影呢？',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/20.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/21.jpg'
        }
    },
    5: {
        time: ' 14：28',
        content: '现场播放的是超人和黑寡妇的扮演者合作拍摄的华为P9的宣传片。影片高大上的时尚风格，突出了华为P9的强大拍照效果和各类滤镜效果。各位看客姥爷喜欢吗？',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/22.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/23.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-p9/24.jpg',
            4: 'template/zaekev2/static/img/2016/huawei-p9/25.jpg'
        }
    },
    6: {
        time: ' 14：31',
        content: '卡维尔表示华为P9很漂亮，屏幕也很棒，最让他惊喜的是其所使用的徕卡相机相机拍摄的照片，分享体验也很棒。',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/26.jpg',
        }
    },
    7: {
        time: ' 14：36',
        content: '我的天，现场帅哥美女时装走秀，戴着华为表拿着P9，各位老板给几分？',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/27.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/28.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-p9/29.jpg',
            4: 'template/zaekev2/static/img/2016/huawei-p9/30.jpg'
        }
    },
    8: {
        time: ' 14：39',
        content: '华为为突破在人们眼中的刻板印象，带来了一场时尚走秀。而此次华为P9得益于全新设计与时尚结合的更加紧密。',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/31.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/32.jpg'
        }
    },
    9: {
        time: ' 14：45',
        content: '华为消费者业务CEO余承东 上台介绍上海是华为的研发中心同时也是时尚之都。',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/33.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/34.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-p9/35.jpg'
        }
    },
    10: {
        time: ' 14：47',
        content: '余承东表示华为mate8实现了400万的销量，各位爵士大家有买吗',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/36.jpg',
        }
    },
    11: {
        time: ' 14：48',
        content: '余承东表示本次华为P9&P9 Puls采用和徕卡共同研发的镜头，实现手机拍照的再一次突破，问题来了，安卓拍照哪家强？',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-p9/37.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-p9/38.jpg'
        }
    },
    12: {
        time: ' 14：50',
        content: '徕卡的负责人为大家介绍了徕卡相机的历史，和其独特的光学成像素质一直延续至今。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-p9/39.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-p9/40.jpg'
        }
    },
    13: {
        time: ' 14：53',
        content: '依旧是关于徕卡产品线发展的介绍，其中包括许多经典产品均由徕卡相机拍摄。',
        img: {
            0: 'template/zaekev2/static/img/2016/huawei-p9/41.jpg',
            1: 'template/zaekev2/static/img/2016/huawei-p9/42.jpg'
        }
    },
    14: {
        time: ' 14：55',
        content: '徕卡相机在漫漫的历史长河中，记录了许多经典的照片 。',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/43.jpg',
        }
    },
    15: {
        time: ' 15：01',
        content: '徕卡相机对于摄影本质的极致追求与华为对于产品的追求是一致的。虽然安卓时代拍照公认最强的还是三星，但这一次的P9似乎更值得期待的 。',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/44.jpg',
        }
    },
    16: {
        time: ' 15：05',
        content: '余承东表示华为P系列针对的是时尚高端人士， 因此华为P9的设计和工艺上都精益求精。其实在P8的设计上就能看到华为对金属机身设计的把控是要比P7和P6要苛求的多。',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/45.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/46.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-p9/47.jpg',
            4: 'template/zaekev2/static/img/2016/huawei-p9/48.jpg'
        }
    },
    17: {
        time: ' 15：10',
        content: '华为P9采用一体化金属机身与背部的玻璃盖板完美融合，得意于其弧面曲线和较小的屏幕整机握持相当出色。好看吗？',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/49.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/50.jpg'
        }
    },
    18: {
        time: ' 15：11',
        content: '华为P9采用了极窄边框的设计，在机身厚度薄于iPhone6以及三星S7的同时做到了摄像头不突出，这设计给几分？注意摄像头没有突出！',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/51.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/52.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-p9/53.jpg'
        }
    },
    19: {
        time: ' 15：13',
        content: '华为P9在5.2英寸屏幕以及较小的机身尺寸内塞下3000mAh的电池。讲实话，这尺寸中意吗？',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/54.jpg',
        }
    },
    20: {
        time: ' 15：16',
        content: '华为P9是全球首款采用360°的拉丝工艺，体现其的精致感 。华为居然这么喜欢金属拉丝- -！',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/55.jpg',
        }
    },
    21: {
        time: ' 15：19',
        content: '华为P9是拥有多种配色，均采用了最好的工艺与材质来体现P9的时尚感，好了你喜欢哪种颜色呢？',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/56.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/57.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-p9/58.jpg',
            4: 'template/zaekev2/static/img/2016/huawei-p9/59.jpg'
        }
    },
    22: {
        time: ' 15：20',
        content: '华为的拍照从清晰再到美观，此次与徕卡的合作是追求对于艺术感的更好表现 。（说了这么多牛逼的东西，来个样张试试吧- -！）',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/60.jpg',
            4: 'template/zaekev2/static/img/2016/huawei-p9/61.jpg'
        }
    },
    23: {
        time: ' 15：24',
        content: '徕卡CEO上台并表示P9只是与华为合作的开始，而P9的摄像头充分的发挥出徕卡在光学影相方面的能力 。',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/62.jpg',
            4: 'template/zaekev2/static/img/2016/huawei-p9/63.jpg'
        }
    },
    24: {
        time: ' 15：36',
        content: '余承东表示华为是全球最早采用双摄像头对称设计的厂商，而P9与徕卡的合作把双摄像头成像推向一个新高度  。',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/64.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/65.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-p9/66.jpg'
        }
    },
    25: {
        time: ' 15：43',
        content: '余承东表示徕卡的品质要求相当高，而P9的双摄像头均采用索尼IMX286，单个像素面积达1.22μ，保证了足够的进光量和夜间成像素质。吊打iPhone6s，同意吗？',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/67.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/68.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-p9/69.jpg'
        }
    },
    26: {
        time: ' 15：45',
        content: '华为P9在全新的传感器和徕卡镜头，结合华为先进的算法。在弱光逆光的环境下人像成像均超越iPhone和三星S7，还是坐等各大老师对比评测吧。',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/70.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/71.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-p9/72.jpg'
        }
    },
    27: {
        time: ' 15：48',
        content: '华为P9得益于深度定制的ISP，相较传统软件算法要快200%。而徕卡的合作更多体现在对于艺术感的追求上。',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/73.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/74.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-p9/75.jpg'
        }
    },
    28: {
        time: ' 15：52',
        content: '华为P9的双摄像头令其成为首款大光圈实时可调的手机，虚化效果相当优秀。（虚化这么好，肯定没有光学防抖- -！）',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/76.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/77.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-p9/78.jpg'
        }
    },
    29: {
        time: ' 15：57',
        content: '华为P9支持徕卡的三种色彩模式：标准、鲜艳、柔和。主要是通过与徕卡的合作提升照片的艺术馆。',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/79.jpg',
        }
    },
    30: {
        time: ' 15：59',
        content: '华为P9的拍照界面通过与徕卡的合作，进行了大量的调整加入了专业模式的选择。',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/80.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/81.jpg'
        }
    },
    31: {
        time: ' 16：01',
        content: '华为P9采用全新的指纹识别传感器，支持目前最高的等级和拥有生物防伪技术。（新词来的太快就像龙卷风- -！）',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/82.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/83.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-p9/84.jpg'
        }
    },
    32: {
        time: ' 16：07',
        content: '华为P9采用16nm工艺的海思麒麟955 八核芯片（2.5 GHz x 4、1.8 GHz x 4）以及I5协处理器，双卡双待采用与或卡托的设计。想知道跑分多少吗？',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/85.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/86.jpg'
        }
    },
    33: {
        time: ' 16：10',
        content: '华为P9是全球首款采用三虚拟天线设计的手机，支持天际通、Wi-Fi直连等使用功能。',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/87.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/88.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-p9/89.jpg'
        }
    },
    34: {
        time: ' 16：12',
        content: '华为P9采用全新的文件管理有效减少文件碎片，避免手机越用越卡。一般不都是用几个月格式一次不就好了么- -！',
        img: {
            3: 'template/zaekev2/static/img/2016/huawei-p9/90.jpg'
        }
    },
    35: {
        time: ' 16：13',
        content: '华为P9拥有学生模式，家长能有效管理使用时间，访问网站等。爸爸妈妈给孩子买个吧- -！',
        img: {
            3: 'template/zaekev2/static/img/2016/huawei-p9/91.jpg'
        }
    },
    36: {
        time: ' 16：17',
        content: '华为P9在重度使用下拥有1.5天的续航，并且支持USB Type C接口拥有9V 2A的快速充电，能实现充电10分钟通话5小时。这波可以不？',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/92.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/93.jpg'
        }
    },
    37: {
        time: ' 16：20',
        content: '华为P9内置相应的传感器，能整合相应的生态平台实现数据同步。',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/94.jpg'
        }
    },
    38: {
        time: ' 16：25',
        content: '值得注意的是，华为P9 Pls相对于P9在续航自拍等方面的全面升级，拥有双扬声器能提供非凡的影音体验- -！',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/95.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/96.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-p9/97.jpg',
            4: 'template/zaekev2/static/img/2016/huawei-p9/98.jpg',
            5: 'template/zaekev2/static/img/2016/huawei-p9/99.jpg',
            6: 'template/zaekev2/static/img/2016/huawei-p9/100.jpg'
        }
    },
    39: {
        time: ' 16：27',
        content: '继续全球首款压力感应的mateS后，为P9 Plus 128G版重新支持二级压力感应，和从多原生应用。此外也重新支持红外遥控功能。问题来了，泼辣死值得买？',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/101.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/102.jpg'
        }
    },
    40: {
        time: ' 16：32',
        content: '华为P9以及P9Plus提供多种保护套，哪个色是你的菜？',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/103.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/104.jpg'
        }
    },
    41: {
        time: ' 16：37',
        content: '令人意外的是此次发布会还带来了名为华为VR的虚拟设备，需配合华为手机使用拥有众多应用资源。',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/105.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/106.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-p9/107.jpg',
            4: 'template/zaekev2/static/img/2016/huawei-p9/108.jpg'
        }
    },
    42: {
        time: ' 16：39',
        content: '华为P9拥有三个版本6种配色售价2988元起，而P9 Plus拥有两个版本售价3988元起。这价格满意？？？',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/109.jpg',
            2: 'template/zaekev2/static/img/2016/huawei-p9/110.jpg',
            3: 'template/zaekev2/static/img/2016/huawei-p9/111.jpg',
            4: 'template/zaekev2/static/img/2016/huawei-p9/112.jpg',
            5: 'template/zaekev2/static/img/2016/huawei-p9/113.jpg'
        }
    },
    43: {
        time: ' 16：40',
        content: '本次华为P9的图文直播到此结束，关于该机的详细体验评测敬请期待，谢谢大家观看，下期见~',
        img: {
            1: 'template/zaekev2/static/img/2016/huawei-p9/114.jpg',
        }
    },


}
var SLIDE = {}