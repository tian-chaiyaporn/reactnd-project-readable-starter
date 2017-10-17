import React from 'react';

export default function Comment ({id, body, author, score, commentDate}) {
  const date = commentDate.substring(0, commentDate.indexOf('GMT'))
  return (
    <div className="comment-item">
      <h3>{body}</h3>
      <p>author: {author}</p>
      <p>score: {score}</p>
      <p>date: {date}</p>
    </div>
  )
}
