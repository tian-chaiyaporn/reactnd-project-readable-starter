import React from 'react';
import { connect } from 'react-redux'
import VoteMechanism from './VoteMechanism'
import { deleteCommentById } from './actions'

function Comment (props) {
  function handleClick(e, commentId, parentId) {
    e.preventDefault();
    props.deleteCommentById(commentId, parentId)
  }

  const date = props.commentDate.substring(0, props.commentDate.indexOf('GMT'))

  return (
    <div className="comment-item">
      <h3>{props.body}</h3>
      <p>author: {props.author}</p>
      <p>score: {props.score}</p>
      <p>date: {date}</p>
      <VoteMechanism
        type="comment"
        id={props.id}
      />
      <button onClick={e => handleClick(e, props.id, props.parentId)}>
        Delete
      </button>
    </div>
  )
}

const mapDispatchToProps = {
  deleteCommentById
}

export default connect(null, mapDispatchToProps)(Comment);
