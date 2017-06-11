class Product < ApplicationRecord
  validates :product_title, presence: true
  validates :product_img, presence: true
  validates :product_description, presence: true
end
