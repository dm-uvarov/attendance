class Attendance < ApplicationRecord
  belongs_to :appoitment
  has_one :student, through: :appoitment
  has_one :discipline, through: :appoitment
end
