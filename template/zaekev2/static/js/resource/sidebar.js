/**
 * loader of HOST section
 */
class HostLoader {
    items = []
    $ul = Z('#event .peoplelist ul').first()
    $li = Z('<li><img src="" width="100" height="100"><p class="introName"></p><p class="introInfo"></p><p><a href="" target="_blank">关注ta</a></p></li></ul>')

    load() {
        this.loadContent()
        this.renderContent()
    }

    loadContent() {
        if (HOST === null) {
            Z('#event .peopleIntro').remove()
            return
        } else if (zaeke.js.isAnEmptyObject(HOST)) {
            return
        }

        for (let item in HOST) {
            if (HOST.hasOwnProperty(item)) {
                this.items.push(item)
            }
        }
    }

    renderContent() {
        this.items.forEach((value, index, array) => {
            let person = this.$li.clone()
            // DOM render
            person.find('img').first().attr('src', HOST[value]['src']).next()
			.text(HOST[value]['name']).next().text(HOST[value]['intro']).next()
			.find('a').first().attr('href', HOST[value]['href'])
            this.$ul.append(person)
        })
    }
}

/**
 * loader of RELATED section
 */
class RelatedArticleLoader {
    items = []
    $ul = Z('.sidebar .related .newslist ul').first()
    $li = Z('<li></li>')
    $img = Z('<img src="" width="72" height="72">')
    $a = Z('<a href="" target="_blank"></a>')

    constructor() {
        this.$li.append(this.$img).append(this.$a)
    }

    loadContent() {
        if (zaeke.js.isAnEmptyObject(RELATED) || typeof RELATED === 'undefined') {
            let related = Z('.sidebar .related')
            related.remove()
            return
        }
        for (let item in RELATED) {
            if (RELATED.hasOwnProperty(item)) {
                this.items.push(item)
            }
        }
    }

    renderContent() {
        this.items.forEach((value, index, array) => {
            let article = this.$li.clone()
            // DOM render
            article.find('img').attr('src', RELATED[value]['src']);
            article.find('a').attr('href', RELATED[value]['href'])
                .text(RELATED[value]['title'])
            this.$ul.append(article)
        })
    }

    load() {
        this.loadContent()
        this.renderContent()
    }
}

/**
 * loader of VIDEO section
 */
class SidebarVideoLoader {
    target = null

    load() {
        let video = document.querySelector('#sidebarVideo')
        if (typeof SIDEVIDEO === 'undefined' || zaeke.js.isAnEmptyObject(SIDEVIDEO)) {
            video.parentNode.removeChild(video)
            return
        }
        this.target = Z(SIDEVIDEO['video']).css({
            width: '280px',
            height: '233px'
        })
        this.video.querySelectorAll('div')[1].appendChild(this.target.get(0))
    }
}

let hostLoader = new HostLoader()
hostLoader.load()

let relatedLoader = new RelatedArticleLoader()
relatedLoader.load()

let sidebarVideoLoader = new SidebarVideoLoader()
sidebarVideoLoader.load()