json.extract! video, :id, :title, :uploader_id, :created_at, :comment_ids
json.videoUrl url_for(video.submission)