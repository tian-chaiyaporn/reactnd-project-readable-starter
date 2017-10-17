import React, { Component } from 'react';
import { connect } from 'react-redux'
import CommentList from './CommentList'
import { fetchSinglePost, fetchCommentsByPostId } from './actions'

class Post extends Component {
  componentDidMount() {
    this.props.dispatch(fetchSinglePost(this.props.match.params.id));
    this.props.dispatch(fetchCommentsByPostId(this.props.match.params.id));
  }

  render() {
    return (
      <div className="post">
        <div className="post-details">
          <h3>{this.props.currentPost.title}</h3>
          <p>{this.props.currentPost.body}</p>
          <p>{this.props.currentPost.author}</p>
        </div>
        <CommentList comments={this.props.comments}/>
      </div>
    );
  }
}

function mapStateToProps ({currentPost, comments}) {
  return {
    currentPost: currentPost,
    comments: comments
  }
}

export default connect(mapStateToProps)(Post);
