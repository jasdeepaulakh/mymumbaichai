import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Container } from 'semantic-ui-react'
import '../App.css';
import Home from './Home';
import Products from './Products';
import ProductsRedux from './ProductsRedux';
import Navbar from './Navbar';
import About from './About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Container text style={{ marginTop: '7em' }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={ProductsRedux} />
          <Route path="/about" component={About} />
        </Switch>
        </Container>

      </div>
    );
  }
}

export default App;
