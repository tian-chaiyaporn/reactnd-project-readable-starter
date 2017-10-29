import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import VoteMechanism from './VoteMechanism'
import { fetchCommentsByPostId, deletePostById } from './actions'

class PostItem extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {this.props.fetchCommentsByPostId(this.props.id)}

  handleDelete() {this.props.deletePostById(this.props.id);}

  render() {
    let {
      commentsById,
      postDate,
      id,
      postTitle,
      postAuthor,
      currentScore,
      postBody
    } = this.props

    const commentsNumber = commentsById.length > 0
      ? commentsById[0].comments.length
      : 0

    const date = postDate.substring(0, postDate.indexOf('GMT'))

    return (
      <div className="post-item">
        <Link to={`/post/${id}`}>
          <h3>{postTitle}</h3>
        </Link>
        <p>by: {postAuthor}</p>
        <p>date: {date}</p>
        <p>score: {currentScore}</p>
        <VoteMechanism type="post" id={id}/>
        <p>comments: {commentsNumber}</p>
        <button onClick={this.handleDelete}>Delete</button>
        <Link to={`/post-edit/${id}/${postTitle}/${postBody}`}>
          <button>Edit</button>
        </Link>
        <hr/>
      </div>
    )
  }
}

function mapStateToProps ({commentReducer}, ownProps) {
  return {
    commentsById: commentReducer.commentsByPostId.filter(c => c.postId === ownProps.id)
  }
}

export default connect(mapStateToProps, { fetchCommentsByPostId, deletePostById })(PostItem);
