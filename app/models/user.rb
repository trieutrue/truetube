class User < ApplicationRecord
  validates :email, :first_name, :last_name, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  after_initialize :ensure_session_token

  attr_reader :password
  
  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return user if @user && @user.is_password?(password)
    nil
  end

  def is_password?(password)
    BCrypt.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt.create(password)
  end

  def ensure_session_token
    self.session_token || SecureRandom.base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64
    self.save!
    self.session_token
  end
end
