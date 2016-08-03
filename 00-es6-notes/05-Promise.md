* 一、Promise
* 二、Promise基础
* 三、Promise的API
* 四、Promise实战

#### 一、Promise
Promise，就是一个对象，用来传递异步操作的消息。它代表了某个未来才会知道结果的事件（通常是一个异步操作），并且这个事件提供统一的API，可供进一步处理。 <br />

Promises的好处：对错误的处理使用一些列回调会使代码很混乱， <br />
使用 Promise ，我看可以清晰的让错误冒泡并且在合适的时候处理它， <br />
甚至，在 Promise 确定了 resolved/rejected 之后，他的值是不可改变的－－它从来不会变化。 <br />
Promises 可以让我们远离平行的代码（回调地狱）： <br />
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

#### 二、Promise基础

1、新建Promise <br />
Promise是一个构造函数（类），可以使用new运算符新建一个实例，然后就可以使用了，构造函数接受一个函数作为参数。
```
var p = new Promise((resolve, reject) => {  
    if (/* condition */) {
      resolve(/* value */);  // fulfilled successfully
    } else {
      reject(new Error('/* reason */'));  // error, rejected
    }
  });
p.then((value) => {
    console.log('p success', value);
});
p.catch((reason) => {
  console.log(reason);
});
```
两个处理器，resolve（当Promise是 fulfilled 时的回调）和 reject（当Promise是 rejected 时的回调）<br />

2、.then()方法
当创建好的promise执行完成后，其状态会变成 `resolved` 或者 `reject` <br />
可以通过then方法定制状态变化后的回调函数，该方法接受两个参数， <br />
第一个是处理 resolved 状态的回调，一个是处理 rejected 状态的回调：
```
p.then((val) => console.log("Promise Resolved", val),
       (err) => console.log("Promise Rejected", err));
```

3、多个promise交互
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

#### 三、Promise的API

1、Promise.all <br />
Promise.all(iterable) 方法返回一个promise，该promise会在iterable参数内的**所有promise都被解决**后被解决 <br/>

2、Promise.race <br />
Promise.race(iterable)方法返回一个promise，这个promise在iterable中的**任意一个promise被解决或拒绝**后，立刻以相同的解决值被解决或以相同的拒绝原因被拒绝 <br />

3、Promise.reject <br />
Promise.reject(reason)方法返回一个用reason拒绝的Promise。

4、Promise.resolve <br />
Promise.resolve(value)方法返回一个以给定值resolve掉的Promise对象。 <br />

#### 四、Promise实战

1、综合实战
```
// 1000ms 后success
var p1 = new Promise((resolve, reject) => {
    window.setTimeout(() => {resolve(123);}, 1000);
});

p1.then((data) => {
    console.log('p1 success', data);
});

// 2000ms 后success
var p2 = new Promise((resolve, reject) => {
    window.setTimeout(() => {resolve(456);}, 2000);
});

p2.then((data) => {
    console.log('p2 success', data);
});

var pa = Promise.all([p1, p2]);
var pr = Promise.race([p1, p2]);

pa.then((data) => {
    console.log('pa success', data);
});

pr.then((data) => {
    console.log('pr success', data);
});
```
上面的代码输出如下：
```
// 1000ms
p1 success 123
pr success 123

// 2000ms
p2 success 456
pa success [123, 456]
```
2、项目中实战
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
