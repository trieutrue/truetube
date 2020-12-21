json.vote do
  json.partial! '/api/votes/vote', vote: @vote
end

json.video do
  json.partial! '/api/videos/video'
end