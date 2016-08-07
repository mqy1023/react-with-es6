* 一、ECMAScript 6新标记
* 二、把对象的值复制一份到另一个对象(Object.assign())

#### 一、ECMAScript 6新标记
[《Object initializer》](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)

* 1、属性的简写
* 2、方法的简写，"function" 关键字也可以丢掉
* 3、计算的属性名
```javascript
// 1、Shorthand property names (ES6)
var a = "foo", b = 42, c = {};
var o = { a, b, c };

// 2、Shorthand method names (ES6)
var o = {
  property([parameters]) {},
  get property() {},
  set property(value) {},
  * generator() {}
};
/* 生成器ES5和ES6对比
1、//EC6提供了一种简明地定义以生成器函数作为值的属性的方法
var o = {
  * generator() {
    ...........
  }
};
2、ECMAScript 5 中可以这样书写 (需要注意的时 ES5 没有生成器)：
var o = {
  generatorMethod: function *() {
    ...........
  }
};
*/

// 3、Computed property names (ES6)
var prop = "foo";
var o = {
  [prop]: "hey",
  ["b" + "ar"]: "there",
};
```

#### 七、把对象的值复制一份到另一个对象(Object.assign())
```javascript
let num1 = {one: 1};
let num2 = Object.assign({}, num1, {two: 2});
console.log(num1);//{one: 1}
console.log(num2);//{one: 1, two: 2}
```
