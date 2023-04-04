require 'bcrypt'

class User < ApplicationRecord
  has_many :tasks
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true

  has_secure_password

  def self.authenticate(email, password)
    user = find_by(email: email)
    return user if user&.authenticate(password)
    nil
  end  
end
