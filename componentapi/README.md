## 启动步骤
* 1、npm install
* 2、npm start，然后可以在浏览器中打开localhost:8888
或者npm run prod，然后可以到dist目录下打开index.html <br/>
或者直接webpack,然后可以到dist目录下打开index.html

## React Components API介绍
```bash
本文介绍了组件API：setState(), forceUpdate 和 ReactDOM.findDOMNode()
在es6语法中需要手动bind绑定this，将在下面的例子中看到使用this.method.bind(this)绑定
```
In this tutorial we will explain React component API. We will show you three methods: setState(), forceUpdate and ReactDOM.findDOMNode().
In new ES6 classes we have to manually bind this. You will see in examples below that we are using this.method.bind(this).

### 设置状态setState()
setState()方法用于更新组件state, 在原state状态基础上更改state
例子：每点击一次按钮，增加一个“setState...”

### 强制更新ForceUpdate
可以使用forceUpdate()强制更新组件

### 查找DOM节点Find Dom Node
可以使用ReactDOM.findDOMNode()方法操作真正的DOM
例子：点击按钮，查找id为myDiv的DOM节点，改变成绿色
