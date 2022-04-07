class AttendanceSerializer < ActiveModel::Serializer
  attributes :id,:is_attended,:appoitment_id
end
