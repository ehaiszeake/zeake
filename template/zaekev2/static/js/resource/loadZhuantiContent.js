/**
 * loader to load `CONTENT` and display the `CONTENT` on page
 */
class ZhuantiContentLoader {
    node = document.querySelector('#event .content')
    content = []

    loadContent() {
        if (typeof CONTENT === 'undefined' || zaeke.js.isAnEmptyObject(CONTENT)) {
            return;
        }

        for (let a in CONTENT) {
            if (CONTENT.hasOwnProperty(a)) {
                this.content.push(a);
            }
        }

        this.content.reverse();
    }

    renderContent() {
        this.content.forEach((value, index, array) => {
            let temp = '<div class="post news"><a href="' + CONTENT[value]['href'] + '" target="_blank"><img src="' + CONTENT[value]['img'] + '"></a><div class="postinfo"><div class="postinfo-content">' + CONTENT[value]['content'] + '</div></div></div>';
            this.node.innerHTML += temp
        })
    }

    load() {
        this.loadContent();
        this.renderContent();
    }
}

let loader = new ZhuantiContentLoader();
loader.load();