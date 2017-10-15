import {
  ADD_COMMENT
} from '../actions'

function reducer(state = {}, action) {
  switch (action.type) {
    case ADD_COMMENT :
      return {
        ...state
      }
    default :
      return state
  }
}

export default reducer
