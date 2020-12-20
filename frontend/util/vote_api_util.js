export const createVideoVote = (videoId, vote) => {
  return $ajax({
    method: 'POST',
    url: `/api/videos/${videoId}/votes`,
    data: { vote },
    contentType: 'application/json'
  })
}

export const createCommentVote = (commentId, vote) => {
  
}

export const updateVote = vote => {

}

export const deleteVote = voteId => {

}