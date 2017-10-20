import * as API from './API'

// GET
export const GET_SINGLE_POST = 'GET_SINGLE_POST';
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

export const GET_POSTS_DATA = 'GET_POSTS_DATA';
export function getPostsData (initialPosts) {
  return {
    type: GET_POSTS_DATA,
    initialPosts
  }
}

export const GET_CATEGORY_POSTS_DATA = 'GET_CATEGORY_POSTS_DATA';
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
export const CREATE_NEW_POST = 'CREATE_NEW_POST';
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
export const UPDATE_POST_SCORE = 'UPDATE_POST_SCORE';
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
export const EDIT_POST = 'EDIT_POST';
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
export const DELETE_POST = 'DELETE_POST';
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
