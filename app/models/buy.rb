class Buy < ApplicationRecord
  validates :business_name, presence: true
  validates :business_description, presence: true
  validates :business_address, presence: true
  validates :business_city, presence: true
  validates :business_state, presence: true
  validates :business_zip, presence: true
end
