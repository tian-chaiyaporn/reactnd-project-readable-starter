import React, { Component } from 'react';
import { connect } from 'react-redux'
import CategoryList from './CategoryList'
import PostList from './PostList'
import { fetchCatgories, fetchPosts } from './actions'

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCatgories())
    this.props.dispatch(fetchPosts())
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

function mapStateToProps ({categories, posts}) {
  return {
    categories: categories,
    posts: posts
  }
}

export default connect(mapStateToProps)(Home);
