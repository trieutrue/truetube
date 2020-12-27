export const fetchVideoVotes = videoId => {
  return $.ajax({
    method: 'GET',
    url: `/api/videos/${videoId}/votes`,
    contentType: 'application/json'
  })
}

export const fetchCommentVotes = commentId => {
  return $.ajax({
    method: 'GET',
    url: `/api/comments/${commentId}/comments`,
    contentType: 'application/json'
  })
}

export const fetchVote = voteId => {
  return $.ajax({
    method: 'GET',
    url: `/api/comments/${voteId}`,
    contentType: 'application/json'
  })
}

export const createVideoVote = (videoId, vote) => {
  return $.ajax({
    method: 'POST',
    url: `/api/videos/${videoId}/votes`,
    data: { vote },
    contentType: 'application/json'
  })
}

export const createCommentVote = (commentId, vote) => {
  return $.ajax({
    method: 'POST',
    url: `/api/comments/${commentId}/votes`,
    data: { vote },
    contentType: 'application/json'
  })
}

export const updateVote = vote => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/votes/${vote.id}`,
    data: { vote },
    contentType: 'application/json'
  })
}

export const deleteVote = voteId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/votes/${voteId}`
  })
}