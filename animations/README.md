## 启动步骤
* 1、npm install
* 2、npm run prod，然后可以到dist目录下打开index.html <br/>
或者直接webpack,然后可以到dist目录下打开index.html

## React Animations动画

### step1: 安装React CSS Transitions Group
```bash
npm install --save react-addons-css-transition-group
```
### step2: 添加CSS文件
```bash
<link rel = "stylesheet" type = "text/css" href = "styles/style.css">
```
此次暂无通过webpack配置转移css文件，所以在webpack构建包后需要手动将styles/style.css复制到dist目录下
