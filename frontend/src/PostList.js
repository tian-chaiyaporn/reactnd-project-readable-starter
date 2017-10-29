import React, { Component } from 'react';
import PostItem from './PostItem'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class PostList extends Component {
  constructor() {
    super()
    this.state = {sortType: 'date'}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({sortType: value})
  }

  render() {
    switch (this.state.sortType) {
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
        <PostItem
          id={post.id}
          postTitle={post.title}
          postAuthor={post.author}
          postDate={date.toString()}
          postBody={post.body}
          currentScore={post.voteScore}
        />
      )
    })

    return (
      <div className="post-list-container" style={{display: 'block', margin: 'auto', maxWidth: '800px'}}>
        <DropDownMenu
          label='sort'
          value={this.state.sortType}
          onChange={this.handleChange}
        >
          <MenuItem value="date" primaryText="date" />
          <MenuItem value="vote" primaryText="vote" />
        </DropDownMenu>
        {postItems}
      </div>
    )
  }
}

export default PostList
