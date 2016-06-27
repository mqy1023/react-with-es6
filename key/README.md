## 启动步骤
* 1、npm install
* 2、npm start，然后可以在浏览器中打开localhost:8888
或者npm run prod，然后可以到dist目录下打开index.html <br/>
或者直接webpack,然后可以到dist目录下打开index.html

## React key

**1、App.jsx**  <br />
给每个组件设置key属性(必须唯一性)，在动态创建组件或用户修改List组件的情况，能保持组件的唯一身份
