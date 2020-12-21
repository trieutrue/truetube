@votes.each do |vote|
  json.votes do
    json.partial! '/api/votes/vote', vote: vote
  end
end