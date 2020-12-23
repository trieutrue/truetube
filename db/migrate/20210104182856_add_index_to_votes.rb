class AddIndexToVotes < ActiveRecord::Migration[5.2]
  def change
    add_index :votes, [:votable_type, :votable_id, :voter_id], unique: true
    add_index :votes, :votable_id
    add_index :votes, :voter_id
  end
end
