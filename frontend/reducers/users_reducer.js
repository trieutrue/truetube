import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_VIDEOS, RECEIVE_VIDEO } from '../actions/video_actions';
import { RECEIVE_USERS, RECEIVE_USER, REMOVE_USER } from '../actions/user_actions';
import { RECEIVE_COMMENTS } from '../actions/comment_actions'
import { RECEIVE_VOTE, REMOVE_VOTE } from '../actions/vote_actions';
import { UPDATE_FILTER } from '../actions/filter_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = {...state}
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user;
      return newState
    case RECEIVE_USERS:
      return Object.assign({}, state, action.users);
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
      return newState
    case REMOVE_USER:
      delete newState[action.userId]
      return newState
    case RECEIVE_VIDEOS:
      return Object.assign({}, state, action.users);
    case RECEIVE_VIDEO:
      return { ...state, [action.user.id]: action.user }
    case RECEIVE_COMMENTS:
      return Object.assign({}, state, action.users)
    case RECEIVE_VOTE:
      return { ...state, [action.user.id]: action.user }
    case REMOVE_VOTE:
      return { ...state, [action.user.id]: action.user }
    case UPDATE_FILTER:
      return Object.assign({}, state, action.users)
    default:
      return state;
  }
}