;(function () {
  Z(function ()  {
    // 判断访问设备是不是手持设备
    if (window.innerWidth < 500 || navigator.userAgent.toLowerCase().match(/mobile/)) {
      makeBurger()
    }
  })

  function makeBurger() {
    burger()
    userLogin()
  }

  // 汉堡菜单函数
  function burger() {
    var hdbn = document.querySelector('#hdbn')
    var style = document.createElement('style')
    var hdHeight = document.querySelector('#hd').offsetHeight
    var width = window.innerWidth
    var height = window.innerHeight

    // 创建最外层（我知道用一个字母来命名的方式很不好，不过暂时就先这样了吧……）
    var lists = document.querySelectorAll('#hdbn ul#nv li')
    var d = document.createElement('div')
    d.setAttribute('data-type', 'burgerPage')
    zaeke.css.setStyle(d, {
      'top': hdHeight + 'px'
    })
    // u为放置“登陆”，“注册”按钮的地方
    var u = document.createElement('div')
    u.setAttribute('data-type', 'burgerUser')
    // n为保存放置内容的区域
    var n = document.createElement('div')
    n.setAttribute('data-type', 'burgerContent')
    n.appendChild(u)
    d.appendChild(n)
    // 将原来的列表放入内容区域
    for (var i = 0; i < lists.length; i++) {
      var l = lists[i].cloneNode(true)
      n.appendChild(l)
    }
    // b为左上角的按钮
    var b = document.createElement('div')
    b.setAttribute('data-type', 'burgerButton')
    zaeke.css.setStyle(b, {
      'width': hdHeight + 'px',
      'height': hdHeight + 'px'
    })
    var img = document.createElement('img')
    img.setAttribute('src', 'template/zaekev2/static/img/burgerButton.svg')
    b.appendChild(img)
    // 点按图片和右侧区域会展开/折叠汉堡菜单
    b.onclick = function () {
      showBurger()
    }
    // c为底层的覆盖层，避免在折叠汉堡菜单的时候对页面的其他部分进行点按操作（也就是z-index属性高了一点）
    var c = document.createElement('div')
    c.setAttribute('data-type', 'burgerCover')
    d.appendChild(c)
    c.onclick = function () {
      showBurger()
    }

    document.querySelector('#hd h2.z').appendChild(b)
    hdbn.parentNode.insertBefore(d, hdbn)
  }

  // 折叠/展开汉堡菜单的函数
  function showBurger() {
    var burgerPage = document.querySelector('[data-type="burgerPage"]')
    
    if (burgerPage.classList.contains('show')) {
      burgerPage.classList.remove('show')
    } else {
      burgerPage.classList.add('show')
    }
  }

  // 用户登录按钮放置
  function userLogin() {
    var userStatus = document.querySelector('#um a')
    var temp = userStatus.querySelector('img')
    var c = document.querySelector('[data-type="burgerUser"]')
    var items = document.querySelectorAll('#um a')
    var exit = items[items.length - 1]
    if (temp) {
      temp = temp.parentNode
      var img = temp.cloneNode(true)
      img.setAttribute('data-type', 'burgerUserStatus')
      var name = temp.nextElementSibling.cloneNode(true)
      name.setAttribute('data-type', 'burgerUserName')
      exit = exit.cloneNode(true)
      exit.setAttribute('data-type', 'burgerUserExit')
      c.appendChild(img)
      c.appendChild(name)
      c.appendChild(exit)
    } else {
      var login = userStatus.cloneNode(true)
      login.setAttribute('data-type', 'burgerUserLogin')
      var register = userStatus.nextElementSibling.nextElementSibling.cloneNode(true)
      register.setAttribute('data-type', 'burgerUserRegister')
      c.appendChild(login)
      c.appendChild(register)
    }
  }
}());