class Student < ApplicationRecord
    has_many :appoitments
    has_many :attendances, through: :appoitments
    has_many :disciplines, through: :appoitments
end
