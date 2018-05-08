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
 * npm install js-count-down --save
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

            var obj = {
                date: (typeof date === "undefined" ? "undefined" : _typeof(date)) === 'object' ? date : new Date(date),
                callback: callback,
                update: update
            };
            this.arr.push(obj);
            if (!this.timer) {
                this.timer = setInterval(function () {
                    _this.update();
                }, 1000);
            }
            return this;
        },
        update: function update() {
            var _this2 = this;

            var timer = setTimeout(function () {
                clearTimeout(timer);
                var now = new Date();
                var second = parseInt(now.getTime() / 1000);
                _this2.arr.forEach(function (item, idx) {
                    var targetSec = parseInt(item.date.getTime() / 1000);
                    if (second >= targetSec) {
                        //到时
                        item.callback();
                        _this2.arr.splice(idx, 1);
                        if (_this2.arr.length === 0) {
                            clearInterval(_this2.timer);
                        }
                    } else {
                        item.update(targetSec - second);
                    }
                });
            });
        }
    };
    return CountDown;
});