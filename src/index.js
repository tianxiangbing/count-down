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
    if (typeof exports === "object") {
        module.exports = definition();
        // RequireJS
    } else if (typeof define === "function" && define.amd) {
        define(definition);
    } else {
        CountDown = definition();
    }
})(function () {
    "use strict";
    const CountDown = {
        timer: null,
        arr: [],
        //这里是否可以考虑传进来系统的当前日期作为基准值.
        init({ date, callback = () => { }, update = () => { } }) {
            //对传递的时间作兼容处理，可接收时间对象和时间秒
            if (typeof date === 'object') {
                //时间对象
                date = date.getTime();
            } else
                if (typeof date === 'number') {
                    if (String(date).length > 8) {
                        date = new Date(date);
                    } else {
                        let now = +new Date();
                        date = now + date * 1000;
                        console.log(date, 111)
                    }
                } else if (typeof date === 'string') {
                    let d = new Date(date);
                    date = d.getTime()
                }
            let obj = {
                date,
                callback,
                update
            };
            this.arr.push(obj);
            if (!this.timer) {
                // this.update();
                this.timer = setInterval(() => {
                    this.update();
                }, 1000)
            }
            return this;
        }
        , update() {
            let now = new Date();
            let second = Math.ceil(now.getTime() / 1000);
            // console.log('second',second);
            let timer = setTimeout(() => {
                this.arr.forEach((item, idx) => {
                    let targetSec = Math.ceil(item.date / 1000);
                    if (second >= targetSec) {
                        //到时
                        item.callback();
                        this.arr.splice(idx, 1);
                        if (this.arr.length === 0) {
                            // console.log('over')
                            clearInterval(this.timer);
                            this.timer = null;
                        }
                    } else {
                        // console.log(targetSec,second)
                        let ms = targetSec - second;
                        item.update(this.formatTime(ms * 1000));
                    }
                });
                clearTimeout(timer);
                timer = null;
            }, 0)
        },
        /* 
        * 毫秒转化时分秒毫秒 
        */
        formatTime(mss) {
            if (mss <= 0) {
                return '00';
            }
            var days = parseInt(mss / (1000 * 60 * 60 * 24));
            var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = (mss % (1000 * 60)) / 1000;
            let returnValue = '';
            if (days > 0) {
                returnValue += days + "天";
            }
            if (hours > 0) {
                returnValue += hours + "小时";
            }
            returnValue += (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
            return returnValue;
        }
    }
    return CountDown;
});