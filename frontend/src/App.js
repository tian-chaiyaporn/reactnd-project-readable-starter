import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import Category from './Category'
import Post from './Post'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="route-container">
          <Route exact path="/" component={Home} />
          <Route exact path="/category/:name" component={Category} />
          <Route path="/post/:id" component={Post} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
