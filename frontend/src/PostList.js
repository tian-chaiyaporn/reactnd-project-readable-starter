import React, { Component } from 'react';
import PostItem from './PostItem'

class PostList extends Component {
  constructor() {
    super()
    this.state = {sort: ''}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({sort: e.target.value})
  }

  render() {
    switch (this.state.sort) {
      case 'date':
        this.props.posts.sort((a, b) => b.timestamp - a.timestamp)
        break;
      case 'vote':
        this.props.posts.sort((a, b) => b.voteScore - a.voteScore)
        break;
      default :
        this.props.posts.sort((a, b) => b.timestamp - a.timestamp)
    }
    const postItems = this.props.posts.map(post => {
      const date = new Date(post.timestamp)
      return (
        <li key={post.id}>
          <PostItem
            id={post.id}
            postTitle={post.title}
            postAuthor={post.author}
            postDate={date.toString()}
            postBody={post.body}
            currentScore={post.voteScore}
          />
        </li>
      )
    })

    return (
      <div className="post-list-container">
        <select name="sort" onChange={this.handleChange}>
          <option value="date">date</option>
          <option value="vote">vote</option>
        </select>
        <ul className="post-list">
          {postItems}
        </ul>
      </div>
    )
  }
}

export default PostList
