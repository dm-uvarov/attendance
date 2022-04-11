class Appointment < ApplicationRecord
  belongs_to :slot
  belongs_to :student
  has_one :attendance

end
