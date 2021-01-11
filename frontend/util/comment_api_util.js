export const fetchVideoComments = videoId => {
  return $.ajax({
    method: 'GET',
    url: `/api/videos/${videoId}/comments`,
    contentType: 'application/json'
  })
}

//do i need a fetchChildComments or should i includes comments with video comments
export const fetchChildComments = commentId => {
  return $.ajax({
    method: 'GET',
    url: `/api/comments/${commentId}/comments`,
    contentType: 'application/json'
  })
}

export const fetchComment = commentId => {
  return $.ajax({
    method: 'GET',
    url: `/api/comments/${commentId}`,
    contentType: 'application/json'
  })
}

export const createVideoComment = (videoId, comment) => {
  return $.ajax({
    method: 'POST',
    url: `/api/videos/${videoId}/comments`,
    data: { comment },
    contentType: 'application/json'
  })
}

export const createChildComment = (commentId, comment) => {
  return $.ajax({
    method: 'POST',
    url: `/api/comments/${commentId}/comment`,
    data: { comment },
    contentType: 'application/json'
  })
}

export const updateComment = comment => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/comments/${comment.id}`,
    data: { comment },
    contentType: 'application/json'
  })
}

export const deleteComment = commentId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${commentId}`
  })
}