import React from 'react'

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import todoApp from './reducers/reducers'

let store = createStore(todoApp)

let rootElement = document.getElementById('app')

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)