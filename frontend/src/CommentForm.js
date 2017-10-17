import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createNewComment } from './actions'
import shortid from 'shortid'

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      body: '',
      author: '',
      placeholderBody: 'your comment here',
      placeholderAuthor: 'your name',
      warning: ''
    }
  }
  updateBody(body) {this.setState({body: body})}

  updateAuthor(author) {this.setState({author: author})}

  clearForm() {
    this.setState({
      body: '',
      author: ''
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.clearForm();
    if (this.state.body === '' || this.state.author === '' ) {
      this.setState({warning: 'please input all fields'})
    }
    this.props.dispatch(createNewComment({
      id: shortid.generate(),
      timestamp: Date.now(),
      body: this.state.body,
      author: this.state.author,
      parentId: this.props.parentId
    }))
  }

  render() {
    return (
      <div className="new-comment">
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <textarea
            rows="4"
            cols="30"
            value={this.state.body}
            onChange={(e) => this.updateBody(e.target.value)}
            placeholder={this.state.placeholderBody}
          />
          <input
            type="text"
            value={this.state.author}
            onChange={(e) => this.updateAuthor(e.target.value)}
            placeholder={this.state.placeholderAuthor}
          />
          <input type="submit" value="Submit" />
        </form>
        <h2>{this.state.warning}</h2>
      </div>
    );
  }
}

export default connect()(CommentForm);
