import * as API from './API'
import {
  GET_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT_SCORE,
  EDIT_COMMENT,
  DELETE_COMMENT
} from './types'

// GET COMMENTS
export function getComments (comments, postId) {
  return {
    type: GET_COMMENTS,
    comments,
    postId
  }
}

export const fetchCommentsByPostId = (id) => dispatch => (
  API.fetchComments(id)
    .then(data => data.json())
    .then(data => dispatch(getComments(data, id)))
);

// POST
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

// EDIT COMMENT
export function editComment (editedComment) {
  return {
    type: EDIT_COMMENT,
    editedComment
  }
}

export const editCommentById = (editId, timeStamp, body) => dispatch => (
  API.editComment(editId, timeStamp, body)
    .then(data => data.json())
    .then(data => dispatch(editComment(data)))
);

// DELETE COMMENT
export function deleteComment (deletedId, parentId) {
  return {
    type: DELETE_COMMENT,
    deletedId,
    parentId
  }
}

export const deleteCommentById = (id, parentId) => dispatch => (
  API.deleteComment(id)
    .then(data => data.json())
    .then(data => dispatch(deleteComment(data.id, parentId)))
);
