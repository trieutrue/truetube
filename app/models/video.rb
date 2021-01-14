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
    results = []

    video_ids = Video.where(
      "title LIKE ?
      OR description LIKE ?", 
      "%#{search_params}%",
      "%#{search_params}%"
      ).pluck(:id)
      
    results += video_ids

    users = User.joins(:videos)
      .where(
        "channel_name LIKE ?",
        "%#{search_params}%"
      ).group(:id)

    users.each do |user|
      results += user.video_ids
    end

    results.uniq
  end

  # def ensure_file_type
  #   errors[:submission] << "Invalid file format." unless self.submission.attached?
  # end
end
