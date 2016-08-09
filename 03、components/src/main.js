import React from 'react';
import ReactDOM from 'react-dom';
//import App from './jsx/StatelessApp.jsx';
// import App from './jsx/StatefulApp.jsx';

//### 1、无状态函数式组件也支持设置默认的Props类型与值
// import App from './jsx/FunctionApp.jsx';
// ReactDOM.render(<App />, document.getElementById('app'))

//### 2、无状态的组件函数中，我们也是可以访问Context
import Text from './jsx/FunctionApp.jsx';
class App extends React.Component {

  getChildContext() {
    return {
      fontFamily: 'Helvetica Neue'
    };
  }
  render() {
    return <Text>Hello World!</Text>;
  }
}
App.childContextTypes = {
  fontFamily: React.PropTypes.string
}


// ReactDOM is part of the introduction of React 0.14
ReactDOM.render(
  <App></App>,
  document.getElementById('app')
);
