/**
 * loader to load `CONTENT` and render the `CONTENT` on page
 */
class ContentLoader {
    content = [];
    node = document.querySelector('#event .content');

    /**
     * get the content of elements to display
     */
    loadContent() {
        if (typeof CONTENT === 'undefined' || zaeke.js.isAnEmptyObject(CONTENT)) {
            return;
        }

        let top = [];
        let a;

        for (a in CONTENT) {
            if (CONTENT.hasOwnProperty(a)) {
                this.content.push(a);
                if (CONTENT[a].top) {
                    top.push(a);
                    this.content.pop();
                }
            }
        }
        
        this.content = top.reverse().concat(this.content.reverse());
    }

    /**
     * render the content to display the elements
     */
    renderContent() {
        this.content.forEach((value, index, array) => {
            if (CONTENT[value].hasOwnProperty('single')) {
                this.renderSingleContent(this.node, CONTENT[value]);
            } else if (CONTENT[value].hasOwnProperty('video')) {
                this.renderVideoContent(this.node, CONTENT[value]);
            } else {
                this.renderImagesContent(this.node, CONTENT[value]);
            }
        });
    }

    /**
     * render single sentence
     */
    renderSingleContent(node, elem) {
        let temp = '<div class="single"><div class="time"><div class="timeContent">' + elem['time'] + '</div></div><div class="point"></div><div class="notes"><div class="notesContent">' + elem['content'] + '</div></div></div>';
        node.innerHTML += temp; 
    }
    
    /**
     * render video content
     */
    renderVideoContent(node, elem) {
        let temp = '<div class="post"><div class="time"><div class="timeContent">' + elem['time'] + '</div></div><div class="point"></div><a href="#"><div data-type="videoContent">' + elem['video'] + '</div><div class="postinfo"><div class="postinfoContent">' + elem['content'] + '</div></div></a></div>';
        node.innerHTML += temp;
    }

    /**
     * render images content
     */
    renderImagesContent(node, elem) {
        let imagesTemp = '';
        let img; // iterator
        let length = this.lengthOfObject(elem['img']);
        let collapse; // "more images" button

        if (length === 0) {
            // prevent with no images, downcast it to single content
            return this.renderSingleContent(node, elem);
        }

        for (img in elem['img']) {
            imagesTemp += '<img src="' + elem['img'][img] + '">'
        }

        if (length > 2) {
            collapse = '<div data-type="collapse">更多图片</div>';
            imagesTemp += collapse;
        }

        let temp = '<div class="post"><div class="time"><div class="timeContent">' + elem['time'] + '</div></div><div class="point"></div><a href="javascript:void(0);">' + imagesTemp + '<div class="postinfo"><div class="postinfoContent">' + elem['content'] + '</div></div></a></div>';
        node.innerHTML += temp;
    }

    /**
     * return the "length" of an object(actually object's keys' count)
     */
    lengthOfObject(obj) {
        let items = [];
        let item;

        for (item in obj) {
            if (obj.hasOwnProperty(item)) {
                items.push(item);
            }
        }

        return items.length;
    }

    /**
     * with multiple images, hide others
     * bind "more images" button's click event
     */
    init() {
        let posts = null;
        let imgs = null;
        let container = null; // container to wrap the images
        let collapse = null; // "more images" button

        posts = document.querySelectorAll('.post');
        for (let i = 0; i < posts.length; i++) {
            imgs = posts[i].querySelectorAll('img');
            if (imgs.length > 2) {
                // create a container to wrap all images in
                container = document.createElement('div');
                container.setAttribute('data-type', 'container');

                // use CSS3 transition for animation
                container.style.height = 0;
                container.style.overflow = 'hidden';
                container.style.transition = 'height 0.5s';

                for (let j = 0; j < imgs.length; j++) {
                    // hide other images
                    if (j > 1) {
                        container.appendChild(imgs[j]);
                    }
                }

                // insert container into DOM
                collapse = posts[i].querySelector('[data-type=collapse]');
                collapse.parentNode.insertBefore(container, collapse);
                // label for fold/unfold "more images"
                posts[i].setAttribute('data-collapse', 'true');
            }
        }

        this.bindPhotosEvent();
    }

    /**
     * "more images" button's click event
     */
    bindPhotosEvent() {
        // all buttons
        let items = document.querySelectorAll('[data-type=collapse]');
        // button's parentNode
        let parent;
        // images's container
        let container = null;
        // images's count in container
        let length;
        let self = this;

        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener('click', function() {
                parent = this.parentNode.parentNode;
                container = this.previousElementSibling;
                length = container.querySelectorAll('img').length;

                if (parent.getAttribute('data-collapse') === 'true') {
                    // get height dynamically, for showing the animation
                    if (zaeke.js.isMobileDevice()) {
                        container.style.height = self.judgeLine(length, 1) * (window.innerWidth * 0.94 * 0.96 * 225 / 300) + 20 + 'px';
                    } else {
                        container.style.height = self.judgeLine(length, 2) * 245 + 'px';
                    }
                    this.innerText = '收起';
                    parent.setAttribute('data-collapse', 'false');
                } else {
                    container.style.height = 0
                    this.innerText = '更多图片';
                    parent.setAttribute('data-collapse', 'true');
                }
            }, false);
        }
    }

    /**
     * calculate how many lines needed to display the hidden images
     */
    judgeLine(total, perLine) {
        if (total % perLine === 0) {
            return total / perLine;
        } else {
            return parseInt(total / perLine) + 1
        }
    }

    load() {
        this.loadContent();
        this.renderContent();
        this.init();
    }
}

let loader = new ContentLoader();
loader.load();