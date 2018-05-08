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
        timer:null,
        arr:[],
        //这里是否可以考虑传进来系统的当前日期作为基准值.
        init({ date, callback = () => { }, update = () => { } }) {
            let obj = {
                date:typeof date ==='object' ?date:new Date(date),
                callback,
                update
            };
            this.arr.push(obj);
            if(!this.timer){
                this.timer = setInterval(()=>{
                    this.update();
                },1000)
            }
            return this;
        }
        ,update(){
            let timer = setTimeout(()=>{
                clearTimeout(timer);
                let now = new Date();
                let second = parseInt(now.getTime()/1000);
                this.arr.forEach((item,idx)=>{
                    let targetSec = parseInt(item.date.getTime()/1000) ;
                    if(second>= targetSec){
                        //到时
                        item.callback();
                        this.arr.splice(idx, 1);
                        if(this.arr.length === 0){
                            clearInterval(this.timer);
                        }
                    }else{
                        item.update(targetSec - second);
                    }
                });
            })
        }
    }
    return CountDown;
});