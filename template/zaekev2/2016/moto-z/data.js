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
		src: 'template/zaekev2/static/img/2016/moto-z/RELATED/3.jpg',
		href: 'http://www.zaeke.com/article-4494-1.html',
		title: 'Moto Z Pla y再曝光，系统 UI 才是最大的疑问'
	},
    1: {
		src: 'template/zaekev2/static/img/2016/moto-z/RELATED/2.png',
		href: 'http://www.zaeke.com/article-4402-1.html',
		title: '依然模块化与火疖子摄像头 Moto Z Play 真机曝光'
	},
    2: {
		src: 'template/zaekev2/static/img/2016/moto-z/RELATED/1.jpg',
		href: 'http://www.zaeke.com/article-4501-1.html',
		title: '硬件配置没亮点？Moto M现身'
	},
}
var CONTENT = {
    0: {
         video: '<object type="application/x-shockwave-flash" id="douyu_room_flash_proxy" name="douyu_room_flash_proxy" align="middle" allowscriptaccess="always" allowfullscreen="true" allowfullscreeninteractive="true" data="https://staticlive.douyucdn.cn/common/simplayer/WebRoomNormal.swf?v52792" width="100%" height="100%"><param name="quality" value="high"><param name="bgcolor" value="#ffffff"><param name="allowscriptaccess" value="always"><param name="allowfullscreen" value="true"><param name="wmode" value="Opaque"><param name="allowFullScreenInteractive" value="true"><param name="flashvars" value="DomainName=www.douyu.com&amp;cdn=&amp;asset_url=https://staticlive.douyucdn.cn/common/&amp;checkowne=1&amp;usergroupid=1&amp;uid=41354164&amp;room_link=&amp;Servers=%5B%7B%22ip%22%3A%22119.90.49.88%22%2C%22port%22%3A%228086%22%7D%2C%7B%22ip%22%3A%22119.90.49.89%22%2C%22port%22%3A%228091%22%7D%2C%7B%22ip%22%3A%22119.90.49.90%22%2C%22port%22%3A%228100%22%7D%2C%7B%22ip%22%3A%22119.90.49.90%22%2C%22port%22%3A%228097%22%7D%2C%7B%22ip%22%3A%22119.90.49.88%22%2C%22port%22%3A%228090%22%7D%2C%7B%22ip%22%3A%22119.90.49.90%22%2C%22port%22%3A%228099%22%7D%2C%7B%22ip%22%3A%22119.90.49.102%22%2C%22port%22%3A%228008%22%7D%2C%7B%22ip%22%3A%22119.90.49.86%22%2C%22port%22%3A%228077%22%7D%2C%7B%22ip%22%3A%22119.90.49.103%22%2C%22port%22%3A%228015%22%7D%2C%7B%22ip%22%3A%22119.90.49.109%22%2C%22port%22%3A%228043%22%7D%2C%7B%22ip%22%3A%22119.90.49.108%22%2C%22port%22%3A%228037%22%7D%2C%7B%22ip%22%3A%22119.90.49.93%22%2C%22port%22%3A%228063%22%7D%2C%7B%22ip%22%3A%22119.90.49.110%22%2C%22port%22%3A%228050%22%7D%2C%7B%22ip%22%3A%22119.90.49.110%22%2C%22port%22%3A%228047%22%7D%2C%7B%22ip%22%3A%22119.90.49.94%22%2C%22port%22%3A%228068%22%7D%2C%7B%22ip%22%3A%22119.90.49.92%22%2C%22port%22%3A%228056%22%7D%2C%7B%22ip%22%3A%22119.90.49.93%22%2C%22port%22%3A%228062%22%7D%2C%7B%22ip%22%3A%22119.90.49.92%22%2C%22port%22%3A%228057%22%7D%2C%7B%22ip%22%3A%22119.90.49.110%22%2C%22port%22%3A%228049%22%7D%2C%7B%22ip%22%3A%22119.90.49.102%22%2C%22port%22%3A%228007%22%7D%2C%7B%22ip%22%3A%22119.90.49.108%22%2C%22port%22%3A%228036%22%7D%2C%7B%22ip%22%3A%22119.90.49.86%22%2C%22port%22%3A%228080%22%7D%2C%7B%22ip%22%3A%22119.90.49.88%22%2C%22port%22%3A%228089%22%7D%2C%7B%22ip%22%3A%22119.90.49.86%22%2C%22port%22%3A%228076%22%7D%2C%7B%22ip%22%3A%22119.90.49.104%22%2C%22port%22%3A%228016%22%7D%2C%7B%22ip%22%3A%22119.90.49.109%22%2C%22port%22%3A%228044%22%7D%2C%7B%22ip%22%3A%22119.90.49.109%22%2C%22port%22%3A%228041%22%7D%2C%7B%22ip%22%3A%22119.90.49.102%22%2C%22port%22%3A%228006%22%7D%2C%7B%22ip%22%3A%22119.90.49.90%22%2C%22port%22%3A%228096%22%7D%2C%7B%22ip%22%3A%22119.90.49.94%22%2C%22port%22%3A%228070%22%7D%5D&amp;RoomId=652757&amp;RoomTitle=知客数码的直播间&amp;cate_id=134&amp;OwnerId=41354164&amp;Status=false&amp;closeFMS=true&amp;roompass=0&amp;isshow=0&amp;phonestatus=1&amp;WidgetUrl=http://s.csbew.com/FrameWork/AFP/ASP_vastTrack2.swf&amp;WidgetId=5322&amp;WidgetServers=http://afp.wasu.cn/&amp;WidgetPosition=0&amp;WidgetType=0&amp;effectConfig=%7B%22rocket%22%3A%7B%22sender_color%22%3A%22%23FF3739%22%2C%22receiver_color%22%3A%22%23FF3739%22%2C%22default_color%22%3A%22%23FFFFFF%22%2C%22bg_color%22%3A%22%23C1FFC1%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22153%22%2C%22font_y%22%3A%2250%22%2C%22swf%22%3A%22%22%7D%2C%22plane%22%3A%7B%22sender_color%22%3A%22%23FF3739%22%2C%22receiver_color%22%3A%22%23FF3739%22%2C%22default_color%22%3A%22%23FFFFFF%22%2C%22bg_color%22%3A%22%23C1FFC1%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22115%22%2C%22font_y%22%3A%2243%22%2C%22swf%22%3A%22%22%7D%7D&amp;flashConfig=%5B%7B%22gid%22%3A%2259%22%2C%22id%22%3A%227%22%2C%22type%22%3A%221%22%2C%22flag%22%3A%22douyu_gift_effect_7%22%2C%22font_size%22%3A%2217%22%2C%22name%22%3A%22%u706B%u7BAD%22%2C%22sender_color%22%3A%22%23ff3739%22%2C%22receiver_color%22%3A%22%23ff3739%22%2C%22default_color%22%3A%220x1D1D1D%22%2C%22swf_x%22%3A%22%22%2C%22swf_y%22%3A%22%22%2C%22font_x%22%3A%22153%22%2C%22font_y%22%3A%2246%22%7D%2C%7B%22gid%22%3A%22195%22%2C%22id%22%3A%2242%22%2C%22type%22%3A%221%22%2C%22flag%22%3A%22douyu_gift_effect_42%22%2C%22font_size%22%3A%2217%22%2C%22name%22%3A%22%u98DE%u673A%22%2C%22sender_color%22%3A%22%23ffff00%22%2C%22receiver_color%22%3A%22%23ffff00%22%2C%22default_color%22%3A%220x1D1D1D%22%2C%22swf_x%22%3A%22%22%2C%22swf_y%22%3A%22%22%2C%22font_x%22%3A%22122%22%2C%22font_y%22%3A%2223%22%7D%2C%7B%22id%22%3A%2214%22%2C%22type%22%3A%222%22%2C%22flag%22%3A%22douyu_gift_hit_14%22%2C%22font_size%22%3A%2217%22%2C%22sender_color%22%3A%22%23ffff66%22%2C%22receiver_color%22%3A%22%23ffff66%22%2C%22default_color%22%3A%220x1e1e1e%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22120%22%2C%22font_y%22%3A%2225%22%2C%22f%22%3A%22station%22%7D%2C%7B%22id%22%3A%2211%22%2C%22type%22%3A%222%22%2C%22flag%22%3A%22douyu_gift_hit_11%22%2C%22font_size%22%3A%2217%22%2C%22sender_color%22%3A%22%23ffff66%22%2C%22receiver_color%22%3A%22%23ffff66%22%2C%22default_color%22%3A%220x1e1e1e%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22120%22%2C%22font_y%22%3A%2225%22%2C%22f%22%3A%22station%22%7D%2C%7B%22id%22%3A%222%22%2C%22type%22%3A%222%22%2C%22flag%22%3A%22douyu_gift_hit_2%22%2C%22font_size%22%3A%2217%22%2C%22sender_color%22%3A%22%23ffff66%22%2C%22receiver_color%22%3A%22%23ffff66%22%2C%22default_color%22%3A%220x1e1e1e%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22100%22%2C%22font_y%22%3A%2259%22%2C%22f%22%3A%22station%22%7D%2C%7B%22id%22%3A%221%22%2C%22type%22%3A%222%22%2C%22flag%22%3A%22douyu_gift_hit_1%22%2C%22font_size%22%3A%2217%22%2C%22sender_color%22%3A%22%23ffff66%22%2C%22receiver_color%22%3A%22%23ffff66%22%2C%22default_color%22%3A%220x1e1e1e%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22100%22%2C%22font_y%22%3A%2259%22%2C%22f%22%3A%22station%22%7D%2C%7B%22id%22%3A%223%22%2C%22type%22%3A%222%22%2C%22flag%22%3A%22douyu_gift_hit_3%22%2C%22font_size%22%3A%2217%22%2C%22sender_color%22%3A%22%23ffff66%22%2C%22receiver_color%22%3A%22%23ffff66%22%2C%22default_color%22%3A%220x1e1e1e%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22100%22%2C%22font_y%22%3A%2259%22%2C%22f%22%3A%22station%22%7D%2C%7B%22id%22%3A%2210%22%2C%22type%22%3A%222%22%2C%22flag%22%3A%22douyu_gift_hit_10%22%2C%22font_size%22%3A%2217%22%2C%22sender_color%22%3A%22%23ffff66%22%2C%22receiver_color%22%3A%22%23ffff66%22%2C%22default_color%22%3A%220x1e1e1e%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22120%22%2C%22font_y%22%3A%2225%22%2C%22f%22%3A%22station%22%7D%2C%7B%22id%22%3A%2216%22%2C%22type%22%3A%222%22%2C%22flag%22%3A%22douyu_gift_hit_16%22%2C%22font_size%22%3A%2217%22%2C%22sender_color%22%3A%22%23ffff66%22%2C%22receiver_color%22%3A%22%23ffff66%22%2C%22default_color%22%3A%220x1e1e1e%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22120%22%2C%22font_y%22%3A%2225%22%2C%22f%22%3A%22station%22%7D%2C%7B%22id%22%3A%2215%22%2C%22type%22%3A%222%22%2C%22flag%22%3A%22douyu_gift_hit_15%22%2C%22font_size%22%3A%2217%22%2C%22sender_color%22%3A%22%23ffff66%22%2C%22receiver_color%22%3A%22%23ffff66%22%2C%22default_color%22%3A%220x1e1e1e%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22120%22%2C%22font_y%22%3A%2225%22%2C%22f%22%3A%22station%22%7D%2C%7B%22id%22%3A%2213%22%2C%22type%22%3A%222%22%2C%22flag%22%3A%22douyu_gift_hit_13%22%2C%22font_size%22%3A%2217%22%2C%22sender_color%22%3A%22%23ffff66%22%2C%22receiver_color%22%3A%22%23ffff66%22%2C%22default_color%22%3A%220x1e1e1e%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22120%22%2C%22font_y%22%3A%2225%22%2C%22f%22%3A%22station%22%7D%2C%7B%22id%22%3A%226%22%2C%22type%22%3A%222%22%2C%22flag%22%3A%22douyu_gift_hit_6%22%2C%22font_size%22%3A%2217%22%2C%22sender_color%22%3A%22%23ffff66%22%2C%22receiver_color%22%3A%22%23ffff66%22%2C%22default_color%22%3A%220x1e1e1e%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22100%22%2C%22font_y%22%3A%2259%22%2C%22f%22%3A%22station%22%7D%2C%7B%22id%22%3A%2212%22%2C%22type%22%3A%222%22%2C%22flag%22%3A%22douyu_gift_hit_12%22%2C%22font_size%22%3A%2217%22%2C%22sender_color%22%3A%22%23ffff66%22%2C%22receiver_color%22%3A%22%23ffff66%22%2C%22default_color%22%3A%220x1e1e1e%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22120%22%2C%22font_y%22%3A%2225%22%2C%22f%22%3A%22station%22%7D%2C%7B%22id%22%3A%228%22%2C%22type%22%3A%222%22%2C%22flag%22%3A%22douyu_gift_hit_8%22%2C%22font_size%22%3A%2217%22%2C%22sender_color%22%3A%22%23ffff66%22%2C%22receiver_color%22%3A%22%23ffff66%22%2C%22default_color%22%3A%220x1e1e1e%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22100%22%2C%22font_y%22%3A%2259%22%2C%22f%22%3A%22station%22%7D%2C%7B%22id%22%3A%225%22%2C%22type%22%3A%222%22%2C%22flag%22%3A%22douyu_gift_hit_5%22%2C%22font_size%22%3A%2217%22%2C%22sender_color%22%3A%22%23ffff66%22%2C%22receiver_color%22%3A%22%23ffff66%22%2C%22default_color%22%3A%220x1e1e1e%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22100%22%2C%22font_y%22%3A%2259%22%2C%22f%22%3A%22station%22%7D%2C%7B%22id%22%3A%224%22%2C%22type%22%3A%222%22%2C%22flag%22%3A%22douyu_gift_hit_4%22%2C%22font_size%22%3A%2217%22%2C%22sender_color%22%3A%22%23ffff66%22%2C%22receiver_color%22%3A%22%23ffff66%22%2C%22default_color%22%3A%220x1e1e1e%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22100%22%2C%22font_y%22%3A%2259%22%2C%22f%22%3A%22station%22%7D%2C%7B%22id%22%3A%229%22%2C%22type%22%3A%222%22%2C%22flag%22%3A%22douyu_gift_hit_9%22%2C%22font_size%22%3A%2217%22%2C%22sender_color%22%3A%22%23ffff66%22%2C%22receiver_color%22%3A%22%23ffff66%22%2C%22default_color%22%3A%220x1e1e1e%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22120%22%2C%22font_y%22%3A%2225%22%2C%22f%22%3A%22station%22%7D%2C%7B%22id%22%3A%227%22%2C%22type%22%3A%222%22%2C%22flag%22%3A%22douyu_gift_hit_7%22%2C%22font_size%22%3A%2217%22%2C%22sender_color%22%3A%22%23ffff66%22%2C%22receiver_color%22%3A%22%23ffff66%22%2C%22default_color%22%3A%220x1e1e1e%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22100%22%2C%22font_y%22%3A%2259%22%2C%22f%22%3A%22station%22%7D%2C%7B%22id%22%3A%2218%22%2C%22type%22%3A%222%22%2C%22flag%22%3A%22douyu_gift_hit_18%22%2C%22font_size%22%3A%2217%22%2C%22sender_color%22%3A%22%23ffff66%22%2C%22receiver_color%22%3A%22%23ffff66%22%2C%22default_color%22%3A%220x1e1e1e%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22100%22%2C%22font_y%22%3A%2259%22%2C%22f%22%3A%22station%22%7D%2C%7B%22id%22%3A%2249%22%2C%22type%22%3A%221%22%2C%22flag%22%3A%22douyu_gift_effect_49%22%2C%22font_size%22%3A%2217%22%2C%22name%22%3A%22%u767E%u5A01%u706B%u7BAD%22%2C%22sender_color%22%3A%22%23ff3739%22%2C%22receiver_color%22%3A%22%23ff3739%22%2C%22default_color%22%3A%220x1D1D1D%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22225%22%2C%22font_y%22%3A%2231%22%2C%22f%22%3A%22station%22%7D%2C%7B%22id%22%3A%2253%22%2C%22type%22%3A%221%22%2C%22flag%22%3A%22douyu_gift_effect_53%22%2C%22font_size%22%3A%2217%22%2C%22name%22%3A%22%u4E03%u5915%u706B%u7BAD%22%2C%22sender_color%22%3A%22%23ff0000%22%2C%22receiver_color%22%3A%22%23ff0000%22%2C%22default_color%22%3A%220x1D1D1D%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22170%22%2C%22font_y%22%3A%2271%22%2C%22f%22%3A%22station%22%7D%2C%7B%22id%22%3A%2239%22%2C%22type%22%3A%221%22%2C%22flag%22%3A%22douyu_gift_effect_39%22%2C%22font_size%22%3A%2217%22%2C%22name%22%3A%22%u7AD6%u5C4F%u6E38%u8247%22%2C%22sender_color%22%3A%22%23ffff00%22%2C%22receiver_color%22%3A%22%23ffff00%22%2C%22default_color%22%3A%220x1D1D1D%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22150%22%2C%22font_y%22%3A%2239%22%2C%22f%22%3A%22station%22%7D%2C%7B%22id%22%3A%2243%22%2C%22type%22%3A%221%22%2C%22flag%22%3A%22douyu_gift_effect_43%22%2C%22font_size%22%3A%2217%22%2C%22name%22%3A%22%u706B%u7BAD%22%2C%22sender_color%22%3A%22%23ff0000%22%2C%22receiver_color%22%3A%22%23ff0000%22%2C%22default_color%22%3A%220x1D1D1D%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22190%22%2C%22font_y%22%3A%2256%22%2C%22f%22%3A%22station%22%7D%2C%7B%22id%22%3A%2238%22%2C%22type%22%3A%221%22%2C%22flag%22%3A%22douyu_gift_effect_38%22%2C%22font_size%22%3A%2217%22%2C%22name%22%3A%22%u7AD6%u5C4F%u8DD1%u8F66%22%2C%22sender_color%22%3A%22%23ff0000%22%2C%22receiver_color%22%3A%22%23ff0000%22%2C%22default_color%22%3A%220x1D1D1D%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22130%22%2C%22font_y%22%3A%2218%22%2C%22f%22%3A%22station%22%7D%2C%7B%22id%22%3A%2251%22%2C%22type%22%3A%221%22%2C%22flag%22%3A%22douyu_gift_effect_51%22%2C%22font_size%22%3A%2217%22%2C%22name%22%3A%22%u5965%u8FD0%u706B%u7BAD%22%2C%22sender_color%22%3A%22%23ffff00%22%2C%22receiver_color%22%3A%22%23ffff00%22%2C%22default_color%22%3A%220x1D1D1D%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22225%22%2C%22font_y%22%3A%2271%22%2C%22f%22%3A%22station%22%7D%2C%7B%22id%22%3A%2248%22%2C%22type%22%3A%221%22%2C%22flag%22%3A%22douyu_gift_effect_48%22%2C%22font_size%22%3A%2217%22%2C%22name%22%3A%22%u6B27%u83B1%u96C5%22%2C%22sender_color%22%3A%22%23ff3739%22%2C%22receiver_color%22%3A%22%23ff3739%22%2C%22default_color%22%3A%220x1D1D1D%22%2C%22swf_x%22%3A%220%22%2C%22swf_y%22%3A%220%22%2C%22font_x%22%3A%22165%22%2C%22font_y%22%3A%2227%22%2C%22f%22%3A%22station%22%7D%5D&amp;effectSwf=https://staticlive.douyucdn.cn/upload/dygift/1609/a0a8be9d6aebb89380b0f6d8e08f3966.swf&amp;effectGiftSwf=https://staticlive.douyucdn.cn/upload/dygift/1608/d1496e3149a18e0cedaf3e2ab6e69370.swf&amp;giftActivityFlag=douyu_gift_activity_&amp;avatar_url=https://apic.douyucdn.cn/&amp;definitionConfig=%5B1440%2C20000%2C1%5D"></object>',
         time: '00:00',
         content: 'moto z 发布会直播'
       }
}
var SLIDE = {
    0: 'template/zaekev2/static/img/2016/moto-z/SLIDE/1.jpg', 
    1: 'template/zaekev2/static/img/2016/moto-z/SLIDE/2.jpg', 
	2: 'template/zaekev2/static/img/2016/moto-z/SLIDE/3.jpg', 
	3: 'template/zaekev2/static/img/2016/moto-z/SLIDE/4.jpg', 
	4: 'template/zaekev2/static/img/2016/moto-z/SLIDE/5.jpg',
    5: 'template/zaekev2/static/img/2016/moto-z/SLIDE/6.jpg', 
    6: 'template/zaekev2/static/img/2016/moto-z/SLIDE/7.jpg', 
	7: 'template/zaekev2/static/img/2016/moto-z/SLIDE/8.jpg', 
	8: 'template/zaekev2/static/img/2016/moto-z/SLIDE/9.jpg',
    9: 'template/zaekev2/static/img/2016/moto-z/SLIDE/10.jpg'
}