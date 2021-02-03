import { 
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions'

import { RECEIVE_VOTE, REMOVE_VOTE } from '../actions/vote_actions'

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = { ...state }
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return Object.assign({}, state, action.comments)
    case RECEIVE_COMMENT:
      return { ...state, [action.comment.id]: action.comment }
    case REMOVE_COMMENT:
      delete newState[action.commentId]
      return newState
    case RECEIVE_VOTE:
      debugger
      return action.comment ? { ...state, [action.comment.id]: action.comment } : state
    case REMOVE_VOTE:
      return action.comment ? { ...state, [action.comment.id]: action.comment } : state
    default:
      return state;
  }
}

export default commentsReducer;