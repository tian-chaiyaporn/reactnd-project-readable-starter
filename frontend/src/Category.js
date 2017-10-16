import React, { Component } from 'react';
import { connect } from 'react-redux'
import PostList from './PostList'

class Category extends Component {
  render() {
    const relevantPosts = this.props.posts.filter(post => post.category === this.props.match.params.name)
    return (
      <div className="Category">
        <h1>{this.props.match.params.name}</h1>
        <PostList posts={relevantPosts} />
      </div>
    );
  }
}

function mapStateToProps ({posts}) {
  return {
    posts: posts
  }
}

export default connect(mapStateToProps)(Category);
