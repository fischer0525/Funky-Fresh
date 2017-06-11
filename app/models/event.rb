class Event < ApplicationRecord
  validates :event_img, presence: true
  validates :event_title, presence: true
  validates :event_date, presence: true
  validates :event_description, presence: true
  validates :event_location, presence: true
end
