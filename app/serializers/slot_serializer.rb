class SlotSerializer < ActiveModel::Serializer
  attributes :id, :date, :start, :finish, :is_marked, :discipline_id
  has_one :discipline
  has_many :students
  has_many :appointments
  has_many :attendances,through: :appoitments

  def start
    object.s_time.strftime("%H:%M")
  end

  def finish 
    object.s_time.strftime("%H:%M")
  end
end
