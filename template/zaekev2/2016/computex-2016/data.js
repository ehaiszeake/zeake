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
        src: 'template/zaekev2/static/img/2016/computex-2016/RELATED/R1.jpg',
        href: 'http://www.zaeke.com/article-3673-1.html',
        title: '微软笑了，苹果哭了 华硕Transformer 3 Pro/ZenBook 3上手简评'
    },
    1: {
        src: 'template/zaekev2/static/img/2016/computex-2016/RELATED/R2.jpg',
        href: 'http://www.zaeke.com/article-3674-1.html',
        title: '一门三杰，红花配绿草 华硕ZenFone 3系列上手简评'    
    },
    2: {
        src: 'template/zaekev2/static/img/2016/computex-2016/RELATED/R3.jpg',
        href: 'http://www.zaeke.com/article-3680-1.html',
        title: 'VR Ready！亿道旗下亿境发布VR一体机与游戏背包'
    },
    3: {
        src: 'template/zaekev2/static/img/2016/computex-2016/RELATED/R4.jpg',
        href: 'http://www.zaeke.com/article-3678-1.html',
        title: '将VR进行到底 酷冷场景式VR/索泰VR游戏背包实际体验'    
    }
}
var CONTENT = {
    1: {
        time: 'Day1 10:35',
        content: 'COMPUTEX 2016 台北国际电脑展览会，展会现场的台妹模特活力四射、劲歌热舞。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/1.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/5.jpg',
            3: 'template/zaekev2/static/img/2016/computex-2016/3.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/4.jpg',
            5: 'template/zaekev2/static/img/2016/computex-2016/2.jpg'
        }
    },
    2: {
        time: 'Day1 10:50',
        content: '此次台北国际电脑展览会，主要以电竞外设、PC为主。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/6.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/7.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/9.jpg',
            5: 'template/zaekev2/static/img/2016/computex-2016/10.jpg',
            6: 'template/zaekev2/static/img/2016/computex-2016/11.jpg',
            7: 'template/zaekev2/static/img/2016/computex-2016/12.jpg'
        }
    },
    3: {
        time: 'Day1 11:25',
        content: '酷冷至尊现场演示的VR设备结合了降落伞的概念，能营造更加身临其境的效果。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/15.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/17.jpg',
            3: 'template/zaekev2/static/img/2016/computex-2016/16.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/13.jpg'
        }
    },
    4: {
        time: 'Day1 11:35',
        content: '酷冷至尊现场还展示了用乐高打造的极限，并且其风冷系统还支持换盖，使用3D打印的能提供更好的散热效果。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/19.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/20.jpg',
            3: 'template/zaekev2/static/img/2016/computex-2016/21.jpg'
        }
    },
    5: {
        time: 'Day1 11:46',
        content: '现场展示了许多MOD的PC机箱，其中不乏魔兽、美国队长等经典元素。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/6.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/7.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/9.jpg',
            5: 'template/zaekev2/static/img/2016/computex-2016/10.jpg',
            6: 'template/zaekev2/static/img/2016/computex-2016/11.jpg',
            7: 'template/zaekev2/static/img/2016/computex-2016/12.jpg'
        }
    },
    6: {
        time: 'Day1 12:11',
        content: '华硕的展台上展示了其最新发布的Transformer3 Pro，整体继承自微软Surface Book。全金属的设计拥有高达180°的可调节支架，能外接磁吸键盘。整体的使用感觉也和Surface非常相似。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/28.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/29.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/30.jpg',
            5: 'template/zaekev2/static/img/2016/computex-2016/31.jpg',
            6: 'template/zaekev2/static/img/2016/computex-2016/32.jpg',
            7: 'template/zaekev2/static/img/2016/computex-2016/33.jpg' ,           
            8: 'template/zaekev2/static/img/2016/computex-2016/34.jpg',
            9: 'template/zaekev2/static/img/2016/computex-2016/35.jpg'
        }
    },
    7: {
        time: 'Day1 12:30',
        content: '华硕的智能手机部分也带来了全新的ZenFone 3，虽然其ZenFone 3系列中最普通的一款，但金属中框＋前后2.5D玻璃相较此前的华硕手机还是有很大的进步。不过其背部设计中突出的摄像头和实体指纹按键，即便使用了华硕标志性的同心圆纹路设计也略显单调',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/36.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/37.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/38.jpg',
            5: 'template/zaekev2/static/img/2016/computex-2016/39.jpg',
            6: 'template/zaekev2/static/img/2016/computex-2016/40.jpg',
            7: 'template/zaekev2/static/img/2016/computex-2016/41.jpg',           
            8: 'template/zaekev2/static/img/2016/computex-2016/42.jpg',
            9: 'template/zaekev2/static/img/2016/computex-2016/43.jpg'
        }
    },
    8: {
        time: 'Day1 12:34',
        content: '比较让人惊讶的是，ZenFone 3 Ultra其采用的金属一体化机身设计，在6.8英寸的机身上其整体金属的质感相当好，也并未出现明显的天线带。侧边的两条高光亮边以及整体的金属喷砂也处理的相当得当，特别是玫瑰金的配色，实际观感相当的优秀。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/44.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/45.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/46.jpg',
            5: 'template/zaekev2/static/img/2016/computex-2016/47.jpg',
            6: 'template/zaekev2/static/img/2016/computex-2016/48.jpg',
            7: 'template/zaekev2/static/img/2016/computex-2016/49.jpg'
        }
    },
    9: {
        time: 'Day1 12:36',
        content: '展台现场同样少不了华硕的周边设备产品比如路由器、PCI-E等标志性的网络产品。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/51.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/52.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/50.jpg'
        }
    },
    10: {
        time: 'Day1 12:38',
        content: '如果是华硕Transformer 3是模仿Surface Book的产品，那么这款ZenBook很明显是针对苹果的New MasBook。如出一辙的轻薄设计就连扬声器和键盘都有非常强烈的既视感，而在触控板上加入指纹识别功能这倒是令人惊喜的地方。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/53.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/54.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/55.jpg',
            5: 'template/zaekev2/static/img/2016/computex-2016/56.jpg',
            6: 'template/zaekev2/static/img/2016/computex-2016/57.jpg',
            7: 'template/zaekev2/static/img/2016/computex-2016/58.jpg'
        }
    },
    11: {
        time: 'Day1 12:44',
        content: 'ZenFone 3 Deluxe则是本系列之中的旗舰，同样采用金属一体化设计背面形成曲面非常贴合手掌。仔细查看后仅在机身顶部发现一款小小的天线露出，这样的设计可以说是目前采用金属机身设计的手机中最为精美的一款。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/59.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/60.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/61.jpg',
            5: 'template/zaekev2/static/img/2016/computex-2016/63.jpg',
            6: 'template/zaekev2/static/img/2016/computex-2016/64.jpg',
            7: 'template/zaekev2/static/img/2016/computex-2016/65.jpg'
        }
    },
    12: {
        time: 'Day1 12:50',
        content: 'ZenFone 3系列的三款产品在设计上既有传承又各具体色，详细的外观对比可以留意我们后续的评测。从ZenFone 3的发布可以看出华硕在智能手机领域的野心。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/66.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/67.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/68.jpg',
            5: 'template/zaekev2/static/img/2016/computex-2016/69.jpg',
            6: 'template/zaekev2/static/img/2016/computex-2016/70.jpg',
            7: 'template/zaekev2/static/img/2016/computex-2016/71.jpg',
            8: 'template/zaekev2/static/img/2016/computex-2016/72.jpg'
        }
    },
    13: {
        time: 'Day1 13:20',
        content: 'Ducky Pocket 展台上展示了一款集合了小数字机械键盘和计数机功能的产品，拥有全健背光功能。厂商表示对该产品并不看重，只是考虑到并没其他同类产品出现，想挑战自己。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/73.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/74.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/75.jpg',
            5: 'template/zaekev2/static/img/2016/computex-2016/76.jpg',
            6: 'template/zaekev2/static/img/2016/computex-2016/77.jpg',
            7: 'template/zaekev2/static/img/2016/computex-2016/78.jpg'
        }
    },
     14: {
        time: 'Day1 14:05',
        content: '在英特尔的展台上展示的依然是其在计算处理能力的优势，小至手表如可穿戴设备人工智能，大到家庭互联和强大VR虚拟现实都可以实现。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/79.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/80.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/81.jpg',
            5: 'template/zaekev2/static/img/2016/computex-2016/82.jpg',
            6: 'template/zaekev2/static/img/2016/computex-2016/83.jpg',
            7: 'template/zaekev2/static/img/2016/computex-2016/84.jpg',
            8: 'template/zaekev2/static/img/2016/computex-2016/85.jpg',
            9: 'template/zaekev2/static/img/2016/computex-2016/86.jpg',
        }
    },
    15: {
        time: 'Day1 14:22',
        content: '英特尔明确的表示支持无人机，而其此前的READY TO FLY就有针对无人机的优化。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/87.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/88.jpg'
        }
    },
    16: {
        time: 'Day1 14:25',
        content: '英特尔表示在过去一年中二合一笔记本的出货量大幅上升获得消费者的认可，其中提到了华为MateBook。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/89.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/90.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/91.jpg',
            5: 'template/zaekev2/static/img/2016/computex-2016/92.jpg'
        }
    },
    17: {
        time: 'Day1 14:28',
        content: '现场演示了采用英特尔处理器的微星背包电脑，小巧的体积能够支撑VR的体验，就也是英特尔最近主推的产品形态。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/93.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/94.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/95.jpg',
            5: 'template/zaekev2/static/img/2016/computex-2016/96.jpg'
        }
    },
    18: {
        time: 'Day1 14:42',
        content: '英特尔还展示的最新的第七代酷睿以及多款处理器，都变现出强大的处理能力。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/97.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/98.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/99.jpg',
            5: 'template/zaekev2/static/img/2016/computex-2016/100.jpg',
            6: 'template/zaekev2/static/img/2016/computex-2016/101.jpg',
            7: 'template/zaekev2/static/img/2016/computex-2016/102.jpg',
            8: 'template/zaekev2/static/img/2016/computex-2016/103.jpg'
        }
    },
    19: {
        time: 'Day1 16:40',
        content: '在本次展会上还出现了工业级无人机、迷你潜水艇和简易机器人等人工智能产品。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/104.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/105.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/106.jpg'
        }
    },
    20: {
        time: 'Day1 16:54',
        content: '通过手机进行拍摄和分享的VR设备Eye-Plug，能录制当天所发生的事情并通过VR眼睛回顾。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/107.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/108.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/109.jpg',
            5: 'template/zaekev2/static/img/2016/computex-2016/110.jpg'
        }
    },
    21: {
        time: 'Day2 10:55',
        content: '2016台北国际电脑展第二天，先来波台妹Show Girl。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/A0.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/A1.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/A2.jpg',
            5: 'template/zaekev2/static/img/2016/computex-2016/A3.jpg',
            6: 'template/zaekev2/static/img/2016/computex-2016/A4.jpg',
            7: 'template/zaekev2/static/img/2016/computex-2016/A5.jpg',
            8: 'template/zaekev2/static/img/2016/computex-2016/A6.jpg',
            9: 'template/zaekev2/static/img/2016/computex-2016/A7.jpg'
        }
    },
    22: {
        time: 'Day2 11:16',
        content: 'TAIWAN EXCELLENCE的展台上展出的是本次Computex 2016所有厂商中最具标志性以及最为新颖的产品。可以看到大部分展品都集中在高性能PC产品上以及针对性的电竞外设上，还有台系厂商一贯强势储存方面的U盘以及储存卡和几年来大热的3D打印技术。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/A8.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/A9.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/A11.jpg',
            5: 'template/zaekev2/static/img/2016/computex-2016/A12.jpg',
            6: 'template/zaekev2/static/img/2016/computex-2016/A13.jpg',
            7: 'template/zaekev2/static/img/2016/computex-2016/A14.jpg'
        }
    },
    23: {
        time: 'Day2 11:21',
        content: 'S.GKLL展示了各种梳子散热内存条，炫酷的造型和丰富的配色战斗感十足。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/A19.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/A15.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/A16.jpg',
            5: 'template/zaekev2/static/img/2016/computex-2016/A17.jpg',
            6: 'template/zaekev2/static/img/2016/computex-2016/A18.jpg'
        }
    },
    24: {
        time: 'Day2 11:27',
        content: '路过AVEXIR宇帷展台，台妹Show Girl来一发。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/A20.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/A22.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/A21.jpg',
            5: 'template/zaekev2/static/img/2016/computex-2016/A23.jpg'
        }
    },
    25: {
        time: 'Day2 11:35',
        content: 'Computex展会上依旧是以台系厂商为主，而其中表现的最为强烈的要数PC相关产品。如各类厂商都展出了MOD机箱，如这款以高达为主题的机箱相当的精致赚足了眼球。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/A25.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/A26.jpg'
        }
    },
    26: {
        time: 'Day2 12:02',
        content: 'Computex展会上的VR设备可谓相当的多，凡是和PC相关的厂商都会展出其VR产品。但其中索泰展出VR背包的概念，也是现场唯一一家能实际体验的VR产品。其表示在未来随之英伟达处理器的性能提高和功耗下降以及HTC下一代vive更加轻量化和无线化的设计，VR背包的体验会更好。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/A27.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/A28.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/A29.jpg',
            5: 'template/zaekev2/static/img/2016/computex-2016/A30.jpg'
        }
    },
    27: {
        time: 'Day2 14:11',
        content: '酷冷至尊展示了耗资500W新台币打造的Master Concept 2.0概念机箱，其完全使用模块化的设计。能够实现相当剧烈的形态变化，并能够对外壳和内部结构进行重新拆卸和组装，能给消费者提供更加灵活多变的选择。可惜Master Concept 2.0概念机箱目前还未有上市销售的打算。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/A31.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/A32.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/A34.jpg',
            5: 'template/zaekev2/static/img/2016/computex-2016/A35.jpg',
            6: 'template/zaekev2/static/img/2016/computex-2016/A36.jpg',
            7: 'template/zaekev2/static/img/2016/computex-2016/A37.jpg'
        }
    },
    28: {
        time: 'Day3 10:15',
        content: 'Computex台北国际电脑展，第三天是时候来体验下机子了。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/B2.jpg'
        }
    },
    29: {
        time: 'Day3 10:23',
        content: '华硕现场展示了模块化概念电脑，整体采用全金属并采用精湛的工艺制作，充满着浓浓的土豪气息。两侧可进行拆卸并且SSD以及相关显卡的替换变得十分方便。',
        img: {
            1: 'template/zaekev2/static/img/2016/computex-2016/B3.jpg',
            2: 'template/zaekev2/static/img/2016/computex-2016/B4.jpg',
            4: 'template/zaekev2/static/img/2016/computex-2016/B5.jpg',
            5: 'template/zaekev2/static/img/2016/computex-2016/B6.jpg',
            6: 'template/zaekev2/static/img/2016/computex-2016/B7.jpg',
            7: 'template/zaekev2/static/img/2016/computex-2016/B8.jpg',
            8: 'template/zaekev2/static/img/2016/computex-2016/B9.jpg',
            9: 'template/zaekev2/static/img/2016/computex-2016/B10.jpg'
        }
    },
}
var SLIDE = {
    0: 'template/zaekev2/static/img/2016/computex-2016/SLIDE/B2.jpg',
    1: 'template/zaekev2/static/img/2016/computex-2016/SLIDE/A1.jpg',
    2: 'template/zaekev2/static/img/2016/computex-2016/SLIDE/A2.jpg',
    3: 'template/zaekev2/static/img/2016/computex-2016/SLIDE/A3.jpg',
    4: 'template/zaekev2/static/img/2016/computex-2016/SLIDE/A4.jpg',
    5: 'template/zaekev2/static/img/2016/computex-2016/SLIDE/A5.jpg',
    6: 'template/zaekev2/static/img/2016/computex-2016/SLIDE/A6.jpg',
    7: 'template/zaekev2/static/img/2016/computex-2016/SLIDE/A6.jpg',
    8: 'template/zaekev2/static/img/2016/computex-2016/SLIDE/A7.jpg',
    9: 'template/zaekev2/static/img/2016/computex-2016/SLIDE/A20.jpg',
    10: 'template/zaekev2/static/img/2016/computex-2016/SLIDE/A22.jpg'
}
var SIDEVIDEO = {}