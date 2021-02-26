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
  validate :ensure_submission

  has_many :comments, dependent: :destroy
  has_many :votes, as: :votable
  has_one_attached :submission, dependent: :destroy
  belongs_to :uploader, class_name: :User

  def ensure_submission
    errors[:submission] << "must be attached." unless self.submission.attached?
  end

  def upvote_count
    return self.votes.where(is_upvoted: true).count
  end

  def downvote_count
    return self.votes.where(is_upvoted: false).count
  end

  def self.query_videos(search_params)
    videos = Video.joins(:uploader)
      .where(
        "title ILIKE ?
        OR description ILIKE ?
        OR channel_name ILIKE ?",

        "%#{search_params}%", 
        "%#{search_params}%",
        "%#{search_params}%",
      ).group(:id)
      
    videos
  end

  # def ensure_file_type
  #   errors[:submission] << "Invalid file format." unless self.submission.attached?
  # end
end
