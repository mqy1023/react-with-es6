* 一、Arrays
* 二、Set 和 WeakSet
* 三、Map 和 WeakMap
* 四、Object.assign()
* 五、ES6的简写

#### 一、Arrays
1、find
```
var ary = [1, 5, 10];
var match = ary.find(item => item > 8);
match; // 10
```
2、findIndex
返回符合条件第一个index
```
var ary = [1, 5, 10];
var match = ary.findIndex(item => item > 3);
match; // 1
```
3、fill填充
```
var ary = [1, 2, 3, 4, 5];
ary.fill('a');
ary; // ['a', 'a', 'a', 'a', 'a']

ary.fill('a', 2, 3) // 只需要下表为index的数为 'a'
```
4、copyWithin
```
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
```
var ary = new Array(3); //[, , ]
var ofAry = Array.of(3); // [3]

ary.length; // 3
ofAry.length; // 1
```
6、entries and keys
```
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
```
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
```
var map = new Map();
map.set('name', 'Joe');
var items = map.entries();
var first = items.next().value;
first[0]; // 'name'
first[1]; // 'Joe'
```
values和keys
```
var map = new Map();
map.set(1, 'a');
var values = map.values();
var first = values.next().value;
first; // 'a'

var keys = map.keys();
var firstKey = keys.next().value;
firstKey; // 1
```
#### 四、Object.assign()
var obj = {name: "mmm", old: true}
var ar = Object.assign({}, obj, age: 55);//{name: "mmm", old: true, age: 55}

#### 五、ES6在如下几种的简写
1、属性初始化的简写
```
var model = 'Ford';
var year = 1969;

// Old way
var Classic = {
  model: model,
  year: year // { model: 'Ford', year: 1969 }
}

// ES6 way
var Classic = {
  model, year // {model: 'Ford', year: 1969 }
}
```
2、方法初始化的简写
```
var server = {
  getPort: function() {// Old way
    // stuff
  }
  getPort() {// ES6 way
    //stuff
  }
}
```
3、字符串级联
```
function createTriumvirate(first, second, third) {
  return {
    ['member_' + first.name]: first,
    ['member_' + second.name]: second,
    ['member_' + third.name]: third
  }
}

var Joe = {name: 'Joe'}
var Ralph = {name: 'Ralph'}
var Harry = {name: 'Harry'}

var tri = createTriumvirate(Joe, Ralph, Hary)
tri.member_Joe; // Joe (the person object)
```





1