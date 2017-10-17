import * as API from './API'

// COMMENTS
export const GET_COMMENTS = 'GET_COMMENTS';
export function getComments (comments) {
  return {
    type: GET_COMMENTS,
    comments
  }
}

export const fetchCommentsByPostId = (id) => dispatch => (
  API.fetchComments(id)
    .then(data => data.json())
    .then(data => dispatch(getComments(data)))
);

export const ADD_COMMENT = 'ADD_COMMENT';
export function addComment ({body, author}) {
  const timestamp = new Date.now()
  return {
    type: ADD_COMMENT,
    body,
    author,
    timestamp
  }
}
