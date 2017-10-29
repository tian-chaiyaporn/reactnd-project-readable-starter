import * as API from './API'
import {
  GET_SINGLE_POST,
  GET_POSTS_DATA,
  GET_CATEGORY_POSTS_DATA,
  CREATE_NEW_POST,
  UPDATE_POST_SCORE,
  EDIT_POST,
  DELETE_POST
} from './types'

// GET
export function getSinglePost (post) {
  return {
    type: GET_SINGLE_POST,
    post
  }
}

export const fetchSinglePost = (id) => dispatch => (
  API.fetchSinglePost(id)
    .then(data => data.json())
    .then(data => dispatch(getSinglePost(data)))
);

export function getPostsData (initialPosts) {
  return {
    type: GET_POSTS_DATA,
    initialPosts
  }
}

export function getCategoryPostsData (categoryPosts) {
  return {
    type: GET_CATEGORY_POSTS_DATA,
    categoryPosts
  }
}

export const fetchPosts = (category = '') => dispatch => (
  API.fetchPostsData(category)
    .then(data => data.json())
    .then(data => {
      if (category === '') {
        dispatch(getPostsData(data))
      } else {
        dispatch(getCategoryPostsData(data))
      }
    })
);

// POST
export function createPost (newPost) {
  return {
    type: CREATE_NEW_POST,
    newPost
  }
}

export const createNewPost = (post) => dispatch => (
  API.newPost(post)
    .then(data => data.json())
    .then(data => dispatch(createPost(data)))
);

// POST /posts/:id
export function updatePostScore (postWithNewScore) {
  return {
    type: UPDATE_POST_SCORE,
    postWithNewScore
  }
}

export const updateNewPostScore = (id, score) => dispatch => (
  API.updatePostScore(id, score)
    .then(data => data.json())
    .then(data => dispatch(updatePostScore(data)))
);

// EDIT POST
export function editPost (editedPost) {
  return {
    type: EDIT_POST,
    editedPost
  }
}

export const editPostById = (editId, title, body) => dispatch => (
  API.editPost(editId, title, body)
    .then(data => data.json())
    .then(data => dispatch(editPost(data)))
);

// DELETE POST
export function deletePost (deletedId) {
  return {
    type: DELETE_POST,
    deletedId
  }
}

export const deletePostById = (id) => dispatch => (
  API.deletePost(id)
    .then(data => data.json())
    .then(data => dispatch(deletePost(data.id)))
);
