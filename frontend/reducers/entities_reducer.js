import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import videosReducer from './videos_reducer';
import commentsReducer from './comments_reducer';
import votesReducer from './votes_reducer';

export default combineReducers({
  users: usersReducer,
  videos: videosReducer,
  comments: commentsReducer,
  votes: votesReducer
})