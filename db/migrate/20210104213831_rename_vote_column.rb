class RenameVoteColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :votes, :is_voted?, :is_upvoted?
  end
end
