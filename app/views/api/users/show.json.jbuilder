json.user do
  json.partial! 'api/users/user', user: @user
  json.videoIds @user.video_ids
end

@user.videos.each do |video|
  json.videos do 
    json.set! video.id do
      json.partial! '/api/videos/video', video: video
    end
  end
end