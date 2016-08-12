## 搭建步骤
准备：本机必须先安装nodejs环境，可命令行键入：node -v //查看是否安装&node版本信息
### step1— — 安装全局包
```bash
如：webpack
window下需“以管理者身份运行cmd”，然后： npm install -g webpack
```
### step2:创建react项目并初始化package.json管理包
    * mkdir reactApp
    * npm init --yes
### step3: 添加依赖和插件
```bash
//1、webpack构建项目
npm install webpack --save
npm install webpack-dev-server --save
//2、react核心库
npm install react --save
npm install react-dom --save
//3、babel转译es6
npm install babel-core --save-dev
npm install babel-loader --save-dev
npm install babel-preset-react --save-dev
npm install babel-preset-es2015 --save-dev
//4、转译后输出的xxx.js插入inject到index.html中的插件
npm install html-webpack-plugin --save-dev
```
### step4:创建项目文件,es6语法的jsx和构建包配置webpack.config.js
项目目录结构为：
```
.
├── src
    ├── jsx
        ├── App.jsx
    ├── main.js
    ├── index.html
├── package.json
├── README.md
├── webpack.cofig.js
```
### step5:设置Compiler、 Server和Loaders
```bash
1、webpack.config.js文件中构建配置
    a、entry，入口文件main.js
    b、output，指定输出后的index.js
    c、devServer，设置服务器端口
    d、babel，loader使用es2015和react presets
    e、html-webpack-plugin插件，让转译后的index.js插入inject到index.html的body下，并复制indx.html到输出的dist目录
2、修改package.json中的"script"
    a、"start": "webpack-dev-server --hot"
    命令行：npm start可以启动服务器，其中“--hot”命令是当修改源码后不用重新刷新浏览器，也能实时重新加载到最新源码
    b、"prod": "webpack -p"
    命令行：npm run prod可以输出生产情况下的构建包，可以看到生成dist目录并有index.html和index.js
```
### step6:编写index.html和App.jsx还有入口的main.js

### step7:启动服务器
编写npm script
```
npm start，然后可以在浏览器中打开localhost:8888
或者npm run prod，然后可以到dist目录下打开index.html
```
**==> 能在浏览器中看到“Hello World!!!”，说明React开发环境搭建成功了！！**

* **后续React开发均在本次的搭建React环境基础上**
