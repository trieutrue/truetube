@votes.each do |vote|
  json.votes do
    json.set! vote.id do
      json.partial! '/api/votes/vote', vote: vote
    end
  end
end