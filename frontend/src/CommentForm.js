import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './actions/comment'
import shortid from 'shortid'
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

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

  componentDidMount() {
    this.props.match && (
      this.setState({
        author: this.props.match.params.author,
        body: this.props.match.params.body
      })
    )
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
    if (!this.props.match) {
      this.props.createNewComment({
        id: shortid.generate(),
        timestamp: Date.now(),
        body: this.state.body,
        author: this.state.author,
        parentId: this.props.parentId
      })
    } else {
      this.props.history.goBack()
      this.props.editCommentById(
        this.props.match.params.id,
        Date.now(),
        this.state.body
      )
    }
  }

  render() {
    return (
      <div className="new-comment" style={{display: 'block', margin: '50px'}}>
        <form
          className="comment-form"
          onSubmit={this.handleSubmit}
          style={{textAlign: 'center', display: 'block', margin: 'auto', maxWidth: '800px'}}
        >
          <TextField
            multiLine="true"
            value={this.state.body}
            onChange={(e) => this.updateBody(e.target.value)}
            placeholder={this.state.placeholderBody}
            style={{display: 'block', width: '100%', margin: 'auto'}}
          />
          {!this.props.match && (
            <TextField
              value={this.state.author}
              onChange={(e) => this.updateAuthor(e.target.value)}
              placeholder={this.state.placeholderAuthor}
              style={{display: 'block', width: '100%', margin: 'auto'}}
            />
          )}
          <FlatButton onClick={this.handleSubmit} label="Submit"/>
        </form>
        <h2>{this.state.warning}</h2>
      </div>
    );
  }
}

export default connect(null, actions)(CommentForm);
