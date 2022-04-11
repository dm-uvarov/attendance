class Student < ApplicationRecord
    # has_many :appoitments
    # has_many :attendances, through: :appoitments
    # has_many :disciplines, through: :appoitments

    validates :name, presence: true
    validates :email, presence: true
end
