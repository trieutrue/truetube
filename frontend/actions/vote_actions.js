import * as VoteAPIUtil from '../util/vote_api_util';

export const RECEIVE_VOTES = "RECEIVE_VOTES";
export const RECEIVE_VOTE = "RECEIVE_VOTE";
export const REMOVE_VOTE = "REMOVE_VOTE";
export const RECEIVE_VOTE_ERRORS = "RECEIVE_VOTE_ERRORS";

const receiveVotes = ({ votes }) => ({
  type: RECEIVE_VOTES,
  votes
})

const receiveVote = ({ vote, video }) => ({
  type: RECIEVE_VOTE,
  vote,
  video
})

const removeVote = (voteId, video) => ({
  type: REMOVE_VOTE,
  voteId,
  video
})

const receiveErrors = errors => ({
  type: RECEIVE_VOTE_ERRORS,
  errors
})

export const fetchVideoVotes = videoId => dispatch => {
  return VoteAPIUtil.fetchVideoVotes(videoId).then(
    response => dispatch(receiveVotes(response))
  )
}

export const fetchCommentVotes = commentId => dispatch => {
  return VoteAPIUtil.fetchCommentVotes(commentId).then(
    response => dispatch(receiveVotes(response))
  )
}

export const fetchVote = voteId => dispatch => {
  return VoteAPIUtil.fetchVote(voteId).then(
    response => dispatch(receiveVote(response))
  )
}

export const createVideoVote = (videoId, vote) => dispatch => {
  return VoteAPIUtil.createVideoVote(videoId, vote).then(
    response => dispatch(receiveVote(response)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
}

export const createCommentVote = (commentId, vote) => dispatch => {
  return VoteAPIUtil.createCommentVote(commentId, vote).then(
    response => dispatch(receiveVote(response)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
}

export const updateVote = vote => dispatch => {
  return VoteAPIUtil.updateVote(vote).then(
    response => dispatch(receiveVote(response)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
}

export const deleteVote = voteId => dispatch => {
  return VoteAPIUtil.deleteVote(voteId).then(
    video => dispatch(removeVote(voteId, video.responseJSON)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
}