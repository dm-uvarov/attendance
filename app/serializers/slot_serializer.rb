class SlotSerializer < ActiveModel::Serializer
  attributes :id, :date, :s_time, :e_time, :is_marked
  # has_one :discipline
end
