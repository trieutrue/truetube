class Video < ApplicationRecord
  validates :title, :uploader_id, presence: true

  belongs_to :uploader, foreign_key: :uploader_id, class_name: :user
end
