json.extract! video, :id, :title, :uploader_id, :created_at
json.videoUrl url_for(video.submission)