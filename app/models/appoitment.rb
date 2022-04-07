class Appoitment < ApplicationRecord
  belongs_to :discipline
  belongs_to :student
  has_one :attendance
end


#  correct ==> appointment
