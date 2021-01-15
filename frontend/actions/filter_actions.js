import { fetchSearchQuery } from '../util/video_api_util';

export const UPDATE_FILTER = "UPDATE_FILTER";

const updateFilter = filter => ({
  type: UPDATE_FILTER,
  filter
})

export const searchVideos = () => dispatch => {
  return fetchSearchQuery().then(filter => dispatch(updateFilter(filter)))
}