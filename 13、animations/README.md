## 启动步骤
* 1、npm install
* 2、npm start，然后可以在浏览器中打开localhost:8888 <br/>
或者npm run prod，然后可以到dist目录下打开index.html <br/>
或者直接webpack,然后可以到dist目录下打开index.html

## React Animations动画

### step1: 安装React CSS Transitions Group
```bash
npm install --save react-addons-css-transition-group
```
### step2: 引入CSS样式
* 1、npm install --save-dev style-loader css-loader  //安装css加载器
* 2、import './styles/style.css';  //在入口main.js中引入CSS样式
