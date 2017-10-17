import * as API from './API'

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
