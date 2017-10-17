import {
  GET_COMMENTS,
  ADD_COMMENT
} from '../actions'

const initialState = {
  comments: []
}

function commentReducer(state = initialState, action) {
  switch (action.type) {
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

export default commentReducer;
