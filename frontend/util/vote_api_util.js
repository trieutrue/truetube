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

}

export const deleteVote = voteId => {

}