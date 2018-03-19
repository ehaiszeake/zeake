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
         src: 'template/zaekev2/static/img/2016/honor-v8-2016/RELATED/p2.jpg',
         href: 'http://www.zaeke.com/thread-109089-1-1.html',
         title: '没有徕卡加持的双摄像头 华为荣耀V8全曝光'
    },
    1: {
      src: 'template/zaekev2/static/img/2016/honor-v8-2016/RELATED/p1.jpg',
      href: 'http://www.zaeke.com/thread-110255-1-1.html',
      title: '谁说海思不能带2K？荣耀V8入网' 
    },
    2: {
      src: 'template/zaekev2/static/img/2016/honor-v8-2016/RELATED/p3.jpg',
      href: 'http://www.zaeke.com/article-3517-1.html',
      title: ' 进军VR界 华为发布荣耀VR眼镜盒' 
    },
    3: {
      src: 'template/zaekev2/static/img/2016/honor-v8-2016/RELATED/p4.jpg',
      href: 'http://www.zaeke.com/article-3516-1.html',
      title: ' 华为真旗舰？华为荣耀V8发布' 
    },
    4: {
      src: 'template/zaekev2/static/img/2016/honor-v8-2016/RELATED/p5.jpg',
      href: 'http://www.zaeke.com/article-3518-1.html',
      title: ' 不只有手机 华为荣耀引擎耳机2、荣耀畅玩手环A1登场' 
    }
}
var CONTENT = {
  1: {
        time: '19:00',
        content: '新品发布会即将开始，荣耀V8发布会选址在凤凰国际传媒中心，现场布置可谓是科技感十足，觉得酷么？ ',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/0.jpg',
            2: 'template/zaekev2/static/img/2016/honor-v8-2016/1.jpg',
            3: 'template/zaekev2/static/img/2016/honor-v8-2016/2.jpg',
            4: 'template/zaekev2/static/img/2016/honor-v8-2016/3.jpg',
            5: 'template/zaekev2/static/img/2016/honor-v8-2016/4.jpg',
            6: 'template/zaekev2/static/img/2016/honor-v8-2016/5.jpg'
        }
  },
  2: {
        time: '19:27',
        content: '荣耀星球掌门人赵明上台演讲，荣耀消费者对荣耀的要求越来越高 ，并且下一代手机将引领互联网的发展。 ',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/7.jpg',
            2: 'template/zaekev2/static/img/2016/honor-v8-2016/8.jpg',
            3: 'template/zaekev2/static/img/2016/honor-v8-2016/9.jpg',
            4: 'template/zaekev2/static/img/2016/honor-v8-2016/10.jpg'
        }
    },
    3: {
        time: '19:29',
        content: '荣耀即将推出全新的旗舰 V系列，V代表着现实世界和虚拟世界。 ',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/11.jpg',
            2: 'template/zaekev2/static/img/2016/honor-v8-2016/12.jpg'
        }
    },
    4: {
        time: '19:32',
        content: '荣耀V8采用全金属机身拥有众多亮点：两条3D亮边。类肤质的柔性喷砂，弧面的CMC 。 ',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/13.jpg',
            2: 'template/zaekev2/static/img/2016/honor-v8-2016/14.jpg',
            3: 'template/zaekev2/static/img/2016/honor-v8-2016/15.jpg',
            4: 'template/zaekev2/static/img/2016/honor-v8-2016/16.jpg',
            5: 'template/zaekev2/static/img/2016/honor-v8-2016/17.jpg',
            6: 'template/zaekev2/static/img/2016/honor-v8-2016/18.jpg',
        }
    },
    5: {
        time: '19:34',
        content: '荣耀V8拥有6钟配色可选，并在配色上经过细致的调整，使其更符合东方人的审美  。 ',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/19.jpg',
        }
    },
    6: {
        time: '19:39',
        content: '荣耀V8拥有5.7英寸 2K分辨率的屏幕，并配备双扬声器设计。可惜只会出现在全网通版4G+64G的版本上。 ',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/20.jpg',
            2: 'template/zaekev2/static/img/2016/honor-v8-2016/21.jpg',
            3: 'template/zaekev2/static/img/2016/honor-v8-2016/22.jpg',
            4: 'template/zaekev2/static/img/2016/honor-v8-2016/23.jpg'
        }
    },
    7: {
        time: '19:41',
        content: '荣耀 V8 的专属外设 —— 荣耀 VR 正式登场。这是一款全民VR，并联合优酷提供丰富的内容资源 。 ',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/24.jpg',
            2: 'template/zaekev2/static/img/2016/honor-v8-2016/25.jpg',
            3: 'template/zaekev2/static/img/2016/honor-v8-2016/26.jpg',
            4: 'template/zaekev2/static/img/2016/honor-v8-2016/27.jpg'
        }
    },
    8: {
        time: '19:45',
        content: '荣耀 V8 联合国家眼科诊断与治疗工程技术研究中心，重塑了护眼模式 。 ',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/28.jpg',
            2: 'template/zaekev2/static/img/2016/honor-v8-2016/29.jpg'
        }
    },
    9: {
        time: '19:47',
        content: '一张图看懂 荣耀 V8 的视觉亮点。 2K分辨率的屏幕，515PPI，新增护眼模式。支持影院模式。立体声外放，荣耀VR眼镜及视频资源。',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/30.jpg',
        }
    },
    10: {
        time: '19:51',
        content: '荣耀 V8 采用 海思麒麟950处理器，标配4GB的内存。全网通双卡双待，采用与或卡托。拥有高铁信号稳定、天际通等特色功能。',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/31.jpg',
            2: 'template/zaekev2/static/img/2016/honor-v8-2016/32.jpg',
            3: 'template/zaekev2/static/img/2016/honor-v8-2016/33.jpg',
            4: 'template/zaekev2/static/img/2016/honor-v8-2016/34.jpg'
        }
    },
    11: {
        time: '19:54',
        content: '荣耀V8 安全功能在升级，能智能识别伪基站、短信认证等。',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/35.jpg',
            2: 'template/zaekev2/static/img/2016/honor-v8-2016/36.jpg',
        }
    },
    12: {
        time: '19:55',
        content: '荣耀 V8 支持 华为Pay，无需解锁无需联网轻松支付。',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/37.jpg',
            2: 'template/zaekev2/static/img/2016/honor-v8-2016/38.jpg',
            3: 'template/zaekev2/static/img/2016/honor-v8-2016/39.jpg',
            4: 'template/zaekev2/static/img/2016/honor-v8-2016/40.jpg',
        }
    },
    13: {
        time: '19:55',
        content: '荣耀 V8 依旧拥有方便快捷的智灵键，并且进入2.0时代，采用最新的指纹能实现3D信息采集，有效防止2D假指纹进行支付操作。',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/41.jpg',
            2: 'template/zaekev2/static/img/2016/honor-v8-2016/42.jpg',
        }
    },
    14: {
        time: '19:59',
        content: '荣耀 V8 的设计、质量、信号等多个方面都有质量的保证。',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/43.jpg',
            2: 'template/zaekev2/static/img/2016/honor-v8-2016/44.jpg',
        }
    },
    15: {
        time: '20:00',
        content: '一张图看懂 荣耀 V8 对于每个细节的极致质量的追求。',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/45.jpg',
        }
    },
    16: {
        time: '20:03',
        content: '荣耀 V8 内置3500mAh电池，并支持9V/2A的快充技术方案。',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/46.jpg',
        }
    },
    17: {
        time: '20:07',
        content: '荣耀 V8 对用户常用的应用进行了针对性的优化，i5协处理器配合高效的通信管家待机时间进一步提高。',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/47.jpg',
            2: 'template/zaekev2/static/img/2016/honor-v8-2016/48.jpg',
        }
    },
    18: {
        time: '20:11',
        content: '2K 屏的荣耀 V8 在搭载的麒麟处理器能智能调节 GPU 智核功能，进一步降低功耗加强续航。',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/49.jpg',
            2: 'template/zaekev2/static/img/2016/honor-v8-2016/50.jpg',
        }
    },
    19: {
        time: '20:12',
        content: '荣耀 V8 拥有超级省电模式。满电开启，重度用户使用时间增加8小时，即便剩余15%电量，开启超级省电可以持续使用5小时。',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/51.jpg',
        }
    },
    20: {
        time: '20:17',
        content: '荣耀 V8 重新回归双摄像头，采用两颗 1200 万像素的后置摄像头，一颗负责彩色拍摄，一个负责黑白拍摄。',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/52.jpg',
            2: 'template/zaekev2/static/img/2016/honor-v8-2016/53.jpg',
            3: 'template/zaekev2/static/img/2016/honor-v8-2016/54.jpg',
            4: 'template/zaekev2/static/img/2016/honor-v8-2016/55.jpg',
        }
    },
    21: {
        time: '20:20',
        content: '荣耀 V8 拍摄风景时双摄像头共同工作，带来更好的动态范围。拍摄夜间时能更好的控制曝光和噪点。大家觉得这相机如何？',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/56.jpg',
            2: 'template/zaekev2/static/img/2016/honor-v8-2016/57.jpg',
        }
    },
    22: {
        time: '20:21',
        content: '荣耀 V8 拥有暗光丽影功能，能进一步提升自拍效果。',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/58.jpg',
        }
    },
    23: {
        time: '20:23',
        content: '荣耀 V8 还支持F0.95—F16光圈可调，实时景深预览、先拍照后对焦等众多特色功能。小编还是蛮喜欢这功能的，期待上手体验~',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/59.jpg',
        }
    },
    24: {
        time: '20:26',
        content: '荣耀将开放荣耀 V8 的技术，让更多的开发者针对荣耀 V8 进行特色的设计。',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/60.jpg',
            2: 'template/zaekev2/static/img/2016/honor-v8-2016/61.jpg',
        }
    },
    25: {
        time: '20:28',
        content: '荣耀 V8 拥有诸多特色功能和专属服务和礼包，包含应用市场礼包，专属游戏中心礼包。',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/62.jpg',
            2: 'template/zaekev2/static/img/2016/honor-v8-2016/63.jpg',
            3: 'template/zaekev2/static/img/2016/honor-v8-2016/64.jpg',
            4: 'template/zaekev2/static/img/2016/honor-v8-2016/65.jpg',
        }
    },
    26: {
        time: '20:31',
        content: '京东商城CEO 沈皓予上台并宣布荣耀 V8 将在京东首发，将于赵明一同揭晓荣耀 V8 的价格。',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/66.jpg',
            2: 'template/zaekev2/static/img/2016/honor-v8-2016/67.jpg',
            3: 'template/zaekev2/static/img/2016/honor-v8-2016/68.jpg',
        }
    },
    27: {
        time: '20:33',
        content: '荣耀 V8 价格方面，FHD屏幕 4GB RAM+32GB ROM 为2299元，FHD屏幕 4GB RAM+32GB ROM以及NFC的全网通标准版售价为2499元；配备2K分辨率屏幕、4GB RAM+64GB ROM以及NFC的全网通高配版售价为2799元。并且于本月17号在京东商城独家开卖。',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/69.jpg',
            2: 'template/zaekev2/static/img/2016/honor-v8-2016/70.jpg',
        }
    },
    28: {
        time: '20:37',
        content: '随荣耀 V8 一同发布的还有荣耀引擎耳机2代，售价为129元。',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/71.jpg',
        }
    },
    29: {
        time: '20:40',
        content: '荣耀还带来了荣耀畅玩手环A1，能智能识别运动状态和睡眠情况支持生活防水和多色表带。',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/72.jpg',
            2: 'template/zaekev2/static/img/2016/honor-v8-2016/73.jpg',
            3: 'template/zaekev2/static/img/2016/honor-v8-2016/74.jpg',
            4: 'template/zaekev2/static/img/2016/honor-v8-2016/75.jpg',
        }
    },
    30: {
        time: '20:41',
        content: '售价方面荣耀畅玩手环 A1 为99元，真皮版为199元。',
        img: {
            1: 'template/zaekev2/static/img/2016/honor-v8-2016/76.jpg',
            2: 'template/zaekev2/static/img/2016/honor-v8-2016/77.jpg',
        }
    },
    31: {
        time: '20:41',
        content: '本次荣耀V8新品发布会到此结束，感谢大家观看。',
        img: {
        }
    },
}
