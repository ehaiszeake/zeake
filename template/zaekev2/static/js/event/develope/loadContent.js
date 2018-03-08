;
(function() {
    /*
     * 没有使用jQuery版本的loadContent.js，速度应该会快一些
     * 同时在渲染的时候没有使用添加DOM的方式，用了拼接innerHTML字符串……
     */

    function loadContent(callback) {
        // 如果CONTENT为空，则表示没有数据，不需要进行渲染
        if (typeof CONTENT === 'undefined' || zaeke.js.isAnEmptyObject(CONTENT)) {
            return;
        }

        // 保存所有的内容项目
        var posts = [];

        // 保存需要置顶的项目
        var top = [];
        var a;
        var node = document.querySelector('#event .content');

        // 将需要置顶的项目拿出来单独放在top里
        for (a in CONTENT) {
            if (CONTENT.hasOwnProperty(a)) {
                posts.push(a);
                if (CONTENT[a].top) {
                    top.push(a);
                    posts.pop();
                }
            }
        }

        // 最终的有序的渲染内容
        posts = top.reverse().concat(posts.reverse());

        // 根据数据的信息进行渲染，最后拼接在一起
        posts.forEach(function(value, index, array) {
            if (CONTENT[value].hasOwnProperty('single')) {
                makeSingleContent(node, CONTENT[value]);
            } else if (CONTENT[value].hasOwnProperty('video')) {
                makeVideoContent(node, CONTENT[value]);
            } else {
                makePhotosContent(node, CONTENT[value]);
            }
        });

        callback();
    }

    loadContent(init);

    // 多图的情况下进行隐藏，并绑定按钮的显示/隐藏事件
    function init() {
        var posts = null;
        var i, j;
        var imgs = null;
        var container = null; // 包裹图片的内容区域
        var collapse = null; // 按钮

        posts = document.querySelectorAll('.post');
        for (i = 0; i < posts.length; i++) {
            imgs = posts[i].querySelectorAll('img');
            if (imgs.length > 2) {
                // 新建一个包裹住隐藏图片的区域
                container = document.createElement('div');
                container.setAttribute('data-type', 'container');

                // 使用CSS3 transition做过渡动画
                container.style.height = 0;
                container.style.overflow = 'hidden';
                container.style.transition = 'height 0.5s';

                for (j = 0; j < imgs.length; j++) {
                    // 位于第二张之后的图片需要隐藏起来
                    if (j > 1) {
                        container.appendChild(imgs[j]);
                    }
                }

                // 将区域添加到DOM中
                collapse = posts[i].querySelector('[data-type=collapse]');
                collapse.parentNode.insertBefore(container, collapse);
                // 做一个标识符，用于显示/隐藏图片的判断条件
                posts[i].setAttribute('data-collapse', 'true');
            }
        }

        bindPhotosEvent();
    }

    // 给按钮绑定显示/隐藏事件
    function bindPhotosEvent() {
        // 所有的按钮
        var items = document.querySelectorAll('[data-type=collapse]');
        var i, j;
        // 按钮所在的最外层父元素
        var parent;
        // 按钮所在的包裹图片的container
        var container = null;
        // 按钮所在post的container中的图片数量
        var length;

        for (i = 0; i < items.length; i++) {
            items[i].addEventListener('click', function() {
                parent = this.parentNode.parentNode;
                container = this.previousElementSibling;
                length = container.querySelectorAll('img').length;

                if (parent.getAttribute('data-collapse') === 'true') {
                    // 动态判断区域的高度，用于动画的显示
                    container.style.height = judgeLine(length, 2) * 245 + 'px';
                    this.innerText = '收起';
                    parent.setAttribute('data-collapse', 'false');
                } else {
                    container.style.height = 0
                    this.innerText = '更多图片';
                    parent.setAttribute('data-collapse', 'true');
                }
            }, false);
        }

        // 判断隐藏的图片需要几行来显示
        function judgeLine(total, perLine) {
            if (total % perLine === 0) {
                return total / perLine
            } else {
                return parseInt(total / perLine) + 1;
            }
        }
    }

    // 渲染单独的一句话
    function makeSingleContent(node, elem) {
        var temp = '<div class="single"><div class="time"><div class="time-content">' + elem['time'] + '</div></div><div class="point"></div><div class="notes"><div class="notes-content">' + elem['content'] + '</div></div></div>';
        node.innerHTML += temp;
    }

    // 渲染带图片的内容，根据图片的数量来确定有没有按钮
    function makePhotosContent(node, elem) {
        var photosTemp = '';
        var img; // 迭代变量
        var length = lengthOfObject(elem['img']);
        var collapse; // 按钮

        for (img in elem['img']) {
            photosTemp += '<img src="' + elem['img'][img] + '">'
        }

        if (length > 2) {
            collapse = '<div data-type="collapse">更多图片</div>';
            photosTemp += collapse;
        }

        var temp = '<div class="post"><div class="time"><div class="time-content">' + elem['time'] + '</div></div><div class="point"></div><a href="#">' + photosTemp + '<div class="postinfo"><div class="postinfo-content">' + elem['content'] + '</div></div></a></div>';

        node.innerHTML += temp;
    }

    // 渲染视频内容
    function makeVideoContent(node, elem) {
        var temp = '<div class="post"><div class="time"><div class="time-content">' + elem['time'] + '</div></div><div class="point"></div><a href="#">' + elem['video'] + '<div class="postinfo"><div class="postinfo-content">' + elem['content'] + '</div></div></a></div>';

        node.innerHTML += temp;
    }

    // 得到一个对象的键-值对数，类似于array的length
    function lengthOfObject(obj) {
        var items = [];
        var item;

        for (item in obj) {
            if (obj.hasOwnProperty(item)) {
                items.push(item);
            }
        }

        return items.length;
    }
}());