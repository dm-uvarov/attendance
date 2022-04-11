class Discipline < ApplicationRecord
  belongs_to :user
  has_many :slots

  validates :name, presence: true
  validates :description, presence: true
end
