import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './actions/post'
import shortid from 'shortid'

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      title: '',
      body: '',
      author: '',
      placeholderTitle: 'your title here',
      placeholderBody: 'your content here',
      placeholderAuthor: 'your name',
      warning: ''
    }
  }

  componentDidMount() {
    this.props.match && (
      this.setState({
        title: this.props.match.params.title,
        body: this.props.match.params.body
      })
    )
  }

  updateTitle(title) {this.setState({title: title})}

  updateBody(body) {this.setState({body: body})}

  updateAuthor(author) {this.setState({author: author})}

  clearForm() {this.setState({ title: '', body: '', author: '' })}

  handleSubmit(event) {
    event.preventDefault();
    this.clearForm();
    if (this.state.title === '' || this.state.body === '' || this.state.author === '' ) {
      this.setState({warning: 'please input all fields'})
    }
    if (!this.props.match) {
      this.props.createNewPost({
        id: shortid.generate(),
        timestamp: Date.now(),
        title: this.state.title,
        body: this.state.body,
        author: this.state.author,
        category: this.props.category
      })
    } else {
      this.props.history.goBack()
      this.props.editPostById(
        this.props.match.params.id,
        this.state.title,
        this.state.body
      )
    }
  }

  render() {
    return (
      <div className="new-post">
        <form className="post-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.title}
            onChange={(e) => this.updateTitle(e.target.value)}
            placeholder={this.state.placeholderTitle}
          />
          <textarea
            rows="4"
            cols="30"
            value={this.state.body}
            onChange={(e) => this.updateBody(e.target.value)}
            placeholder={this.state.placeholderBody}
          />
          {!this.props.match && (
            <input
              type="text"
              value={this.state.author}
              onChange={(e) => this.updateAuthor(e.target.value)}
              placeholder={this.state.placeholderAuthor}
            />
          )}
          <input type="submit" value="Submit" />
        </form>
        <h2>{this.state.warning}</h2>
      </div>
    );
  }
}

export default connect(null, actions)(PostForm);
