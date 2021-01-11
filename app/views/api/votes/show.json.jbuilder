json.vote do
  json.partial! '/api/votes/vote', vote: @vote
end

json.video do
  json.partial! '/api/videos/video', video: @video
end

json.user do 
  json.partial! '/api/users/user', user: current_user
end