class Slot < ApplicationRecord
  belongs_to :discipline

  has_many :appointments
  has_many :students, through: :appointments
  has_many :attendances, through: :appointments
  
end
