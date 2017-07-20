class Event < ApplicationRecord
  validates :event_img, presence: true
  validates :event_title, presence: true
  validates :event_datetime, presence: true
  validates :event_description, presence: true
  validates :event_address, presence: true
  validates :event_city, presence: true
  validates :event_state, presence: true
  validates :event_zip, presence: true
end
