import {
  GET_COMMENTS,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
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
        .filter(c => c.postId === postId).length === 0
          // if postId doesn't already exist, add it to commentsByPostId
          ? state.commentsByPostId.concat({
              postId: postId,
              comments: comments
            })
          // if it does, map to find the obj with postId, and replace the comments array
          : state.commentsByPostId
              .map(c => {
                c.comments = c.postId === postId ? comments : c.comments
                return c;
              })
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
    case EDIT_COMMENT:
      const { editedComment } = action
      return {
        ...state,
        comments: state.comments
          .filter(c => c.id !== editedComment.id)
          .concat(editedComment),
        commentsByPostId: state.commentsByPostId.map(obj => {
          obj.comments = obj.parentId === editedComment.parentId
            ? obj.comments.filter(c => c.id !== editedComment.id).push(editedComment)
            : obj.comments
          return obj
        })
      }
    case DELETE_COMMENT:
      const { deletedId, parentId } = action
      return {
        ...state,
        comments: state.comments.filter(p => p.id !== deletedId),
        commentsByPostId: state.commentsByPostId.map(obj => {
          obj.comments = obj.parentId === parentId
            ? obj.comments.filter(c => c.id !== deletedId)
            : obj.comments
          return obj
        })
      }
    case UPDATE_COMMENT_SCORE:
      const { commentWithNewScore } = action
      const updatedComments = state.comments.map(p => {
        return p = p.id === commentWithNewScore.id ? commentWithNewScore : p
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
