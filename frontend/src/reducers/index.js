import {
  GET_CATEGORY_DATA,
  GET_POSTS_DATA,
  GET_CATEGORY_POSTS_DATA,
  GET_SINGLE_POST,
  GET_COMMENTS,
  ADD_COMMENT
} from '../actions'

const initialState = {
  categories: [],
  posts: [],
  currentCategoryPosts: [],
  currentPost: {},
  comments: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY_DATA:
      const { initialCategory } = action
      return {
        ...state,
        categories: initialCategory
      }
    case GET_POSTS_DATA:
      const { initialPosts } = action
      return {
        ...state,
        posts: initialPosts
      }
    case GET_CATEGORY_POSTS_DATA:
      const { categoryPosts } = action
      return {
        ...state,
        currentCategoryPosts: categoryPosts
      }
    case GET_SINGLE_POST:
      const { post } = action
      return {
        ...state,
        currentPost: post
      }
    case GET_COMMENTS:
      const { comments } = action
      return {
        ...state,
        comments: comments
      }
    case ADD_COMMENT :
      return {
        ...state
      }
    default :
      return state
  }
}

export default reducer
