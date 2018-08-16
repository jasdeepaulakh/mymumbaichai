import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import Home from './Home';
import Products from './Products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MyMumbaiChai</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
        </Switch>

      </div>
    );
  }
}

export default App;
