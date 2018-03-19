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
      src: 'template/zaekev2/static/img/2016/zte-new-2016/RELATED/R1.jpg',
      href: 'http://www.zaeke.com/thread-116530-1-1.html',
      title: '一体化极简设计 中兴副总裁自曝Axon新一代天机'
    },
    1:{
      src: 'template/zaekev2/static/img/2016/zte-new-2016/RELATED/R2.jpg',
      href: 'http://www.zaeke.com/article-3579-1.html',
      title: 'VR与Hi-Fi的浪漫？中兴Axon 7真机视频'
    },
    2:{
      src: 'template/zaekev2/static/img/2016/zte-new-2016/RELATED/R3.jpg',
      href: 'http://www.zaeke.com/article-3632-1.html',
      title: '好照片和好声音 中兴AXON天机7正式发布'
    },
}
var CONTENT = {
  1: {
        time: '12:00',
        content: '中兴将于今天19:00举行一场以“如7归来”为主题的新品发布会，本次发布会主角为AXON 7，据悉该机的外观将一改以往的设计，并且将采用了5.5英寸2K分辨率AMOLED屏幕，高通骁龙820处理器、4GB LPDDR4 RAM以及64GB的UFS 2.0内置存储芯片，后置2000万像素相机并支持光学防抖。其机身内置3140毫安时电池，后置指纹识别模块，支持双卡以及全网。而本次发布会的邀请函也比较特殊。一块金色的金属板，中央有一个“7”字样的金属片,也暗指新机将使用金属工艺和搭配金色的配色。具体的直播内容详情敬请关注本站图文直播。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/1.jpg',
            2: 'template/zaekev2/static/img/2016/zte-new-2016/2.jpg',
            3: 'template/zaekev2/static/img/2016/zte-new-2016/3.jpg',
            4: 'template/zaekev2/static/img/2016/zte-new-2016/4.jpg'
        }
    },
    2: {
        time: '19:00',
        content: '中兴“如7归来”主题发布会即将开始，发布会现场展示了众多中兴智能终端的产品。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/5.jpg',
            2: 'template/zaekev2/static/img/2016/zte-new-2016/6.jpg',
            3: 'template/zaekev2/static/img/2016/zte-new-2016/8.jpg',
            4: 'template/zaekev2/static/img/2016/zte-new-2016/7.jpg',
            5: 'template/zaekev2/static/img/2016/zte-new-2016/9.jpg',
            6: 'template/zaekev2/static/img/2016/zte-new-2016/10.jpg',
        }
    },
    3: {
        time: '19:12',
        content: '发布会正式开始，担任本次发布会主持人是中央电视台体育频道的于嘉。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/11.jpg',
        }
    },
    4: {
        time: '12:20',
        content: '中兴移动总裁CEO曾学忠上台，以“精品”为开始讲述中兴在智能手机路上的发展。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/12.jpg',
            2: 'template/zaekev2/static/img/2016/zte-new-2016/13.jpg'
        }
    },
    5: {
        time: '19:23',
        content: '正如这款 V880 当年的销量超千万使中兴成为当时全球第三的手机厂商。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/14.jpg',
        }
    },
    6: {
        time: '19:25',
        content: '曾学忠在现场反思中兴以往错过的东西，比如商业模式、产品设计、用户体验的方方面面。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/15.jpg',
            2: 'template/zaekev2/static/img/2016/zte-new-2016/16.jpg',
            3: 'template/zaekev2/static/img/2016/zte-new-2016/17.jpg',
        }
    },
    7: {
        time: '19:28',
        content: '曾学忠表示要向苹果和三星致敬，在产品设计等各方面更上他们。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/18.jpg',
            2: 'template/zaekev2/static/img/2016/zte-new-2016/19.jpg',
            3: 'template/zaekev2/static/img/2016/zte-new-2016/20.jpg',
            4: 'template/zaekev2/static/img/2016/zte-new-2016/21.jpg'
        }
    },
    8: {
        time: '19:28',
        content: '曾学忠表明中兴的移动部门有着很大的变化，例如收缩产品线，做出精品等',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/22.jpg'
        }
    },
    9: {
        time: '19:31',
        content: '曾学忠表示仅从用户体验角度来说，中兴的精品以及可以调整苹果、三星。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/23.jpg',
            2: 'template/zaekev2/static/img/2016/zte-new-2016/24.jpg'
        }
    },
    10: {
        time: '19:32',
        content: '曾学忠表明中兴天机第一代无论产品还是用户体验都非常好，但受制于市场环境和专利官司等问题都让中兴腹背受敌。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/25.jpg'
        }
    },
    11: {
        time: '19:34',
        content: '曾学忠直接放出中兴AXON天机7 的配置列表以及跑分数据。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/26.jpg',
            2: 'template/zaekev2/static/img/2016/zte-new-2016/27.jpg',
            3: 'template/zaekev2/static/img/2016/zte-new-2016/28.jpg'
        }
    },
    12: {
        time: '19:37',
        content: '中兴AXON天机7采用全金属一体机身，完全无螺丝。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/29.jpg',
            2: 'template/zaekev2/static/img/2016/zte-new-2016/30.jpg'
        }
    },
    13: {
        time: '19:39',
        content: '中兴AXON天机7是由宝马创意咨询团队协助设计的，并在顶配版正面采用胡桃木设计。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/31.jpg',
            2: 'template/zaekev2/static/img/2016/zte-new-2016/32.jpg'
        }
    },
    14: {
        time: '19:42',
        content: '中兴AXON天机7采用后置2000W像素摄像头，F1.8光圈支持PDF相位对焦。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/33.jpg',
            2: 'template/zaekev2/static/img/2016/zte-new-2016/34.jpg',
            3: 'template/zaekev2/static/img/2016/zte-new-2016/35.jpg',
        }
    },
    15: {
        time: '19:46',
        content: '中兴AXON天机7针对每个用户场景都进行了优化，让用户随手拍出好照片。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/36.jpg'
        }
    },
    16: {
        time: '19:48',
        content: '中兴AXON天机7做出了品控承诺，以苹果的品控要求富士康生产。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/37.jpg'
        }
    },
    17: {
        time: '19:51',
        content: '中兴AXON天机7还拥有快充3.0技术、ZTE PAY、动态锁屏、全网通、以及极限省电。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/38.jpg'
        }
    },
     18: {
        time: '19:52',
        content: '曾学忠在现场感谢了合作伙伴的支持。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/39.jpg'
        }
    },
    19: {
        time: '19:55',
        content: '中兴AXON天机7还带来了全新的天籁1.0在各方面都非常均衡的声音系统。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/40.jpg',
            2: 'template/zaekev2/static/img/2016/zte-new-2016/41.jpg'
        }
    },
    20: {
        time: '19:57',
        content: '中兴AXON天机7采用1.6CC的双扬声器，是5.5英寸手机中最大的拥有杜比全景声技术。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/42.jpg',
            2: 'template/zaekev2/static/img/2016/zte-new-2016/43.jpg',
            3: 'template/zaekev2/static/img/2016/zte-new-2016/44.jpg'
        }
    },
    21: {
        time: '20:07',
        content: '中兴AXON天机7还邀请了上海音乐学院以及西安音乐学院的教授进行调音，并适配各大品牌的经典产品。更是支持9国10语言的翻译能实现同声传译技术。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/45.jpg',
            2: 'template/zaekev2/static/img/2016/zte-new-2016/46.jpg',
            3: 'template/zaekev2/static/img/2016/zte-new-2016/47.jpg',
            4: 'template/zaekev2/static/img/2016/zte-new-2016/48.jpg'
        }
    },
    22: {
        time: '20:10',
        content: '中兴一贯强大的语音搜索功能也得到了增强。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/49.jpg',
            2: 'template/zaekev2/static/img/2016/zte-new-2016/50.jpg'
        }
    },
    23: {
        time: '20:13',
        content: '国际著名钢琴演奏家朗朗登台演奏。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/51.jpg',
            2: 'template/zaekev2/static/img/2016/zte-new-2016/52.jpg'
        }
    },
     24: {
        time: '20:16',
        content: '朗朗将担任中兴AXON天机7的代言人以及首位用户。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/53.jpg'
        }
    },
    25: {
        time: '20:24',
        content: '中兴还带来了中兴VR，是符合Google Daydream标准的VR设备，并配合中兴AXON天机7使用。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/54.jpg',
            2: 'template/zaekev2/static/img/2016/zte-new-2016/55.jpg'
        }
    },
    26: {
        time: '20:30',
        content: '中兴正式公布AXON天机7的售价高配版6GB+128GB，带压力屏2.0版本为4099元，并且现货发售；高配版价格4GB+128GB版本为3299元；标准版4GB+64GB，运营商定制版为2899元，全网通标准版为3099元；而中兴VR售价则为518元。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/56.jpg',
            2: 'template/zaekev2/static/img/2016/zte-new-2016/57.jpg',
            3: 'template/zaekev2/static/img/2016/zte-new-2016/58.jpg',
            4: 'template/zaekev2/static/img/2016/zte-new-2016/59.jpg'
        }
    },
    27: {
        time: '20:33',
        content: '中兴AXON天机7还将提供VIP Passport，能在海外提供服务支持。',
        img: {
            1: 'template/zaekev2/static/img/2016/zte-new-2016/60.jpg'
        }
    },
    28: {
        video: '<iframe height=498 width=510 src="http://player.youku.com/embed/XMTU4NTEyNzAzMg==" frameborder=0 allowfullscreen></iframe>',
        time: '17:00',
        content: '【传翊知客】新机遇现场快报：中兴AXON天机7',
        top: true
    },
    29: {
        single: true,
        time: '20:45',
        content: '直播到此结束，感谢观看。'
    }
}
var SLIDE = {
    0: 'template/zaekev2/static/img/2016/zte-new-2016/SLIDE/1.jpg',
    1: 'template/zaekev2/static/img/2016/zte-new-2016/SLIDE/2.jpg',
    2: 'template/zaekev2/static/img/2016/zte-new-2016/SLIDE/3.jpg',
    3: 'template/zaekev2/static/img/2016/zte-new-2016/SLIDE/4.jpg',
    4: 'template/zaekev2/static/img/2016/zte-new-2016/SLIDE/5.jpg',
    5: 'template/zaekev2/static/img/2016/zte-new-2016/SLIDE/6.jpg',
    6: 'template/zaekev2/static/img/2016/zte-new-2016/SLIDE/7.jpg',
    7: 'template/zaekev2/static/img/2016/zte-new-2016/SLIDE/8.jpg'
} 
var SIDEVIDEO = {}