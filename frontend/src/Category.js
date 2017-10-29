import React, { Component } from 'react';
import { connect } from 'react-redux'
import PostList from './PostList'
import PostForm from './PostForm'
import { fetchPosts } from './actions'

class Category extends Component {
  constructor() {
    super()
    this.state = {title: ''}
  }

  componentDidMount() {
    this.setState({title: this.props.match.params.name})
    this.props.fetchPosts(this.props.match.params.name)
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (this.state.title !== nextProps.match.params.name) {
      this.setState({title: nextProps.match.params.name})
      this.props.fetchPosts(nextProps.match.params.name)
    }
  }

  render() {
    return (
      <div className="Category">
        <h1 style={{textAlign: 'center'}}>{this.props.match.params.name}</h1>
        <PostForm category={this.props.match.params.name} />
        <PostList posts={this.props.categoryPosts} />
      </div>
    );
  }
}

function mapStateToProps ({postReducer}) {
  return {
    categoryPosts: postReducer.currentCategoryPosts
  }
}

export default connect(mapStateToProps, { fetchPosts })(Category);
