import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Container, Header } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import Home from './Home';
import Products from './Products';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Container text style={{ marginTop: '7em' }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
        </Switch>
        </Container>

      </div>
    );
  }
}

export default App;
