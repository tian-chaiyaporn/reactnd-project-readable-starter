import {
  GET_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT_SCORE
} from '../actions'

const initialState = {
  comments: [],
  commentsByPostId: []
}

function commentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      const { comments, postId } = action
      const newCommentState = state.commentsByPostId
          .filter(c => c.postId === postId).length === 0 ?
          state.commentsByPostId.concat({
            postId: postId,
            comments: comments
          }) :
          state.commentsByPostId
            .map(c => c.comments = c.postId === postId ? comments : comments)
      return {
        ...state,
        comments: comments,
        commentsByPostId: newCommentState
      }
    case ADD_COMMENT :
      const { newComment } = action
      return {
        ...state,
        comments: state.comments.concat(newComment)
      }
    case UPDATE_COMMENT_SCORE:
      const { commentWithNewScore } = action
      const updatedComments = state.comments.map(p => {
        if (p.id === commentWithNewScore.id) {
          p = commentWithNewScore
        }
        return p
      })
      return {
        ...state,
        comments: updatedComments
      }
    default :
      return state
  }
}

export default commentReducer;
