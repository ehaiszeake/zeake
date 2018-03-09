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
 *     single: true, // true为推荐的值，也可以用任意字符串代替
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
 * SIDEVIDEO是老板要求的侧边栏视频项目，不是很懂老板
 * var SIDEVIDEO = {
 *     video: '视频嵌入代码'    
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
	0: {
		src: 'template/zaekev2/static/img/2016/vivo-x7-2016/RELATED/R1.jpg',
		href: 'http://www.zaeke.com/article-3764-1.html',
		title: 'vivo旗舰新品来袭 敬请“7”待'
	},
	1: {
		src: 'template/zaekev2/static/img/2016/vivo-x7-2016/RELATED/R2.jpg',
		href: 'http://www.zaeke.com/article-3794-1.html',
		title: '自拍黑科技 vivo X7加入Moonlight柔光灯'
	},
	2: {
		src: 'template/zaekev2/static/img/2016/vivo-x7-2016/RELATED/R3.jpg',
		href: 'http://www.zaeke.com/article-3799-1.html',
		title: '一大波撞脸 vivo X7 确认采用正面指纹模块'
	},
	3: {
		src: 'template/zaekev2/static/img/2016/vivo-x7-2016/RELATED/R4.jpg',
		href: 'http://www.zaeke.com/article-3802-1.html',
		title: '柔光自拍vivo X7 真机曝光 想要的都给你'
	},
	4: {
		src: 'template/zaekev2/static/img/2016/vivo-x7-2016/RELATED/R5.jpg',
		href: 'http://www.zaeke.com/article-3932-1.html',
		title: '欧巴同款 vivo X7/X7Plus正式发布'
	},
	5: {
		src: 'template/zaekev2/static/img/2016/vivo-x7-2016/RELATED/R6.jpg',
		href: 'http://www.zaeke.com/article-3931-1.html',
		title: 'vivo X7上手：散发着偶像光环的自拍小王子'
	},
	6: {
		src: 'template/zaekev2/static/img/2016/vivo-x7-2016/RELATED/R7.jpg',
		href: 'http://www.zaeke.com/article-3930-1.html',
		title: '照亮你的脸庞 vivo X7图赏'
	}
};
var CONTENT = {
	0: {
        time: '17:09',
        content: 'vivo X7已定于本月底正式发布。其将采用超窄边框金属机身设计，配备高通8976处理器、4GB RAM+64GB ROM、位于手机正面的按压式指纹识别按钮、1600万像素的前置相机以及补光灯，主打自拍功能。本次vivo智能手机更是请来最近很红的韩国影星宋仲基来担当代言人。届时欢迎大家观看图文直播以及后续的详细内容，在第一时间掌握关于vivo X7最全面的资讯。同时也欢迎大家发微博 @知客数码 参与直播互动讨论哟~',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/1.jpg'
        }
	},
	1: {
        time: '15:00',
        content: '即将在6月30日正式发布的vivo X7，依然延续着vivo的全金属机身设计，不同的是有着更强的自拍效果表现。全新加入的Moonlight柔光灯和高达1600万像素的前置摄像头，带来更好的自拍体验，邀请函这发光灯有着很好的隐喻。而秉承够快才畅快的特性，其将配备4G大内存和64G海量储存空间，让使用更为爽快。而至于宋仲基会不会到场支持，一切敬请期待知客带来的现场报道！',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/2.jpg',
			1: 'template/zaekev2/static/img/2016/vivo-x7-2016/3.jpg',
			2: 'template/zaekev2/static/img/2016/vivo-x7-2016/4.jpg',
			3: 'template/zaekev2/static/img/2016/vivo-x7-2016/5.jpg'
        }
	},
	2: {
        time: '19:30',
        content: '发布会预热节目',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/6.jpg',
			1: 'template/zaekev2/static/img/2016/vivo-x7-2016/7.jpg',
			2: 'template/zaekev2/static/img/2016/vivo-x7-2016/8.jpg',
			3: 'template/zaekev2/static/img/2016/vivo-x7-2016/9.jpg'
        }
	},
	3: {
        time: '19:34',
        content: '1600W柔光自拍vivo X7发布会正式开始。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/10.jpg'
        }
	},
	4: {
        time: '19:37',
        content: '冯磊讲述这次为大家带来的是匠心之作vivo X7/X7PULS。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/11.jpg'
        }
	},
	5: {
        time: '19:39',
        content: '冯磊表示vivo一直坚守以消费者为导向的产品初心。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/12.jpg'
        }
	},
	6: {
        time: '19:41',
        content: '冯磊谈到：Xshot系列的专项拍照使命将由X系列来承担，并应用在全线产品上。我们希望从X7系列开始，将拍照作为vivo品牌的核心价值点之一，和Hi-Fi一起成为vivo的产品DNA。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/13.jpg'
        }
	},
	7: {
        time: '19:46',
        content: '1600W柔光自拍 vivo X7 正式登场。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/14.jpg',
			1: 'template/zaekev2/static/img/2016/vivo-x7-2016/15.jpg',
			2: 'template/zaekev2/static/img/2016/vivo-x7-2016/16.jpg',
			3: 'template/zaekev2/static/img/2016/vivo-x7-2016/17.jpg'
        }
	},
	8: {
        time: '19:49',
        content: 'vivo产品经理韩少上台介绍vivo X7的极致Hi-Fi、极致外观、极致拍照以及、极致畅快。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/18.jpg',
			1: 'template/zaekev2/static/img/2016/vivo-x7-2016/19.jpg'
        }
	},
	9: {
        time: '19:51',
        content: 'vivo X7使用视觉更广的5.2英吋屏幕，采用真正的超窄边框设计，手机正面玻璃宽度只有68.5mm，厚度只有7.2mm，带你体验更好的单手操作。更大的屏幕，更小的机身，以更舒服的手感，体验更爽的视觉。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/20.jpg',
			1: 'template/zaekev2/static/img/2016/vivo-x7-2016/21.jpg'
        }
	},
	10: {
        time: '19:53',
        content: 'vivo X7拥有3000mAh的高密度电池，并支持双引擎闪充。经过优化，比上一代续航整整提升了40%。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/22.jpg'
        }
	},
	11: {
        time: '19:55',
        content: 'vivo X7对天线进行了重新的设计，是现今信号最好的全金属手机',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/23.jpg'
        }
	},
	12: {
        time: '19:54',
        content: 'vivo X7搭载高通骁龙8976八核CPU，采用最新的A72架构，使基础硬件更出色；4GB内存和64GB高性能存储，让体验更畅快。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/24.jpg',
			1: 'template/zaekev2/static/img/2016/vivo-x7-2016/25.jpg'
        }
	},
	13: {
        time: '19:56',
        content: 'vivo X7采用能让系统持续流畅的智慧引擎2.0：通过vivo云实验室快速解决第三方问题、科学和完善的CPU levelset体系合理分配资源、内存一键回收，实现手机的畅快体验。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/26.jpg',
			1: 'template/zaekev2/static/img/2016/vivo-x7-2016/27.jpg'
        }
	},
	14: {
        time: '19:58',
        content: 'vivo X7在原来被动分屏的基础上，X7又加入了主动分屏，只需要三指下滑，就可以调出分屏列表，更便捷智能。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/28.jpg'
        }
	},
	15: {
        time: '20:02',
        content: 'vivo X7设计了全新全局护眼模式。开启后，手机所有界面都会变得更柔和，有效过滤屏幕蓝光，缓解视疲劳。该项功能已通过了中国标准化研究院的权威认证。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/29.jpg'
        }
	},
	16: {
        time: '20:04',
        content: 'vivo X7采用了正面指纹，轻触和按压都可解锁。指纹解锁速度再度提升，息屏解锁突破0.2秒，亮屏更快至0.15秒。并搭载ID wake功能，只需双击指纹按键，识别指纹同时，直接进入设置好的应用。如微信和相机。另外我们还和微信支付合作，首次实现息屏下微信秒付。直接双击，指纹验证和付款一步完成，更安全便捷。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/30.jpg',
			1: 'template/zaekev2/static/img/2016/vivo-x7-2016/31.jpg',
        }
	},
	17: {
        time: '20:09',
        content: 'vivo X7将首发AKM的全新定制方案：AK4376，实测信噪比高达116dB。并实现了直播实时混响耳返支持，实现录音棚、音乐厅、KTV的声音风格。音乐内容方面，vivo将和中国最大的音乐版权方，腾讯音乐开启战略合作。i音乐将内置QQ音乐曲库，享受海量正版无损音源。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/32.jpg',
			1: 'template/zaekev2/static/img/2016/vivo-x7-2016/33.jpg'
        }
	},
	18: {
        time: '20:13',
        content: 'vivo X7的直播实时混响耳返支持，是新时代直播神器。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/34.jpg'
        }
	},
	19: {
        time: '20:15',
        content: 'vivo X7使用了前置1600W像素传感器，画质更加细腻。同时还拥有超大的感光面积，让自拍更明亮，皮肤更通透。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/35.jpg',
			1: 'template/zaekev2/static/img/2016/vivo-x7-2016/36.jpg'
        }
	},
	20: {
        time: '20:18',
        content: 'vivo X7增加了特殊的Moonlight柔光灯。光线不佳时，Moonlight柔光就会自动开启。vivo还和ArcSoft合作，对X7的美颜算法进行了全面革新能针对特定的场景进行美颜优化。这使得vivo X7成为最好的自拍手机。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/37.jpg',
			1: 'template/zaekev2/static/img/2016/vivo-x7-2016/38.jpg',
			2: 'template/zaekev2/static/img/2016/vivo-x7-2016/39.jpg'
        }
	},
	21: {
        time: '20:26',
        content: '在推出vivo X7的同时vivo X7 Plus也一并登场。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/40.jpg',
			1: 'template/zaekev2/static/img/2016/vivo-x7-2016/41.jpg',
			2: 'template/zaekev2/static/img/2016/vivo-x7-2016/42.jpg'
        }
	},
	22: {
        time: '20:28',
        content: 'vivo X7 Plus可以说是握着舒适摸着有质感，金属一体化机身和金属一体化机身带来极佳的手感。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/43.jpg'
        }
	},
	23: {
        time: '20:30',
        content: 'vivo X7 Plus拥有4000mAh的大电池并搭载双引擎闪充技术，配合功耗更低的高通骁龙8976处理器，使得续航能力有了大幅提升。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/44.jpg',
			1: 'template/zaekev2/static/img/2016/vivo-x7-2016/45.jpg'
        }
	},
	24: {
        time: '20:32',
        content: 'vivo X7 Plus 采用前置1600W摄像头和后置镜头采用1600W的SONY IMX298传感器，可以进行超快速夜景算法。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/46.jpg',
			1: 'template/zaekev2/static/img/2016/vivo-x7-2016/47.jpg'
        }
	},
	25: {
        time: '20:34',
        content: 'vivo X7 Plus还将标配vivo全新半入耳Hi-Fi耳塞，XE680，拥有更加时尚的外观和和好的佩戴舒适。同时音质达到顶级Hi-Fi耳塞水平。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/48.jpg'
        }
	},
	26: {
        time: '20:37',
        content: '一张图看懂vivo X7/X7 Plus的配置。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/49.jpg',
			1: 'template/zaekev2/static/img/2016/vivo-x7-2016/50.jpg'
        }
	},
	27: {
        time: '20:39',
        content: '今年夏天开始，vivo正式成为NBA中国唯一手机官方市场合作伙伴。不断追求极致，持续创造惊喜，vivo和NBA将与年轻人一起，做更快乐、更有活力的自己，不断丰富自己世界，让世界更加美好。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/51.jpg'
        }
	},
	28: {
        time: '20:42',
        content: 'vivo X7售价正式公布：2498元！将于7月7日在全国各大vivo门店及各大电商平台正式开售。而 vivo X7Plus的售价将在7月15日上海举办的 vivoX7 Plus首销会上公布。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/52.jpg'
        }
	},
	29: {
        time: '20:45',
        content: 'vivo X7系列将会与更多的线上渠道合作，以实现更好的销量表现。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/53.jpg'
        }
	},
	30: {
        time: '20:48',
        content: 'vivo X7系列首销仪式正式启动。',
        img: {
            0: 'template/zaekev2/static/img/2016/vivo-x7-2016/54.jpg'
        }
	},
    31: {
        time: '21:00',
        content: '直播到此结束，谢谢您的观看。',
        single: true
    }
}
var SLIDE = {};