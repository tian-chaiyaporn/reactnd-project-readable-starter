import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import VoteMechanism from './VoteMechanism'
import { fetchCommentsByPostId } from './actions'

class PostItem extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCommentsByPostId(this.props.id));
  }

  render() {
    const commentsNumber = this.props.commentsById.length > 0 ?
      this.props.commentsById[0].comments.length :
      0
    const date = this.props.postDate.substring(0, this.props.postDate.indexOf('GMT'))
    return (
      <div className="post-item">
        <Link to={`/post/${this.props.id}/${this.props.postTitle.replace(/ /g, "-")}`}>
          <h3>{this.props.postTitle}</h3>
        </Link>
        <p>by: {this.props.postAuthor}</p>
        <p>date: {date}</p>
        <p>score: {this.props.currentScore}</p>
        <VoteMechanism
          type="post"
          id={this.props.id}
        />
        <p>comments: {commentsNumber}</p>
        <hr/>
      </div>
    )
  }
}

function mapStateToProps ({postReducer, commentReducer}, ownProps) {
  return {
    commentsById: commentReducer.commentsByPostId
      .filter(c => c.postId === ownProps.id)
  }
}

export default connect(mapStateToProps)(PostItem);
