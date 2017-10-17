import React, { Component } from 'react';
import { connect } from 'react-redux'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
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
        <CommentForm parentId={this.props.match.params.id}/>
        <CommentList comments={this.props.comments}/>
      </div>
    );
  }
}

function mapStateToProps ({postReducer, commentReducer}) {
  return {
    currentPost: postReducer.currentPost,
    comments: commentReducer.comments
  }
}

export default connect(mapStateToProps)(Post);
