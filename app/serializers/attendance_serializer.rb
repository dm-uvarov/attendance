class AttendanceSerializer < ActiveModel::Serializer
  attributes :id
  has_one :appointment
end
