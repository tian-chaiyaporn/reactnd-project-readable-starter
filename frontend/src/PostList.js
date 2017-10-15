import React from 'react';
import PostItem from './PostItem'

export default function PostList ({posts}) {
  const postItems = posts.map(post => {
    const date = new Date(post.timestamp)
    return (
      <li key={post.id}>
        <PostItem
          postTitle={post.title}
          postDate={date.toString()}
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
