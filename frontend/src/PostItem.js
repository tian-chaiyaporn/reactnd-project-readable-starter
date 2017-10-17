import React from 'react';
import { Link } from 'react-router-dom'
import VoteMechanism from './VoteMechanism'

export default function PostItem ({id, postTitle, postAuthor, postDate, currentScore}) {
  const date = postDate.substring(0, postDate.indexOf('GMT'))
  return (
    <div className="post-item">
      <Link to={`/post/${id}/${postTitle.replace(/ /g, "-")}`}>
        <h3>{postTitle}</h3>
      </Link>
      <p>by: {postAuthor}</p>
      <p>date: {date}</p>
      <p>score: {currentScore}</p>
      <VoteMechanism
        type="post"
        id={id}
      />
      <hr/>
    </div>
  )
}
