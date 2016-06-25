## 启动步骤
* 1、npm install
* 2、npm start，然后可以在浏览器中打开localhost:8888
或者npm run prod，然后可以到dist目录下打开index.html <br/>
或者直接webpack,然后可以到dist目录下打开index.html

## React Components组件介绍

### 无状态组件(Stateless Components)
参考**StatelessApp.jsx** <br/>
然后将StatelessApp.jsx引入(import)到main.js文件并调用reactDOM.render()

### 状态组件(Stateful Components)

**【注意】**给组件key属性，当改变代码后，帮助React仅更新渲染更改部分而不是全部重新渲染，这对性能有很大的提升
