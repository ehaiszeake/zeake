function AutoRefresh(node) {
    /*
     * _init()方法生成dom结构
     * _timer保存着刷新的dom结构
     * _time是刷新的时间，整数
     * _status是决定刷新开始/结束的标识，布尔值
     * _appear()方法根据_status的状态更新dom的内容
     * _bindEvents()方法为单选框绑定鼠标点击事件，根据_status决定开启/关闭自动刷新
     * _interval是定时器，更新_time的大小
     */
    this._timer = this._init(node);
    this._time = 23.33;
    this._status = false;
    this._appear();
    this._bindEvents();
    this._interval = null;
}

AutoRefresh.prototype._init = function(node) {
    /*
     * 生成dom结构，添加到页面中
     * 返回dom作为备用
     */
    var timer = Z('<div data-type="autoRefresh" class="sidebar-module" style="margin-bottom: 20px; position: relative;"><div data-type="switcher"><div data-type="switch"></div></div><div data-type="switcherContent"></div></div>');

    node.after(timer);
    return timer;
}

AutoRefresh.prototype._appear = function() {
    /*
     * _status表示定时器的开始/结束，用布尔值定义
     * 根据_status的值进行内容的添加，便于识别
     */
    var self = this
    if (this._status) {
        this._timer.find('[data-type="switch"]').animate({
            'left': '30px'
        }, 'fast', function() {
            if (self._time > 23) {
                self._time = Number(self._time.toFixed(2));
            } else {
                self._time = Number(self._time.toFixed(0));
            }
            Z(this).parent().css({
                'background-color': '#17bcb8'
            }).next().get(0).innerText = '还有' + self._time + '秒刷新页面';
        })
    } else {
        this._timer.find('[data-type="switch"]').animate({
            'left': '0'
        }, 'fast', function() {
            Z(this).parent().css({
                'background-color': 'white'
            }).next().text('自动刷新已关闭')
        })
    }
}

AutoRefresh.prototype._bindEvents = function() {
    /*
     * 本意是给需要绑定事件的元素进行绑定，没想到这里只有一个需要，就变得简单了
     * 给checkbox绑定点击事件，用来更新_status的值并且触发start/stop方法
     */
    var that = this;
    this._timer.find('[data-type="switch"]').on('click', function() {
        that._status = !that._status;

        if (that._status) {
            that.start();
        } else {
            that.stop();
        }
    });
}

AutoRefresh.prototype.start = function() {
    /*
     * 计时器开始方法
     * 通过每一秒中减少_time的值来进行定时，每一次都会对页面进行更新给用户反馈
     * 当_time的值为0时，停止计时器并且刷新页面
     * 为了消除不同的计时器带来的影响，每一次设置定时器之前一定要先清除掉之前的计时器
     */
    var that = this;
    clearInterval(this._interval);
    this._status = true;
    this._appear();
    this._interval = setInterval(function() {
        that._time -= 1;
        that._appear();

        if (that._time < 0.0) {
            that.stop();
            document.location.reload();
        }
    }, 1000);
}

AutoRefresh.prototype.stop = function() {
    /*
     * 计时器关闭方法
     * 关闭之前也要清除之前的计时器，以防万一
     * 结束的时候其实页面已经刷新了，用户看到的应该是一个新的页面
     * 不过出现网络问题的时候页面可能不会立即刷新，所以就要在这里更新计时器的显示内容
     * 清除计时器、重设_time, _status，用_appear()进行更新
     */
    clearInterval(this._interval);
    this._interval = null;
    this._time = 23.33;
    this._status = false;
    this._appear();
}

AutoRefresh.prototype._autoStart = function() {
    /*
     * 如果_status初始值为true的话自动开启计时器
     */
    if (this._status) {
        this.start();
    }
}