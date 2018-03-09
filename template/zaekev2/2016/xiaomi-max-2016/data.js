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
         src: 'template/zaekev2/static/img/2016/xiaomi-max-2016/RELATED/p1.jpg',
         href: 'http://www.zaeke.com/thread-109310-1-1.html',
         title: '真的是超窄边框？小米Max首张官图发表'
    },
    1: {
      src: 'template/zaekev2/static/img/2016/xiaomi-max-2016/RELATED/p2.jpg',
      href: 'http://www.zaeke.com/thread-110248-1-1.html',
      title: '真不是旗舰  小米Max规格曝光' 
    },
    2: {
      src: 'template/zaekev2/static/img/2016/xiaomi-max-2016/RELATED/p3.jpg',
      href: 'http://www.zaeke.com/article-3514-1.html',
      title: '特色依旧？小米MIUI 8正式发布' 
    },
    3: {
      src: 'template/zaekev2/static/img/2016/xiaomi-max-2016/RELATED/p4.jpg',
      href: 'http://www.zaeke.com/article-3515-1.html',
      title: '大就是好？小米Max正式发布' 
    }
}
var CONTENT = {
  1: {
      time: "13:40",
      content: '小米MXA 新品发布会即将开始，小编在现场发现了@疯狂的杨林 以及@演员@乔杉 正在使用小米直播ing ',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/1.jpg',
        1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/2.jpg',
        2: 'template/zaekev2/static/img/2016/xiaomi-max-2016/3.jpg',
        3: 'template/zaekev2/static/img/2016/xiaomi-max-2016/4.jpg',
        4: 'template/zaekev2/static/img/2016/xiaomi-max-2016/5.jpg',
        5: 'template/zaekev2/static/img/2016/xiaomi-max-2016/6.jpg'
      }
  },
  2: {
      time: "14:03",
      content: '小米CEO 雷军 上台，并表示 MIUI 是小米第一款产品，拥有2亿的活跃用户量，运用多组数据表明小米用户的活跃以及应用打开率高 ',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/7.jpg',
        1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/8.jpg',
        2: 'template/zaekev2/static/img/2016/xiaomi-max-2016/9.jpg',
        3: 'template/zaekev2/static/img/2016/xiaomi-max-2016/10.jpg',
        4: 'template/zaekev2/static/img/2016/xiaomi-max-2016/11.jpg',
        5: 'template/zaekev2/static/img/2016/xiaomi-max-2016/13.jpg'
      }
  },
   3: {
      time: "14:08",
      content: '即将发布的第一款产品是 MIUI 8,，雷军表示这是里程碑式的产品。MIUI 负责人洪峰登场。 ',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/14.jpg',
        1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/15.jpg'
      }
    },
    4: {
      time: "14:10",
      content: 'MIUI 8 的设计灵感来源于自万花筒，色彩多变能根据每个界面改变交互动画。 ',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/16.jpg',
        1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/17.jpg',
        2: 'template/zaekev2/static/img/2016/xiaomi-max-2016/18.jpg',
        3: 'template/zaekev2/static/img/2016/xiaomi-max-2016/19.jpg',
      }
    },
    5: {
      time: "14:14",
      content: 'MIUI 8 带来了全新的字体 ———— 小米兰亭，其最大特色采用中宫对称的设计。并表示小米是继苹果、谷歌后第三家专门为移动端定制字体的厂商，称“重新定义移动阅读体验”。',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/20.jpg',
        1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/21.jpg',
        2: 'template/zaekev2/static/img/2016/xiaomi-max-2016/22.jpg',
        3: 'template/zaekev2/static/img/2016/xiaomi-max-2016/23.jpg',
      }
    },
    6: {
      time: "14:17",
      content: 'MIUI 8 加入了全新的锁屏壁纸功能，支持一键更换和锁屏画报。 ',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/26.jpg',
        1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/27.jpg'
      }
    },
    7: {
      time: "14:20",
      content: 'MIUI 8 对相册功能进行了大刀阔斧的更新，用户能轻松的管理、分享、编辑并提供了贴纸马赛克等实用能力，而视频剪辑加入了有滤镜、音效等功能可选。',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/29.jpg',
        1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/31.jpg',
        2: 'template/zaekev2/static/img/2016/xiaomi-max-2016/32.jpg',
        3: 'template/zaekev2/static/img/2016/xiaomi-max-2016/33.jpg',
        4: 'template/zaekev2/static/img/2016/xiaomi-max-2016/34.jpg',
        5: 'template/zaekev2/static/img/2016/xiaomi-max-2016/35.jpg'
      }
    },
    8: {
      time: "14:22",
      content: 'MIUI 8 终于加入实用的长截屏功能。',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/36.jpg'
      }
    },
    9: {
      time: "14:25",
      content: 'MIUI 8 的文本编辑也得到了更新，支持单词翻译、号码识别等实用功能。 ',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/37.jpg',
        1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/38.jpg'
      }
    },
    10: {
      time: "14:31",
      content: 'MIUI 8 的计算机加入诸多小功能，能轻松助你计算单位转换、汇率计算、个人所得税计算、房贷计算 。 ',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/39.jpg',
        1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/40.jpg'
      }
    },
    11: {
      time: "14:34",
      content: '一张图 MIUI 8 中的扫一扫功能包含的各种黑科技。',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/47.jpg'
      }
    },
    12: {
      time: "14:40",
      content: 'MIUI 8 加入悬浮球功能，支持用户的各种自定义操作 。 ',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/48.jpg',
        1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/49.jpg'
      }
    },
    13: {
      time: "14:44",
      content: 'MIUI 8 针对微信阅读进行了优化， 并支持众多应用分身。 ',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/50.jpg',
        1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/51.jpg'
      }
    },
    14: {
      time: "14:48",
      content: 'MIUI 8 最大的新功能是加入了多帐号切换，能根据不同的解锁打开不同的系统，能实现资料应用的分开管理。 ',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/52.jpg',
        1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/53.jpg'
      }
    },
    15: {
      time: "14:56",
      content: 'MIUI 8 针对省电方面进行了许多优化，能自动识别并禁止全家桶的链式启动应用。 ',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/54.jpg',
        1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/55.jpg',
        2: 'template/zaekev2/static/img/2016/xiaomi-max-2016/56.jpg',
      }
    },
    16: {
      time: "15:00",
      content: 'MIUI 8 针对现在常见的诈骗推出伪基站诈骗识别功能，能伪基站短信识别和诈骗网站 。 ',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/57.jpg',
        1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/58.jpg',
        2: 'template/zaekev2/static/img/2016/xiaomi-max-2016/59.jpg',
      }
    },
    17: {
      time: "14:04",
      content: 'MIUI 8 开发版内测时间公布，同时公布了支持的机型。 ',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/60.jpg',
        1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/61.jpg'
      }
    },
    18: {
      time: "15:08",
      content: '小米 Max 正式登场，采用6.44寸屏幕，雷军表示玩游戏要想升级快屏幕必须大。',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/62.jpg',
        1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/63.jpg',
        2: 'template/zaekev2/static/img/2016/xiaomi-max-2016/64.jpg',
        3: 'template/zaekev2/static/img/2016/xiaomi-max-2016/65.jpg',
        4: 'template/zaekev2/static/img/2016/xiaomi-max-2016/66.jpg'
      }
    },
    19: {
      time: "15:12",
      content: '小米 Max 的6.44寸屏幕是尺寸和手感的平衡点，并且其大而轻薄对于单手握持毫无压力。',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/68.jpg',
        1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/69.jpg',
        2: 'template/zaekev2/static/img/2016/xiaomi-max-2016/70.jpg',
        3: 'template/zaekev2/static/img/2016/xiaomi-max-2016/71.jpg'
      }
    },
    20: {
      time: "15:17",
      content: '小米对用户对大屏手机进行调查，用户在体验后均表示对 小米 Max 的6.44寸大屏的支持。',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/72.jpg',
        1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/73.jpg',
        2: 'template/zaekev2/static/img/2016/xiaomi-max-2016/74.jpg',
        3: 'template/zaekev2/static/img/2016/xiaomi-max-2016/75.jpg'
      }
    },
    21: {
      time: "14:20",
      content: 'MIUI 8 针对小米 Max 的大屏手机进行了优化例如悬浮球和单手模式。 ',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/76.jpg',
        1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/77.jpg'
      }
    },
    22: {
      time: "14:23",
      content: '现场展示了小米 Max 的三色渲染图。 ',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/78.jpg',
        1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/79.jpg',
        2: 'template/zaekev2/static/img/2016/xiaomi-max-2016/80.jpg',
        3: 'template/zaekev2/static/img/2016/xiaomi-max-2016/81.jpg',
      }
    },
    23: {
      time: "14:26",
      content: '小米Max 采用4850mAh大电池，搭配 MIUI 8 的省电优化能提供超长续航。 ',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/82.jpg',
        1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/83.jpg'
      }
    },
    24: {
      time: "14:29",
      content: '现场通过视频将 小米Max 和iPhone 6s Plus、华为 P8Max在视频播放、录像和导航方面进行对比，小米Max 完美胜出。 ',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/84.jpg',
        1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/85.jpg'
      }
    },
    25: {
      time: "15:33",
      content: '小米 Max 采用高通定位中高端的骁龙652/650 拥有4G+128G的储存空间，支持三选二卡槽的设计 ',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/86.jpg',
        1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/87.jpg',
        2: 'template/zaekev2/static/img/2016/xiaomi-max-2016/88.jpg',
        3: 'template/zaekev2/static/img/2016/xiaomi-max-2016/89.jpg'
      }
    },
    26: {
      time: "14:37",
      content: '一张图看懂 小米 Max 。 ',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/90.jpg'
      }
    },
    27: {
      time: "14:43",
      content: '小米 Max 售价公布提供了骁龙650以及骁龙652两种处理器版本，提供最多4GB RAM以及128GB ROM。骁龙650+3GB RAM+32GB ROM版本为1499元，骁龙652+3GB RAM+64GB ROM版本为1699元，骁龙652+4GB RAM+128GB ROM的最高配版本则为1999元。',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/91.jpg',
        1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/92.jpg',
        2: 'template/zaekev2/static/img/2016/xiaomi-max-2016/93.jpg',
      }
    },
    28: {
      time: "14:37",
      content: '小米 Max 的预约将于今晚开始，下周32GB内存版本将会现货开售，顶配的128GB版本需要等待一段时间。 ',
      img: {
        0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/94.jpg'
      }
    },
    29: {
      single: true, 
      time: '15:55',
      content: '发布会到此结束，感谢观看！'
    }
}
var SLIDE = {
    0: 'template/zaekev2/static/img/2016/xiaomi-max-2016/SLIDE/1.jpg',
    1: 'template/zaekev2/static/img/2016/xiaomi-max-2016/SLIDE/2.jpg',
    2: 'template/zaekev2/static/img/2016/xiaomi-max-2016/SLIDE/3.jpg',
    3: 'template/zaekev2/static/img/2016/xiaomi-max-2016/SLIDE/4.jpg',
    4: 'template/zaekev2/static/img/2016/xiaomi-max-2016/SLIDE/5.jpg',
    5: 'template/zaekev2/static/img/2016/xiaomi-max-2016/SLIDE/6.jpg',
    6: 'template/zaekev2/static/img/2016/xiaomi-max-2016/SLIDE/7.jpg',
    7: 'template/zaekev2/static/img/2016/xiaomi-max-2016/SLIDE/8.jpg',
    8: 'template/zaekev2/static/img/2016/xiaomi-max-2016/SLIDE/9.jpg',
    9: 'template/zaekev2/static/img/2016/xiaomi-max-2016/SLIDE/10.jpg',
    10: 'template/zaekev2/static/img/2016/xiaomi-max-2016/SLIDE/11.jpg',
    11: 'template/zaekev2/static/img/2016/xiaomi-max-2016/SLIDE/12.jpg',
    12: 'template/zaekev2/static/img/2016/xiaomi-max-2016/SLIDE/13.jpg',
    13: 'template/zaekev2/static/img/2016/xiaomi-max-2016/SLIDE/14.jpg',
    14: 'template/zaekev2/static/img/2016/xiaomi-max-2016/SLIDE/15.jpg',
    15: 'template/zaekev2/static/img/2016/xiaomi-max-2016/SLIDE/16.jpg'
};
var SIDEVIDEO = {
}