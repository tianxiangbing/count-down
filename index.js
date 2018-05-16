"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * Created with Visual Studio Code.
 * github: https://github.com/tianxiangbing/count-down
 * User: 田想兵
 * Date: 2018-05-08
 * Time: 20:00:00
 * Contact: 55342775@qq.com
 * desc: 倒计时
 * 请使用https://github.com/tianxiangbing/count-down 上的代码
 * npm install js-count-downx --save
 */
(function (definition) {
    // 
    if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
        module.exports = definition();
        // RequireJS
    } else if (typeof define === "function" && define.amd) {
        define(definition);
    } else {
        CountDown = definition();
    }
})(function () {
    "use strict";

    var CountDown = {
        timer: null,
        arr: [],
        //这里是否可以考虑传进来系统的当前日期作为基准值.
        init: function init(_ref) {
            var _this = this;

            var date = _ref.date,
                _ref$callback = _ref.callback,
                callback = _ref$callback === undefined ? function () {} : _ref$callback,
                _ref$update = _ref.update,
                update = _ref$update === undefined ? function () {} : _ref$update;

            //对传递的时间作兼容处理，可接收时间对象和时间秒
            if ((typeof date === "undefined" ? "undefined" : _typeof(date)) === 'object') {
                //时间对象
                date = date.getTime();
            } else if (typeof date === 'number') {
                if (String(date).length > 8) {
                    date = new Date(date);
                } else {
                    var now = +new Date();
                    date = now + date * 1000;
                    console.log(date, 111);
                }
            } else if (typeof date === 'string') {
                var d = new Date(date);
                date = d.getTime();
            }
            var obj = {
                date: date,
                callback: callback,
                update: update
            };
            this.arr.push(obj);
            if (!this.timer) {
                // this.update();
                this.timer = setInterval(function () {
                    _this.update();
                }, 1000);
            }
            return this;
        },
        update: function update() {
            var _this2 = this;

            var now = new Date();
            var second = Math.ceil(now.getTime() / 1000);
            // console.log('second',second);
            var timer = setTimeout(function () {
                _this2.arr.forEach(function (item, idx) {
                    var targetSec = Math.ceil(item.date / 1000);
                    if (second >= targetSec) {
                        //到时
                        item.callback();
                        _this2.arr.splice(idx, 1);
                        if (_this2.arr.length === 0) {
                            // console.log('over')
                            clearInterval(_this2.timer);
                        }
                    } else {
                        // console.log(targetSec,second)
                        var ms = targetSec - second;
                        item.update(_this2.formatTime(ms * 1000));
                    }
                });
                clearTimeout(timer);
            }, 0);
        },

        /* 
        * 毫秒转化时分秒毫秒 
        */
        formatTime: function formatTime(mss) {
            if (mss <= 0) {
                return '00';
            }
            var days = parseInt(mss / (1000 * 60 * 60 * 24));
            var hours = parseInt(mss % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            var minutes = parseInt(mss % (1000 * 60 * 60) / (1000 * 60));
            var seconds = mss % (1000 * 60) / 1000;
            var returnValue = '';
            if (days > 0) {
                returnValue += days + "天";
            }
            if (hours > 0) {
                returnValue += hours + "小时";
            }
            returnValue += (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
            return returnValue;
        }
    };
    return CountDown;
});