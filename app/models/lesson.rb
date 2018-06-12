class Lesson < ApplicationRecord
  has_many :lessons, through: :user_lessons
  has_many :admin_users
  has_many :user_lessons
end
