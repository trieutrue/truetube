json.vote do
  json.partial! '/api/votes/vote', vote: @vote
end

if @video
  json.video do
    json.partial! '/api/videos/video', video: @video
  end
elsif @comment
  json.comment do
    json.partial! '/api/comments/comment', comment: @comment
  end
end

json.user do 
  json.partial! '/api/users/user', user: current_user
end