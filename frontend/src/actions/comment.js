import * as API from './API'

// GET COMMENTS
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

// POST
export const ADD_COMMENT = 'ADD_COMMENT';
export function createComment (newComment) {
  return {
    type: ADD_COMMENT,
    newComment
  }
}

export const createNewComment = (comment) => dispatch => (
  API.newComment(comment)
    .then(data => data.json())
    .then(data => {
      dispatch(createComment(data))})
);

export const UPDATE_COMMENT_SCORE = 'UPDATE_COMMENT_SCORE';
export function updateCommentScore (commentWithNewScore) {
  return {
    type: UPDATE_COMMENT_SCORE,
    commentWithNewScore
  }
}

export const updateNewCommentScore = (id, score) => dispatch => (
  API.updateCommentScore(id, score)
    .then(data => data.json())
    .then(data => dispatch(updateCommentScore(data)))
);
