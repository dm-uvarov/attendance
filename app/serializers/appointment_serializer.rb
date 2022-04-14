class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :student_id, :slot_id
  # has_one :slot
  # has_one :student
end
