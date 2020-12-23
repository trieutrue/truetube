class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.boolean :is_voted?, null: false
      t.integer :voter_id, null: false
      t.references :votable, null: false, polymorphic: true

      t.timestamps
    end
  end
end
