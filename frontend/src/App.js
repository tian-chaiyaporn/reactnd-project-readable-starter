import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import Category from './Category'
import Post from './Post'
import CommentForm from './CommentForm'
import PostForm from './PostForm'
import Navigation from './Navigation'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="route-container">
          <Route path="/" component={Navigation} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/category/:name" component={Category} />
            <Route exact path="/post/:id" component={Post} />
            <Route exact path="/comments/:id/:author/:body" component={CommentForm} />
            <Route exact path="/post-edit/:id/:title/:body" component={PostForm} />
            <Route render={() => (
                <div>
                  <h1>Sorry, This Page Cannot Be Found</h1>
                  <Link to='/'>Back To Home</Link>
                </div>
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
