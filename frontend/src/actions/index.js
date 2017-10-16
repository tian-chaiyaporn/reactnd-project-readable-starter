export const GET_START_DATA = 'GET_START_DATA';

export function getStartData () {
  const timestamp = new Date.now()
  return {
    type: GET_START_DATA
  }
}

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
