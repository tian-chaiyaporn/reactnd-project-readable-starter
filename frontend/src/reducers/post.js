import {
  GET_POSTS_DATA,
  GET_CATEGORY_POSTS_DATA,
  GET_SINGLE_POST,
  CREATE_NEW_POST,
  UPDATE_POST_SCORE
} from '../actions'

const initialState = {
  posts: [],
  currentCategoryPosts: [],
  currentPost: {}
}

function postReducer(state = initialState, action) {
  switch (action.type) {
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
    case CREATE_NEW_POST:
      const { newPost } = action
      return {
        ...state,
        currentCategoryPosts: state.currentCategoryPosts.concat(newPost)
      }
    case UPDATE_POST_SCORE:
      const { postWithNewScore } = action
      const updatedPosts = state.posts.map(p => {
        if (p.id === postWithNewScore.id) {
          p = postWithNewScore
        }
        return p
      })
      const updatedCategoryPosts = state.currentCategoryPosts.map(p => {
        if (p.id === postWithNewScore.id) {
          p = postWithNewScore
        }
        return p
      })
      return {
        ...state,
        posts: updatedPosts,
        currentPost: postWithNewScore,
        currentCategoryPosts: updatedCategoryPosts
      }
    default :
      return state
  }
}

export default postReducer;
