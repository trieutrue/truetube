json.extract! video, :id, :title, :description, :uploader_id, :created_at, :comment_ids, :upvote_count, :downvote_count
json.videoUrl url_for(video.submission)