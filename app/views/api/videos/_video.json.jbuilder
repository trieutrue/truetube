json.extract! video, :id, :title, :description, :uploader_id, :created_at, :comment_ids, :upvoteCount, :downvoteCount
json.videoUrl url_for(video.submission)