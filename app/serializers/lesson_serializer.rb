class LessonSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :body, :source

end
