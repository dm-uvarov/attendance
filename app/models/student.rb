class Student < ApplicationRecord
    has_many :appointments
    has_many :attendances, through: :appointments
    has_many :slots, through: :appointments
    has_many :disciplines, through: :appointments,through: :slots

    validates :name, presence: true
    # validates :email, presence: true
end
