@comments.each do |comment|
  json.comments do
    json.set! comment.id do
      json.partial! '/api/comments/comment', comment: comment
    end
  end

  json.users do
    json.set! comment.author_id do
      json.partial! '/api/users/user', user: comment.author
    end
  end
end