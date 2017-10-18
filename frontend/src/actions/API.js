const BASE = 'http://localhost:3001'
const TOKEN = localStorage.token ?
  localStorage.token :
  Math.random().toString(36).substr(-8)

// GET
const GET_HEADERS = {
  'Accept': 'application/json',
  'Authorization': TOKEN
}

export function fetchCategoryData () {
  const headers = GET_HEADERS
  const url = `${BASE}/categories`
  return fetch(url, { headers })
}

export function fetchPostsData (category = '') {
  const headers = GET_HEADERS
  const categoryURL = category !== '' ? `/${category}` : category
  const url = `${BASE}${categoryURL}/posts`
  return fetch(url, { headers })
}

export function fetchSinglePost (id) {
  const headers = GET_HEADERS
  const url = `${BASE}/posts/${id}`
  return fetch(url, { headers })
}

export function fetchComments (id) {
  const headers = GET_HEADERS
  const url = `${BASE}/posts/${id}/comments`
  return fetch(url, { headers })
}

// POST
const POST_HEADER = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': TOKEN
}

export function newPost(post) {
  const url = `${BASE}/posts`
  const request = new Request(url, {
    method: 'POST',
    headers: new Headers(POST_HEADER),
    mode: 'cors',
    body: JSON.stringify(post)
  })
  return fetch(request)
}

export function updatePostScore(id, score) {
  const url = `${BASE}/posts/${id}`
  const request = new Request(url, {
    method: 'POST',
    headers: new Headers(POST_HEADER),
    mode: 'cors',
    body: JSON.stringify({option: score})
  })
  return fetch(request)
}

export function newComment(comment) {
  const url = `${BASE}/comments`
  const request = new Request(url, {
    method: 'POST',
    headers: new Headers(POST_HEADER),
    mode: 'cors',
    body: JSON.stringify(comment)
  })
  return fetch(request)
}

export function updateCommentScore(id, score) {
  const url = `${BASE}/comments/${id}`
  const request = new Request(url, {
    method: 'POST',
    headers: new Headers(POST_HEADER),
    mode: 'cors',
    body: JSON.stringify({option: score})
  })
  return fetch(request)
}
