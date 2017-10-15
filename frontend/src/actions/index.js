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
