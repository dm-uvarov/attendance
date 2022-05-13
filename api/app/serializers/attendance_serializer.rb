class AttendanceSerializer < ActiveModel::Serializer
  attributes :id,:is_attended,:appointment_id
  # has_one :appointment
end
