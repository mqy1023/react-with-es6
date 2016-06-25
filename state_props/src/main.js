import React from 'react';
import ReactDOM from 'react-dom';

//1、for state App
//import App from './jsx/StateApp.jsx';
//ReactDOM.render(<App />, document.getElementById('app'))

//2、for props App
//import App from './jsx/PropsApp.jsx';
//ReactDOM.render(<App headerProp = "Header from props..." contentProp = "Content
//   from props..."/>, document.getElementById('app'));

//3、for default props App
//import App from './jsx/DefaultPropsApp.jsx';
//ReactDOM.render(<App />, document.getElementById('app'));

//4、state and props App
//import App from './jsx/StateAndPropsApp.jsx';
//ReactDOM.render(<App />, document.getElementById('app'));

//4、validating props App
import App from './jsx/ValidatingPropsApp.jsx';
ReactDOM.render(<App />, document.getElementById('app'));