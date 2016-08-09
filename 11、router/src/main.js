import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

import App from './jsx/App.jsx';
import Home from './jsx/Home.jsx';
import About from './jsx/About.jsx';
import Contact from './jsx/Contact.jsx';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="home" component={Home}/>
            <Route path="about" component={About}/>
            <Route path="contact" component={Contact}/>
        </Route>
    </Router>

), document.getElementById('app'))