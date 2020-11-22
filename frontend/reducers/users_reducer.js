import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_VIDEOS } from '../actions/video_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      debugger
      return { ...state, [action.currentUser.id]: action.currentUser };
    case RECEIVE_VIDEOS:
      return Object.assign({}, state, action.users);
    default:
      return state;
  }
}