import {
  RECEIVE_VOTES,
  RECEIVE_VOTE,
  REMOVE_VOTE
} from '../actions/vote_actions';

const votesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = { ...state }
  switch (action.type) {
    case RECEIVE_VOTES:
      return Object.assign({}, state, action.votes)
    case RECEIVE_VOTE:
      return { ...state, [action.vote.id]: action.vote }
    case REMOVE_VOTE:
      delete newState[action.voteId]
      return newState
    default:
      return state;
  }
}

export default votesReducer