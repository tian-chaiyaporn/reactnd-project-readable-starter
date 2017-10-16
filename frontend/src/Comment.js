import React from 'react';

export default function Comment ({id, commentBody, commentDate}) {
  const date = commentDate.substring(0, commentDate.indexOf('GMT'))
  return (
    <div className="comment-item">
      <h3>
        {commentBody}
      </h3>
      <p>
        date: {date}
      </p>
    </div>
  )
}
