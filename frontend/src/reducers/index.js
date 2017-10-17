import { combineReducers } from 'redux'
import categoryReducer from './category'
import postReducer from './post'
import commentReducer from './comment'

const rootReducer = combineReducers({
  categoryReducer,
  postReducer,
  commentReducer
})

export default rootReducer;
