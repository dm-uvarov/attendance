class AppoitmentSerializer < ActiveModel::Serializer
  attributes :id, :start_time, :end_time,:student_id,:discipline_id
end
