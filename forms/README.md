## 启动步骤
* 1、npm install
* 2、npm start，然后可以在浏览器中打开localhost:8888
或者npm run prod，然后可以到dist目录下打开index.html <br/>
或者直接webpack,然后可以到dist目录下打开index.html

## React Forms表格

**1、SimpleEventApp.jsx**  <br />
通过setState()方法更新state,当表单输入更改会调用onChange()方法 <br />

**2、App.jsx**  <br />
使用Form表单的子组件，子组件中input元素的onChange方法触发父组件的updateStateProp属性，该属性在父组件中调用updateState函数更新state状态，<br />
然后父组件通过myDataProp属性传给子组件，更新子组件中input和h3标签的value值(父组件中将updateState函数当做updateStateProp属性传给子组件)