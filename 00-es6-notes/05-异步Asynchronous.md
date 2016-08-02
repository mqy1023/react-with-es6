* 一、Promises基础

#### 一、Promises基础
1、Promises 可以让我们远离平行的代码（回调地狱）：
```
func1(function (value1) {
    func2(value1, function (value2) {
        func3(value2, function (value3) {
            });
        });
    });
});
```
转变成垂直代码：
```
func1(value1)
    .then(func2)
    .then(func3, value3 => {
        // Do something with value 3
    });
```
2、ES6 对 Promise 有了原生的支持，一个 Promise 是一个等待被异步执行的对象，当它执行完成后，其状态会变成 resolved 或者rejected。
```
var p = new Promise((resolve, reject) => {  
    if (/* condition */) {
      resolve(/* value */);  // fulfilled successfully
    } else {
      reject(new Error('/* reason */'));  // error, rejected
    }
  }).catch(reason => console.log(reason));
```
两个处理器，resolve（当Promise是 fulfilled 时的回调）和 reject（当Promise是 rejected 时的回调）：。
`Promises的好处：对错误的处理使用一些列回调会使代码很混乱，使用 Promise ，我看可以清晰的让错误冒泡并且在合适的时候处理它，甚至，在 Promise 确定了 resolved/rejected 之后，他的值是不可改变的－－它从来不会变化。`
3、每一个 Promise 都有一个 .then 方法，这个方法接受两个参数，第一个是处理 resolved 状态的回调，一个是处理 rejected 状态的回调：
```
p.then((val) => console.log("Promise Resolved", val),
       (err) => console.log("Promise Rejected", err));
```
4、多个Promise交互
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
5、Promise.all() 来 并行 处理多个异步函数：
```
let urls = [
  '/api/commits',
  '/api/issues/opened',
  '/api/issues/completed',
  '/api/pullrequests'
];

let promises = urls.map((url) => {
  return new Promise((resolve, reject) => {
    $.ajax({ url: url })
      .done((data) => {
        resolve(data);
      });
  });
});

Promise.all(promises)
  .then((results) => {
    // Do something with results of all our promises
 });
```
