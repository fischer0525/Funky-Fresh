class New < ApplicationRecord
  validates :news_title, presence: true
  validates :news_date, presence: true
  validates :news_description, presence: true
end
