* 一、IIFE
* 二、CommonJS 模块化
* 三、AMD
* 四、ES6模块化

#### 一、立即自执行函数表达式immediately invoked function expression (IIFE)
1、通过target.Employee = Employee将其绑定给浏览器窗口, 全局暴露
2、privateDoWork只在IIFE的closure中可见
```
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
```
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
```
var Employee = require('./Employee').Employee;

var e1 = new Employee("Taylor");
console.log(e1.doWork()); // "Taylor is working"
```
#### 三、AMD
```
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
```
define(["employee"], function(Employee){
  var e = new Employee("Taylor");
});
```
#### 四、ES6
```
export class Employee {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  doWork {
    return `${this._name} is working`;
  }
}
```
```
import {Employee} from './es6/employee';

var e = new Employee("Taylor");
e.doWork();
```
