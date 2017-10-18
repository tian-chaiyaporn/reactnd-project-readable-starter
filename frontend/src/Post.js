import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import VoteMechanism from './VoteMechanism'
import { fetchSinglePost, fetchCommentsByPostId, deletePostById } from './actions'

class Post extends Component {
  constructor() {
    super()
    this.state = {
      redirect: false
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchSinglePost(this.props.match.params.id));
    this.props.dispatch(fetchCommentsByPostId(this.props.match.params.id));
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidUpdate() {
    if (Object.keys(this.props.currentPost).length === 0) {
      this.setState({redirect: true})
    }
  }

  handleDelete() {
    this.props.dispatch(deletePostById(this.props.match.params.id))
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to='/' />
    }

    return (
      <div className="post">
        <div className="post-details">
          <h3>{this.props.currentPost.title}</h3>
          <p>{this.props.currentPost.body}</p>
          <p>author: {this.props.currentPost.author}</p>
          <p>score: {this.props.currentPost.voteScore}</p>
          <VoteMechanism
            type="post"
            id={this.props.match.params.id}
          />
          <p>comments: {this.props.comments.length}</p>
          <button onClick={this.handleDelete}>Delete</button>
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
