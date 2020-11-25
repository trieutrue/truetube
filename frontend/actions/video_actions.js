import * as VideoAPIUtil from '../util/video_api_util';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS"

const receiveVideos = ({ videos, users }) => ({
  type: RECEIVE_VIDEOS,
  videos,
  users
})

const receiveVideo = video => ({
  type: RECEIVE_VIDEO,
  video
})

const removeVideo = videoId => ({
  type: REMOVE_VIDEO,
  videoId
})

const receiveErrors = errors => ({
  type: RECEIVE_VIDEO_ERRORS,
  errors
})

export const fetchVideos = userId => dispatch => {
  debugger
  return VideoAPIUtil.fetchVideos(userId)
    .then(payload => dispatch(receiveVideos(payload)))
}

export const fetchVideo = videoId => dispatch => {
  return VideoAPIUtil.fetchVideo(videoId)
    .then(payload => dispatch(receiveVideo(payload)))
}

export const uploadVideo = videoData => dispatch => {
  return VideoAPIUtil.uploadVideo(videoData).then(
    video => dispatch(receiveVideo(video)),
    errors => {
      debugger
      return dispatch(receiveErrors(errors.responseJSON))}
  )
}

export const updateVideo = videoData => dispatch => {
  return VideoAPIUtil.updateVideo(videoData).then(
    video => dispatch(receiveVideo(video)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
}

export const deleteVideo = videoId => dispatch => {
  return VideoAPIUtil.deleteVideo(videoId).then(
    () => dispatch(removeVideo(videoId)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
}