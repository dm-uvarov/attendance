class Discipline < ApplicationRecord
  belongs_to :user
  has_many :slots
  has_many :appointments, through: :slots
  has_many :students, through: :appointments, through: :slots

  validates :name, presence: true
  # validates :description, presence: true
end
