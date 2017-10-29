import React from 'react';
import Comment from './Comment'

export default function CommentList ({comments}) {
  const commentItems = comments.map(comment => {
    const date = new Date(comment.timestamp)
    return (
      <li key={comment.id} style={{marginTop: '20px', marginBottom: '20px'}}>
        <Comment
          id={comment.id}
          body={comment.body}
          author={comment.author}
          score={comment.voteScore}
          commentDate={date.toString()}
          parentId={comment.parentId}
        />
      </li>
    )
  })

  return (
    <ul className="comment-list" style={{listStyle: 'none', margin: '0px', padding: '0px'}}>
      {commentItems}
    </ul>
  )
}
