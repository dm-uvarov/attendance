class Appoitment < ApplicationRecord
  belongs_to :discipline
  belongs_to :student
  has_one :attendance

  validates :start_time, presence: true
  validates :end_time, presence: true
end


#  correct ==> appointment
