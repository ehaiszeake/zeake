Z(function() {
    viewComments()
})

function viewComments() {
    var ul = document.querySelector('#comment_ul');
    var lis = ul.querySelectorAll('dl');
    var lisLength = lis.length;
    var commentsPagesLength;
    var commentsPage = null;
    var target = ul.querySelector('p');
    var pageLists = null,
        pageListItem = null;
    var i, j = 0;

    // 得到要显示的评论的页数
    commentsPagesLength = howManyPageOfComments(lisLength);

    // 如果只有一页就不做进一步处理了
    if (commentsPagesLength <= 1) {
        return;
    } else {
        // 用于保存评论导航内容的容器（不是保存的评论内容，相当于底部的页码）
        pageLists = document.createElement('div');
        pageLists.setAttribute('data-type', 'viewCommentsPageList');

        for (i = 0; i < commentsPagesLength; i++) {
            // 创建保存评论内容的容器
            commentsPage = document.createElement('div');
            commentsPage.setAttribute('data-type', 'commentsPage');

            // 非第一页的容器默认不显示，用于制造一种可以“导航”的感觉
            if (i > 0) {
                commentsPage.style.display = 'none';
            }

            // 用于将原来的评论装入新的容器内，每一个容器最多装6个，从lis[j]得到，所以j不用重置
            for (; j < (i + 1) * 6; j++) {
                if (j > lisLength - 1) {
                    break;
                }
                commentsPage.appendChild(lis[j]);
            }

            ul.insertBefore(commentsPage, target);

            // 创建导航项目（1、2、3……也就是页数）
            pageListItem = document.createElement('div');
            pageListItem.setAttribute('data-type', 'viewCommentsPageListItem');
            pageListItem.innerText = i + 1;
            pageLists.appendChild(pageListItem);
        }

        ul.insertBefore(pageLists, target);
    }

    clickPageListItem();

    // 给“翻页”按钮绑定点击事件
    function clickPageListItem() {
        var items = document.querySelectorAll('[data-type=viewCommentsPageListItem]');
        var pages = document.querySelectorAll('[data-type=commentsPage]');
        var i, j, index;

        for (i = 0; i < items.length; i++) {
            if (i === 0) {
                items[0].classList.add('show');
            }

            items[i].addEventListener('click', function() {
                index = Number(this.innerText) - 1;
                for (j = 0; j < pages.length; j++) {
                    pages[j].style.display = 'none';
                    pages[index].style.display = 'block';

                    // 设置不同的样式来区别当前处于“哪一页”
                    items[j].classList.remove('show');
                    items[index].classList.add('show');
                }
            }, false);
        }
    }

    // 得到要显示的评论的页数
    function howManyPageOfComments(length) {
        if (length % 6 === 0) {
            return length / 6
        } else {
            return parseInt(length / 6, 10) + 1;
        }
    }
}