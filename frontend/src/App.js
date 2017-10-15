import React, { Component } from 'react';
import './App.css';
import CategoryList from './CategoryList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CategoryList categories={['a', 'b', 'c']} />
      </div>
    );
  }
}

export default App;
