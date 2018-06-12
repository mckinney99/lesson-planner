class AdminUser < ApplicationRecord
  has_many :lessons, through: :user_lessons
  has_many :user_lessons

  # belongs_to :user_lessons, optional: true
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable,
         :recoverable, :rememberable, :trackable, :validatable
end
