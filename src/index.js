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
    if (typeof exports === "object") {
        module.exports = definition();
        // RequireJS
    } else if (typeof define === "function" && define.amd) {
        define(definition);
    } else {
        DataAdapter = definition();
    }
})(function () {
    "use strict";
    const CountDown = {

    }
    return CountDown;
});