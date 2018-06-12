class UserSerializer < ActiveModel::Serializer
  attributes :user_id, :email, :lastname

  has_many :lessons

end
