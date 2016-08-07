* 一、箭头函数=>
* 二、箭头作为异步callback
* 三、迭代器（Iterators）
* 四、生成器(Generators)

#### 一、箭头函数(Arrow Functions) <br />
[《箭头函数》链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions) <br />
1、基础语法
```javascript
(param1, param2, …, paramN) => { statements }

(param1, param2, …, paramN) => expression
         // 相当于:          => { return expression; }

// 如果只有一个参数，圆括号是可选的:
(singleParam) => { statements }
singleParam => { statements }

// 无参数的函数需要使用圆括号:
() => { statements }
```
2、高级语法
```javascript
// 返回对象字面量时应当用圆括号将其包起来:
params => ({foo: bar})

// 支持 Rest parameters 和 default parameters:
(param1, param2, ...rest) => { statements }
(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }

// Destructuring within the parameter list is also supported
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f();  // 6
```
3、更短的函数
```javascript
var arr = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryl­lium"
];
var a2 = arr.map(function(a){ return a.length });
//更短的函数写法
var a3 = arr.map( s => s.length );//[8, 6, 7, 10]
```
4、箭头函数中`this`总是绑定指向对象自身 <br />
解决了ES5中需要给回调函数维护一个词法作用域的上下文this(var that = this;) <br/>
```javascript
//ES5中
var age = 100;
function Person() {
  this.age = 0;

  setInterval(function growUp() {
    // 在非严格模式下，growUp() 函数的 this 指向 window 对象
    this.age++;
    console.log(this.age);//101,102...
  }, 1000);
}
var person = new Person();

//ES6实现
function Person(){
  this.age = 0;

  setInterval(() => {
    // |this| 指向 person 对象
    this.age++;
    console.log(this.age); //1,2...
  }, 1000);
}
var person = new Person();
```
5、使用 call 或 apply 调用 <br />
由于 this 已经在词法层面完成了bound，通过 call() 或 apply() 方法调用一个函数时，只是传入了参数而已，对 this 并没有什么影响：
```javascript
var adder = {
  base : 1,

  add : function(a) {
    var f = v => v + this.base;
    return f(a);
  },

  addThruCall: function(a) {
    var f = v => v + this.base;
    var b = {
      base : 2
    };

    return f.call(b, a);
  }
};

console.log(adder.add(1));         // 输出 2
console.log(adder.addThruCall(1)); // 仍然输出 2（而不是3)
```
6、arguments 的词法 <br />
箭头函数不会在其内部暴露出  arguments 对象： arguments.length, arguments[0], arguments[1] 等等，都不会指向箭头函数的 arguments，而是指向了箭头函数所在作用域的一个名为 arguments 的值（如果有的话，否则，就是 undefined）
```javascript
var arguments = 42;
var arr = () => arguments;

arr(); // 42

function foo() { //foo 的arguments
  var f = () => arguments[0]; // foo's implicit arguments binding
  return f(2);
}

foo(1); // 1
```
箭头函数没有自己的 arguments 对象，不过在大多数情形下，rest参数可以给出一个解决方案：
```javascript
function foo() {
  var f = (...args) => args[0];
  return f(2);
}

foo(1); // 2
```
**更多示例**
```javascript
// 一个空箭头函数,返回 undefined
let empty = () => {};

(() => "foobar")() // 返回 "foobar"

var simple = a => a > 15 ? 15 : a;
simple(16); // 15
simple(10); // 10

let max = (a, b) => a > b ? a : b;

// Easy array filtering, mapping, ...

var arr = [5, 6, 13, 0, 1, 18, 23];
var sum = arr.reduce((a, b) => a + b);  // 66
var even = arr.filter(v => v % 2 == 0); // [6, 0, 18]
var double = arr.map(v => v * 2);       // [10, 12, 26, 0, 2, 36, 46]
```

#### 二、箭头作为异步callback
```javascript
this.name = "Taylor";

ajaxCall("aUrl", (response) => {
  this.name = response.data;
});
```
#### 三、迭代器（Iterators）
迭代器允许每次访问数据集合的一个元素，当指针指向数据集合最后一个元素是，迭代器便会退出。它提供了 next() 函数来遍历一个序列，这个方法返回一个包含 done 和 value 属性的对象。 <br/>
ES6 中可以通过 Symbol.iterator 给对象设置默认的遍历器，无论什么时候对象需要被遍历，执行它的 @@iterator 方法便可以返回一个用于获取值的迭代器。<br/>
数组默认就是一个迭代器：
```javascript
var arr = [11,12,13];
var itr = arr[Symbol.iterator]();

itr.next(); // { value: 11, done: false }
itr.next(); // { value: 12, done: false }
itr.next(); // { value: 13, done: false }

itr.next(); // { value: undefined, done: true }
```
你可以通过 [Symbol.iterator]() 自定义一个对象的迭代器。
#### 四、生成器(Generators)
就像 Promises 可以帮我们避免回调地狱，Generators 可以帮助我们让代码风格更整洁－<br/>
－用同步的代码风格来写异步代码，它本质上是一个可以暂停计算并且可以随后返回表达式的值的函数。<br/>
Generator 函数是 ES6 的新特性，它允许一个函数返回的可遍历对象生成多个值。<br/>
在使用中你会看到 * 语法和一个新的关键词 yield:
```javascript
function* infiniteNumbers() {
  var n = 1;
  while (true){
    yield n++;
  }
}
var numbers = infiniteNumbers(); // returns an iterable object

numbers.next(); // { value: 1, done: false }
numbers.next(); // { value: 2, done: false }
numbers.next(); // { value: 3, done: false }
```
每次执行 yield 时，返回的值变为迭代器的下一个值。
```javascript
let numbers = function*(start, end) {
  for(let i = start; i <= end; i++) {
    console.log(i);
    yield i;
  }
};
//使用"for of" with a Generator
let sum = 0;
for(let n of numbers(1,5)){
  sum += n;
  console.log("next");
}

sum; // 15
```
可以利用 Generators 来用同步的方式来写异步操作：
```javascript
// Hiding asynchronousity with Generators
function getRequest(url) {
    getJSON(url, function(response) {
        generator.next(response);
    });
}
```
这里的 generator 函数将会返回需要的数据：
```javascript
function* getData() {
    var entry1 = yield getRequest('http://some_api/item1');
    var data1  = JSON.parse(entry1);
    var entry2 = yield getRequest('http://some_api/item2');
    var data2  = JSON.parse(entry2);
}
```
通过 yield，我们可以保证 entry1 有 data1 中我们需要解析并储存的数据。<br />
虽然我们可以利用 Generators 来用同步的方式来写异步操作，但是确认错误的传播变得不再清晰，我们可以在 Generators 中加上 Promise：
```javascript
function request(url) {
    return new Promise((resolve, reject) => {
        getJSON(url, resolve);
    });
}
```
然后我们写一个函数逐步调用 next 并且利用 request 方法产生一个 Promise：
```javascript
function iterateGenerator(gen) {
    var generator = gen();
    (function iterate(val) {
        var ret = generator.next();
        if(!ret.done) {
            ret.value.then(iterate);
        }
    })();
}
```
在 Generators 中加上 Promise 之后我们可以更清晰的使用 Promise 中的 .catch 和 reject来捕捉错误，让我们使用新的 Generator，和之前的还是蛮相似的：
```javascript
iterateGenerator(function* getData() {
    var entry1 = yield request('http://some_api/item1');
    var data1  = JSON.parse(entry1);
    var entry2 = yield request('http://some_api/item2');
    var data2  = JSON.parse(entry2);
});
```
