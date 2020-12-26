class Vote < ApplicationRecord
  validates :is_upvoted?, presence: true
  validates :voter_id, uniqueness: { scope: [:votable_type, :votable_id] }
  
  belongs_to :votable, polymorphic: true
  belongs_to :voter, class_name: :User
end
