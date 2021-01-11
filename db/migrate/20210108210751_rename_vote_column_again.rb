class RenameVoteColumnAgain < ActiveRecord::Migration[5.2]
  def change
    rename_column :votes, :is_upvoted?, :is_upvoted
  end
end
