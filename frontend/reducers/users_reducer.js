import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_VIDEOS } from '../actions/video_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { ...state, [action.currentUser.id]: action.currentUser };
    case RECEIVE_VIDEOS:
      return action.users;
    default:
      return state;
  }
}