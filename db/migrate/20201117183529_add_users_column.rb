class AddUsersColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :channel_name, :string, null: false
  end
end
