import React from 'react';

//### 1、无状态函数式组件也支持设置默认的Props类型与值
//ES6设置默认参数值
// const Text = ({ children = 'Hello World!'}) =>
//   <p>{children}</p>
// //无状态函数式组件的写法也是支持设置默认的Props类型与值的：
// Text.propTypes = { children: React.PropTypes.string };
// App.defaultProps = { children: 'Hello World!' }; //默认值另外一种形式


//### 2、无状态的组件函数中，也可以访问Context
const Text = (props, context) =>
  <p style={context}>{props.children}</p>;
Text.contextTypes = {
  fontFamily: React.PropTypes.string
};

export default Text;
