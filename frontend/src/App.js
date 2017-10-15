import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import CategoryList from './CategoryList'
import PostList from './PostList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CategoryList categories={this.props.categories} />
        <PostList posts={this.props.posts} />
      </div>
    );
  }
}

function mapStateToProps ({categories, posts}) {
  return {
    categories: categories,
    posts: posts
  }
}

export default connect(mapStateToProps)(App);
