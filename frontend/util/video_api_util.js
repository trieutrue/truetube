export const fetchVideos = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/videos`,
    contentType: 'application/json',
  })
}

export const fetchVideo = videoId => {
  return $.ajax({
    method: 'GET',
    url: `/api/videos/${videoId}`,
    contentType: 'application/json'
  })
}

export const uploadVideo = video => {
  return $.ajax({
    method: 'POST',
    url: `/api/videos`,
    data: video,
    contentType: false,
    processData: false
  })
}

export const updateVideo = video => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/video/${video.id}`,
    data: video,
    contentType: false,
    processData: false
  })
}

export const deleteVideo = videoId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/videos/${videoId}`
  })
}