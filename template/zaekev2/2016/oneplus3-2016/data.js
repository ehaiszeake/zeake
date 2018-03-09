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
        src: 'template/zaekev2/static/img/2016/oneplus3-2016/RELATED/6.jpg',
        href: 'http://www.zaeke.com/article-3625-1.html',
        title: '金属机身确认 一加手机3确认入网'
    },
    2: {
       src: 'template/zaekev2/static/img/2016/oneplus3-2016/RELATED/5.png',
        href: 'http://www.zaeke.com/article-3668-1.html',
        title: '隔天现货销售？一加手机3将于6月15日正式发布'
    },
    3: {
        src: 'template/zaekev2/static/img/2016/oneplus3-2016/RELATED/1.jpg',
        href: 'http://www.zaeke.com/article-3786-1.html',
        title: '一加手机3正式发布：仅顶配配置，海外售价399美元'        
    },
    4: {
        src: 'template/zaekev2/static/img/2016/oneplus3-2016/RELATED/2.jpg',
        href: 'http://www.zaeke.com/article-3791-1.html',
        title: '一加手机3正式发布：手机中的外星人？！唯一版本定价2499元'        
    },
    5: {
        src: 'template/zaekev2/static/img/2016/oneplus3-2016/RELATED/3.jpg',
        href: 'http://www.zaeke.com/article-3792-1.html',
        title: '一加手机3上手：公模脸也有春天'        
    },
}
var CONTENT = {
    1: {
        time: '16:00',
        content: '一加手机3将在本月15日于深圳大运中心发布，根据此前曝光的谍照和配置信息来看，配备骁龙820处理器和全金属机身的一加3有着足够的吸引力，从此次发布会的海报来看，一加3将以“极速旗舰”名义发布，也就是追求高性能和快体验。届时欢迎大家观看图文直播以及后续的详细内容，见证一加3如何“不将就”也欢迎大家发微博@知客数码参与讨论。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/1.png',
        }
    },
    2: {
        time: '18:00',
        content: ' 极速旗舰 #一加3# 将于明天在深圳大运中心正式发布。一加手机此次号称不做PPT手机 “极速”开售！@知客数码 将进行全程直播。评论里对#一加3#的看法，将有机会获得手感一样爽的“铁肥皂”一枚，让你爽到爆。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/2.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/3.jpg',
            3: 'template/zaekev2/static/img/2016/oneplus3-2016/4.jpg',
            4: 'template/zaekev2/static/img/2016/oneplus3-2016/5.jpg'
        }
    },
    3: {
        time: '09:20',
        content: ' 小编已经到达本次 极速旗舰 一加手机 3 发布会现场，深圳大运中心。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/6.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/7.jpg',
            3: 'template/zaekev2/static/img/2016/oneplus3-2016/8.jpg',
            4: 'template/zaekev2/static/img/2016/oneplus3-2016/9.jpg'
        }
    },
    4: {
        time: '09:40',
        content: '一加手机3发布会即将开始，现场正在播放预热视频。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/10.jpg',
        }
    },
    5: {
        time: '10:03',
        content: '一加3发布会正式开始，CEO刘作虎登台致辞。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/11.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/12.jpg'
        }
    },
    6: {
        time: '10:05',
        content: '刘作虎表示由于时差的关系，一加手机3在海外通过VR进行了发布。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/13.jpg',
        }
    },
    7: {
        time: '10:07',
        content: ' 刘作虎表示将用一分钟讲配置：一加3采用高通骁龙820辅以6GB RAM+64GB UFS 2.0，指纹识别支持支付宝以及微信，后置索尼IMX298 1600万像素相机传感器，前置800万像素。并拥有TYPE-C NFC。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/14.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/15.jpg',
            3: 'template/zaekev2/static/img/2016/oneplus3-2016/16.jpg',
            4: 'template/zaekev2/static/img/2016/oneplus3-2016/17.jpg'
        }
    },
    8: {
        time: '10:06',
        content: '刘作虎表示一加手机只做高配，不做PPT手机。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/18.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/19.jpg'
        }
    },
    9: {
        time: '10:08',
        content: '一加手机3将会只提供6GB RAM版本。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/20.jpg',
        }
    },
    10: {
        time: '10:09',
        content: '下面介绍一加3的工业设计：全金属材质当道，一加继续采用有弧度的后盖，以提供更加出色的手感。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/21.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/22.jpg'
        }
    },
    11: {
        time: '10:12',
        content: '现场播放了一加3的工业设计视频。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/23.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/24.jpg',
            3: 'template/zaekev2/static/img/2016/oneplus3-2016/25.jpg',
            4: 'template/zaekev2/static/img/2016/oneplus3-2016/26.jpg',
            5: 'template/zaekev2/static/img/2016/oneplus3-2016/27.jpg',
            6: 'template/zaekev2/static/img/2016/oneplus3-2016/28.jpg',
        }
    },
    12: {
        time: '10:15',
        content: '刘作虎开始谈一加3的手感，其机身厚度最薄处为4.9mm。抛弃传统的高光切边，给人以更加优雅的设计。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/29.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/30.jpg',
            3: 'template/zaekev2/static/img/2016/oneplus3-2016/31.jpg'
        }
    },
    13: {
        time: '10:17',
        content: '刘作虎表示一加3看着硬朗，摸着圆润，拿着不硌手 。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/32.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/33.jpg',
            3: 'template/zaekev2/static/img/2016/oneplus3-2016/34.jpg',
            4: 'template/zaekev2/static/img/2016/oneplus3-2016/35.jpg'
        }
    },
    14: {
        time: '10:18',
        content: '一加3的将提供薄荷金以及冰川灰两种款式配色可选，彰显清新淡雅和低调。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/36.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/37.jpg'
        }
    },
    15: {
        time: '10:20',
        content: '一加3采用VOOC闪充的技术，结合TYPE-C接口，形成一加的DASH闪充，充电半小时可以使用一天。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/38.jpg'
        }
    },
    16: {
        time: '10:22',
        content: '一加3的DASH闪充，在息屏状态下40分钟可以充电70%。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/39.jpg'
        }
    },
    17: {
        time: '10:25',
        content: '一加3在“边用边充”的场景下，拥有比竞品更高的充电效率。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/40.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/41.jpg'
        }
    },
    18: {
        time: '10:26',
        content: '边用边充的场景下，一加3依旧能够保持和关屏充电同等的效率。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/42.jpg'
        }
    },
    19: {
        time: '10:26',
        content: '一加的DASH闪充采用低压快充方案，在今后一加还会提供DASH闪充套装和车载闪充 。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/43.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/44.jpg',
            3: 'template/zaekev2/static/img/2016/oneplus3-2016/45.jpg',
            4: 'template/zaekev2/static/img/2016/oneplus3-2016/46.jpg'
        }
    },
    20: {
        time: '10:29',
        content: '一加3拥有行业之中顶尖的硬件性能以及运行速度。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/47.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/48.jpg'
        }
    },
    21: {
        time: '10:31',
        content: '一加手机也将会在将来和手游厂商合作对游戏进行优化。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/69.jpg'
        }
    },
    22: {
        time: '10:32',
        content: '一加3要做手机中的外星人。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/50.jpg'
        }
    },
    23: {
        time: '10:33',
        content: '一加3更加注重生活之中的随手拍能力。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/51.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/52.jpg'
        }
    },
    24: {
        time: '10:34',
        content: '一加3支持最快0.9秒快速启动，光学防抖+电子防抖技术。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/53.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/54.jpg'
        }
    },
    25: {
        time: '10:35',
        content: '一加3在6GB RAM之中为相机留出了专用空间，并且自行研发了“像素精选”优化技术。使用6张照片合成最优画质。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/55.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/56.jpg',
            3: 'template/zaekev2/static/img/2016/oneplus3-2016/57.jpg',
            4: 'template/zaekev2/static/img/2016/oneplus3-2016/58.jpg'
        }
    },
    26: {
        time: '10:38',
        content: '刘作虎开始将一加3与国内友商进行对比。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/59.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/60.jpg',
            3: 'template/zaekev2/static/img/2016/oneplus3-2016/61.jpg'
        }
    },
    27: {
        time: '10:40',
        content: '一加3选择在夜拍时注重画面的纯净度，并对比三星S7 edge。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/62.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/63.jpg',
            3: 'template/zaekev2/static/img/2016/oneplus3-2016/64.jpg',
            4: 'template/zaekev2/static/img/2016/oneplus3-2016/65.jpg',
        }
    },
    28: {
        time: '10:43',
        content: '一加3在拍摄美食时能够更加体现画面的色泽，让画面更加好看。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/66.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/67.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/68.jpg'
        }
    },
    29: {
        time: '10:46',
        content: '一加3在相机部分还加入了非常实用的LOFT相机滤镜功能。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/69.jpg'
        }
    },
    30: {
        time: '10:49',
        content: '一张图看懂一加3的强劲拍照。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/70.jpg'
        }
    },
    31: {
        time: '10:52',
        content: '一加3依旧会提供各种不同材质的保护壳。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/71.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/72.jpg',
            3: 'template/zaekev2/static/img/2016/oneplus3-2016/73.jpg',
            4: 'template/zaekev2/static/img/2016/oneplus3-2016/74.jpg'
        }
    },
    32: {
        time: '10:54',
        content: '刘作虎表示在去年5月发布氢OS以来，一加对其推送了超过40个版本更新，进行了超过4万个优化和修复。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/75.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/76.jpg'
        }
    },
    33: {
        time: '10:56',
        content: '在最新的氢OS之中，一加也加入了DOZE MODE省电功能。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/77.jpg'
        }
    },
    34: {
        time: '10:57',
        content: '氢OS在待机和使用时长提升40%左右，并且一加承诺不在自带应用之中插播广告。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/78.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/79.jpg'
        }
    },
    35: {
        time: '10:59',
        content: '一加手机将会继续保持开源开放的态度，欢迎用户在一加3上适配各种 rom。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/80.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/81.jpg',
            3: 'template/zaekev2/static/img/2016/oneplus3-2016/82.jpg'
        }
    },
    36: {
        time: '11:00',
        content: '一加手机将会继续实行刷机保修政策。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/83.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/84.jpg'
        }
    },
    37: {
        time: '11:02',
        content: '一加手机还推出了1小时快修以及24小时寄修服务。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/85.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/86.jpg'
        }
    },
    38: {
        time: '11:03',
        content: '一加的生活周边产品也获得了相当大的成功。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/87.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/88.jpg'
        }
    },
    39: {
        time: '11:04',
        content: '本次发布会最大亮点:一加单肩包正式亮相。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/89.jpg'
        }
    },
    40: {
        time: '11:05',
        content: '一张图看懂极速旗舰一加3。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/90.jpg'
        }
    },
    41: {
        time: '11:08',
        content: '一加3售价正式公布 2499元，唯一版本6GB RAM+64GB UFS 2.0。并只在线上销售。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/91.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/92.jpg'
        }
    },
    42: {
        time: '11:10',
        content: '一加3明天10点一加商城和京东首发，首发仅有冰川灰版本,薄荷金版本稍后跟进。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/93.jpg'
        }
    },
    43: {
        time: '11:14',
        content: '一加对于老用户们，一加将会提供免费的一加手机3半年碎屏保。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/94.jpg'
        }
    },
    44: {
        time: '11:16',
        content: '一加不将就，本次发布会到此全部结束。',
        img: {
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/95.jpg',
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/96.jpg'
        }
    }
}
var SLIDE = {
            0: 'template/zaekev2/static/img/2016/oneplus3-2016/SLIDE/1.jpg', 
            1: 'template/zaekev2/static/img/2016/oneplus3-2016/SLIDE/2.jpg', 
            2: 'template/zaekev2/static/img/2016/oneplus3-2016/SLIDE/3.jpg', 
            3: 'template/zaekev2/static/img/2016/oneplus3-2016/SLIDE/4.jpg', 
            4: 'template/zaekev2/static/img/2016/oneplus3-2016/SLIDE/5.jpg', 
            5: 'template/zaekev2/static/img/2016/oneplus3-2016/SLIDE/6.jpg', 
            6: 'template/zaekev2/static/img/2016/oneplus3-2016/SLIDE/7.jpg', 
            7: 'template/zaekev2/static/img/2016/oneplus3-2016/SLIDE/8.jpg'
}
var SIDEVIDEO = {}