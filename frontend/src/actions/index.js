import * as API from './API'

// CATEGORY
export const GET_CATEGORY_DATA = 'GET_CATEGORY_DATA';
export function getCategoryData (initialCategory) {
  return {
    type: GET_CATEGORY_DATA,
    initialCategory
  }
}

export const fetchCatgories = () => dispatch => (
  API.fetchCategoryData()
    .then(data => data.json())
    .then(data => dispatch(getCategoryData(data.categories)))
);

// POSTS
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
