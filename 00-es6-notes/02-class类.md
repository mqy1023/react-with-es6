
* 一、Classes类
* 二、Getters和Setters
* 三、继承(Inheritance)

#### 一、Classes类 <br />
1、老方法编写一个类  <br />
```
var Employee = function() { };
Employee.prototype = { //prototype
  doSomething: function(){
    return "done!";
  }  
};
var e = new Employee();
```
2、ES6编写类
```
class Employee {
  doSomething() {
    return "complete!";  
  }
  doSomethingElse() {
    return "also complete!"  
  }
}

var e = new Employee();
e.doSomething(); // "complete!"
```
3、Constructor构造器
```
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
```
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
```
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
