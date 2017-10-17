import React from 'react';
import Comment from './Comment'

export default function CommentList ({comments}) {
  const commentItems = comments.map(comment => {
    const date = new Date(comment.timestamp)
    return (
      <li key={comment.id}>
        <Comment
          id={comment.id}
          body={comment.body}
          author={comment.author}
          score={comment.voteScore}
          commentDate={date.toString()}
        />
      </li>
    )
  })

  return (
    <ul className="comment-list">
      {commentItems}
    </ul>
  )
}
