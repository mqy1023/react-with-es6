## 启动步骤
* 1、npm install
* 2、npm start，然后可以在浏览器中打开localhost:8888 <br/>
或者npm run prod，然后可以到dist目录下打开index.html <br/>
或者直接webpack,然后可以到dist目录下打开index.html

## React Components组件介绍

### 状态组件(state components)
state状态,仅和自身有关，不受父组件控制

### 属性组件(props components)
由父组件传给子组件属性值

### 默认属性(Default Props)
在组件中可以设置默认的属性值

### state和props混合
组件state状态值当成props属性值传给子组件

### 验证属性(Validating props)
在`App.propTypes`中对属性类型验证，当属性使用中类型不是指定的类型会在`console`控制台上报`warning`提醒， <br />
在`App.propTypes`指定属性类型后，可以设置`App.defaultProps`给属性默认值 <br />

1、对于指定`isRequired`的属性，当未设置该属性值的话，控制台会报
```
"Warning: Failed propType: Required prop `propBool` was not specified in `App`."
```
2、当出现和设置的属性值类型不一致的情况，控制台会报
```
“Warning: Failed propType: Invalid prop `propNumber` of type `string` supplied to `App`, expected `number`.”
```
### 自定义验证属性(custom Validating props)
* 1、属性缺失
* 2、属性值长度不够

### 综合小例子(contactsApp)
[参考链接](https://github.com/pro-react/sample-code/tree/master/chapter%203/contactsApp)
