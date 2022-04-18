class DisciplineSerializer < ActiveModel::Serializer
  attributes :id,:name,:pic ,:user_id
  # has_many :slots
end
