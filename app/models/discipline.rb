class Discipline < ApplicationRecord
  belongs_to :user
  has_many :appoitments
  has_many :students, through: :appoitments
  has_many :attendances, through: :appoitments

  validates :name, presence: true
  validates :description, presence: true
end
