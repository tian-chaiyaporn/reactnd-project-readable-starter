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
