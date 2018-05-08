const CountDown = require('../src/index');
CountDown.init({date:'2018/05/08 16:23',callback:()=>{
    console.log('第一个ok')
},update:(count)=>{
    console.log('第一个还剩:'+count +'s')
}}).init({date:'2018/05/08 16:24',callback:()=>{
    console.log('第二个ok')
},update:(count)=>{
    console.log('第二个还剩:'+count +'s')
}})
CountDown.init({date:20,callback:()=>{
    console.log('第三个ok')
},update:(count)=>{
    console.log('第三个还剩:'+count +'s')
}});