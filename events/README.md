## 启动步骤
* 1、npm install
* 2、npm start，然后可以在浏览器中打开localhost:8888
或者npm run prod，然后可以到dist目录下打开index.html <br/>
或者直接webpack,然后可以到dist目录下打开index.html

## React Event事件

**1、SimpleEventApp.jsx**  <br />
onClick点击事件触发updateState函数<br />


**2、App.jsx**  <br />
通过子组件来更新父组件，需要父组件中将updateState函数当做updateStateProp属性传给子组件
