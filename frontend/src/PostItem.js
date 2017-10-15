import React from 'react';

export default function PostItem ({postTitle, postDate}) {
  const date = postDate.substring(0, postDate.indexOf('GMT'))
  return (
    <div className="category-item">
      <h3>
        {postTitle}
      </h3>
      <p>
        date: {date}
      </p>
    </div>
  )
}
