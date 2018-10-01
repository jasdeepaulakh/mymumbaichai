import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import reducer from './reducers/reducers.js'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';
import {
    BrowserRouter as Router,
} from 'react-router-dom'
import './index.css';
import App from './components/App';

const middleware = applyMiddleware(thunk);

const enchancer = compose(middleware)

const store = createStore(reducer, enchancer, /* preloadedState, */ devToolsEnhancer(
    // Specify custom devTools options
  ));

render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)