class AppointmentSerializer < ActiveModel::Serializer
  attributes :id
  has_one :slot
  has_one :student
end
