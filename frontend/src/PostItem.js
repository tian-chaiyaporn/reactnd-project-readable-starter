import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import VoteMechanism from './VoteMechanism'
import { fetchCommentsByPostId, deletePostById } from './actions'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

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
      <Card className="post-item" style={{maxWidth: '800px', margin: '0 auto', marginBottom: '20px'}}>
        <CardHeader
         title={postTitle}
         subtitle={`by: ${postAuthor}`}
        />

        <CardText>
          date: {date} <br/>
          score: {currentScore} <br/>
          comments: {commentsNumber}
        </CardText>

        <CardActions>
          <VoteMechanism type="post" id={id}/>
        </CardActions>

        <CardActions>
          <Link to={`/post/${id}`}>
            <FlatButton label="go to post" />
          </Link>
          <Link to={`/post-edit/${id}/${postTitle}/${postBody}`}>
            <FlatButton label="Edit" />
          </Link>
          <FlatButton onClick={this.handleDelete} label="Delete" />
        </CardActions>
      </Card>
    )
  }
}

function mapStateToProps ({commentReducer}, ownProps) {
  return {
    commentsById: commentReducer.commentsByPostId.filter(c => c.postId === ownProps.id)
  }
}

export default connect(mapStateToProps, { fetchCommentsByPostId, deletePostById })(PostItem);
