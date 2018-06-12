class UserLesson < ApplicationRecord
  belongs_to :lesson
  belongs_to :admin_user
end
