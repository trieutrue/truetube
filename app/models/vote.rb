# == Schema Information
#
# Table name: votes
#
#  id           :bigint           not null, primary key
#  is_upvoted?  :boolean          not null
#  voter_id     :integer          not null
#  votable_type :string           not null
#  votable_id   :bigint           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Vote < ApplicationRecord
  validates :is_upvoted?, inclusion: { in: [ true, false ]}
  validates :voter_id, uniqueness: { scope: [:votable_type, :votable_id] }
  
  belongs_to :votable, polymorphic: true
  belongs_to :voter, class_name: :User
end
