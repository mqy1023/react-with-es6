* 一、IIFE
* 二、CommonJS 模块化
* 三、AMD
* 四、ES6模块化

#### 一、立即自执行函数表达式immediately invoked function expression (IIFE)
1、通过target.Employee = Employee将其绑定给浏览器窗口, 全局暴露
2、privateDoWork只在IIFE的closure中可见
```javascript
(function(target) {
  var privateDoWork = function(name) {
    return name + " is working";
  };

  var Employee = function(name) {
    this.name = name;
  }

  Employee.prototype = {
    doWork: function() {
      return privateDoWork(this.name);
    }
  }

  target.Employee = Employee;
}(window));
```
#### 二、CommonJS
exports 和 require.
```javascript
var privateDoWork = function(name) {
  return name + " is working";
}

var Employee = function(name) {
  this.name = name;
}

Employee.prototype = {
  doWork: function() {
    return privateDoWork(this.name);
  }
}

exports.Employee = Employee;
```
```javascript
var Employee = require('./Employee').Employee;

var e1 = new Employee("Taylor");
console.log(e1.doWork()); // "Taylor is working"
```
#### 三、AMD
```javascript
// employee.js
define(function() {
  var privateDoWork = function() {
    // ...
  }
  var Employee = function(name) {
    // ...
  }
  return Employee;
});
```
```javascript
define(["employee"], function(Employee){
  var e = new Employee("Taylor");
});
```
#### 四、ES6
一个ES6模块(module)是一个包含js代码的文件 <br />
1、Export <br />
可以export出函数、class、var、let、const
```javascript
//utility.js, 暴露一个对象列表
function generateRandom() {
  return Math.random();
}
function sum(a, b) {
  return a + b;
}
export { generateRandom, sum }
```
2、Default Exports
```javascript
var utils = {
  generateRandom() {
    return Math.random();
  },
  sum(a, b) {
    return a + b;
  }
};
export default utils;
```
3、Import
```javascript
import { generateRandom, sum } from 'utility';
console.log(generateRandom()); //logs a random number
console.log(sum(1, 2)); //3

//import default
//import utils from 'utility';
//console.log(utils.generateRandom()); //logs a random number //console.log(utils.sum(1, 2)); //3
```
4、重命名导入：
```javascript
import {
    sumTwo as addTwoNumbers,
    sumThree as sumThreeNumbers
} from 'math/addition';
```
5、导入所有的东西（整体加载）：
```javascript
import * as util from 'math/addition';

//可以从一个模块中导入一个值的列表：
import * as additionUtil from 'math/addition';
const { sumTwo, sumThree } = additionUtil;
```
6、混合默认default的导入和混合导入
```javascript
import defaultFoo, { foo1, foo2 } from 'foos';

//react的导入
import React, { Component, PropTypes } from 'react';
```
