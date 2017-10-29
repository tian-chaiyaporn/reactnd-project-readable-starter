import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import VoteMechanism from './VoteMechanism'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import { fetchSinglePost, fetchCommentsByPostId, deletePostById } from './actions'
import FlatButton from 'material-ui/FlatButton';

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
      <div className="post" style={{marginTop: '30px'}}>
        <Card className="post-item" style={{maxWidth: '800px', margin: '0 auto'}}>
          <CardHeader
           title={title}
           subtitle={`by: ${author}`}
          />

          <CardText>
            {body}
          </CardText>

          <CardText>
            score: {voteScore} <br/>
            comments: {comments.length}
          </CardText>

          <CardActions>
            <VoteMechanism type="post" id={id}/>
          </CardActions>

          <CardActions>
            <Link to={`/post-edit/${id}/${title}/${body}`}>
              <FlatButton label="Edit" />
            </Link>
            <FlatButton onClick={this.handleDelete} label="Delete" />
          </CardActions>
        </Card>
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
