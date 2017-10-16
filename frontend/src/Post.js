import React, { Component } from 'react';
import { connect } from 'react-redux'
import CommentList from './CommentList'

class Post extends Component {
  render() {
    const post = this.props.posts.filter(p => p.id === this.props.match.params.id)[0];
    const comments = this.props.comments.filter(c => c.parentId === this.props.match.params.id);

    return (
      <div className="post">
        <div className="post-details">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
        <CommentList comments={comments}/>
      </div>
    );
  }
}

function mapStateToProps ({posts, comments}) {
  return {
    posts: posts,
    comments: comments
  }
}

export default connect(mapStateToProps)(Post);
