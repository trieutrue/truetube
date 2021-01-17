import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import {
  RECEIVE_VIDEOS,
  RECEIVE_VIDEO,
  REMOVE_VIDEO
} from '../actions/video_actions'
import { RECEIVE_VOTE, REMOVE_VOTE } from '../actions/vote_actions';
import { UPDATE_FILTER } from '../actions/filter_actions';

const videosReducer = (state = {}, action) => {
  Object.freeze(state)
  const newState = { ...state }
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return action.videos;
    case RECEIVE_VIDEO:
      return { ...state, [action.video.id]: action.video };
    case REMOVE_VIDEO:
      delete newState[action.videoId]
      return newState;
    case RECEIVE_USER:
      return Object.assign({}, state, action.videos)
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, action.videos)
    case RECEIVE_VOTE:
      return { ...state, [action.video.id]: action.video }
    case REMOVE_VOTE:
      return { ...state, [action.video.id]: action.video }
    case UPDATE_FILTER:
      return Object.assign({}, state, action.videos)
    default:
      return state;
  }
}

export default videosReducer;