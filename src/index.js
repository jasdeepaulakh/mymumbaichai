import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
)