import React, { Component } from 'react';
import { connect } from 'react-redux'
import CategoryList from './CategoryList'
import PostList from './PostList'
import { fetchCatgories, fetchPosts } from './actions'

class Home extends Component {
  componentDidMount() {
    this.props.fetchCatgories()
    this.props.fetchPosts()
  }

  render() {
    return (
      <div className="Home">
        <CategoryList categories={this.props.categories} />
        <PostList posts={this.props.posts} />
      </div>
    );
  }
}

function mapStateToProps ({categoryReducer, postReducer}) {
  return {
    categories: categoryReducer.categories,
    posts: postReducer.posts
  }
}

export default connect(mapStateToProps, { fetchCatgories, fetchPosts })(Home);
