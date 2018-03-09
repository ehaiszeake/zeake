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
    
var HOST = {};
var RELATED = {
    1: {
        src: 'template/zaekev2/static/img/2016/samsung-galaxy/r1.jpg',
        href: 'http://www.zaeke.com/thread-95220-1-1.html',
        title: '不止有手机 三星Galaxy S7、S7 edge国内发布'
    },
    2: {
        src: 'template/zaekev2/static/img/2016/samsung-galaxy/r2.jpg',
        href: 'http://www.zaeke.com/thread-96212-1-1.html',
        title: '三星：来看看我自己拆了Galaxy S7/S7 edge'
    },
    3: {
        src: 'template/zaekev2/static/img/2016/samsung-galaxy/r3.jpg',
        href: 'http://www.zaeke.com/thread-95954-1-1.html',
        title: '全能旗舰 三星Galaxy S7 edge上手图赏'
    },
    4: {
        src: 'template/zaekev2/static/img/2016/samsung-galaxy/r4.jpg',
        href: 'http://www.zaeke.com/thread-95159-1-1.html',
        title: '融入夜色的黑 三星Galaxy S7edge（星钻黑）图赏'
    },
    5: {
        src: 'template/zaekev2/static/img/2016/samsung-galaxy/r5.jpg',
        href: 'http://www.zaeke.com/thread-96907-1-1.html',
        title: '叫我银角大王 三星Galaxy S7 edge银色版图赏'
    }
};
var CONTENT = {
    0: {
        single: true,
        content: '三星Galaxy S7/S7 edge发布会即将开始',
        time: '16:16'
    },
    1: {
        time: '16:16',
        content: '发布会现场外围有“S7”字样，而在本次发布会上三星也将正式面向中国市场推出旗舰智能手机Galaxy S7以及Galaxy S7 edge。',
        img: {
            0: 'template/zaekev2/static/img/2016/samsung-galaxy/1.jpg'
        }
    },
    2: {
        time: '17:03',
        content: '发布会正式开始，三星电子移动事业部总裁高东真先生登台致辞，中文问好感觉蛮亲切的。',
        img: {
            0: 'template/zaekev2/static/img/2016/samsung-galaxy/2.jpg'
        }
    },
    3: {
        time: '17:05',
        content: '高东升先生表示，中国是第一站，三星非常重视中国市场。在去年12月三星也于中国北京设立了研发中心',
        img: {
            0: 'template/zaekev2/static/img/2016/samsung-galaxy/4.jpg',
            1: 'template/zaekev2/static/img/2016/samsung-galaxy/5.jpg'
        }
    },
    4: {
        time: '17:16',
        content: 'Galaxy S7 edge|S7正式亮相，国行版正面无LOGO',
        img: {
            0: 'template/zaekev2/static/img/2016/samsung-galaxy/6.jpg'
        }
    },
    5: {
        time: '17:22',
        content: 'Galaxy S7 edge提供曲面侧屏快捷方式，功能性比S6 edge具有极大提升',
        img: {
            0: 'template/zaekev2/static/img/2016/samsung-galaxy/5.jpg',
            1: 'template/zaekev2/static/img/2016/samsung-galaxy/6.jpg',
            2: 'template/zaekev2/static/img/2016/samsung-galaxy/7.jpg'
        }
    },
    6: {
        time: '17:25',
        content: 'IP68防水级别，从内部进行防护。',
        img: {
            0: 'template/zaekev2/static/img/2016/samsung-galaxy/8.jpg',
            1: 'template/zaekev2/static/img/2016/samsung-galaxy/9.jpg',
            2: 'template/zaekev2/static/img/2016/samsung-galaxy/10.jpg',
            3: 'template/zaekev2/static/img/2016/samsung-galaxy/11.jpg',
            4: 'template/zaekev2/static/img/2016/samsung-galaxy/12.jpg'
        }
    },
    7: {
        time: '17:32',
        content: 'Galaxy S7 edge以及S7相机传感器支持全像素的双像素对焦，对焦速度非常快',
        img: {
            0: 'template/zaekev2/static/img/2016/samsung-galaxy/13.jpg',
            1: 'template/zaekev2/static/img/2016/samsung-galaxy/14.jpg'
        }
    },
    8: {
        time: '17:38',
        content: 'Galaxy S7 edge以及S7能够提供相比上一代产品30%的CPU性能提升以及63%的GPU性能提升，同时还有内置液体散热管以提供优良的散热表现',
        img: {
            0: 'template/zaekev2/static/img/2016/samsung-galaxy/15.jpg',
            1: 'template/zaekev2/static/img/2016/samsung-galaxy/16.jpg',
            2: 'template/zaekev2/static/img/2016/samsung-galaxy/17.jpg'
        }
    },
    9: {
        time: '17:40',
        content: 'Galaxy S7 edge以及S7的息屏提醒功能搭配三星独有的软件算法，方便用户查看信息的同时不会影响手机的续航能力',
        img: {
            0: 'template/zaekev2/static/img/2016/samsung-galaxy/17.jpg',
            1: 'template/zaekev2/static/img/2016/samsung-galaxy/18.jpg',
            2: 'template/zaekev2/static/img/2016/samsung-galaxy/19.jpg'
        }
    },
    10: {
        time: '17:42',
        content: 'Galaxy S7 edge以及S7提供专用的游戏启动器，加上对Vulkan图形API的支持，为用户提供最佳游戏体验',
        img: {
            0: 'template/zaekev2/static/img/2016/samsung-galaxy/20.jpg',
            1: 'template/zaekev2/static/img/2016/samsung-galaxy/21.jpg'
        }
    },
    11: {
        time: '17:45',
        content: 'Galaxy S7 edge以及S7分别内置3600毫安时以及3000毫安时电池，支持快速充电以及无线快速充电，并且三星还出品了快速充电移动电源、无线座充以及无线移动电源等配件',
        img: {
            0: 'template/zaekev2/static/img/2016/samsung-galaxy/22.jpg',
            1: 'template/zaekev2/static/img/2016/samsung-galaxy/23.jpg'
        }
    },
    12: {
        time: '17:47',
        content: 'Galaxy S7 edge以及S7当然也支持三星智付移动支付功能',
        img: {
            0: 'template/zaekev2/static/img/2016/samsung-galaxy/24.jpg'
        }
    },
    13: {
        time: '17:50',
        content: '三星智付号称拥有良好的安全性以及便捷性',
        img: {
            0: 'template/zaekev2/static/img/2016/samsung-galaxy/25.jpg',
            1: 'template/zaekev2/static/img/2016/samsung-galaxy/26.jpg',
            2: 'template/zaekev2/static/img/2016/samsung-galaxy/27.jpg'
        }
    },
    14: {
        time: '18:00',
        content: '三星本次还推出了S漫游以及微信Wi-Fi功能',
        img: {
            0: 'template/zaekev2/static/img/2016/samsung-galaxy/28.jpg',
            1: 'template/zaekev2/static/img/2016/samsung-galaxy/29.jpg'
        }
    },
    15: {
        time: '18:10',
        content: '三星大中华区总裁裴敬泰登台作最后致辞，本次三星Galaxy S7 edge|S7发布会正式结束，请各位期待我们后续的详细评测~',
        img: {
            0: 'template/zaekev2/static/img/2016/samsung-galaxy/30.jpg'
        }
    }
}
var SLIDE = {}