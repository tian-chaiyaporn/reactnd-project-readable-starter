import React, { Component } from 'react';
import { connect } from 'react-redux'
import PostList from './PostList'
import PostForm from './PostForm'
import { fetchPosts } from './actions'

class Category extends Component {
  componentDidMount() {
    this.props.fetchPosts(this.props.match.params.name)
  }

  render() {
    return (
      <div className="Category">
        <h1>{this.props.match.params.name}</h1>
        <PostForm category={this.props.match.params.name} />
        <PostList posts={this.props.categoryPosts} />
      </div>
    );
  }
}

function mapStateToProps ({postReducer}) {
  return {
    categoryPosts: postReducer.currentCategoryPosts
  }
}

export default connect(mapStateToProps, { fetchPosts })(Category);
