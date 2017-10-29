import * as API from './API'
import { GET_CATEGORY_DATA } from './types'

// CATEGORY
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
