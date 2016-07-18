* 一、箭头函数=>
* 二、箭头作为异步callback
* 三、迭代器（Iterators）
* 四、生成器(Generators)

#### 一、箭头函数(Arrow Functions) <br />
1、省略return
```
var getPrice = function() { //ES5
  return 5.55;
};

// Implementation with Arrow Function
var getPrice = () => 5.55;
```
2、箭头函数中`this`总是绑定指向对象自身
```
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
3、带一个和多个参数的写法
```
let add = (x,y) => x + y;
let square = x => x * x;

square(add(2,3)); // 25
//let add = (x,y) => { //非省略return的写法
//  let temp = x + y;
//  return temp;
//};
```
4、无参
```
let three = () => 3;
```
5、箭头函数作为其他函数的参数
```
var numbers = [1, 2, 3, 4];

var sum = 0;
numbers.forEach(n => sum += n); // 10
```
6、返回新的数组
```
let numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);

console.log(doubled); //[2, 4, 6, 8]
```

7、返回一个对象
```
let funcObj = () => ({
	obj: 123
})
//相当于return返回了{obj: 123}对象
```

#### 二、箭头作为异步callback
```
this.name = "Taylor";

ajaxCall("aUrl", (response) => {
  this.name = response.data;
});
```
#### 三、迭代器（Iterators）
迭代器允许每次访问数据集合的一个元素，当指针指向数据集合最后一个元素是，迭代器便会退出。它提供了 next() 函数来遍历一个序列，这个方法返回一个包含 done 和 value 属性的对象。 <br/>
ES6 中可以通过 Symbol.iterator 给对象设置默认的遍历器，无论什么时候对象需要被遍历，执行它的 @@iterator 方法便可以返回一个用于获取值的迭代器。<br/>
数组默认就是一个迭代器：
```
var arr = [11,12,13];
var itr = arr[Symbol.iterator]();

itr.next(); // { value: 11, done: false }
itr.next(); // { value: 12, done: false }
itr.next(); // { value: 13, done: false }

itr.next(); // { value: undefined, done: true }
```
你可以通过 [Symbol.iterator]() 自定义一个对象的迭代器。
#### 四、生成器(Generators)
Generator 函数是 ES6 的新特性，它允许一个函数返回的可遍历对象生成多个值。<br/>
在使用中你会看到 * 语法和一个新的关键词 yield:
```
function *infiniteNumbers() {
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
```
let numbers = function*(start, end) {
  for(let i = start; i <= end; i++) {
    console.log(i);
    yield i;
  }
};

let sum = 0;
for(let n of numbers(1,5)){
  sum += n;
  console.log("next");
}

sum; // 15
```
使用"for of" with a Generator













1
