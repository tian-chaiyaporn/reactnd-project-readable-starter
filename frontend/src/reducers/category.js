import {
  GET_CATEGORY_DATA,
} from '../actions'

const initialState = {
  categories: []
}

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY_DATA:
      const { initialCategory } = action
      return {
        ...state,
        categories: initialCategory
      }
    default :
      return state
  }
}

export default categoryReducer
