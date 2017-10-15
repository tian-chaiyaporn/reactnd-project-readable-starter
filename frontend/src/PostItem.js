import React from 'react';
import { Link } from 'react-router-dom'

export default function PostItem ({postTitle, postDate}) {
  const date = postDate.substring(0, postDate.indexOf('GMT'))
  return (
    <div className="category-item">
      <Link to={`/post/${postTitle.replace(/ /g, "-")}`}>
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
