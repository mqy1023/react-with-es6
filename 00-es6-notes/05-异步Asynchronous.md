* 一、Promises基础

#### 一、Promises基础
1、ES6 对 Promise 有了原生的支持，一个 Promise 是一个等待被异步执行的对象，当它执行完成后，其状态会变成 resolved 或者rejected。
```
var p = new Promise(function(resolve, reject) {  
  if (/* condition */) {
    resolve(/* value */);  // fulfilled successfully
  } else {
    reject(/* reason */);  // error, rejected
  }
});
```
2、每一个 Promise 都有一个 .then 方法，这个方法接受两个参数，第一个是处理 resolved 状态的回调，一个是处理 rejected 状态的回调：
```
p.then((val) => console.log("Promise Resolved", val),
       (err) => console.log("Promise Rejected", err));
```
3、多个Promise交互
```
var previousPromise = new Promise(function(resolve, reject){
  resolve(3);
});

var promise = new Promise(function(resolve, reject) {
  resolve( previousPromise );
});

promise.then( function(data) {
    console.log(data); // 3
  })
```
