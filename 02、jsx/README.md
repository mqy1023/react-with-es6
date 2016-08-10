
## 启动步骤
* 1、npm install
* 2、npm start，然后可以在浏览器中打开localhost:8888
或者npm run prod，然后可以到dist目录下打开index.html <br/>
或者直接webpack,然后可以到dist目录下打开index.html

## JSX介绍

### 内嵌元素(Nested Elements)
**App.jsx**
```javascript
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
```javascript
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
```javascript
<h1>{i === 1 ? 'True!' : 'False'}</h1>
{condition ? <span>Hello JSX (The condition was true)</span> : null}
```
### 样式(Styling)
样式使用驼峰式语法，数字后默认px
```javascript
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

```javascript
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

### 不同点

* 1、HTML标签使用小写，而React组件以**大写**字母为首命名
* 2、`html`的`class`与`for`属性在`js`里是保留字，所以`jsx`里要用别名`className`与`htmlFor`
* 3、checkbox中正确使用checked属性
```javascript
//在其他前端模板引擎中，可以这么做，因为是拼接字符串
var checkbox = <input type="checkbox" {this.props.selected ? 'checked' : ''} />
//但在jsx中，这是错误的，因为无法构成键值对，要有个key=value的格式，所以得这样
var checkbox = <input className="cbName" type="checkbox" checked={this.props.selected} />
```
* 4、不能直接写并列的元素
```javascript
//这样写是错误的
var MyComponent = React.createClass({
    render: function() {
        return <div>first div</div><div>second div</div>
    }
})
//因为编译后，return 两个函数调用，就算不报错，也只调用第一个函数，不合意图
var MyComponent = React.createClass({
    render: function() {
        return React.createElement('div', null, 'first div') React.createElement('div', null, 'second div')
    }
})
```
* 5、jsx要求标签一定要闭合，html5中不强制要求闭合的，在jsx也都要闭合，以便识别
* 6、封装的组件要用大写字母开头，以便跟html标签区分。
