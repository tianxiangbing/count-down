# CountDown
javascript CountDown,针对同时统计多个倒计时作处理，分别处理，使用同一个计时器。

# Use
```js
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
/*
第二个还剩:55s
第二个还剩:54s
第二个还剩:53s
第二个还剩:52s
第二个还剩:51s
第二个还剩:50s
第二个还剩:49s
第二个还剩:48s
第二个还剩:47s
第二个还剩:46s
第二个还剩:45s
第二个还剩:44s
第二个还剩:43s
第二个还剩:42s
第二个还剩:41s
第二个还剩:40s
第二个还剩:39s
第二个还剩:38s
第二个还剩:37s
第二个还剩:36s
第二个还剩:35s
第二个还剩:34s
第二个还剩:33s
第二个还剩:32s
第二个还剩:31s
第二个还剩:30s
第二个还剩:29s
第二个还剩:28s
第二个还剩:27s
第二个还剩:26s
第二个还剩:25s
第二个还剩:24s
第二个还剩:23s
第二个还剩:22s
第二个还剩:21s
第二个还剩:20s
第二个还剩:19s
第二个还剩:18s
第二个还剩:17s
第二个还剩:16s
第二个还剩:15s
第二个还剩:14s
第二个还剩:13s
第二个还剩:12s
第二个还剩:11s
第二个还剩:10s
第二个还剩:9s
第二个还剩:8s
第二个还剩:7s
第二个还剩:6s
第二个还剩:5s
第二个还剩:4s
第二个还剩:3s
第二个还剩:2s
第二个还剩:1s
第二个ok
*/
```