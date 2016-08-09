
* 一、Classes类
* 二、Getters和Setters
* 三、继承(Inheritance)

#### 一、Classes类 <br />
ES6中的class类是基于Javascript原有的原型(prototype)继承(inheritance)，<br />
class并不是新的一种面向对象js模型，而是提供了更简单、更清晰创建对象和处理继承关系的语法【typeof Employee; //'function'】<br />
1、老方法编写一个类  <br />
```javascript
var Employee = function() { };
Employee.prototype = { //prototype
  doSomething: function(){
    return "done!";
  }  
};
var e = new Employee();
```
2、ES6编写类
```javascript
class Employee {
  doSomething() {
    return "complete!";  
  }
  doSomethingElse() {
    return "also complete!"  
  }
}
typeof Employee; // 'function'
var e = new Employee();
e.doSomething(); // "complete!"
```
3、Constructor构造器
```javascript
class Employee {
  constructor(name) {
    this._name = name;
  }
  doSomething() {
    return "complete!";
  }
  getName() {
    return this._name;
  }
}

let e1 = new Employee("Taylor");
let e2 = new Employee("Charles");

e1.getName(); // "Taylor"
e2.getName(); // "Charles"
```
#### 二、Getters和Setters
```javascript
class Person {
  constructor(name) {
    this.name = name;  
  }
  get name() {
    return this._name;
  }
  set name(newValue) {
    this._name = newValue;
  }
}
let e1 = new Person("Taylor");
console.log(e1.name); // "Taylor"
```
#### 三、继承(Inheritance)
extends继承、super父类、
```javascript
//在Getters和Setters的代码基础上
class Employee extends Person {
  constructor(title, name) {
    super(name);
    this._title = title;
  }
  doWork() {
    return `${this._name} is working`; // uses ES6's literal syntax
  }
}

let p1 = new Person("Taylor");
let e1 = new Employee("Chris");
e1.doWork(); // "Chris is working"
```
