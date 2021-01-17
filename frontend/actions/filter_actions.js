import * as VideoAPIUtil from '../util/video_api_util';

export const UPDATE_FILTER = "UPDATE_FILTER";

const updateFilter = ({ videos, users }) => ({
  type: UPDATE_FILTER,
  videos,
  users
})

export const fetchSearchQuery = searchQuery => dispatch => {
  return VideoAPIUtil.fetchSearchQuery(searchQuery).then(filter => dispatch(updateFilter(filter)))
}