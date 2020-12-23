class Vote < ApplicationRecord
  validates :is_voted?, presence: true
  validates :voter_id, uniqueness: { scope: [:voter_type, :voter_id] }
  
  belongs_to :votable, polymorphic: true
  belongs_to :voter
end
