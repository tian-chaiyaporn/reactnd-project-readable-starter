import React from 'react';
import { Link } from 'react-router-dom'

export default function PostItem ({id, postTitle, postDate}) {
  const date = postDate.substring(0, postDate.indexOf('GMT'))
  return (
    <div className="post-item">
      <Link to={`/post/${id}/${postTitle.replace(/ /g, "-")}`}>
        <h3>
          {postTitle}
        </h3>
        <p>
          date: {date}
        </p>
      </Link>
    </div>
  )
}
