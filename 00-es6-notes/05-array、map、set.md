* 一、Arrays
* 二、Set 和 WeakSet
* 三、Map 和 WeakMap
* 四、Symbols

#### 一、Arrays
1、find
```javascript
var ary = [1, 5, 10];
var match = ary.find(item => item > 8);
match; // 10
```
2、findIndex
返回符合条件第一个index
```javascript
var ary = [1, 5, 10];
var match = ary.findIndex(item => item > 3);
match; // 1
```
3、fill填充
```javascript
var ary = [1, 2, 3, 4, 5];
ary.fill('a');
ary; // ['a', 'a', 'a', 'a', 'a']

ary.fill('a', 2, 3) // 只需要下表为index的数为 'a'
```
4、copyWithin
```javascript
var ary = [1, 2, 3, 4]; // we want [1, 2, 1, 2]

// First parameter as the target (index 2)
// Second parameter is where you copy from (index 0)
// A third parameter would be the stopping point.
ary.copyWithin(2, 0); // [1, 2, 1, 2]
ary.copyWithin(2, 0, 1); // [1, 2, 1, 4]
ary.copyWithin(2, 0, 2); // [1, 2, 1, 2]

// Can also use negative indexes:
ary.copyWithin(0, -2); // [3, 4, 3, 4]
```
5、of
```javascript
var ary = new Array(3); //[, , ]
var ofAry = Array.of(3); // [3]

ary.length; // 3
ofAry.length; // 1
```
6、entries and keys
```javascript
var a = ['Joe', 'Jim', 'John'];
var entries = a.entries();

var firstEntry = entries.next().value;
firstEntry[0]; // 0 (the index)
firstEntry[1]; // 'Joe' (the value)

// `keys` are the indexes
var firstKey = keys.next().value;
firstKey; // 0
```
#### 二、Set 和 WeakSet
Set 对象是一组不重复的值，重复的值将被忽略，值类型可以是原始类型和引用类型：
```javascript
let mySet = new Set([1, 1, 2, 2, 3, 3]);
mySet.size; // 3
mySet.has(1); // true
mySet.add('strings');
mySet.add({ a: 1, b:2 });
```
WeakSet 对象可以让你在一个集合中保存对象的弱引用，在 WeakSet 中的对象只允许出现一次：


#### 三、Map 和 WeakMap
ES6 中两种新的数据结构集：Map 和 WeakMap。事实上每个对象都可以看作是一个 Map。<br/>
一个对象由多个 key-val 对构成，在 Map 中，任何类型都可以作为对象的 key <br/>
entries
```javascript
var map = new Map();
map.set('name', 'Joe');
var items = map.entries();
var first = items.next().value;
first[0]; // 'name'
first[1]; // 'Joe'
```
values和keys
```javascript
var map = new Map();
map.set(1, 'a');
var values = map.values();
var first = values.next().value;
first; // 'a'

var keys = map.keys();
var firstKey = keys.next().value;
firstKey; // 1
```

#### 四、Symbols
1、Symbol() <br/>
Symbols 是不可改变并且是第一无二的，可以在任意哈希中作一个key。<br/>
调用 Symbol() 或者 Symbol(description) 可以创造一个第一无二的符号，<br/>
但是在全局是看不到的。Symbol() 的一个使用情况是给一个类或者命名空间打上补丁，<br/>
但是可以确定的是你不会去更新它。比如，你想给 React.Component 类添加一个 refreshComponent 方法，<br/>
但是可以确定的是你不会在之后更新这个方法：
```javascript
const refreshComponent = Symbol();
React.Component.prototype[refreshComponent] = () => {
    // do something
}
```
2、Symbol.for(key)
Symbol.for(key) 同样会创造一个独一无二并且不可改变的 Symbol，但是它可以全局看到，<br/>
两个相同的调用 Symbol.for(key) 会返回同一个 Symbol 类：
```javascript
Symbol('foo') === Symbol('foo') // false
Symbol.for('foo') === Symbol('foo') // false
Symbol.for('foo') === Symbol.for('foo') // true
```
在另一个库中：
```javascript
const specialRead = Symbol.for('specialRead');

class SomeReadableType {
    [specialRead]() {
        const reader = createSomeReaderFrom(this);
        return reader;
    }
}
```
