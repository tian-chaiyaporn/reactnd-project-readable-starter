import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import VoteMechanism from './VoteMechanism'
import { fetchSinglePost, fetchCommentsByPostId, deletePostById } from './actions'

class Post extends Component {
  constructor() {
    super()
    this.state = {redirect: false}
  }

  componentDidMount() {
    this.props.fetchSinglePost(this.props.match.params.id)
    this.props.fetchCommentsByPostId(this.props.match.params.id)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidUpdate() {
    Object.keys(this.props.postReducer.currentPost).length === 0 && (this.setState({redirect: true}))
  }

  handleDelete() {
    this.props.deletePostById(this.props.match.params.id)
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to='/' />
    }

    let { title, body, author, voteScore } = this.props.postReducer.currentPost
    let { id } = this.props.match.params
    let { comments } = this.props.commentReducer

    return (
      <div className="post">
        <div className="post-details">
          <h3>{title}</h3>
          <p>{body}</p>
          <p>author: {author}</p>
          <p>score: {voteScore}</p>
          <VoteMechanism type="post" id={id}/>
          <p>comments: {comments.length}</p>
          <button onClick={this.handleDelete}>Delete</button>
          <Link to={`/post-edit/${id}/${title}/${body}`}>
            <button>Edit</button>
          </Link>
        </div>
        <CommentForm parentId={id}/>
        <CommentList comments={comments}/>
      </div>
    );
  }
}

function mapStateToProps ({ postReducer, commentReducer }) {
  return { postReducer, commentReducer }
}

export default connect(
  mapStateToProps,
  { fetchSinglePost, fetchCommentsByPostId, deletePostById }
)(Post);
