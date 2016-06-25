import React from 'react';
import ReactDOM from 'react-dom';

import App from './jsx/App.jsx';

ReactDOM.render(<App />, document.getElementById('app'));

setTimeout(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);