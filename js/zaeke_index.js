$(function () {
    // 窗口滚动固定顶部导航
    var isFixed = false
    var isEnd = false
    $(window).scroll(function () {
        // 未固定
        if (!isFixed) {
            if (!isEnd) {
                if ($(window).scrollTop() > $(".nav").height()) {
                    $(".logo").css("display", "none")
                    $(".category").css("display", "none")
                    $(".fixedNav").css("display", "block")
                    isEnd = true
                    $(".bannerarea").css("padding-top", "108px")
                    $(".nav").css({
                        "position": "fixed",
                        "top": "-60px",
                        "left": "0px",
                        "z-index": "99",
                        "transition": "all 10s ease 0.5"
                    })
                    $(".nav").animate({
                        top: "0px"
                    }, function () {
                        isFixed = true
                    })
                }
            }
        } else {
            // 已经固定
            if ($(window).scrollTop() < $(".nav").height()) {
                $(".logo").css("display", "block")
                $(".category").css("display", "block")
                $(".fixedNav").css("display", "none")
                $(".bannerarea").css("padding-top", "12px")
                $(".nav").css({
                    "position": "static",
                    "top": "-96px",
                })
                isFixed = false
                isEnd = false
            }
        }

    })

    // fixed固定时搜索框失去焦点隐藏搜索框
    $(".fixedNav .searchbox").blur(function () {
        $(this).removeClass("focus")                
        $(".fixedNav .searchbox,.searchfont").css("display", "none").parent().css("border-left", "none")
        $(".fixedNav .ico").css("display", "block")
    }).focus(function () {
        $(this).addClass("focus")
    })


    // fixed固定的时候点击图标显示搜索框
    $(".fixedNav .ico").click(function () {
        $(this).css("display", "none")
        $(".fixedNav .searchbox,.searchfont").css("display", "block")
        $(".fixedNav .search").css("border-left", "4px solid #10cc70")
    })

    // 搜索框获得焦点事件和事去焦点事件
    $(".category .searchbox").focus(function () {
        if (!isFixed) {
            $(".category .searchbox").addClass("focus")
        }
        $(this).prev().css("display", "none").next().next().css("display", "block").parent().css("border-left", "4px solid #10cc70")
    }).blur(function () {
        $(".category .searchbox").removeClass("focus").next().css("display", "none")
        $(this).prev().css("display", "block").parent().css("border-left", "none")
    })

    // 专题特效
    $(".zhuanti").mouseenter(function () {
        $(".mask").css({
            "display": "block"
        })
        $(".zhuanti").css({
            "height": "100px",
            "transition": "height 0.3s ease-in"
        })
        $(this).children(".mask").css({
            "display": "none",
        })
        if ($(this).attr("index") == 1) {
            $(this).css({
                "height": "150px",
                "transition": "height 0.3s ease-in"
            })
            $(this).next().css({
                "height": "75px",
                "transition": "height 0.3s ease-in"
            }).next().css({
                "height": "75px",
                "transition": "height 0.3s ease-in"
            })
        } else if ($(this).attr("index") == 2 || $(this).attr("index") == 3 || $(this).attr("index") == 4) {
            $(this).css({
                "height": "150px",
                "transition": "height 0.3s ease-in"
            })
            $(this).next().css({
                "height": "75px",
                "transition": "height 0.3s ease-in"
            })
            $(this).prev().css({
                "height": "75px",
                "transition": "height 0.3s ease-in"
            })
        } else if ($(this).attr("index") == 5) {
            $(this).css({
                "height": "150px",
                "transition": "height 0.3s ease-in"
            })
            $(this).prev().css({
                "height": "75px",
                "transition": "height 0.3s ease-in"
            }).prev().css({
                "height": "75px",
                "transition": "height 0.3s ease-in"
            })
        }
    }).mouseleave(function () {
        $(".mask").css({
            "display": "block"
        })
        $(".zhuanti").css({
            "height": "100px",
            "transition": "height 0.3s ease-in"
        })
    });

    // 设定ul宽度和left值
    setWidth()

    function setWidth() {
        if (parseInt($(".outul").css("left")) != 0) {
            // 需要重置
            if (ulIndex + 1 == lastIndex) {
                $(".outul").css({
                    "left": $(".article").width() * (ulIndex + 1) - (($(".outul>.item").length % 4)) * ($(".outul>.item").width() + 12) + "px"
                })
            } else {
                $(".outul").css({
                    "left": $(".article").width() * ulIndex + "px"
                })
            }
        } else {
            // 不需要重置
        }
        $(".outul>.item").css({
            "width": ($(".article").width() * 0.25 - 9).toString()
        })

        $(".outul").css({
            "width": $(".article").width() * Math.ceil($(".outul>.item").length / 4)
        })
        $(".arrow").css({
            "top": $(".articleImg").height() / 2 - 20
        })

        $(`.outul>.item:nth-last-child(${$(".outul>.item").length % 4})`).css("margin-left", "12px")
    }

    // 设置滑动条index 
    var ulIndex = 0;

    // 串口拉伸重置宽度
    $(window).resize(function () {
        setWidth()
        keepSame()
    })

    // banner保持高度一制
    keepSame()

    function keepSame() {
        $(".banner").height($(".leftBanner").height())
    }

    // 滑动特效
    var slideFlag = true
    var lastIndex = -Math.floor($(".outul>.item").length / 4) + 1
    // 左右滑动点击状态判断设置
    clickState()

    function clickState() {
        if (ulIndex == Math.ceil($(".outul>.item").length / 4) - 1) {
            $(".arrow-right").addClass("noRight")
            $(".noRight").removeClass("arrow-right")
        }
    }


    $(".arrow").click(function () {
        if (slideFlag) {
            slideFlag = false
            if ($(this).hasClass("arrow-right") || $(this).hasClass("noRight")) {
                if (parseInt($(".outul").css("left")) <= 0) {
                    if (ulIndex == lastIndex) {
                        $(".outul").animate({
                            left: parseInt($(".outul").css("left")) - (($(".outul>.item").length % 4)) * ($(".outul>.item").width() + 12)
                        }, function () {
                            slideFlag = true
                            $(".noLeft").addClass("arrow-left")
                            $(".arrow-left").removeClass("noLeft")
                        })
                        ulIndex -= 1
                    } else {
                        if (ulIndex > lastIndex) {
                            $(".outul").animate({
                                left: parseInt($(".outul").css("left")) - $(".article").width()
                            }, function () {
                                slideFlag = true
                                $(".noLeft").addClass("arrow-left")
                                $(".arrow-left").removeClass("noLeft")
                            })
                            ulIndex -= 1
                        } else {
                            slideFlag = true
                        }
                    }
                } else {
                    slideFlag = true
                }
            } else {
                if (ulIndex + 1 == lastIndex) {
                    if (parseInt($(".outul").css("left")) != 0) {
                        ulIndex += 1
                        $(".outul").animate({
                            left: parseInt($(".outul").css("left")) + (($(".outul>.item").length % 4)) * ($(".outul>.item").width() + 12)
                        }, function () {
                            slideFlag = true
                            $(".noRight").addClass("arrow-right")
                            $(".arrow-right").removeClass("noRight")
                        })
                    } else {
                        slideFlag = true
                    }
                } else {
                    if (parseInt($(".outul").css("left")) != 0) {
                        ulIndex += 1
                        $(".outul").animate({
                            left: parseInt($(".outul").css("left")) + $(".article").width()
                        }, function () {
                            slideFlag = true
                            $(".noRight").addClass("arrow-right")
                            $(".arrow-right").removeClass("noRight")
                        })
                    } else {
                        slideFlag = true
                    }
                }
            }
        }
        if (lastIndex == ulIndex + 1) {
            $(".arrow-right").addClass("noRight")
            $(".noRight").removeClass("arrow-right")
        } else if (ulIndex == 0) {
            $(".arrow-left").addClass("noLeft")
            $(".noLeft").removeClass("arrow-left")
        }
    })



    // 点击登录注册弹窗
    $(".loginbtn,.registerbtn").click(function () {
        $(".bindphone").css("display", "none")
        $(".loginbox").css("display", "block")
        $(".findpassword").css("display", "none")
        $(".relativeZaeke").css("display", "none")
        $(".loginbox").animate({
            opacity: 1
        })
        if ($(this).html() == "登录") {
            // 登录框
            $(".login").css("display", "block")
            $(".regist").css("display", "none")
        } else {
            // 注册框
            $(".login").css("display", "none")
            $(".regist").css("display", "block")
        }
    })

    // 点击关闭关闭弹窗
    $(".close").click(function () {
        $(".loginbox").animate({
            opacity: 0
        }, function () {
            $(".loginbox").css("display", "none")
        })
        $(".findpassword .l_btn").text("找回密码")
        $(".findpassword .loginButton").text("下一步")
        $(".findpassword .tips").css("display", "block")
        $(".findpassword li:lt(2)").css("display", "block")
        $(".findpassword li:gt(1)").css("display", "none")
    })

    // 关闭遮罩方法
    function closeMask() {
        $(".loginbox").animate({
            opacity: 0
        }, function () {
            $(".loginbox").css("display", "none")
        })
    }
    // 打开遮罩方法
    function openMask() {
        $(".loginbox").css("display", "block")
        $(".loginbox").animate({
            opacity: 1
        })
    }

    // 点击登录,注册,下一步,确定按钮进行判断登录
    $(".loginButton").click(function () {
        // closeMask()
        if ($(this).text() == "登录") {
            closeMask()
            $(".logsuccess").text("登录成功,欢迎回来")
            $(".logsuccess").css({
                "display": "block",
            })
            $(".logsuccess").animate({
                opacity: 1
            }, 2000, function () {
                $(".logsuccess").css({
                    display: "none",
                    opacity: 1
                })
                openMask()
                $(".login").css("display", "none")
                $(".regist").css("display", "none")
                $(".bindphone").css("display", "block")
            })
        } else if ($(this).text() == "注册") {
            closeMask()
            $(".logsuccess").text("注册成功，去登录")
            $(".logsuccess").css({
                "display": "block",
            })
            $(".logsuccess").animate({
                opacity: 1
            }, 2000, function () {
                $(".logsuccess").css({
                    display: "none",
                    opacity: 1
                })
                document.querySelector(".loginbtn").click()
            })
        } else if ($(this).text() == "下一步") {
            $(this).text("确定")
            $(".findpassword .l_btn").text("重置密码")
            $(".findpassword .tips").css("display", "none")
            $(".findpassword li:lt(2)").css("display", "none")
            $(".findpassword li:gt(1)").css("display", "block")
        } else if ($(this).text() == "确定") {
            $(".findpassword").css("display", "none")
            closeMask()
            $(".findpassword .l_btn").text("找回密码")
            $(".findpassword .tips").css("display", "block")
            $(".findpassword li:lt(2)").css("display", "block")
            $(".findpassword li:gt(1)").css("display", "none")
            $(".logsuccess").text("修改密码成功，请登录")
            $(".logsuccess").css({
                "display": "block",
            })
            $(".logsuccess").animate({
                opacity: 1
            }, 2000, function () {
                $(".logsuccess").css({
                    display: "none",
                    opacity: 1
                })
                openMask()
                $(".login").css("display", "block")
                $(".regist").css("display", "none")
                $(".bindphone").css("display", "none")
            })
        } else if ($(this).text() == "注册并绑定" || $(this).text() == "绑定") {
            closeMask()
            $(".logsuccess").text("绑定成功，已登录")
            $(".logsuccess").css({
                "display": "block",
            })
            $(".logsuccess").animate({
                opacity: 1
            }, 2000, function () {
                $(".logsuccess").css({
                    display: "none",
                    opacity: 1
                })
            })
        }
    })

    // 登录注册页里登录注册切换
    $(".g_regist").click(function () {
        if ($(this).text() == "注册") {
            $(".regist").css("display", "block")
            $(".login").css("display", "none")
        } else {
            $(".regist").css("display", "none")
            $(".login").css("display", "block")
            $(".findpassword").css("display", "none")
        }
    })

    // 阻止事件冒泡到mask层
    $(".login, .regist, .bindphone, .findpassword, .relativeZaeke").click(function (event) {
        event.stopPropagation();
    })

    // 点击遮罩隐藏
    $(".loginbox").click(function () {
        closeMask()
    })

    // 忘记密码
    $(".forget").click(function () {
        $(".login").css("display", "none")
        $(".relativeZaeke").css("display", "none")
        $(".findpassword").css("display", "block")
    })


    // 点击第三方登录
    $(".qq, .weibo, .weixin").click(function () {
        $(".login").css("display", "none")
        $(".relativeZaeke").css({
            "display": "block",
            "height": "676px"
        })
        $(".relativeZaeke .new").css("display", "block")
        $(".relativeZaeke .old").css("display", "none")
        // $(".relativeZaeke .switchCount").removeClass("pointer")
        $(".relativeZaeke .switchCount:nth-child(2)").css("color", "#10CC70").prev().css("color", "#464646")
        $(".relativeZaeke .agree").css("display", "block")
        $(".relativeZaeke .forget").css("display", "none")
    })

    // 绑定新账号与绑定已有账号切换
    $(".switchCount").click(function () {
        if ($(this).hasClass("pointer")) {
            if ($(this).text() == "创建新帐号") {
                $(this).text("绑定已有帐号").prev().text("创建新帐号")
                $(".relativeZaeke .loginButton").text("注册并绑定")
                $(".relativeZaeke").css("height", "676px")
                $(".relativeZaeke .forget").css("display", "none")
                $(".relativeZaeke .old").css("display", "none")
                $(".relativeZaeke .new").css("display", "block")
                $(".relativeZaeke .agree").css("display", "block")
            } else {
                $(this).text("创建新帐号").prev().text("绑定已有帐号")
                $(".relativeZaeke .loginButton").text("绑定")
                $(".relativeZaeke").css("height", "480px")
                $(".relativeZaeke .new").css("display", "none")
                $(".relativeZaeke .old").css("display", "block")
                $(".relativeZaeke .agree").css("display", "none")
                $(".relativeZaeke .forget").css("display", "block")
            }
        }
    })

    // 获取验证码
    $(".getcode").click(function () {
        var counts = 60
        var that = this
        var timer = setInterval(function () {
            if (counts == -1) {
                console.log("结束了");
                $(that).text("获取验证码").css({
                    "color": "#10CC70",
                    "border": "1px solid #10CC70",
                    "background-color": "#fff"
                })
                clearInterval(timer)
            } else {
                $(that).text(counts + "s").css({
                    "color": "#AEAEAE",
                    "border": "none",
                    "background-color": "#f6f6f6"
                })
                counts--
            }
        }, 1000)
    })
})