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
require 'test_helper'

class VoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
