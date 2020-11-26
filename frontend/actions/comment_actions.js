import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

const receiveComments = ({ comments, users }) => ({
  type: RECEIVE_COMMENTS,
  comments,
  users
})

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
})

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
})

const receiveErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
})

export const fetchVideoComments = videoId => dispatch => {
  return CommentAPIUtil.fetchVideoComments(videoId).then(
    response => dispatch(receiveComments(response))
  )
}

export const fetchChildComments = commentId => dispatch => {
  return CommentAPIUtil.fetchChildComments(commentId).then(
    comments => dispatch(receiveComments(comments))
  )
}

export const fetchComment = commentId => dispatch => {
  return CommentAPIUtil.fetchComment(commentId).then(
    comment => dispatch(receiveComment(comment)),
  )
}

export const createVideoComment = (videoId, comment) => {
  return CommentAPIUtil.createVideoComment(videoId, comment).then(
    comment => dispatch(receiveComment(comment)), 
    errors => dispatch(receiveErrors(errors.responeJSON))
  )
}

export const createChildComment = (commentId, comment) => {
  return CommentAPIUtil.createChildComment(commentId, comment).then(
    comment => dispatch(receiveComment(comment)),
    errors => dispatch(receiveErrors(errors.responeJSON))
  )
}

export const updateComment = comment => {
  return CommentAPIUtil.updateComment(comment).then(
    comment => dispatch(receiveComment(comment)),
    errors => dispatch(receiveErrors(errors.responeJSON))
  )
}

export const deleteComment = commentId => {
  return CommentAPIUtil.deleteComment(commentId).then(
    () => dispatch(removeComment(commentId)),
    errors => dispatch(receiveErrors(errors.responeJSON))
  )
}
