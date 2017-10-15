import React from 'react';
import PostItem from './PostItem'

export default function PostList ({posts}) {
  const postItems = posts.map(post => {
    return (
      <li key={post.id}>
        <PostItem
          postTitle={post.title}
          postDate={Date(post.timestamp)}
        />
      </li>
    )
  })

  return (
    <ul className="post-list">
      {postItems}
    </ul>
  )
}
