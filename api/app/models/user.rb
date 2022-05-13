class User < ApplicationRecord
    has_secure_password
    has_many :disciplines
    # has_many :appoitments, through: :disciplines

    validates :username, {presence: true,
                            uniqueness: {case_sensitive: true}}
    validates :password, {presence: true}
    validates :name, presence: true
    # validates :email, {presence: true, uniqueness: {case_sensitive: true}}
end
