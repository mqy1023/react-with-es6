
## 启动步骤
* 1、npm install
* 2、npm start，然后可以在浏览器中打开localhost:8888
或者npm run prod，然后可以到dist目录下打开index.html <br/>
或者直接webpack,然后可以到dist目录下打开index.html

## JSX介绍

### 内嵌元素(Nested Elements)
**App.jsx**
```bash
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
            <h2>Content</h2>
            <p>This is the content!!!</p>
         </div>
      );
   }
}

export default App;
```
### 添加属性(Attributes)
可以添加自定义的属性，不过需要需加前缀data-xxx，如下，给元素添加一个自定义属性data-myattribute <br/>
**App.jsx**
```bash
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
            <h2>Content</h2>
            <p data-myattribute = "somevalue">This is the content!!!</p>
         </div>
      );
   }
}

export default App;
```
### Js表达式(JavaScript Expressions)
可以在JSX中嵌入js表达式,只需要用{}来包裹，如下将在浏览器中渲染显示出2  <br/>
**App.jsx**
```bash
<h1>{1+1}</h1>
```
同样可以在JSX中使用if else表达式
```bash
<h1>{i == 1 ? 'True!' : 'False'}</h1>
```
### 样式(Styling)
样式使用驼峰式语法，数字后默认px
```bash
import React from 'react';

class App extends React.Component {
   render() {
      var myStyle = {
         fontSize: 100,
         color: '#FF0000'
      }
      return (
         <div>
            <h1 style = {myStyle}>Header</h1>
         </div>
      );
   }
}
export default App;
```
### 注释(Comments)
可以用单行//或多行/*...*/来注释，当在子元素中写注释，最好包裹上{}
```bash
import React from 'react';
class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
            {//单行注释...}
            {/*多行注释...*/}
         </div>
      );
   }
}
export default App;
```
### **命令约定(Naming Convention)**
HTML标签使用小写，而React组件以**大写**字母为首  <br />
**【注意】**HTML中的class、for属性在React中分别用className、htmlFor替换
