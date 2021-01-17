import { UPDATE_FILTER } from '../actions/filter_actions';

const filtersReducer = (state = [], action) => {
  Object.freeze(state);
  if (action.type === UPDATE_FILTER) {
    return Object.keys(action.videos).map(n => parseInt(n))
  } else {
    return state
  }
}

export default filtersReducer;