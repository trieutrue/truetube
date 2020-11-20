# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string
#  uploader_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Video < ApplicationRecord
  validates :title, :uploader_id, presence: true

  has_one_attached :submission
  belongs_to :uploader, class_name: :User
end
