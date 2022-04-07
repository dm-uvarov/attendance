class User < ApplicationRecord
    has_many :disciplines
    has_many :appoitments, through: :disciplines
end
