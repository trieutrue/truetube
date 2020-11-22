@videos.each do |video|
  json.videos do
    json.set! video.id do
      json.partial! 'api/videos/video', video: video
    end
  end
  json.users do
    json.set! video.uploader_id do
      json.extract! video.uploader, :id, :channel_name, :email
    end
  end
end


