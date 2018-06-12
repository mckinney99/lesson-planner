class UserLessonSerializer < ActiveModel::Serializer
  attributes :user_id, :lesson_id :class, :subject

  has_many :users
  has_many :lessons

end
