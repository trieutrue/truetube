import { UPDATE_FILTER } from '../actions/filter_actions';

const filtersReducer = (state = [], action) => {
  Object.freeze(state);
  if (action.type === UPDATE_FILTER) {
    return action.filter
  } else {
    return state
  }
}

export default filtersReducer;